import React, { Component } from 'react'
import Link from 'gatsby-link'

import BackgroundImage from './BackgroundImage'

import './Hero.css'

class Hero extends Component {
  render() {
    const { footer, center, image } = this.props

    return (
      <div
        className={`${'hero'} ${footer ? 'hero-footer' : ''} ${
          center ? 'hero-center' : ''
        }`}
      >
        <div className="overlay" />
        <BackgroundImage className="cover" src={image} alt="" />
      </div>
    )
  }
}

export default Hero
