import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (

  <div>

    <div className="hero-footer">
      <div className="overlay"></div>
      <img className="cover" src="img/footer-home.jpg" alt=""></img>
    </div>

    <div className="footer">
      <div className="top">
        <div className="logo">
          <img src="img/logo-footer.svg" alt=""></img>
        </div>
      </div>

      <div className="large">
        <div className="column">
          <img src="img/logo.svg" alt="Davis Legal" />
          <p>&copy; 2018 Davis Legal | Site by Thrive</p>
        </div>

        <div className="column">
          <a href="#">about robert davis</a>
          <a href="#">practice areas</a>
        </div>

        <div className="column">
          <a href="#">contact robert</a>
          <a href="#">faq</a>
        </div>

        <div className="column">
          <a href="#">rdavis@davislegal.com.au</a>
          <a href="#">+61 414 339 494</a>
        </div>
      </div>
    </div>

  </div>

)

export default Footer
