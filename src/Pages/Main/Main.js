import React from 'react';
import Nav from '../Header/Nav';
import Footer from '../../Components/Footer/Footer';

class Main extends React.Component {
  render() {
    return (
      <>
        <Nav />
        {this.props.children}
        <Footer />
      </>
    );
  }
}
export default Main;
