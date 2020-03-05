import React, { Component } from "react";
import BundleBox from "./BundleBox";
import "./Bundle.scss";

class Bundle extends Component {
  onClick = e => {
    this.props.history.push("/");
  };
  render() {
    const { data } = this.props;
    return (
      <div className="bundle-container">
        <div className="title-container">
          <p>Choose</p>
          <p>SEASON BUNDLE</p>
        </div>
        <div className="boxes-container">
          {data.map((data, index) => {
            const col = ["#8cbeb2", "#f3b562", "#f06060"];
            return (
              <BundleBox
                data={data}
                color={col[index]}
                onClick={this.onClick}
                key={index}
              />
            );
          })}
        </div>
        <div className="bottom-container">
          <p className="side-text">best deal of</p>
          <div>
            <p>$15</p>
            <p>for each</p>
          </div>
          <p className="side-text">fully packed</p>
        </div>
      </div>
    );
  }
}

export default Bundle;
