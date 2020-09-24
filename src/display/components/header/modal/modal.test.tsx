import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import { categoryArray, brandArray } from '@/constans/header';
import { ElInfo, ModalContent } from '@/types/modal';
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

const listItemClickTest = (elInfo: ElInfo): void => {
  const { name, modalList } = elInfo;
  const { history } = rendering(elInfo);
  const list = screen.getAllByRole('listitem');
  modalList.forEach((val: ModalContent, index: number): void => {
    fireEvent.click(list[index]);
    if (list[index].textContent === 'カテゴリー 一覧') {
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
