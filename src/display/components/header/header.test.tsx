import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '@/display/components';

const history = createMemoryHistory();
render(
  <Router history={history}>
    <Header />
  </Router>
);

describe('Header Components', () => {
  test('screen transition when search', () => {
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
});
