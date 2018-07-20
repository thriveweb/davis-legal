import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'

import Menu from '../components/Menu'
import Footer from '../components/Footer'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      defaultTitle={data.settings.siteTitle}
      titleTemplate={`%s | ${data.settings.siteTitle}`}
    >
      <link rel="stylesheet" href="https://use.typekit.net/jzk7ecz.css" />
    </Helmet>

    <Menu />

    {children()}

    <Footer settings={data.settings} />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query LayoutQuery {
    settings: settingsYaml {
      siteTitle
      siteUrl
    }
  }
`
