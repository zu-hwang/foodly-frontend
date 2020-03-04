import React from "react";
import "./mainNav.scss";
import { withRouter } from "react-router-dom";

class MainNav extends React.Component {
  constructor() {
    super();
    this.state = {
      secondChild: "secondChild",
      listDisplay: "none"
    };
  }

  handlePlus = () => {
    // console.log("들어간다");
    this.setState({
      secondChild: "secondChild--tf",
      listDisplay: "block"
    });
  };

  hadleMinus = () => {
    // console.log("나간다.");
    this.setState({
      secondChild: "secondChild",
      listDisplay: "none"
    });
  };

  goToPage = e => {
    this.props.history.push(`/${e.target.innerHTML}`);
  };

  render() {
    return (
      <div className="MainNav">
        <ul className="nav--list">
          <li className="nav--list__item">
            <div className="item" onClick={this.goToPage}>
              Home
            </div>
          </li>
          <li
            className="nav--list__item opening"
            onMouseEnter={this.handlePlus}
            onMouseLeave={this.hadleMinus}
          >
            <div className="item">
              <span>Product</span>
              <input type="ckeckbox" id="plusMinus" />
              <label className="plusMinus">
                <span className="firstChild"></span>
                <span className={this.state.secondChild}></span>
              </label>
            </div>
            {/* 여기까지 */}
            {/* <NavDropDownList /> */}
            {/* 숨겨진애들 시작 */}
            <ul
              className="lists"
              // onClick={this.handleChange}
              style={{ display: this.state.listDisplay }}
            >
              <li className="dropdown-list__item" onClick={this.goToPage}>
                Product
              </li>
              <li className="dropdown-list__item">Fresh</li>
              <li className="dropdown-list__item">Frozen</li>
              <li className="dropdown-list__item">Dried</li>
              <li className="dropdown-list__item">Liquid</li>
              <li className="dropdown-list__item">sale</li>
              <li className="dropdown-list__item">Special</li>
              <li className="dropdown-list__item">Cooked</li>
            </ul>
          </li>
          <li className="nav--list__item">
            <div className="item">Blog</div>
          </li>
          <li className="nav--list__item">
            <div className="item">Recipes</div>
          </li>
          <li className="nav--list__item">
            <div className="item">Lookbook</div>
          </li>
          <li className="nav--list__item">
            <div className="item">Contact</div>
          </li>
          <li className="nav--list__item">
            <div className="item" onClick={this.goToPage}>
              Login
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(MainNav);
