import React from 'react'
import Link from 'gatsby-link'

import './Opener.css'

const Opener = ({ openerImage }) => (
  <div className="opener">
    <div className="large">
      <p className="right">
        Liability limited by a scheme approved under Professional Standards
        Legislation.
      </p>
      <div className="clear" />
    </div>

    <div className="overlay" />
    <img
      className="cover hide"
      src="/images/uploads/hero-home-res.jpg"
      alt=""
    />
    <img className="cover" src={openerImage} alt="" />
    <div className="clear" />
  </div>
)

export default Opener
