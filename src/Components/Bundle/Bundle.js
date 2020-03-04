import React, { Component } from "react";
import BundleBox from "./BundleBox";
import "./Bundle.scss";

class Bundle extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  onClick = e => {
    this.props.history.push("/");
  };
  componentDidMount = () => {
    fetch("주소")
      .then(res => res.json())
      .then(data => this.setState({ data: data.data }));
  };
  render() {
    return (
      <div className="bundle-container">
        <div className="title-container">
          <p>Choose</p>
          <p>SEASON BUNDLE</p>
        </div>
        <div className="boxes-container">
          <BundleBox
            data={this.state.data.첫번째키}
            title={`Berrissimo Pack!`}
            color={"#8cbeb2"}
            onClick={this.onClick}
          />
          <BundleBox
            data={this.state.data.두번째키}
            title={`Jam It Suit!`}
            color={"#f3b562"}
            onClick={this.onClick}
          />
          <BundleBox
            data={this.state.data.세번째키}
            title={`Pasta Mia Bag!`}
            color={"#f06060"}
            onClick={this.onClick}
          />
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
