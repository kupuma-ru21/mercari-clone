import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import { categoryArray, brandArray } from '@/constans';
import { ElInfo } from '@/types/modal';
import { Modal, SearchByCategory, SearchByBrand } from '@/display/components';

const rendering = (elInfo: ElInfo) => {
  const history = createMemoryHistory();
  const { el, modal } = elInfo;
  render(
    <Router history={history}>
      <Modal elInfo={{ el, modal }} />
    </Router>
  );
};

const expectModalResult = ({ directoryAtMouseOver, directoryAtMouseOut }) => {
  expect(directoryAtMouseOver).toBeInTheDocument();
  expect(directoryAtMouseOut).toBeEmptyDOMElement();
};

describe('Modal Components', () => {
  test('SearchByCategory check for the existence of a directory', () => {
    const elInfo: ElInfo = { el: <SearchByCategory />, modal: categoryArray };
    rendering(elInfo);
    const heading = screen.getByRole('heading');
    fireEvent.mouseOver(heading);
    const directoryAtMouseOver = screen.getByRole('directory');
    fireEvent.mouseOut(heading);
    const directoryAtMouseOut = screen.getByRole('directory');
    expectModalResult({ directoryAtMouseOver, directoryAtMouseOut });
  });

  test('SearchByBrand check for the existence of a directory', () => {
    const elInfo: ElInfo = { el: <SearchByBrand />, modal: brandArray };
    rendering(elInfo);
    const heading = screen.getByRole('heading');
    fireEvent.mouseOver(heading);
    const directoryAtMouseOver = screen.getByRole('directory');
    fireEvent.mouseOut(heading);
    const directoryAtMouseOut = screen.getByRole('directory');
    expectModalResult({ directoryAtMouseOver, directoryAtMouseOut });
  });
});
