import React from 'react'
import Link from 'gatsby-link'

import Hamburger from './Hamburger.js'

import './Menu.css'

const Menu = (props) => (

  <div>

    <div className="menu large">
      <div className="left">
        <img src="/img/logo.svg" alt="" />
      </div>

      <div className="right">
        <Hamburger />
      </div>

      <div className="clear"></div>
    </div>

  </div>

)

export default Menu
