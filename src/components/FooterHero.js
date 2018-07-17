import React from 'react'
import Link from 'gatsby-link'

import './Hero.css'

const FooterImage = (props) => (

  <div>

    <div className="hero-footer">
      <div className="overlay"></div>
      <img className="cover" src={`${props.Image}`} alt="" />
    </div>

  </div>

)

export default FooterImage
