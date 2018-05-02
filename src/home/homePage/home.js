import React, { Component } from 'react';
import link  from 'react-router';

import './home.css';

class homeHead extends Component{
    render(){
        return(
            <div className="homeContainerDiv">
                <div className="myName">吴 <span>WU YUN</span></div>
                <div className="menuContainerDiv">
                    <div className="menuLeftPart">
                        <div className="menuText">
                            <link to="/">我</link>
                        </div>
                        <div className="menuText">
                            <link to="/">项目</link>
                        </div>
                        <div className="menuText">
                            <link to="/">教育</link>
                        </div>
                    </div>
                    <div className="myPhoto">
                        <img src={require('../img/myPhoto.png')} alt="我的帅照"/>
                    </div>
                    <div className="menuRightPart">
                        <div className="menuText">
                            <link to="/">博文</link>
                        </div>
                        <div className="menuText">
                            <link to="/">联系我</link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default homeHead;