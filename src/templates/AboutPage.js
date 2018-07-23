import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Hero from '../components/Hero'
import LargeTitle from '../components/LargeTitle'
import Column from '../components/Column'
import LeftColumn from '../components/LeftColumn'
import RightColumn from '../components/RightColumn'
import Content from '../components/Content'
import Image from '../components/Image'
import Button from '../components/Button'
import Timeline from '../components/Timeline'
import Accordion from '../components/Accordion'
import More from '../components/More'

export const AboutPageTemplate = ({
  title,
  heroImage,
  centerImage,
  about,
  timeline,
  career,
  work,
  more,
  footerImage,
}) => (
  <div>
    <Helmet>
      <title lang="en">About Robert</title>
    </Helmet>

    <Hero image={heroImage} />

    <div className="section">
      <LargeTitle
        smallTitle={about.subtitle}
        title={about.title}
        largeTitle={about.largeTitle}
        marginTop={true}
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
    </div>

    <div className="section">
      <LargeTitle largeTitle="History" />

      <div className="small content">
        <Timeline timeline={timeline} />
      </div>

      <div className="clear" />
    </div>

    <Hero image={centerImage} center={true} />

    <div className="section">
      <LargeTitle
        smallTitle={career.subtitle}
        title={career.title}
        largeTitle={career.largeTitle}
      />

      <div className="small content">
        <Column left={true}>
          <Content src={career.leftColumn} />
        </Column>

        <Column right={true}>
          <Content src={career.rightColumn} />
        </Column>

        <div className="clear" />
      </div>
    </div>

    <div className="section">
      <LargeTitle
        smallTitle={work.subtitle}
        title={work.title}
        largeTitle={work.largeTitle}
      />

      <div className="small content">
        <Column left={true}>
          <Content src={work.leftColumn} />
        </Column>

        <div className="clear" />

        <Accordion accordion={work.accordion} />
      </div>

      <div className="clear" />
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

const AboutPage = ({ data: { page } }) => (
  <AboutPageTemplate {...page} {...page.frontmatter} body={page.html} />
)

export default AboutPage

export const pageQuery = graphql`
  query AboutPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      frontmatter {
        heroImage {
          ...NoBlurImage
        }
        centerImage {
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
        timeline {
          event {
            year
            content
          }
          eventNow {
            title
            content
          }
        }
        career {
          largeTitle
          subtitle
          title
          leftColumn
          rightColumn
        }
        work {
          largeTitle
          title
          subtitle
          leftColumn
          rightColumn
          accordion {
            title
            content
          }
        }
        more {
          largeTitle
          title
          content
          buttonText
          buttonLink
        }
      }
    }
  }
`
