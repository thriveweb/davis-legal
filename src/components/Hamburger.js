import React, { Component } from 'react'
import Link from 'gatsby-link'

import './Hamburger.css'

import { slide as Menu } from 'react-burger-menu'

class Hamburger extends Component {
  showSettings(event) {
    event.preventDefault()
  }

  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    return (
      <Menu
        right
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
      >
        <Link
          id="about"
          className="menu-item"
          to="/about/"
          onClick={() => this.closeMenu()}
        >
          About Robert Davis
        </Link>
        <Link
          id="about"
          className="menu-item"
          to="/areas/"
          onClick={() => this.closeMenu()}
        >
          Practice Areas
        </Link>
        <Link
          id="contact"
          className="menu-item"
          to="/contact/"
          onClick={() => this.closeMenu()}
        >
          Contact Robert
        </Link>
      </Menu>
    )
  }
}

export default Hamburger
