import React, { Component } from "react";
import "./CircleSticker.scss";

class CircleSticker extends Component {
  render() {
    const { id, stickerText, style, className } = this.props;
    return (
      <div
        style={style}
        className={className ? className : "circle-sticker"}
        id={id + "-circle-sticker"}
      >
        <p>{stickerText}</p>
      </div>
    );
  }
}

export default CircleSticker;
