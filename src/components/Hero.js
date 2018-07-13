import React from 'react'
import Link from 'gatsby-link'

const Hero = (props) => (

  <div>

    <div className="hero">
      <div className="overlay"></div>
      <img className="cover" src={props.image} alt=""></img>
    </div>

  </div>

)

export default Hero
