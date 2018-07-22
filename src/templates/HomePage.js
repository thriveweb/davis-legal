import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Opener from '../components/Opener'
import Hero from '../components/Hero'
import LargeTitle from '../components/LargeTitle'
import Column from '../components/Column'
import Button from '../components/Button'

export const HomePageTemplate = ({ title, section1 }) => (
  <div>
    <Opener />

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
        smallTitle="about robert davis"
        title="over 35 years of legal experience"
        largeTitle="About"
      />

      <div className="small content">
        <Column left={true}>
          <p>
            With extensive experience and ongoing academic qualifications,
            Robert began his career in Queensland and New South Wales in 1979
            then worked for many years as a Litigation Solicitor before being
            called to the Queensland Bar in 2007.
          </p>
        </Column>

        <Column left={true}>
          <p>
            Over his career he has been featured in many publications and has
            served as President of the Queensland Law Society and the Australian
            Plaintiff Lawyers Association (now the Australian Lawyers Alliance).
            He has has appeared in many high profile cases in Australia.
          </p>
        </Column>
      </div>

      <div className="clear" />

      <Button text="discover more" page="/about/" />
    </div>

    <Hero image="/images/uploads/footer-home.jpg" footer={true} />
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
        section1 {
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
