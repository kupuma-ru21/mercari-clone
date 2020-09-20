import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import { alt } from '@/constans';
import { Header } from '@/display/components';

type RenderTypes = {
  history: MemoryHistory;
  searchWord: string;
};

const rendering = (): RenderTypes => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Header />
    </Router>
  );
  const input = screen.getByRole('textbox');
  const searchWord = input.closest('input').value;
  return { history, searchWord };
};

const renderingOtherThanHome = () => {
  const history = createMemoryHistory({ initialEntries: ['/any_url'] });
  render(
    <Router history={history}>
      <Header />
    </Router>
  );
  return { history };
};

const transitionResult = ({ history, searchWord }: RenderTypes) => {
  const { pathname, search } = history.location;
  expect(history.length).toBe(2);
  expect(`${pathname}${search}${searchWord}`).toBe(
    `/search?keyword=${searchWord}`
  );
};

describe('Header Components', () => {
  describe('screen transition when search', () => {
    test('form submit', () => {
      const { history, searchWord } = rendering();
      const form = screen.getByRole('form');
      fireEvent.submit(form);
      transitionResult({ history, searchWord });
    });

    test('serchIcon click', () => {
      const { history, searchWord } = rendering();
      const searchIcon = screen.getByTitle('svg');
      fireEvent.click(searchIcon);
      transitionResult({ history, searchWord });
    });
  });

  describe('return to home screen', () => {
    test('LogoIcon click', () => {
      const { history } = renderingOtherThanHome();
      const logoIcon = screen.getByAltText(alt);
      fireEvent.click(logoIcon);
      const { pathname } = history.location;
      expect(history.length).toBe(2);
      expect(`${pathname}`).toBe('/');
    });
  });
});
