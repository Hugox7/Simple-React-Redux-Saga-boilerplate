import * as React from 'react';
import { Route, Switch } from "react-router-dom";

import './App.css';
import Main from './pages/Main';
import MainLayout from './components/MainLayout';

const App = () => {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Main}/>
      </Switch>
    </MainLayout>
  );
}

export default App;
