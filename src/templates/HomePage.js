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
        smallTitle="areas of practice"
        title="accepting briefs to advise & appear"
        largeTitle="Areas"
      />

      <div className="small content">
        <Column left={true}>
          <div>
            <p>
              Robert Davis appears as counsel in Australian State, Territorial
              and Federal Courts. His main areas of practice include:
            </p>

            <ul>
              <li>
                Legal, Medical & Financial Professional Negligence Litigation
              </li>
              <li>
                Motor Vehicle, Workplace, Defective Products & Premises
                Liability
              </li>
              <li>Trade Practices & Consumer Litigation</li>
              <li>Commonwealth Superannuation Litigation</li>
              <li>Civil Aviation Litigation</li>
              <li>Scuba Diving Litigation</li>
            </ul>
          </div>
        </Column>

        <Column right={true}>
          <ul>
            <img src="/images/uploads/home-img.jpg" />
            <li>Inquests and Commissions of Inquiry</li>
            <li>Professional & Ethical Standards Disciplinary Proceedings</li>
          </ul>
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
          title
          largeTitle
          subtitle
        }
      }
    }
  }
`
