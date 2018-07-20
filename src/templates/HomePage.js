import React from 'react'
import Link from 'gatsby-link'

import Opener from '../components/Opener'
import Hero from '../components/Hero'
import LargeTitle from '../components/LargeTitle'
import LeftColumn from '../components/LeftColumn'
import RightColumn from '../components/RightColumn'
import Button from '../components/Button'
import Content from '../components/Content'

// Export Template for use in CMS preview
export const HomePageTemplate = ({
  section1,
  heroImage,
  openerImage,
  openerImageRes,
}) => (
  <div>
    <Opener openerImage={openerImage} openerImageRes={openerImageRes} />
    <div className="section">
      <LargeTitle
        smallTitle={section1.smallTitle}
        title={section1.title}
        largeTitle={section1.largeTitle}
      />

      <div className="small content">
        <LeftColumn>
          <Content src={section1.leftColumn} />
        </LeftColumn>

        <RightColumn>
          <Content src={section1.rightColumn} />
        </RightColumn>

        <div className="clear" />
      </div>

      <Button text="discover more" page="/areas/" />
    </div>
    <div className="section">
      <LargeTitle
        smallTitle="about robert davis"
        title="over 35 years of legal experience"
        largeTitle="About"
      />

      <div className="small content">
        <LeftColumn
          content={
            <p>
              With extensive experience and ongoing academic qualifications,
              Robert began his career in Queensland and New South Wales in 1979
              then worked for many years as a Litigation Solicitor before being
              called to the Queensland Bar in 2007.
            </p>
          }
        />

        <RightColumn
          content={
            <p>
              Over his career he has been featured in many publications and has
              served as President of the Queensland Law Society and the
              Australian Plaintiff Lawyers Association (now the Australian
              Lawyers Alliance). He has has appeared in many high profile cases
              in Australia.
            </p>
          }
        />
      </div>

      <div className="clear" />

      <Button text="discover more" page="/about/" />
    </div>
    <Hero image={heroImage} footer={true} />
  </div>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <HomePageTemplate {...page} {...page.frontmatter} />
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      frontmatter {
        section1 {
          title
          largeTitle
          smallTitle
          leftColumn
          rightColumn
        }
        heroImage {
          ...FluidImage
        }
        openerImage {
          ...NoBlurImage
        }
        openerImageRes {
          ...NoBlurImage
        }
      }
    }
  }
`
