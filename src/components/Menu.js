import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (

  <div>

    <div className="menu fixed">
      <div className="large">
        <div className="left">
          <Link to="/">
            <img src="img/logo.svg" alt="Davis Legal" />
          </Link>
        </div>

        <div className="hamburger right">
          <div className="bar"></div>
        </div>

        <div className="res-nav">
          <nav>
            <a href="about.html">about robert davis</a>
            <a href="areas.html">practice areas</a>
            <a href="contact.html">contact robert</a>
          </nav>
        </div>
        <div className="clear"></div>
      </div>
    </div>

  </div>

)

export default Menu
