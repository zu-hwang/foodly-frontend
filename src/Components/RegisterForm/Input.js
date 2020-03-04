import React, { Component } from "react";
import InputCheckBox from "./InputCheckBox";
import "./Input.scss";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFocused: "focus-out",
      display: false
    };
  }
  handleOnFocus = e => {
    if (this.props.Value || e.target) {
      this.setState({ inputFocused: "focused" });
    }
  };
  handleOnBlur = e => {
    if (!this.props.Value && !e.target) {
      this.setState({ inputFocused: "focus-out" });
    } else if (this.props.Value || !e.target) {
      this.setState({ inputFocused: "focus-opacity" });
    } else {
      this.setState({ inputFocused: "focus-out" });
    }
  };
  checkPwNotice = () => {
    if (
      this.props.Type === "password" &&
      !this.props.CheckForm &&
      this.state.inputFocused === "focused" &&
      this.props.Value.length < 6
    ) {
      return true;
    }
  };
  checkStyle = () => {
    if (this.props.CheckForm) {
      // 빨간 줄 켜져야 할때 true 리턴
      if (this.props.Type === "email") {
        if (
          !this.props.Value.includes("@") ||
          !this.props.Value.includes(".") ||
          this.props.Value.includes(" ")
        ) {
          return true;
        }
      } else if (this.props.Type === "text") {
        if (this.props.Value.length < 2 || this.props.Value.includes(" ")) {
          return true;
        }
      } else if (this.props.Type === "password") {
        if (this.props.Value.length < 6 || this.props.Value.includes(" ")) {
          return true;
        }
      }
    }
  };
  handleDelBtn = e => {
    this.setState({
      display: !this.state.CheckForm
    });
  };
  checkInputVal = () => {
    const { Type, Value } = this.props;
    if (Type === "text") {
      if (Value.length > 1 && !Value.includes(" ")) {
        return true;
      }
    } else if (Type === "email") {
      if (
        Value.indexOf("@") > 0 &&
        Value.indexOf(".") > 2 &&
        !Value.includes(" ")
      ) {
        return true;
      }
    } else if (Type === "password") {
      if (Value.length > 5 && !Value.includes(" ")) {
        return true;
      }
    }
  };
  render() {
    const {
      Label,
      Value,
      Type,
      HtmlFor,
      OnChange,
      OnKeyUp,
      CheckForm
    } = this.props;

    return (
      <div className="input-wrap">
        <div
          className={
            !this.checkInputVal() && CheckForm && !this.state.display
              ? "block-scale"
              : "none-scale"
          }
        >
          <InputCheckBox
            Type={Type}
            Label={Label} // 여기까지는 내용 관련 프롭스
            HandleDelBtn={this.handleDelBtn}
          />
        </div>
        <label className={this.state.inputFocused} htmlFor={HtmlFor}>
          {Label}
        </label>
        <input
          id={HtmlFor}
          type={Type}
          onBlur={this.handleOnBlur}
          onFocus={this.handleOnFocus}
          onChange={OnChange}
          onKeyUp={OnKeyUp}
          style={this.checkStyle() ? { border: "solid 1px #f060607a " } : null}
          value={Value}
        ></input>
        <div className={this.checkPwNotice() ? "notice-block" : "notice-none"}>
          The password must be a minimum of 6 character long.
        </div>
      </div>
    );
  }
}

export default Input;
