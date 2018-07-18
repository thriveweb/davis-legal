import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

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

    <Helmet>
      <title lang="en">About Robert | Davis Legal</title>
    </Helmet>

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
              content: <div><ul>
              <li>The Effect of The Decision of The Full Court of The Federal Court of Australia in Cooling -v- FCT (1990) 1(2) Revenue Law Journal 216.</li>
              <li>The Origin of The Duty of Disclosure in Insurance Law (1991) 1 Insurance Law Journal 71.</li>
              <li>Slips & Trips that Cost an Arm & a Leg (1993) 1(5) Tourism & Travel Review.</li>
              <li>Litigation USA Style Jan/Feb (1994) Jan/Feb The Proctor.</li>
              <li>Why Plaintiffs are The Losers in Personal Injury Negotiations (1994) April APLA Update.</li>
              <li>Negotiating Personal Injury Cases: A Survey of Attitudes & Beliefs of Personal Injury Lawyers (1994) 68 Australian Law Journal 734.</li>
              <li>SCUBA Diving, Andrewartha -v- Rawlings & Coolangatta Dive Pty Ltd (1994) December APLA Update.</li>
              <li>Ciguatera Poisoning: How Diners Can Get Their Revenge (1995) Feb/Mar APLA Update 6.</li>
              <li>The Regulation of Recreational SCUBA Diving (1995) 25(1) South Pacific Underwater Medicine Society Journal, 10.</li>
              <li>Can Obvious Dangers Constitute Defects under Part VA of the Trade Practices Act? (1995) 6(2) Australian Product Liability Reporter 17.</li>
              <li>Risk Management for Scuba Diving Operators on Australia's Great Barrier Reef (2000) 21 Tourism Management 591 (with Dr. J. Wilks).</li>
              <li>Negotiating Personal Injury Cases (2001) 43 Plaintiff 12.</li>
              <li>Citizens' Rights Under Attack (2001) 52 Plaintiff 4.</li>
              <li>Interesting Times for Plaintiff Lawyers (2001) 46 Plaintiff 4.</li>
              <li>Medical Indemnity Reform & Structured Settlements (2001) 47 Plaintiff 4.</li>
              <li>Premiums, Propaganda & The Push for Tort Reform (2001) 48 Plaintiff 4.</li>
              <li>Media Distortions in the Public Liability Debate (2002) 50 Plaintiff 4.</li>
              <li>Death of Journalism (2002) 51 Plaintiff 4.</li>
              <li>The Tort Reform Crisis (2002) 25(3) University of New South Wales Law Journal 865.</li>
              <li>Queensland emphasises dispute resolution for personal injury claims to resolve premium 'crisis' (2002) 5(2) ADR Bulletin 1.</li>
              <li>Tort Reform & Other Weapons of Mass Distraction (2003) 147 Lawyers Weekly 10.</li>
              <li>Defining Justice (2003) 57 Plaintiff 4.</li>
              <li>Legal Notes: Current Tourism & Leisure Issues for Older Travellers (2003) 46(2) Australian Parks and Leisure 41 (with Dr. J. Wilks).</li>
              <li>Duty of Care to Resort Guest Who Drowned (2003) International Travel Law Journal 4 (with Dr. J. Wilks).</li>
              <li>International Tourists and Recreational Injuries (2003) 58 Plaintiff (with Dr. J. Wilks).</li>
              </ul></div>
            },

            {
              title: "Books",
              content: <div><ul>
              <li>Kellam, Travers & Davis, <b>Product Liability Law & Practice</b> (Legal Books, 1996).</li>
              <li>Griffin QC & Davis et al, <b>ersonal Injury Litigation Queensland</b> (Butterworths, 1996).</li>
              <li>Wilks et al (eds), <b>Tourism in Turbulent Times</b> (Elsivar Books, 2005).</li>
              </ul></div>
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
