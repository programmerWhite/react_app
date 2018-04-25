import React, { Component } from 'react';
import './home.css';



class homeHead extends Component{
    render(){
        return(
            <div className="homeContainerDiv">
                <div className="myName">吴 <span>WU YUN</span></div>
                <div className="menuContainerDiv">
                    <div className="menuLeftPart">
                        <div className="menuText">
                            <a href="#">我</a>
                        </div>
                        <div className="menuText">
                            <a href="#">项目</a>
                        </div>
                        <div className="menuText">
                            <a href="#">教育</a>
                        </div>
                    </div>
                    <div className="myPhoto">
                        <img src={require('./img/myPhoto.png')} />
                    </div>
                    <div className="menuRightPart">
                        <div className="menuText">
                            <a href="#">博文</a>
                        </div>
                        <div className="menuText">
                            <a href="#">联系我</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default homeHead;