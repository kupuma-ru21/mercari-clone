import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import { categoryArray, brandArray } from '@/constans';
import { ElInfo } from '@/types/modal';
import { Modal, SearchByCategory, SearchByBrand } from '@/display/components';

type RenderTypes = {
  directoryAtMouseOver: HTMLElement;
  directoryAtMouseOut: HTMLElement;
};

const rendering = (elInfo: ElInfo): RenderTypes => {
  const history = createMemoryHistory();
  const { el, modal } = elInfo;
  render(
    <Router history={history}>
      <Modal elInfo={{ el, modal }} />
    </Router>
  );
  const heading = screen.getByRole('heading');
  fireEvent.mouseOver(heading);
  const directoryAtMouseOver = screen.getByRole('directory');
  fireEvent.mouseOut(heading);
  const directoryAtMouseOut = screen.getByRole('directory');
  return { directoryAtMouseOver, directoryAtMouseOut };
};

const expectResult = ({
  directoryAtMouseOver,
  directoryAtMouseOut,
}: RenderTypes) => {
  expect(directoryAtMouseOver).toBeInTheDocument();
  expect(directoryAtMouseOut).toBeEmptyDOMElement();
};

describe('Modal Components', () => {
  test('SearchByCategory check for the existence of a directory', () => {
    const elInfo: ElInfo = { el: <SearchByCategory />, modal: categoryArray };
    const { directoryAtMouseOver, directoryAtMouseOut } = rendering(elInfo);
    expectResult({ directoryAtMouseOver, directoryAtMouseOut });
  });

  test('SearchByBrand check for the existence of a directory', () => {
    const elInfo: ElInfo = { el: <SearchByBrand />, modal: brandArray };
    const { directoryAtMouseOver, directoryAtMouseOut } = rendering(elInfo);
    expectResult({ directoryAtMouseOver, directoryAtMouseOut });
  });
});
