import React, { Component } from "react";
import { Data } from "./registerChecking.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./InputCheckBox.scss";

class InputCheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interjection: "", // 감탄사
      errText: ""
    };
  }
  handleDelBtn = e => {
    this.setState({
      toggle: !this.state.toggle
    });
  };
  componentDidMount() {
    const { Type, Label } = this.props;
    if (Type === "text") {
      // 인풋이 text 타입일때
      return this.setState({
        interjection: Data[Type].interjection,
        errText: Data[Type].errText + Label
      });
    } else if (Type === "email") {
      // 인풋이 이메일일때
      return this.setState({
        interjection: Data[Type].interjection,
        errText: Data[Type].errText
      });
    } else if (Type === "password") {
      return this.setState({
        interjection: Data[Type].interjection,
        errText: Data[Type].errText
      });
    }
  }
  render() {
    return (
      <div className="input-check-box">
        <div>
          <p>
            <span>{this.state.interjection}</span>
            {this.state.errText}
          </p>
          <span onClick={this.props.HandleDelBtn}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
      </div>
    );
  }
}

export default InputCheckBox;
