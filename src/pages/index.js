import React from 'react'
import Link from 'gatsby-link'

import Opener from '../components/Opener'
import Hero from '../components/Hero'
import LargeTitle from '../components/LargeTitle'
import LeftColumn from '../components/LeftColumn'
import RightColumn from '../components/RightColumn'
import Button from '../components/Button'

const IndexPage = () => (
  <div>

    <Opener />

    <div className="section">

      <LargeTitle
        smallTitle="areas of practice"
        title="accepting briefs to advise & appear"
        largeTitle="Areas"
      />

      <div className="small content">
        <LeftColumn
          content={
            <div>
              <p>Robert Davis appears as counsel in Australian State, Territorial and Federal Courts. His main areas of practice include:</p>

              <ul>
                <li>Legal, Medical & Financial Professional Negligence Litigation</li>
                <li>Motor Vehicle, Workplace, Defective Products & Premises Liability</li>
                <li>Trade Practices & Consumer Litigation</li>
                <li>Commonwealth Superannuation Litigation</li>
                <li>Civil Aviation Litigation</li>
                <li>Scuba Diving Litigation</li>
              </ul>
            </div>
          }
        />

        <RightColumn
          content={
            <ul>
              <img src="/img/home-img.jpg" />
              <li>Inquests and Commissions of Inquiry</li>
              <li>Professional & Ethical Standards Disciplinary Proceedings</li>
            </ul>
          }
        />

        <div className="clear"></div>
      </div>

      <Button
        text="discover more"
        page="/areas/"
      />

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
              With extensive experience and ongoing academic qualifications, Robert began his career in Queensland and New South Wales in 1979 then worked for many years as a Litigation Solicitor before being called to the Queensland Bar in 2007.
            </p>
          }
        />

        <RightColumn
          content={
            <p>
              Over his career he has been featured in many publications and has served as President of the Queensland Law Society and the Australian Plaintiff Lawyers Association (now the Australian Lawyers Alliance). He has has appeared in many high profile cases in Australia.
            </p>
          }
        />
      </div>

      <div className="clear"></div>

      <Button
        text="discover more"
        page="/about/"
      />

    </div>

    <Hero
      image="/img/footer-home.jpg"
      footer={true}
    />

  </div>
)

export default IndexPage
