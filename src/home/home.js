import React, { Component } from 'react';
import HomeHead from './homePage/home';
import MySkill from './homePage/mySkill';
import HelpYou from './homePage/helpYou';
import MyExperience from './homePage/myExperience';
import MyBlog from './homePage/myBlog';
import MyLive from './homePage/myLive';
import Foot from '../foot/foot';


class Home extends Component {
    render() {
        return (
            <div>
                <HomeHead/>
                <p className="myDesc">
                    我是 wu yun ，26岁。<br/> 一名来自中国成都的前端。
                </p>
                <MySkill/>
                <HelpYou/>
                <MyExperience/>
                <MyBlog/>
                <MyLive/>
                <Foot/>
            </div>
        );
    }
}

export default Home;