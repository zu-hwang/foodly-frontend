import React, { Component } from "react";
import "./MainTitle.scss";

class MainTitle extends Component {
  render() {
    const {
      id,
      title,
      subTitle,
      prodId,
      onClick,
      titleStyle,
      subTitleStyle
    } = this.props;
    return (
      <div
        className="main-title"
        id={prodId ? prodId + "-main-title" : id + "-main-title"}
        onClick={onClick}
      >
        <p
          id={prodId ? prodId + "-main-title-p1" : id + "-main-title-p2"}
          onClick={onClick}
          style={titleStyle}
        >
          {title}
        </p>
        <p
          id={prodId ? prodId + "-main-title-p2" : id + "-main-title-p2"}
          onClick={onClick}
          style={subTitleStyle}
        >
          {subTitle}
        </p>
      </div>
    );
  }
}

export default MainTitle;
