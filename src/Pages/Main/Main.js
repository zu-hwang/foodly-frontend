import React from "react";
import Nav from "../Header/Nav";
import Footer from "../../Components/Footer/Footer";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navColor: this.props.navColor
    };
  }
  render() {
    return (
      <>
        <Nav navColor={this.state.navColor} />
        {this.props.children}
        <Footer />
      </>
    );
  }
}
export default Main;
