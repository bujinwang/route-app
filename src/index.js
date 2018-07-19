import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import One from './One'
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Nomatch from "./Nomatch";
import Fourpointone from "./Fourpointone";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App}></Route>
      <Route path="/One" component={One}/>
      <Route path="/Two" component={Two}/>
      <Route path="/Three" component={Three}/>
      <Route path="/Four" component={Four}>
        <Route path="/Four/:id" children={Fourpointone}/>
      </Route>
      {/*<Route path="*" component={Nomatch}/>*/}
    </div>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
