import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Hero from '../components/Hero'
import LargeTitle from '../components/LargeTitle'
import LeftColumn from '../components/LeftColumn'
import RightColumn from '../components/RightColumn'
import Button from '../components/Button'
import IconList from '../components/IconList'
import More from '../components/More'

const AreasPage = () => (
  <div>

    <Helmet>
      <title lang="en">Practice Areas | Davis Legal</title>
    </Helmet>

    <Hero
      image="/img/hero-areas.jpg"
    />

    <div className="section">

      <LargeTitle
        smallTitle="areas of practice"
        title="accepting briefs to advise & appear"
        largeTitle="Areas"
        marginTop={true}
      />

      <div className="small content">
        <LeftColumn
          content={
            <p>
              Robert Davis appears as counsel in Australian State, Territorial and Federal Courts and the High Court of Australia. His main areas of practice include:
            </p>
          }
        />

          <div className="clear"></div>

        <div className="column left">

        <ul className="icons">
          <IconList
            image="/img/icon-medical.svg"
            title="Legal, Medical & Financial Professional Negligence Litigation"
            content="Phasellus vitae velit lorem. Quisque viverra purus sit amet tellus posuere egestas. Nullam eleifend sem scelerisque purus cursus accumsan."
          />

          <IconList
            image="/img/icon-safety.svg"
            title="Motor Vehicle, Workplace, Defective Products & Premises Liability"
            content="Phasellus vitae velit lorem. Quisque viverra purus sit amet tellus posuere egestas. Nullam eleifend sem scelerisque purus cursus accumsan."
          />

          <IconList
            image="/img/icon-trade.svg"
            title="Trade Practices & Consumer Litigation"
            content="Phasellus vitae velit lorem. Quisque viverra purus sit amet tellus posuere egestas. Nullam eleifend sem scelerisque purus cursus accumsan."
          />

          <IconList
            image="/img/icon-super.svg"
            title="Commonwealth Superannuation Litigation"
            content="Phasellus vitae velit lorem. Quisque viverra purus sit amet tellus posuere egestas. Nullam eleifend sem scelerisque purus cursus accumsan."
          />
        </ul>
      </div>

      <div className="column right">
          <ul className="icons">
            <IconList
              image="/img/icon-aviation.svg"
              title="Civil Aviation Litigation"
              content="Phasellus vitae velit lorem. Quisque viverra purus sit amet tellus posuere egestas. Nullam eleifend sem scelerisque purus cursus accumsan."
            />

            <IconList
              image="/img/icon-scuba.svg"
              title="Scuba Diving Litigation"
              content="Phasellus vitae velit lorem. Quisque viverra purus sit amet tellus posuere egestas. Nullam eleifend sem scelerisque purus cursus accumsan."
            />

            <IconList
              image="/img/icon-inquests.svg"
              title="Inquests and Commissions of Inquiry"
              content="Phasellus vitae velit lorem. Quisque viverra purus sit amet tellus posuere egestas. Nullam eleifend sem scelerisque purus cursus accumsan."
            />

            <IconList
              image="/img/icon-ethical.svg"
              title="Professional & Ethical Standards Disciplinary Proceedings"
              content="Phasellus vitae velit lorem. Quisque viverra purus sit amet tellus posuere egestas. Nullam eleifend sem scelerisque purus cursus accumsan."
            />
          </ul>
        </div>

      </div>

      <div className="clear"></div>

    </div>

    <More />

    <Hero
      image="/img/footer-areas.jpg"
      footer={true}
    />

  </div>
)

export default AreasPage
