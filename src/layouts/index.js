import React, { Fragment } from 'react'
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
    openGraphCard,
  } =
    data.settingsYaml || {}
  return (
    <div>
      <Helmet defaultTitle={siteTitle} titleTemplate={`%s | ${siteTitle}`}>
        <link rel="stylesheet" href="https://use.typekit.net/jzk7ecz.css" />
      </Helmet>

      <Meta
        absoluteImageUrl={siteUrl + openGraphCard}
        description={siteDescription}
      />

      <Menu />

      {children()}

      <Footer />
    </div>
  )
}

export const query = graphql`
  query IndexLayoutQuery {
    settingsYaml {
      siteUrl
      siteTitle
      siteDescription
      headerScripts
      openGraphCard
    }
  }
`
