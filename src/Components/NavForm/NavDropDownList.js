import React from "react";
import "../../Styles/NavDropDownList.scss";

// 이 친구는 드롭다운 메뉴 있는 곳에만 쓸거야!!
class NavDropDownList extends React.Component {
  constructor() {
    super();
    this.state = {
      secondChild: "secondChild",
      now: "home",
      mode: "none"
    };
  }

  handlePlusMinus = () => {
    this.state.secondChild === "secondChild"
      ? this.setState({ secondChild: "secondChild--tf", mode: "block" })
      : //밑에 목록 오픈하는 것도 만들어야함.
        this.setState({ secondChild: "secondChild", mode: "none" });
    //목록 다시 다는것도 만드어야함.
  };

  handleChange = event => {
    this.setState({
      now: event.target.innerText,
      mode: "none",
      secondChild: "secondChild"
    });
  };

  render() {
    return (
      <div className="NavDropDownList">
        {/* 현재페이지, +기호 */}
        <div className="item" onClick={this.handlePlusMinus}>
          <span>{this.state.now}</span>
          <input type="ckeckbox" id="plusMinus" />
          <label
            for="plusMinus"
            className="plusMinus"
            onClick={this.handlePlusMinus}
          >
            <span className="firstChild"></span>
            <span className={this.state.secondChild}></span>
          </label>
        </div>
        {/* 내려오는 목록들 */}
        <div className="nav--dropDown">
          <ul
            className="nav--dropDownContainer"
            onClick={this.handleChange}
            style={{ display: this.state.mode }}
          >
            <li
              className="nav--dropdown-list__item"
              onClick={this.handleChange}
            >
              Home
            </li>
            <li
              className="nav--dropdown-list__item"
              onClick={this.handleChange}
            >
              Home page v1
            </li>
            <li
              className="nav--dropdown-list__item"
              onClick={this.handleChange}
            >
              Home page v2
            </li>
            <li
              className="nav--dropdown-list__item"
              onClick={this.handleChange}
            >
              Home page v3
            </li>
            <li
              className="nav--dropdown-list__item"
              onClick={this.handleChange}
            >
              Home page v4
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavDropDownList;
