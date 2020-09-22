import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import { categoryArray, brandArray } from '@/constans';
import { ElInfo, ModalContent } from '@/types/modal';
import { Modal, SearchByCategory, SearchByBrand } from '@/display/components';

type RenderTypes = {
  history: MemoryHistory;
};

const rendering = (elInfo: ElInfo): RenderTypes => {
  const history = createMemoryHistory();
  const { el, modal, name } = elInfo;
  render(
    <Router history={history}>
      <Modal elInfo={{ el, modal, name }} />
    </Router>
  );
  return { history };
};

const screenTransitionEvent = (elInfo: ElInfo, expectPath: string) => {
  const { history } = rendering(elInfo);
  const heading = screen.getByRole('heading');
  fireEvent.click(heading);
  expect(history.location.pathname).toBe(expectPath);
};

describe('Modal Components', () => {
  const elCategoryInfo: ElInfo = {
    el: <SearchByCategory />,
    modal: categoryArray,
    name: 'category',
  };
  const elBrandInfo: ElInfo = {
    el: <SearchByBrand />,
    modal: brandArray,
    name: 'brand',
  };
  test('SearchByCategory click category page display', () => {
    screenTransitionEvent(elCategoryInfo, '/category');
  });
  test('SearchByBrand click category page display', () => {
    screenTransitionEvent(elBrandInfo, '/brand');
  });
  test('listItem click category/itemID page display', () => {
    const { history } = rendering(elCategoryInfo);
    const list = screen.getAllByRole('listitem');
    categoryArray.forEach((val: ModalContent, index: number) => {
      fireEvent.click(list[index]);
      expect(history.location.pathname).toBe(`/category/${val.id}`);
    });
  });
});
