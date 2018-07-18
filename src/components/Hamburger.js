
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
        <Link id="about" className="menu-item" to="/about/">About Robert Davis</Link>
        <Link id="about" className="menu-item" to="/areas/">Practice Areas</Link>
        <Link id="contact" className="menu-item" to="/contact/">Contact Robert</Link>
      </Menu>
    );
  }
}

export default Hamburger
