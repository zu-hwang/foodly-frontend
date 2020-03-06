import React, { Component } from "react";
import "./CircleSticker.scss";

class CircleSticker extends Component {
  render() {
    const { id, stickerText, style, className, onClick } = this.props;
    return (
      <div
        style={style}
        className={className ? className : "circle-sticker"}
        onClick={onClick}
        id={id + "-circle-sticker-id"}
      >
        <p id={id + "-circle-sticker-p"}>{stickerText}</p>
      </div>
    );
  }
}

export default CircleSticker;
