import React, { Component } from "react";
import "./MainTitle.scss";

class MainTitle extends Component {
  render() {
    const {
      id,
      title,
      subTitle,
      handleTextClick,
      titleStyle,
      subTitleStyle
    } = this.props;
    return (
      <div
        className="main-title"
        id={id + "main-title"}
        onClick={handleTextClick}
      >
        <p style={titleStyle}>{title}</p>
        <p style={subTitleStyle}>{subTitle}</p>
      </div>
    );
  }
}

export default MainTitle;
