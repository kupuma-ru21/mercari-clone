import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Search } from '@/display/views';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={Search} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
