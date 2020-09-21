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

const mouseEvent = (elInfo) => {
  rendering(elInfo);
  const heading = screen.getByRole('heading');
  fireEvent.mouseOver(heading);
  const directoryAtMouseOver = screen.getByRole('directory');
  fireEvent.mouseOut(heading);
  const directoryAtMouseOut = screen.getByRole('directory');
  expect(directoryAtMouseOver).toBeInTheDocument();
  expect(directoryAtMouseOut).toBeEmptyDOMElement();
};

describe('Modal Components', () => {
  test('SearchByCategory check for the existence of a directory', () => {
    mouseEvent(elCategoryInfo);
  });

  test('SearchByBrand check for the existence of a directory', () => {
    mouseEvent(elBrandInfo);
  });

  test('SearchByCategory click category page display', () => {
    const { history } = rendering(elCategoryInfo);
    const heading = screen.getByRole('heading');
    fireEvent.click(heading);
    expect(history.length).toBe(2);
    expect(history.location.pathname).toBe('/category');
  });

  test('SearchByBrand click category page display', () => {
    const { history } = rendering(elBrandInfo);
    const heading = screen.getByRole('heading');
    fireEvent.click(heading);
    expect(history.length).toBe(2);
    expect(history.location.pathname).toBe('/brand');
  });
});
