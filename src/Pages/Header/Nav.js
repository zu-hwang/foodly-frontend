import React from "react";
import LogoContainer from "../../Components/NavForm/LogoContainer";
import MainNav from "../../Components/NavForm/MainNav";
import "../../Styles/Nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navColor: this.props.navColor
    };
  }
  render() {
    return (
      <header className="header">
        <LogoContainer navColor={this.state.navColor} />
        <MainNav />
      </header>
    );
  }
}

export default Nav;
