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
  heroImage,
  footerImage,
  intro,
  accordion,
  more,
  meta,
}) => (
  <div>
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
    </Helmet>

    <Hero image={heroImage} />

    <div className="section">
      <LargeTitle
        smallTitle={intro.subtitle}
        title={intro.title}
        largeTitle={intro.largeTitle}
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

    <More
      largeTitle={more.largeTitle}
      title={more.title}
      content={more.content}
      buttonText={more.buttonText}
      buttonLink={more.buttonLink}
    />

    <Hero image={footerImage} footer={true} />
  </div>
)

const FAQPage = ({ data: { page } }) => (
  <FAQPageTemplate {...page} {...page.frontmatter} body={page.html} />
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
          title
          subtitle
          leftColumn
          rightColumn
        }
        accordion {
          title
          content
        }
        more {
          largeTitle
          title
          content
          buttonText
          buttonLink
        }
        meta {
          title
          description
        }
      }
    }
  }
`
