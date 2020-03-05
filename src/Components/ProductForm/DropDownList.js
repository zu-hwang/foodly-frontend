import React from "react";
import "./DropDownList.scss";

//  옵션 선택하는 곳!

class DropDownList extends React.Component {
  constructor() {
    super();
    this.state = {
      now: "State",
      mode: "none"
    };
  }

  modeChange = () => {
    if (this.state.mode === "none") {
      this.setState({
        mode: "block"
      });
    } else if (this.state.mode === "block") {
      this.setState({
        mode: "none"
      });
    }
  };

  handleChange = event => {
    // console.log(event.target.innerText);
    this.setState({
      now: event.target.innerText,
      mode: "none"
    });
  };

  mouseOut = () => {
    this.setState({
      mode: "none"
    });
  };

  render() {
    return (
      <div className="dropDownList">
        <div className="dropDown">
          <button className="dropDown__button" onClick={this.modeChange}>
            {this.state.now}
          </button>
          <ul
            className="dropDownContainer"
            onClick={this.handleChange}
            style={{ display: this.state.mode }}
            onMouseLeave={this.mouseOut}
          >
            <li className="dropdown-list__item" onClick={this.handleChange}>
              State
            </li>
            <li className="dropdown-list__item" onClick={this.handleChange}>
              Any states
            </li>
            <li className="dropdown-list__item" onClick={this.handleChange}>
              Fresh
            </li>
            <li className="dropdown-list__item" onClick={this.handleChange}>
              Frozen
            </li>
            <li className="dropdown-list__item" onClick={this.handleChange}>
              Dried
            </li>
            <li className="dropdown-list__item" onClick={this.handleChange}>
              Liquid
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default DropDownList;
