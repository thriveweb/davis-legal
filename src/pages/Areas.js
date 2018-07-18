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
import FooterHero from '../components/FooterHero'

const AreasPage = () => (
  <div>

    <Helmet>
      <title lang="en">Practice Areas | Davis Legal</title>
    </Helmet>

    <Hero
      Image="/img/hero-areas.jpg"
    />

    <div className="section">

      <LargeTitle
        SmallTitle="areas of practice"
        Title="accepting briefs to advise & appear"
        LargeTitle="Areas"
      />

      <div className="small content">
        <LeftColumn
          Content={
            <p>
              Robert Davis appears as counsel in Australian State, Territorial and Federal Courts and the High Court of Australia. His main areas of practice include:
            </p>
          }
        />

          <div className="clear"></div>

        <div className="column left">

        <ul className="icons">
          <IconList
            Image="/img/icon-medical.svg"
            Title="Legal, Medical & Financial Professional Negligence Litigation"
            Content="Professionals have special skill, knowledge and training in areas that are in the public interest. They are usually subject to strict moral and ethical codes of practice imposed by associations to which they must belong. Sometimes professional services do not attain the minimum standards of care expected from a reasonable member of that profession, which can result in financial loss, personal injury, or even death. Robert has expertise in this specialist area of law."
          />

          <IconList
            Image="/img/icon-safety.svg"
            Title="Motor Vehicle, Workplace, Defective Products & Premises Liability"
            Content="Everyone is required to exercise reasonable care for the safety of others who are foreseeably affected by our activities. This general duty of care underpins public safety in all aspects of daily life. Robert has conducted a large number of these cases over his career and has contributed towards the academic literature this area of the law."
          />

          <IconList
            Image="/img/icon-trade.svg"
            Title="Trade Practices & Consumer Litigation"
            Content="Phasellus vitae velit lorem. Quisque viverra purus sit amet tellus posuere egestas. Nullam eleifend sem scelerisque purus cursus accumsan."
          />

          <IconList
            Image="/img/icon-super.svg"
            Title="Commonwealth Superannuation Litigation"
            Content="Phasellus vitae velit lorem. Quisque viverra purus sit amet tellus posuere egestas. Nullam eleifend sem scelerisque purus cursus accumsan."
          />
        </ul>
      </div>

      <div className="column right">
          <ul className="icons">
            <IconList
              Image="/img/icon-aviation.svg"
              Title="Civil Aviation Litigation"
              Content="Aircraft travel is one of the safest modes of transport but when incidents occur they are often serious, even catastrophic. Accidents during air operations raise a number of complex areas of law. Air accidents can involve litigation against air carriers under the Australian and International Civil Aviation (Carriers Liability) regime or claims against third parties (both in Australia and internationally) such as employers, manufacturers, and others. Robert has conducted a number of these cases over his career and has presented to other lawyers on this specialist topic."
            />

            <IconList
              Image="/img/icon-scuba.svg"
              Title="Scuba Diving Litigation"
              Content="Phasellus vitae velit lorem. Quisque viverra purus sit amet tellus posuere egestas. Nullam eleifend sem scelerisque purus cursus accumsan."
            />

            <IconList
              Image="/img/icon-inquests.svg"
              Title="Inquests and Commissions of Inquiry"
              Content="Phasellus vitae velit lorem. Quisque viverra purus sit amet tellus posuere egestas. Nullam eleifend sem scelerisque purus cursus accumsan."
            />

            <IconList
              Image="/img/icon-ethical.svg"
              Title="Professional & Ethical Standards Disciplinary Proceedings"
              Content="Phasellus vitae velit lorem. Quisque viverra purus sit amet tellus posuere egestas. Nullam eleifend sem scelerisque purus cursus accumsan."
            />
          </ul>
        </div>

      </div>

      <div className="clear"></div>

    </div>

    <More />

    <FooterHero
      Image="/img/footer-areas.jpg"
    />

  </div>
)

export default AreasPage
