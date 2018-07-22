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
      <title lang="en">Practice Areas</title>
    </Helmet>

    <Hero image="/images/uploads/hero-areas.jpg" />

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
              Robert Davis appears as counsel in Australian State, Territorial
              and Federal Courts and the High Court of Australia. His main areas
              of practice include:
            </p>
          }
        />

        <div className="clear" />

        <div className="column left">
          <ul className="icons">
            <IconList
              image="/images/icon-medical.svg"
              title="Legal, Medical & Financial Professional Negligence Litigation"
              content="Actions against professionals often involves special legal knowledge and complex factual circumstances. Robert has considerable experience in this specialist area of the law and regularly represents clients in actions involving legal, medical, financial and other types of professional negligence."
            />

            <IconList
              image="/images/icon-safety.svg"
              title="Motor Vehicle, Workplace, Defective Products & Premises Liability"
              content="Ongoing legislative changes continue to make these areas of practice very complex for both clients and their lawyers. Over more than three decades Robert has conducted a large number of these claims in Queensland, New South Wales and the ACT."
            />

            <IconList
              image="/images/icon-trade.svg"
              title="Trade Practices & Consumer Litigation"
              content="Consumer litigation, including defective product liability law, is a specialist area of legal knowledge. Robert has undertaken post graduate studies in defective product liability, has published in and presented papers on this topic, and has conducted many claims under the Consumer Law."
            />

            <IconList
              image="/images/icon-super.svg"
              title="Commonwealth Superannuation Litigation"
              content="Robert has represented a large number of former employees of Commonwealth Departments and Authorities who have lost superannuation entitlements due to incorrect advice from their employer. He has appeared in most of the reported cases on this subject, commencing with the seminal decision in Cornwell v Commonwealth of Australia [2007] HCA 16; 229 CLR 519; 81 ALJR 933; 234 ALR 148."
            />
          </ul>
        </div>

        <div className="column right">
          <ul className="icons">
            <IconList
              image="/images/icon-aviation.svg"
              title="Civil Aviation Litigation"
              content="Claims against air carriers involve claims under special legislation or international conventions and must be commenced within two years, often leading to pitfalls for lawyers unfamiliar with this subject.  Robert has a special interest in aviation law, has conducted many claims for passengers injured in aviation accidents throughout Australia, and has lectured to other lawyers on this special topic."
            />

            <IconList
              image="/images/icon-scuba.svg"
              title="Scuba Diving Litigation"
              content="Compressed gas diving operations involves significant risks and sometimes avoidable accidents occur that result injury and even death. These claims require special expertise. Robert has been involved in a number of cases in this area and has both published and presented papers on this subject to legal and medical audiences."
            />

            <IconList
              image="/images/icon-inquests.svg"
              title="Inquests and Commissions of Inquiry"
              content="Robert has represented families in several important inquests into the causes and manner of fatal accidents in Australia. These inquests have included a major passenger bus accident, experimental medical procedures, underwater diving fatalities, police pursuits, recreational activities, and many other diverse incidents. Rob has a special interest in this area of legal practice."
            />

            <IconList
              image="/images/icon-ethical.svg"
              title="Professional & Ethical Standards Disciplinary Proceedings"
              content="Robert has served on ethical and professional standards committees of legal organisations and in that capacity has gained significant experience in investigations into and claims about professional misconduct and unprofessional conduct. Robert occasionally represents lawyers facing complaints about potential breaches of ethical and legal obligations."
            />
          </ul>
        </div>
      </div>

      <div className="clear" />
    </div>

    <More />

    <Hero image="/images/uploads/footer-areas.jpg" footer={true} />
  </div>
)

export default AreasPage
