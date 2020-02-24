import React from 'react';
import LogoContainer from '../../Components/LogoContainer';
import MainNav from '../../Components/MainNav';
import '../Header/Nav'

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