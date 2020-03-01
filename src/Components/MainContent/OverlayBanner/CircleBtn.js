import React, { Component } from "react";
import "./CircleBtn.scss";

class CircleBtn extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     selectedId: this.props.selectedId
  //   };
  // }

  render() {
    const { id, buttonImg, handleBtnClick } = this.props;
    return (
      <div className="circle-btn" key={id + "-circle-btn"}>
        <div
          id={id + "-circle-btn"}
          className={id === this.props.selectedId ? "selected" : "btn"}
          style={{ backgroundImage: `URL(${buttonImg})` }}
          onClick={handleBtnClick}
        ></div>
      </div>
    );
  }
}

export default CircleBtn;
