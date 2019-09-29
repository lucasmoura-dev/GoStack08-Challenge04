import React, { Component } from 'react';

import './Header.css';
import Logo from '../../assets/images/logo.png';
import Profile from '../../assets/images/dog.png';


class Header extends Component {
  render() {
    return (
      <header id="main-header">
        <img class="logo" src={Logo} />
        <div class="profile">
          <span>Meu focinho</span>
          <img src={Profile} />
        </div>
      </header>
    );
  }
}

export default Header;