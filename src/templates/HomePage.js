import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Opener from '../components/Opener'
import Hero from '../components/Hero'
import LargeTitle from '../components/LargeTitle'
import Column from '../components/Column'
import Content from '../components/Content'
import Image from '../components/Image'
import Button from '../components/Button'

export const HomePageTemplate = ({
  title,
  openerImage,
  about,
  areas,
  footerImage,
}) => (
  <div>
    <Opener openerImage={openerImage} />

    <div className="section">
      <LargeTitle
        smallTitle={about.subtitle}
        title={about.title}
        largeTitle={about.largeTitle}
      />

      <div className="small content">
        <Column left={true}>
          <Content src={about.leftColumn} />
        </Column>

        <Column right={true}>
          <Content src={about.rightColumn} />
        </Column>

        <div className="clear" />
      </div>

      <Button text="discover more" page="/areas/" />
    </div>

    <div className="section">
      <LargeTitle
        smallTitle={areas.subtitle}
        title={areas.title}
        largeTitle={areas.largeTitle}
      />

      <div className="small content">
        <Column left={true}>
          <Content src={areas.leftColumn} />
        </Column>

        <Column right={true}>
          <Content src={areas.rightColumn} />
        </Column>

        <div className="clear" />
      </div>

      <Button text="discover more" page="/about/" />
    </div>

    <Hero image={footerImage} footer={true} />
  </div>
)

const HomePage = ({ data: { page } }) => (
  <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
)

export default HomePage

export const pageQuery = graphql`
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      frontmatter {
        openerImage {
          ...NoBlurImage
        }
        footerImage {
          ...NoBlurImage
        }
        about {
          largeTitle
          subtitle
          title
          leftColumn
          rightColumn
        }
        areas {
          largeTitle
          subtitle
          title
          leftColumn
          rightColumn
        }
      }
    }
  }
`
