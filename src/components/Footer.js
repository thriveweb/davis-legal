import React from 'react'
import Link from 'gatsby-link'

import './Footer.css'

import Logo from '../../public/static/img/logo.svg'
import FooterLogo from '../../public/static/img/logo-footer.svg'

const Footer = (props) => (

  <div>

    <div className="footer">
      <div className="top">
        <div className="logo">
          <img src={`${FooterLogo}`} alt="" />
        </div>
      </div>

      <div className="large">
        <div className="column">
          <img src={`${Logo}`} alt="" />
          <p>&copy; 2018 Davis Legal | Site by <a href="https://thriveweb.com.au/" target="_blank">Thrive</a></p>
        </div>

        <div className="column map">
          <Link to="/about">about robert davis</Link>
          <Link to="/areas">practice areas</Link>
        </div>

        <div className="column map">
          <Link to="/contact">contact robert</Link>
          <Link to="/faq">faq</Link>
        </div>

        <div className="column map">
          <Link to="#">rdavis@davislegal.com.au</Link>
          <Link to="#">+61 414 339 494</Link>
        </div>
      </div>
    </div>

  </div>

)

export default Footer
