import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'

import Hamburger from '../components/Hamburger'
import Footer from '../components/Footer'


const Layout = ({ children, data }) => (
  <div>
    <Helmet title="Davis Legal" />

    <Hamburger />

      {children()}

    <Footer />

  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
