import React from "react";
import LogoContainer from "../../Components/NavForm/LogoContainer";
import MainNav from "../../Components/NavForm/MainNav";
import "../../Styles/Nav.css";

class Nav extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     navColor: this.props.navColor
  //   };
  // } 굳이 바뀌는 것이 아니라면 state가 아니라props로 바로 전달해도 될 것 같아!
  render() {
    return (
      <header className="header">
        <LogoContainer navColor={this.props.navColor} />
        <MainNav />
      </header>
    );
  }
}

export default Nav;
