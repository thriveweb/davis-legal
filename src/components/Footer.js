import React from 'react'
import Link from 'gatsby-link'

import './Footer.css'

const Footer = (props) => (

    <div className="footer">
      <div className="top">
        <div className="logo">
          <img src="/img/logo-footer.svg" alt="" />
        </div>
      </div>

      <div className="large">
        <div className="column">
          <img src="/img/logo.svg" alt="" />
          <p>&copy; 2018 Davis Legal | Site by <a href="https://thriveweb.com.au/" target="_blank"><b>Thrive</b></a></p>
        </div>

        <div className="column map">
          <Link to="/about/">ABOUT ROBERT DAVIS</Link>
          <Link to="/areas/">PRACTICE AREAS</Link>
        </div>

        <div className="column map">
          <Link to="/contact/">CONTACT ROBERT</Link>
          <Link to="/faq/">FAQ</Link>
        </div>

        <div className="column map">
          <a href="mailto:rdavis@davislegal.com.au">rdavis@davislegal.com.au</a>
          <a href="tel:+61414339494">+61 414 339 494</a>
        </div>
      </div>
    </div>

)

export default Footer
