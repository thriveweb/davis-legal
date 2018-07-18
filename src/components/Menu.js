import React from 'react'
import Link from 'gatsby-link'

import Hamburger from './Hamburger.js'

import './Menu.css'

const Menu = (props) => (

  <div>
    <div className="menu">
      <div className="large">
        <div className="left">
          <Link to="/">
            <img src="/img/logo.svg" alt="" />
          </Link>
        </div>

        <div className="right">
          <Hamburger />
        </div>

        <div className="clear"></div>
      </div>
    </div>

  </div>

)

export default Menu
