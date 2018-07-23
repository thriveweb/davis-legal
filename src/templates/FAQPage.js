import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Hero from '../components/Hero'
import LargeTitle from '../components/LargeTitle'
import Column from '../components/Column'
import Content from '../components/Content'
import Accordion from '../components/Accordion'
import More from '../components/More'

export const FAQPageTemplate = ({
  title,
  heroImage,
  centerImage,
  about,
  timeline,
  career,
  work,
  footerImage,
}) => (
  <div>
    <Helmet>
      <title lang="en">FAQ</title>
    </Helmet>

    <Hero image="/images/uploads/hero-faq.jpg" />

    <div className="section">
      <LargeTitle
        smallTitle="frequently asked questions"
        title="all you need to know"
        largeTitle="FAQ"
        marginTop={true}
      />

      <div className="small content">
        <Column left={true}>
          <Content src={intro.leftColumn} />
        </Column>

        <Column right={true}>
          <Content src={intro.rightColumn} />
        </Column>

        <div className="clear" />

        <Accordion accordion={accordion} />
      </div>
    </div>

    <More />

    <Hero image="/images/uploads/footer-faq.jpg" footer={true} />
  </div>
)

export default FAQPage

export const pageQuery = graphql`
  query FAQPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      frontmatter {
        heroImage {
          ...NoBlurImage
        }
        footerImage {
          ...NoBlurImage
        }
        intro {
          largeTitle
          subtitle
          title
          leftColumn
          rightColumn
        }
        accordion {
          title
          content
        }
      }
    }
  }
`
