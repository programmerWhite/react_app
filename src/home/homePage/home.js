import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './home.css';

class homeHead extends Component{
    render(){
        return(
            <div className="homeContainerDiv">
                <div className="myName">吴 <span>WU YUN</span></div>
                <div className="menuContainerDiv">
                    <div className="menuLeftPart">
                        <div className="menuText">
                            <Link to="/">我</Link>
                        </div>
                        <div className="menuText">
                            <Link to="/">项目</Link>
                        </div>
                        <div className="menuText">
                            <Link to="/">教育</Link>
                        </div>
                    </div>
                    <div className="myPhoto">
                        <img src={require('../img/myPhoto.png')} alt="我的帅照"/>
                    </div>
                    <div className="menuRightPart">
                        <div className="menuText">
                            <Link to="/">博文</Link>
                        </div>
                        <div className="menuText">
                            <Link to="/">联系我</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default homeHead;