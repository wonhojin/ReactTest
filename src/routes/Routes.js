import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from '../Main_div';
import Header from '../component/Header';
import Login from './Login';
import Intro from './Intro';
import Join from './Join';
import Search from './Search';
import Preview from './Preview';
import Mypage from './Mypage';
import View from './View';



export default () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact={true} component={Main} />
      <Route path="/Login" component={Login} />
      <Route path="/intro" component={Intro} />
      <Route path="/Preview" component={Preview} />
      <Route path="/Mypage" component={Mypage} />
      <Route path="/Join" component={Join} />
      <Route path="/Search/:name/:page" component={Search} />
      <Route path="/View/:ItemId" component={View} />
    </Router>
  );
};
