import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Q_first from './routes/Q_first';
import Q_second from './routes/Q_second';
import Q_third from './routes/Q_third';
import resultApp from './routes/resultApp';
import './css/main.css';


function App() {
  return ( 
    <HashRouter>
        <header id="header">
          <a href="/" className="logo"><strong>WHO ARE YOU</strong></a>
			  </header>
        <Route path="/" exact={true} component = { Home } />
        <Route path="/Q_first" component={ Q_first }></Route>
        <Route path="/Q_second" component={ Q_second }></Route>
        <Route path="/Q_third" component={ Q_third }></Route>
        <Route path="/result" component={ resultApp }></Route>
    </HashRouter>
  );
}

export default App;
