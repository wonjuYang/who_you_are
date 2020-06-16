import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Q_first from './routes/Q_first';

function App() {
  return (  
    <HashRouter>
        <Route path="/" exact={true} component = { Home } />
        <Route path="/Q_first" component={ Q_first }></Route>
    </HashRouter>
  );
}

export default App;
