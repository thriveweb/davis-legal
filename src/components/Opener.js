import React from 'react'
import Link from 'gatsby-link'

import Image from './Image'
import './Opener.css'

const Opener = ({ openerImage, openerImageRes }) => (
  <div className="opener">
    <div className="large">
      <p className="right">
        Liability limited by a scheme approved under Professional Standards
        Legislation.
      </p>
      <div className="clear" />
    </div>

    <div className="overlay" />
    <Image className="cover hide" src={openerImageRes} alt="" />
    <Image className="cover" src={openerImage} alt="" />
    <div className="clear" />
  </div>
)

export default Opener
