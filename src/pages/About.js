import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/Hero'
import LargeTitle from '../components/LargeTitle'
import LeftColumn from '../components/LeftColumn'
import RightColumn from '../components/RightColumn'
import Button from '../components/Button'
import Timeline from '../components/Timeline'
import Accordion from '../components/Accordion'
import More from '../components/More'
import FooterHero from '../components/FooterHero'

const AboutPage = () => (
  <div>

    <Hero
      Image="/img/hero-about.jpg"
    />

    <div className="section">

      <LargeTitle
        SmallTitle="about robert davis"
        Title="academic qualifications"
        LargeTitle="About"
      />

      <div className="small content">
        <LeftColumn
          Content={
            <ul>
              <li>Law Studies - Queensland SAB (December 1978)</li>
              <li>Bachelor of Social Science (major studies in psychology and human biology) - UNE (April 1989)</li>
              <li>Master of Laws - Bond University (September 1991)</li>
              <li>Certificate - Australian Advocacy Institute (August 1994)</li>
            </ul>
          }
        />

        <RightColumn
          Content={
            <ul>
              <li>Second Master of Laws (Corporate and Commercial Law) - Bond (February 1999)</li>
              <li>Mediation Certificate - Bond University Dispute Resolution Centre (December 2001)</li>
              <li>Bar Association of Queensland Bar Practice Course - QUT (February 2007)</li>
            </ul>
          }
        />
      </div>

      <div className="clear"></div>

    </div>

    <div className="section">
      <LargeTitle
        LargeTitle="History"
      />

      <div className="small content">
        <Timeline />
      </div>

      <div className="clear"></div>

    </div>

    <Hero
      Image="/img/hero-about2.jpg"
    />

    <div className="section">

      <LargeTitle
        SmallTitle="about his career"
        Title="past professional roles"
        LargeTitle="Career"
      />

      <div className="small content">
        <LeftColumn
          Content={
            <ul>
              <li>Chair, Law Australia Group of law firms</li>
              <li>Visiting Assistant Professor (Law), Bond University</li>
              <li>Member of the Board of Governors, Association of Trial Lawyers of America</li>
              <li>Board Member, Australian Plaintiff Lawyers Association Inc (APLA)</li>
              <li>Member, Queensland Law Society Accident Compensation Committee</li>
              <li>Member, first Personal Injury Specialist Accreditation Committee of the Queensland Law Society</li>
              <li>Queensland President, APLA</li>
              <li>Twice elected National President, APLA (now the Australian Lawyers Alliance)</li>
              <li>Council Member, Queensland Law Society</li>
            </ul>
          }
        />

        <RightColumn
          Content={
            <ul>
              <li>Vice President, Queensland Law Society</li>
              <li>Director, College of Law Queensland Pty Ltd</li>
              <li>Adjunct Professor, Centre for Tourism and Risk Management at the University of Queensland</li>
              <li>Chair, Queensland Law Society Alternative Dispute Resolution Section</li>
              <li>Member, Queensland Law Society Audit Committee</li>
              <li>Director, Lexon Insurance Pty Ltd</li>
              <li>President, Queensland Law Society</li>
              <li>Advisory Board, Griffith University Innocence Project</li>
            </ul>
          }
        />

        <div className="clear"></div>
      </div>

      <div className="clear"></div>

    </div>

    <div className="section">

      <LargeTitle
        SmallTitle="roberts work"
        Title="publications"
        LargeTitle="Work"
      />

      <div className="small content">
        <LeftColumn
          Content={
            <p>
              Publications authored, books contributed towards and conference presentations made, include:
            </p>
          }
        />

        <div className="clear"></div>

        <Accordion
          accordionFields={[
            {
              title: "Journals",
              content: "Donec porta, ex sed ullamcorper vehicula, augue diam cursus orci, porta pretium mauris leo iaculis metus. Mauris ac elit sit amet orci dictum pellentesque. Praesent eget aliquam libero. Aenean tempor ligula sed diam gravida, placerat blandit magna bibendum."
            },

            {
              title: "Books",
              content: "Donec porta, ex sed ullamcorper vehicula, augue diam cursus orci, porta pretium mauris leo iaculis metus. Mauris ac elit sit amet orci dictum pellentesque. Praesent eget aliquam libero. Aenean tempor ligula sed diam gravida, placerat blandit magna bibendum."
            },

            {
              title: "Presentations & Submissions",
              content: "Donec porta, ex sed ullamcorper vehicula, augue diam cursus orci, porta pretium mauris leo iaculis metus. Mauris ac elit sit amet orci dictum pellentesque. Praesent eget aliquam libero. Aenean tempor ligula sed diam gravida, placerat blandit magna bibendum."
            },
          ]}

        />
      </div>

      <div className="clear"></div>

    </div>

    <More />

    <FooterHero
      Image="/img/footer-about.jpg"
    />

  </div>
)

export default AboutPage
