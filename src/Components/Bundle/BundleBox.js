import React, { Component } from "react";
import "./BundleBox.scss";

class BundleBox extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { data, color, onClick } = this.props;
    return (
      <div className="bundle-box">
        <div className="cate-title-box" style={{ backgroundColor: color }}>
          {data[0].title}
        </div>
        <ul>
          {data[1].map((li, index) => {
            return (
              <li key={index}>
                <span>{li["name__count"]}</span>
                <span>{li["measure_id__measure"]}</span>
                <span>{li["name"]}</span>
              </li>
            );
          })}
        </ul>
        <div className="btn-box" style={{ color: color }}>
          <p onClick={onClick}>purchase</p>
          {/* <p onClick={onClick}>{data[0].price}</p> */}
        </div>
      </div>
    );
  }
}

export default BundleBox;
