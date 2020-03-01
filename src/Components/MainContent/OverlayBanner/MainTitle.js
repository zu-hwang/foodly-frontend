import React, { Component } from "react";
import "./MainTitle.scss";

class MainTitle extends Component {
  render() {
    const { id, title, subTitle, handleTextClick } = this.props;
    return (
      <div
        className="main-title"
        id={id + "main-title"}
        onClick={handleTextClick}
      >
        <p>{title}</p>
        <p>{subTitle}</p>
      </div>
    );
  }
}

export default MainTitle;
