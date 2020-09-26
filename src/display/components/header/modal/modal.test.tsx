import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import { categoryArray, brandArray } from '@/constans/header';
import { ElInfo, ModalContent } from '@/types/modal';
import { textCheck } from '@/logic/modal-list-logic';
import { Modal, SearchByCategory, SearchByBrand } from '@/display/components';

type RenderTypes = {
  history: MemoryHistory;
};

const rendering = (elInfo: ElInfo): RenderTypes => {
  const history = createMemoryHistory();
  const { el, modalList, name } = elInfo;
  render(
    <Router history={history}>
      <Modal elInfo={{ el, modalList, name }} />
    </Router>
  );
  return { history };
};

const categoryClickTest = (elInfo: ElInfo): void => {
  const { name } = elInfo;
  const { history } = rendering(elInfo);
  const heading = screen.getByRole('heading');
  fireEvent.click(heading);
  expect(history.location.pathname).toBe(`/${name}`);
};

const modalListDisplayControlCheck = (elInfo: ElInfo): void => {
  rendering(elInfo);
  const list = screen.getByRole('list');
  expect(list.childElementCount).toBe(0);

  const directory = screen.getByRole('directory');
  fireEvent.mouseEnter(directory);
  expect(list.childElementCount).not.toBe(0);
  fireEvent.mouseLeave(directory);
  expect(list.childElementCount).toBe(0);
};

const listItemClickTest = (elInfo: ElInfo): void => {
  const { history } = rendering(elInfo);
  const directory = screen.getByRole('directory');
  fireEvent.mouseEnter(directory);

  const list = screen.getAllByRole('listitem');
  const { name, modalList } = elInfo;
  modalList.forEach((val: ModalContent, index: number): void => {
    fireEvent.click(list[index]);
    if (textCheck(list[index].textContent)) {
      expect(history.location.pathname).toBe(`/${name}`);
      return;
    }
    expect(history.location.pathname).toBe(`/${name}/${val.id}`);
  });
};

describe('Modal Components', () => {
  const elCategoryInfo: ElInfo = {
    el: <SearchByCategory />,
    modalList: categoryArray,
    name: 'category',
  };
  const elBrandInfo: ElInfo = {
    el: <SearchByBrand />,
    modalList: brandArray,
    name: 'brand',
  };
  test('modalCategoryList display control check', () => {
    modalListDisplayControlCheck(elCategoryInfo);
  });
  test('modalBrandList display control check', () => {
    modalListDisplayControlCheck(elBrandInfo);
  });
  test('searchByCategory click category page display', () => {
    categoryClickTest(elCategoryInfo);
  });
  test('searchByBrand click category page display', () => {
    categoryClickTest(elBrandInfo);
  });
  test('listItem click category/itemID page display', () => {
    listItemClickTest(elCategoryInfo);
  });
  test('listItem click brand/itemID page display', () => {
    listItemClickTest(elBrandInfo);
  });
});
