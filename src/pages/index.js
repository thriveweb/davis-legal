import React from 'react'
import Link from 'gatsby-link'

import Opener from '../components/Opener'
import LargeTitle from '../components/LargeTitle'
import LeftColumn from '../components/LeftColumn'
import RightColumn from '../components/RightColumn'
import Button from '../components/Button'
import FooterHero from '../components/FooterHero'

const IndexPage = () => (
  <div>

    <Opener />

    <div className="section">

      <LargeTitle
        SmallTitle="areas of practice"
        Title="accepting briefs to advise & appear"
        LargeTitle="Areas"
      />

      <div className="small content">
        <LeftColumn
          Content={
            <ul>
              <li>Legal, Medical & Financial Professional Negligence Litigation</li>
              <li>Motor Vehicle, Workplace, Defective Products & Premises Liability</li>
              <li>Trade Practices & Consumer Litigation</li>
              <li>Commonwealth Superannuation Litigation</li>
              <li>Civil Aviation Litigation</li>
              <li>Scuba Diving Litigation</li>
            </ul>
          }
        />

        <RightColumn
          Content={
            <ul>
              <img src="/img/home-img.jpg" />
              <li>Inquests and Commissions of Inquiry</li>
              <li>Professional & Ethical Standards Disciplinary Proceedings</li>
            </ul>
          }
        />
      </div>

      <div className="clear"></div>

      <Button
        Text="discover more"
        Page="/areas/"
      />

    </div>



    <div className="section">

      <LargeTitle
        SmallTitle="about robert davis"
        Title="over 35 years of legal experience"
        LargeTitle="About"
      />

      <div className="small content">
        <LeftColumn
          Content={
            <p>
              With extensive experience and ongoing academic qualifications, Robert began his career in Queensland and New South Wales in 1979 then worked for many years as a Litigation Solicitor before being called to the Queensland Bar in 2007.
            </p>
          }
        />

        <RightColumn
          Content={
            <p>
              Over his career he has been featured in many publications and has served as President of the Queensland Law Society and the Australian Plaintiff Lawyers Association (now the Australian Lawyers Alliance). He has has appeared in many high profile cases in Australia.
            </p>
          }
        />
      </div>

      <div className="clear"></div>

      <Button
        Text="discover more"
        Page="/about/"
      />

    </div>

    <FooterHero
      Image="/img/footer-home.jpg"
    />

  </div>
)

export default IndexPage
