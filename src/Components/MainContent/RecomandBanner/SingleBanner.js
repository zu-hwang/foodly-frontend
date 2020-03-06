import React, { Component } from "react";
import MainTitle from "../OverlayBanner/MainTitle";
import "./SingleBanner.scss";
import CircleSticker from "./CircleSticker";

// todo 1. 화면 작아졌을때 완전짜부러짐..음..

class SingleBanner extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    let {
      id,
      title,
      subTitle,
      onClick,
      bgImg,
      stickerText,
      subText
    } = this.props;
    return (
      <div className="single-banner">
        <div
          className="background-img"
          style={{ backgroundImage: `URL(${bgImg})` }}
        ></div>
        <div className="title-wrap">
          <MainTitle
            id={id}
            title={title}
            subTitle={subTitle}
            titleStyle={{ fontSize: "1.8em" }}
            subTitleStyle={{ fontSize: "1.5em" }}
          />
        </div>
        <div className="sub-text-wrap">
          <div className="circle-sticker-wrap">
            <CircleSticker id={id} stickerText={stickerText} />
          </div>
          <div>
            <div id={id + "-subtext"} onClick={onClick}>
              <span>{subText}</span>
            </div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default SingleBanner;
