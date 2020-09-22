import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import { categoryArray, brandArray } from '@/constans';
import { ElInfo } from '@/types/modal';
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

const mouseEvent = (elInfo: ElInfo) => {
  rendering(elInfo);
  const heading = screen.getByRole('heading');
  fireEvent.mouseOver(heading);
  const directoryAtMouseOver = screen.getByRole('list');
  fireEvent.mouseOut(heading);
  const directoryAtMouseOut = screen.getByRole('list');
  expect(directoryAtMouseOver).toBeInTheDocument();
  expect(directoryAtMouseOut).toBeEmptyDOMElement();
};

const screenTransitionEvent = (elInfo: ElInfo, expectPath: string) => {
  const { history } = rendering(elInfo);
  const heading = screen.getByRole('heading');
  fireEvent.click(heading);
  expect(history.length).toBe(2);
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
  test('SearchByCategory check for the existence of a directory', () => {
    mouseEvent(elCategoryInfo);
  });
  test('SearchByBrand check for the existence of a directory', () => {
    mouseEvent(elBrandInfo);
  });
  test('SearchByCategory click category page display', () => {
    screenTransitionEvent(elCategoryInfo, '/category');
  });
  test('SearchByBrand click category page display', () => {
    screenTransitionEvent(elBrandInfo, '/brand');
  });
});
