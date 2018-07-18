
import React, { Component } from 'react'
import Link from 'gatsby-link'

import './Hamburger.css'

import { slide as Menu } from 'react-burger-menu'

class Hamburger extends Component {
    showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu right>
        <a id="about" className="menu-item" href="/about">About Robert Davis</a>
        <a id="about" className="menu-item" href="/areas">Practice Areas</a>
        <a id="contact" className="menu-item" href="/contact">Contact Robert</a>
      </Menu>
    );
  }
}

export default Hamburger
