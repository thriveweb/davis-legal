import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'

import Menu from '../components/Menu'
import Footer from '../components/Footer'

import Favicon from '../../public/static/img/favicon.ico'


const Layout = ({ children, data }) => (
  <div>
    <Helmet title="Davis Legal" />

    <Menu />

      {children()}

    <Footer />

  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
