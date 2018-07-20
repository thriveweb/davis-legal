import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './global.css'

import Menu from '../components/Menu'
import Footer from '../components/Footer'

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <link rel="stylesheet" href="https://use.typekit.net/jzk7ecz.css" />
    </Helmet>

    <Menu />

    {children()}

    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
