import React from 'react'
import Link from 'gatsby-link'

import './Footer.css'

const Footer = (props) => (

  <div>

    <div className="footer">
      <div className="top">
        <div className="logo">
          <img src="img/logo-footer.svg" alt="" />
        </div>
      </div>

      <div className="large">
        <div className="column">
          <img src="img/logo.svg" alt="" />
          <p>&copy; 2018 Davis Legal | Site by Thrive</p>
        </div>

        <div className="column">
          <Link to="/About">about robert davis</Link>
          <Link to="/Areas">practice areas</Link>
        </div>

        <div className="column">
          <Link to="/Contact">contact robert</Link>
          <Link to="/FAQ">faq</Link>
        </div>

        <div className="column">
          <Link to="#">rdavis@davislegal.com.au</Link>
          <Link to="#">+61 414 339 494</Link>
        </div>
      </div>
    </div>

  </div>

)

export default Footer
