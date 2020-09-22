import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import { HeaderBottomRight } from '@/display/components';

type RenderTypes = {
  history: MemoryHistory;
};

const rendering = (): RenderTypes => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <HeaderBottomRight />
    </Router>
  );
  return { history };
};

const transitionResult = (history: MemoryHistory, expectPath: string): void => {
  expect(history.location.pathname).toBe(expectPath);
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

  test('register button click signup page display', () => {
    const { history } = rendering();
    const registerButton = screen.getByTitle('memberRegister');
    fireEvent.click(registerButton);
    transitionResult(history, '/signup');
  });

  test('login button click signup page display', () => {
    const { history } = rendering();
    const loginButton = screen.getByTitle('login');
    fireEvent.click(loginButton);
    transitionResult(history, '/login');
  });
});
