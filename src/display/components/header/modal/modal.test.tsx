import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import { categoryArray, brandArray } from '@/constans/header';
import { ElInfo } from '@/types/header/modal';
import {
  Modal,
  SearchByCategory,
  SearchByBrand,
} from '@/display/components/header';

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

const headingBackColorSwitchTest = (elInfo: ElInfo): void => {
  rendering(elInfo);
  const heading = screen.getByRole('heading');
  expect(heading).not.toHaveClass('head');
  fireEvent.mouseEnter(heading);
  expect(heading).toHaveClass('head');
  fireEvent.mouseLeave(heading);
  expect(heading).not.toHaveClass('head');
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
  test('headingCategory background color switching test', () => {
    headingBackColorSwitchTest(elCategoryInfo);
  });
  test('headingBrand background color switching test', () => {
    headingBackColorSwitchTest(elBrandInfo);
  });
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
});
