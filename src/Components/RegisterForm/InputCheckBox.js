import React, { Component } from "react";
import { Data } from "./registerChecking.js";
import "./InputCheckBox.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class InputCheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interjection: "", // 감탄사
      errText: ""
      // toggle: this.props.Display
    };
  }

  handleDelBtn = (e) => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  componentDidMount() {
    const { Type, Label } = this.props;
    if (!Data[Type] || !Data[Type.errText]) {
      return this.setState({
        interjection: Data[Type].interjection,
        // ! errText에 출력할 내용 입력하기
        errText: `The ${Label} is empty`
      });
    } else {
      return this.setState({
        interjection: Data[Type].interjection,
        errText: Data[Type].errText
      });
    }
  }
  render() {
    return (
      <div className="input-check-box">
        <p>
          <span>{this.state.interjection}</span>
          {this.state.errText}
        </p>
        <span onClick={this.props.HandleDelBtn}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </div>
    );
  }
}

export default InputCheckBox;
