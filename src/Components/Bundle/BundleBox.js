import React, { Component } from "react";
import "./BundleBox.scss";

class BundleBox extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    // data
    const { title, color, onClick } = this.props;
    return (
      <div className="bundle-box">
        <div className="cate-title-box" style={{ backgroundColor: color }}>
          {title}
        </div>
        <ul>
          {/* 여기에 리스트 맵돌리기! */}
          <li>
            <span>1</span>
            <span>kg</span>
            <span>apple</span>
          </li>
          <li>
            <span>1</span>
            <span>kg</span>
            <span>tomato</span>
          </li>
          <li>
            <span>1</span>
            <span>kg</span>
            <span>strawberry</span>
          </li>
          <li>
            <span>1</span>
            <span>kg</span>
            <span>strawberry</span>
          </li>
        </ul>
        <div className="btn-box" style={{ color: color }}>
          <p onClick={onClick}>purchase</p>
        </div>
      </div>
    );
  }
}

export default BundleBox;
