import React, { Component } from "react";
import InputCheckBox from "./InputCheckBox";
import "./Input.scss";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: this.props.Value,
      inputFocused: "focus-out",
      btnCheck: this.props.CheckForm, // 버튼클릭했을때 트루로 변경
      display: false
    };
  }
  handleOnFocus = (e) => {
    if (this.props.Value || e.target) {
      this.setState({ inputFocused: "focused" });
    }
  };
  handleOnBlur = (e) => {
    if (!this.props.Value && !e.target) {
      this.setState({ inputFocused: "focus-out" });
    } else if (this.props.Value || !e.target) {
      this.setState({ inputFocused: "focus-opacity" });
    } else {
      this.setState({ inputFocused: "focus-out" });
    }
  };
  checkStyle = () => {
    if (this.props.CheckForm) {
      //트루
      // console.log('checkStyle', this.props.Value);
      if (!this.props.Value) {
        // 내용이 없으면
        // this.setState({ display: true });
        return true;
      }
    }
  };
  handleDelBtn = (e) => {
    this.setState({
      display: !this.state.CheckForm
    });
  };
  checkInputVal = () => {};
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
            // this.checkInputVal()
            !Value && CheckForm && !this.state.display
              ? "block-scale"
              : "none-scale"
          }>
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
          style={
            this.checkStyle()
              ? // this.state.display
                { border: "solid 1px #f060607a " }
              : null
          }
          value={Value}></input>
      </div>
    );
  }
}

export default Input;
