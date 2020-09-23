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
  const { el, modalList, name } = elInfo;
  render(
    <Router history={history}>
      <Modal elInfo={{ el, modalList, name }} />
    </Router>
  );
  return { history };
};

const screenTransitionEvent = (elInfo: ElInfo): void => {
  const { name } = elInfo;
  const { history } = rendering(elInfo);
  const heading = screen.getByRole('heading');
  fireEvent.click(heading);
  expect(history.location.pathname).toBe(`/${name}`);
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
  test('SearchByCategory click category page display', () => {
    screenTransitionEvent(elCategoryInfo);
  });
  test('SearchByBrand click category page display', () => {
    screenTransitionEvent(elBrandInfo);
  });
  test('listItem click category/itemID page display', () => {
    const { history } = rendering(elCategoryInfo);
    const list = screen.getAllByRole('listitem');
    categoryArray.forEach((val: ModalContent, index: number): void => {
      fireEvent.click(list[index]);
      expect(history.location.pathname).toBe(`/category/${val.id}`);
    });
  });
  test('listItem click brand/itemID page display', () => {
    const { history } = rendering(elBrandInfo);
    const list = screen.getAllByRole('listitem');
    brandArray.forEach((val: ModalContent, index: number): void => {
      fireEvent.click(list[index]);
      expect(history.location.pathname).toBe(`/brand/${val.id}`);
    });
  });
});
