import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import { HeaderBottomRight } from '@/display/components';

const rendering = () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <HeaderBottomRight />
    </Router>
  );
};

describe('HeaderBottomRight Component', () => {
  test('login button mouseOver and mouseOut', () => {
    rendering();
    const loginButton = screen.getByTitle('login');
    expect(loginButton.classList[2]).toBe('MuiButton-outlined');
    fireEvent.mouseOver(loginButton);
    expect(loginButton.classList[2]).toBe('MuiButton-contained');
    fireEvent.mouseOut(loginButton);
    expect(loginButton.classList[2]).toBe('MuiButton-outlined');
  });
});
