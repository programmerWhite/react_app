import React, { Component } from 'react';
import HomeHead from './home/home';
import MySkill from './home/mySkill';
import HelpYou from './home/helpYou';
import MyExperience from './home/myExperience';
import MyBlog from './home/myBlog';
import MyLive from './home/myLive';
import Foot from './foot/foot';

import "./App.css";

class App extends Component {
  render() {
    return (
        <div>
            <HomeHead />

            <p className="myDesc">
                我是 wu yun ，26岁。<br/> 一名来自中国成都的前端。
            </p>

            <MySkill />

            <HelpYou />

            <MyExperience />

            <MyBlog/>

            <MyLive/>

            <Foot/>
        </div>
    );
  }
}

export default App;
