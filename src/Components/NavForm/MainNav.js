import React from "react";
// import NavDropDownList from "../NavForm/NavDropDownList";
import "../../Styles/mainNav.scss";

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

  render() {
    return (
      <div className="MainNav">
        <ul className="nav--list">
          <li
            className="nav--list__item opening"
            onMouseEnter={this.handlePlus}
            onMouseLeave={this.hadleMinus}
          >
            {/* 여기서 부터 */}
            <div className="item">
              <span>Home</span>
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
              <li className="dropdown-list__item">Home ver 1</li>
              <li className="dropdown-list__item">Home ver 2</li>
              <li className="dropdown-list__item">Home ver 3</li>
              <li className="dropdown-list__item">Home ver 4</li>
            </ul>
            {/* 숨겨진 애들 끝 */}
          </li>
          <li className="nav--list__item">
            <div className="item">Product</div>
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
            <div className="item">Login</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default MainNav;
