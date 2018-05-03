import React, { Component } from 'react';

import "./myLive.css";
import "../../icon/demo.css";

class PhotoOne extends Component {
    constructor(props){
        super(props);
        this.imgUrl = this.props.imgData.imgUrl;
        this.imgText = this.props.imgData.imgText;
        this.index = this.props.index;
    }

    render(){
        return (
            <div className="photo-one-div" onClick={(e)=>{this.props.backF(e)}} img-key={this.index} key={this.props.imgData.key}>
                <img src={require(""+this.imgUrl)} alt={this.imgText} />
                <div className="hover-shade-div" img-key={this.index}>
                    {
                        this.imgText?
                            <span className="live-img-text-label" img-key={this.index}>{this.imgText}</span>
                            :
                            <span className='icon iconfont icon-fullscreen' img-key={this.index}></span>
                    }
                </div>
            </div>
        )
    }
}

class MyLive extends Component{

    constructor() {
        super();
        this.state = {
            imgData: [
                {
                    imgUrl: "../../img/liveImg/1.jpg",
                    imgText: "甜甜的草莓，很好吃的哦"
                }
            ],
            bigImgStatus:false,
            imgUrl:"",
            currentIndex:0
        };

    }

    changeBigImgStatus(e){
        var index = e.target.getAttribute("img-key");

        if(!!index){

            var imgUrl = this.state.imgData[index].imgUrl;

            this.setState({
                imgUrl:imgUrl,
                bigImgStatus:true,
                currentIndex:index
            });
        }
    }

    hideBigImg(){
        this.setState({
            bigImgStatus:false
        });
    }

    defaultF(e){
        e.stopPropagation();
    }

    leftClick(){
        var index = parseInt(this.state.currentIndex) - 1;

        index = index < 0?this.state.imgData.length-1:index;

        var imgUrl = this.state.imgData[index].imgUrl;
        this.setState({
            imgUrl:imgUrl,
            bigImgStatus:true,
            currentIndex:index
        });
    }

    rightClick(){
        var index = parseInt(this.state.currentIndex) + 1;

        index = index > this.state.imgData.length-1? 0 : index;

        var imgUrl = this.state.imgData[index].imgUrl;

        this.setState({
            imgUrl:imgUrl,
            bigImgStatus:true,
            currentIndex:index
        });
    }

    render(){
        return (
            <div className="my-live-div">
                <div className="my-live-head-div">
                    <h2>我的日常<sub>My live in photo</sub></h2>
                    <p>生活或许不比过于在意数量，我们应该更多的珍惜质量。</p>
                </div>
                <div className="my-live-photo-div">
                    {
                        this.state.imgData.map((Data,index)=>{
                            return (<PhotoOne imgData={Data} key={index} index={index} backF={this.changeBigImgStatus.bind(this)}/>);
                        })
                    }
                </div>

                <div className="shade-bg-div" onClick={this.hideBigImg.bind(this)} style={{display:this.state.bigImgStatus?"flex":""}}>
                    <div className="close-shade-label icon iconfont icon-close" onClick={this.hideBigImg.bind(this)}></div>

                    <div className="big-img-div" onClick={this.defaultF.bind(this)}>
                        <div className="left-arrow-div icon iconfont icon-return" onClick={this.leftClick.bind(this)}></div>
                        <div className="big-img-inner-div">
                            <img src={this.state.imgUrl?require(""+this.state.imgUrl):""} alt="预览大图"/>
                        </div>
                        <div className="right-arrow-div icon iconfont icon-enter" onClick={this.rightClick.bind(this)}></div>
                    </div>

                </div>
            </div>
        );
    }
}


export default MyLive;