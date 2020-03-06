import React, { Component } from "react";
import BundleBox from "./BundleBox";
import "./Bundle.scss";

class Bundle extends Component {
  onClick = e => {
    // console.log(parseInt(e.target.id));
    // this.props.history.push("/");
    fetch("http://10.58.1.167:8000/order/cart", {
      method: "POST",
      body: JSON.stringify({
        id: parseInt(e.target.id)
        // quantity: this.props.data
      })
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  render() {
    const { data } = this.props;
    console.log("번들", data);
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
                id={index}
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
