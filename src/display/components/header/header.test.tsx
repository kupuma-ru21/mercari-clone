import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '@/display/components';

const rendering = () => {
  const history = createMemoryHistory({ initialEntries: ['/'] });
  render(
    <Router history={history}>
      <Header />
    </Router>
  );
  return { history };
};

describe('Header Components', () => {
  describe('screen transition when search', () => {
    test('form submit', () => {
      const { history } = rendering();
      const input = screen.getByRole('textbox');
      const form = screen.getByRole('form');
      fireEvent.submit(form);
      const { pathname, search } = history.location;
      const searchWord = input.closest('input').value;
      expect(history.length).toBe(2);
      expect(`${pathname}${search}${searchWord}`).toBe(
        `/search?keyword=${searchWord}`
      );
    });

    test('searchIcon click', () => {
      const { history } = rendering();
      const input = screen.getByRole('textbox');
      const searchIcon = screen.getByTitle('svg');
      fireEvent.click(searchIcon);
      const { pathname, search } = history.location;
      const searchWord = input.closest('input').value;
      expect(history.length).toBe(2);
      expect(`${pathname}${search}${searchWord}`).toBe(
        `/search?keyword=${searchWord}`
      );
    });
  });
});
