import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import { Modal, SearchByCategory, SearchByBrand } from '@/display/components';

type RenderTypes = {
  directoryAtMouseOver: HTMLElement;
  directoryAtMouseOut: HTMLElement;
};

const rendering = (el: JSX.Element): RenderTypes => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Modal el={el} />
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
    const { directoryAtMouseOver, directoryAtMouseOut } = rendering(
      <SearchByCategory />
    );
    expectResult({ directoryAtMouseOver, directoryAtMouseOut });
  });

  test('SearchByBrand check for the existence of a directory', () => {
    const { directoryAtMouseOver, directoryAtMouseOut } = rendering(
      <SearchByBrand />
    );
    expectResult({ directoryAtMouseOver, directoryAtMouseOut });
  });
});
