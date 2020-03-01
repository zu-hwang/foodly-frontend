import React, { Component } from "react";
import MainTitle from "../OverlayBanner/MainTitle";
import "./SingleBanner.scss";
import CircleSticker from "./CircleSticker";

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
      <div className="single-banner" onClick={onClick}>
        <div
          className="background-img"
          style={{ backgroundImage: `URL(${bgImg})` }}
        ></div>
        <div className="title-wrap">
          <MainTitle id={id} title={title} subTitle={subTitle} />
        </div>
        <div className="sub-text-wrap">
          <div className="circle-sticker-wrap">
            <CircleSticker id={id} stickerText={stickerText} />
          </div>
          <div>
            <span>{subText}</span>
            <div className="line"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default SingleBanner;
