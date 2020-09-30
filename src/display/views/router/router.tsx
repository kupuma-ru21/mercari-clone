import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from '@/display/views';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
