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
  section1,
  section2,
  footerImage,
}) => (
  <div>
    <Opener openerImage={openerImage} />

    <div className="section">
      <LargeTitle
        smallTitle={section1.subtitle}
        title={section1.title}
        largeTitle={section1.largeTitle}
      />

      <div className="small content">
        <Column left={true}>
          <Content src={section1.leftColumn} />
        </Column>

        <Column right={true}>
          <Content src={section1.rightColumn} />
        </Column>

        <div className="clear" />
      </div>

      <Button text="discover more" page="/areas/" />
    </div>

    <div className="section">
      <LargeTitle
        smallTitle={section2.subtitle}
        title={section2.title}
        largeTitle={section2.largeTitle}
      />

      <div className="small content">
        <Column left={true}>
          <Content src={section2.leftColumn} />
        </Column>

        <Column right={true}>
          <Content src={section2.rightColumn} />
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
        section1 {
          largeTitle
          subtitle
          title
          leftColumn
          rightColumn
        }
        section2 {
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
