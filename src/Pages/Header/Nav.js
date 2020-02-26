import React from 'react';
import LogoContainer from '../../Components/NavForm/LogoContainer';
import MainNav from '../../Components/NavForm/MainNav';
import '../../Styles/Nav.css';

class Nav extends React.Component {

    render(){
        return( 
          <header className = "header">
            <LogoContainer />
            <MainNav />
          </header>
        )
    }
}

export default Nav;