import React from 'react'
import Link from 'gatsby-link'

import './Hero.css'

const Hero = (props) => (

  <div>

    <div className="hero">
      <div className="overlay"></div>
      <img className="cover" src={`${props.Image}`} alt="" />
    </div>

  </div>

)

export default Hero
