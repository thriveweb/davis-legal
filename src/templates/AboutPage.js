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
  section1,
  section2,
  footerImage,
}) => (
  <div>
    <Helmet>
      <title lang="en">About Robert</title>
    </Helmet>

    <Hero image={heroImage} />

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
    </div>

    <div className="section">
      <LargeTitle largeTitle="History" />

      <div className="small content">
        <Timeline />
      </div>

      <div className="clear" />
    </div>

    <Hero image={centerImage} center={true} />

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
    </div>

    <div className="section">
      <LargeTitle
        smallTitle="roberts work"
        title="publications"
        largeTitle="Work"
      />

      <div className="small content">
        <LeftColumn
          content={
            <p>
              Publications authored, books contributed towards and conference
              presentations made, include:
            </p>
          }
        />

        <div className="clear" />

        <Accordion
          accordionFields={[
            {
              title: 'Journals',
              content: (
                <div>
                  <ul>
                    <li>
                      The Effect of The Decision of The Full Court of The
                      Federal Court of Australia in Cooling -v- FCT (1990) 1(2)
                      Revenue Law Journal 216.
                    </li>
                    <li>
                      The Origin of The Duty of Disclosure in Insurance Law
                      (1991) 1 Insurance Law Journal 71.
                    </li>
                    <li>
                      Slips & Trips that Cost an Arm & a Leg (1993) 1(5) Tourism
                      & Travel Review.
                    </li>
                    <li>
                      Litigation USA Style Jan/Feb (1994) Jan/Feb The Proctor.
                    </li>
                    <li>
                      Why Plaintiffs are The Losers in Personal Injury
                      Negotiations (1994) April APLA Update.
                    </li>
                    <li>
                      Negotiating Personal Injury Cases: A Survey of Attitudes &
                      Beliefs of Personal Injury Lawyers (1994) 68 Australian
                      Law Journal 734.
                    </li>
                    <li>
                      SCUBA Diving, Andrewartha -v- Rawlings & Coolangatta Dive
                      Pty Ltd (1994) December APLA Update.
                    </li>
                    <li>
                      Ciguatera Poisoning: How Diners Can Get Their Revenge
                      (1995) Feb/Mar APLA Update 6.
                    </li>
                    <li>
                      The Regulation of Recreational SCUBA Diving (1995) 25(1)
                      South Pacific Underwater Medicine Society Journal, 10.
                    </li>
                    <li>
                      Can Obvious Dangers Constitute Defects under Part VA of
                      the Trade Practices Act? (1995) 6(2) Australian Product
                      Liability Reporter 17.
                    </li>
                    <li>
                      Risk Management for Scuba Diving Operators on Australia's
                      Great Barrier Reef (2000) 21 Tourism Management 591 (with
                      Dr. J. Wilks).
                    </li>
                    <li>
                      Negotiating Personal Injury Cases (2001) 43 Plaintiff 12.
                    </li>
                    <li>
                      Citizens' Rights Under Attack (2001) 52 Plaintiff 4.
                    </li>
                    <li>
                      Interesting Times for Plaintiff Lawyers (2001) 46
                      Plaintiff 4.
                    </li>
                    <li>
                      Medical Indemnity Reform & Structured Settlements (2001)
                      47 Plaintiff 4.
                    </li>
                    <li>
                      Premiums, Propaganda & The Push for Tort Reform (2001) 48
                      Plaintiff 4.
                    </li>
                    <li>
                      Media Distortions in the Public Liability Debate (2002) 50
                      Plaintiff 4.
                    </li>
                    <li>Death of Journalism (2002) 51 Plaintiff 4.</li>
                    <li>
                      The Tort Reform Crisis (2002) 25(3) University of New
                      South Wales Law Journal 865.
                    </li>
                    <li>
                      Queensland emphasises dispute resolution for personal
                      injury claims to resolve premium 'crisis' (2002) 5(2) ADR
                      Bulletin 1.
                    </li>
                    <li>
                      Tort Reform & Other Weapons of Mass Distraction (2003) 147
                      Lawyers Weekly 10.
                    </li>
                    <li>Defining Justice (2003) 57 Plaintiff 4.</li>
                    <li>
                      Legal Notes: Current Tourism & Leisure Issues for Older
                      Travellers (2003) 46(2) Australian Parks and Leisure 41
                      (with Dr. J. Wilks).
                    </li>
                    <li>
                      Duty of Care to Resort Guest Who Drowned (2003)
                      International Travel Law Journal 4 (with Dr. J. Wilks).
                    </li>
                    <li>
                      International Tourists and Recreational Injuries (2003) 58
                      Plaintiff (with Dr. J. Wilks).
                    </li>
                  </ul>
                </div>
              ),
            },

            {
              title: 'Books',
              content: (
                <div>
                  <ul>
                    <li>
                      Kellam, Travers & Davis,{' '}
                      <b>Product Liability Law & Practice</b> (Legal Books,
                      1996).
                    </li>
                    <li>
                      Griffin QC & Davis et al,{' '}
                      <b>ersonal Injury Litigation Queensland</b> (Butterworths,
                      1996).
                    </li>
                    <li>
                      Wilks et al (eds), <b>Tourism in Turbulent Times</b>{' '}
                      (Elsivar Books, 2005).
                    </li>
                  </ul>
                </div>
              ),
            },

            {
              title: 'Presentations & Submissions',
              content: (
                <div>
                  <ul>
                    <li>
                      Product Liability, The Past, The Present & The Future,
                      (1993) Qld Law Society Legal Symposium Materials.
                    </li>
                    <li>
                      The Legal Liability for Alcohol Intoxication Related
                      Injuries, (1996) APLA Annual Conference Papers, October.
                    </li>
                    <li>
                      Surveys Into Issues Relating to The Safety of School Bus
                      Travel for School Children, Paper Presented to The Injury
                      Coalition, Mater Hospital, Brisbane, (4th August 1995).
                    </li>
                    <li>
                      Class Actions: Do They Have a Future, Paper Presented at
                      the Australian Legal Convention, Hyatt on Collins,
                      Melbourne, (17th September 1997).
                    </li>
                    <li>
                      School Bus Safety in Australia, Paper Presented to
                      Accident Investigation & Reconstruction, Insurance & the
                      Law Conference, Travel Lodge Hotel, Brisbane, October
                      1997.
                    </li>
                    <li>
                      Injury to International Visitors, International Visitors &
                      Road Safety Summit, Queensland Parliament, 14th May 1999.
                    </li>
                    <li>
                      Liability of Schools for Injuries occurring Outside the
                      School Gate, Paper presented to School Law Conference
                      1998, February 1998.
                    </li>
                    <li>
                      The Legal Liability of Schools & Bus Operators for School
                      Bus Related Injury to Children, Paper Presented to APLA
                      Annual Conference, Hamilton Island, North Queensland,
                      (16th October 1998).
                    </li>
                    <li>
                      Strict Product Liability: How to Protect Your Company From
                      Claims & Damages, Paper presented to Trade Practices &
                      Competition Summit, ANA Hotel, Surfers Paradise, (17th
                      September 1998).
                    </li>
                    <li>
                      Student Death Occurring at School or while The Child is
                      Under The Control of School Staff: Advice to Schools &
                      Teachers on What To Expect & How to Cope With The Legal
                      Process, Paper Presented to School Law Conference 1999
                      (27th April 1999).
                    </li>
                    <li>
                      SCUBA Liability from Legal Perspective, Safer Limits 2000
                      Conference, Wesley Hospital Auditorium, Toowong, Qld (6
                      September 2000).
                    </li>
                    <li>
                      Medical Negligence Litigation from a Plaintiff Lawyer’s
                      Perspective, 2000 Medico- Legal Society Conference,
                      Sheraton Hotel, Main Beach (5th August 2000).
                    </li>
                    <li>
                      Causes for Public Liability Premium Increases, APLA
                      National Conference, Coolum Hyatt Resort, October 2001.
                    </li>
                    <li>
                      Civil Litigation & How to Handle It, University of
                      Queensland Business School Seminar on Risk Management in
                      Marine Tourism Seminar, Radisson Resort, Gold Coast, 11
                      Nov 2001.
                    </li>
                    <li>
                      What do you do about Insurance for Non-profit
                      Organisations? Panel Presentation, Queensland University
                      of Technology Centre for Philanthropy and Non-profit
                      Studies Conference, QUT, 14 Feb 2002.
                    </li>
                    <li>
                      Law, Compensation & Insurance Premiums, Volunteering NSE
                      Seminar, Parliamentary Auditorium, NSW Parliament, April
                      2002.
                    </li>
                    <li>
                      A Plaintiff Lawyer’s Perception of Compensation for
                      Personal Injuries, Personal Injury law & Practice Seminar,
                      T.C. Beirne School of Law, University of Queensland, 18
                      May 2002.
                    </li>
                    <li>
                      Public Liability Issues & Advertising Standards, Qld Law
                      Society Personal Injuries Specialist Accreditation
                      Conference 2002, Sheraton Mirage Main Beach Gold Coast, 31
                      May 2002 and 1 June 2002.
                    </li>
                    <li>
                      How will Proposed Legislative Changes in regard to Public
                      Liability Impact Citizens?, IIR Public Liability Insurance
                      Conference, Avillion Hotel, Sydney, 26-28 August 2002.
                    </li>
                    <li>
                      Tort Reform, Tenth APLA National Conference, Hotel Grand
                      Chancellor, Hobart, 15- 19 Oct 2002.
                    </li>
                    <li>
                      Compensation Systems Design – The Injured Person’s
                      Perspective, Panel Session Debate at the Australian
                      Institute of Actuaries Biannual Conference, Adelaide
                      Hilton, 28 Oct 2002.
                    </li>
                    <li>
                      Product Liability - Personal Injury & Death - Where the
                      Law Stands, Asia Pacific Forum on Tropical Health
                      Innovations, Cairns, North Queensland, 4 November 8-10
                      July 2004.
                    </li>
                    <li>
                      Legal Supports for Tourism, Fiji Law Society 50th
                      Anniversary Convention, Shangri-la Fijian Resort,
                      Sigatoka, Fiji, 27 May, 2006.
                    </li>
                    <li>
                      Litigating Across Borders: Untangling the Procedural &
                      Substantive Mess for Clients Injured while Travelling or
                      Working Interstate, 2013 Australian Lawyers Alliance
                      National Conference, Grand Chancellor Hotel, Hobart,
                      Tasmania, 13 October 2007.
                    </li>
                    <li>
                      Just Where is the Clapham Omnibus Going? - A Queensland
                      Perspective, Australian Lawyers Alliance Conference,
                      Melbourne, August 2006.{' '}
                    </li>
                    <li>
                      The Essentials of Advocacy, Queensland Law Society Gold
                      Coast Regional Symposium, Holiday Inn, Surfers paradise,
                      12 April 2008.
                    </li>
                    <li>
                      The Essentials of Advocacy, Thompson Reuters Queensland
                      Legal Seminar, Brisbane, 2 September 2010.
                    </li>
                    <li>
                      Trial Advocacy, Thompson Reuters Brisbane CPD Conference,
                      Marriott Hotel, Brisbane, 23 March 2012.
                    </li>
                    <li>
                      Essentials of Trial Advocacy, Queensland CPD Conference,
                      Stamford Plaza, Brisbane, 19 March 2013.
                    </li>
                    <li>
                      Compensation for Aviation Injuries - 2017 Australian
                      Lawyers Alliance National Conference, Convention Centre,
                      Darwin, Northern Territory, 20 October 2017.
                    </li>
                  </ul>
                </div>
              ),
            },
          ]}
        />
      </div>

      <div className="clear" />
    </div>

    <More />

    <Hero image={footerImage} />
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
        footerImage {
          ...NoBlurImage
        }
      }
    }
  }
`
