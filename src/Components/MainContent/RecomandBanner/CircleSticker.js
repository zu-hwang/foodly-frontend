import React, { Component } from "react";
import "./CircleSticker.scss";
class CircleSticker extends Component {
  render() {
    const { id, stickerText } = this.props;
    return (
      <div className="circle-sticker" id={id + "-circle-sticker"}>
        <p>{stickerText}</p>
      </div>
    );
  }
}

export default CircleSticker;
