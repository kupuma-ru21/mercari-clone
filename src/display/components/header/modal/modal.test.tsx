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

const expectModalResult = ({ directoryAtMouseOver, directoryAtMouseOut }) => {
  expect(directoryAtMouseOver).toBeInTheDocument();
  expect(directoryAtMouseOut).toBeEmptyDOMElement();
};

describe('Modal Components', () => {
  test('SearchByCategory check for the existence of a directory', () => {
    const elInfo: ElInfo = {
      el: <SearchByCategory />,
      modal: categoryArray,
      name: 'category',
    };
    rendering(elInfo);
    const heading = screen.getByRole('heading');
    fireEvent.mouseOver(heading);
    const directoryAtMouseOver = screen.getByRole('directory');
    fireEvent.mouseOut(heading);
    const directoryAtMouseOut = screen.getByRole('directory');
    expectModalResult({ directoryAtMouseOver, directoryAtMouseOut });
  });

  test('SearchByBrand check for the existence of a directory', () => {
    const elInfo: ElInfo = {
      el: <SearchByBrand />,
      modal: brandArray,
      name: 'brand',
    };
    rendering(elInfo);
    const heading = screen.getByRole('heading');
    fireEvent.mouseOver(heading);
    const directoryAtMouseOver = screen.getByRole('directory');
    fireEvent.mouseOut(heading);
    const directoryAtMouseOut = screen.getByRole('directory');
    expectModalResult({ directoryAtMouseOver, directoryAtMouseOut });
  });

  test('SearchByCategory click category page display', () => {
    const elInfo: ElInfo = {
      el: <SearchByCategory />,
      modal: categoryArray,
      name: 'category',
    };
    const { history } = rendering(elInfo);
    const heading = screen.getByRole('heading');
    fireEvent.click(heading);
    expect(history.length).toBe(2);
    expect(history.location.pathname).toBe('/category');
  });
});
