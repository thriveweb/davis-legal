import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import 'modern-normalize/modern-normalize.css'

import Meta from '../components/Meta'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

import './globalStyles.css'

export default ({ children, data }) => {
  const {
    siteTitle,
    siteDescription,
    siteUrl,
    socialMediaCard,
    headerScripts,
  } =
    data.settingsYaml || {}
  return (
    <div>
      <Helmet defaultTitle={siteTitle} titleTemplate={`%s | ${siteTitle}`}>
        <link rel="stylesheet" href="https://use.typekit.net/jzk7ecz.css" />
      </Helmet>

      <Menu />

      {children()}

      <Footer />
    </div>
  )
}

export const query = graphql`
  query IndexLayoutQuery {
    settingsYaml {
      siteTitle
      siteDescription
      headerScripts
      socialMediaCard {
        image
      }
    }
  }
`
