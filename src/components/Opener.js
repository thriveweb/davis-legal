import React from 'react'
import Link from 'gatsby-link'

import './Opener.css'

import OpenerImage from '../../public/static/img/hero-home.jpg'

const Opener = () => (

  <div>

    <div className="opener">
      <div className="large">
        <p className="right">Liability limited by a scheme approved under Professional Standards Legislation.</p>
        <div className="clear"></div>
      </div>

      <div className="overlay"></div>
      <img className="cover" src={`${OpenerImage}`} alt="" />
      <div className="clear"></div>
    </div>

  </div>

)

export default Opener
