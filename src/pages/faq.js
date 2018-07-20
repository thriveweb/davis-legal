import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Hero from '../components/Hero'
import LargeTitle from '../components/LargeTitle'
import LeftColumn from '../components/LeftColumn'
import RightColumn from '../components/RightColumn'
import Accordion from '../components/Accordion'
import More from '../components/More'

const FAQPage = () => (
  <div>
    <Helmet>
      <title lang="en">FAQ | Davis Legal</title>
    </Helmet>

    <Hero image="/img/hero-faq.jpg" />

    <div className="section">
      <LargeTitle
        smallTitle="frequently asked questions"
        title="all you need to know"
        largeTitle="FAQ"
        marginTop={true}
      />

      <div className="small content">
        <LeftColumn
          content={
            <div>
              <p>
                Robert accepts briefs to appear in courts all Australian states
                and territories. He accepts briefs both paper and electronic
                format. Electronic briefs may be delivered either by email or on
                USB or other media via his PO Box. PDF format is preferred.
                Paper briefs are to be addressed to his Post Office box. Please
                allow appropriate time for delivery of all hard-copy mail
                communications.
              </p>
              <p>
                Robert will confer with clients in the offices of their
                solicitor and when he works interstate does so on a
                fly-in-fly-out basis. Robert only accepts briefs for clients via
                their solicitor.
              </p>
            </div>
          }
        />

        <RightColumn
          content={
            <div>
              <p>
                He does not accept briefs direct from the public. This is
                because pre-trial litigation work is complex, labour intensive,
                and requires the the attention of an experienced solicitor. No
                work will be commenced by Robert (unless urgent) until
                appropriate agreement is reached about the terms of his
                retainer. Cost estimates are available upon request.
              </p>
              <p>
                In appropriate cases Robert is willing work on a deferred or
                conditional basis. It is often necessary to review the brief
                before any cost estimate can be made. In large, complex or
                urgent matters he may require some payment for perusal of the
                brief before considering alternate cost arrangements. Before
                sending a brief you should phone Robert to discuss the matter
                and confirm his availability.
              </p>
            </div>
          }
        />

        <div className="clear" />

        <Accordion
          accordionFields={[
            {
              title: 'What is a barrister?',
              content: (
                <div>
                  <p>
                    It is often necessary to review the brief before any cost
                    estimate can be made. In appropriate cases Robert is willing
                    work on a deferred or conditional basis. In large, complex
                    or urgent matters he may require some payment for perusal of
                    the brief before considering alternate cost arrangements.
                    Before sending a brief you should phone Robert to discuss
                    the matter and confirm his availability.
                  </p>
                </div>
              ),
            },

            {
              title: 'How does a barrister differ from a solicitor?',
              content: (
                <div>
                  <p>
                    Solicitors and barristers are both legal professionals who
                    are permitted to appear in courts. Most solicitors spend
                    their careers performing transactional work for clients,
                    such as property transfers, drawing wills, preparing
                    contracts, etc.
                  </p>
                  <p>
                    Litigation solicitors mostly prepare cases and then brief a
                    barrister to appear at court on their client's behalf.
                    Solicitors also brief barristers to advise their clients on
                    specialist areas of legal knowledge. Solicitors often work
                    in law firms and may choose to only represent special
                    categories of client.{' '}
                  </p>
                  <p>
                    In contrast, barristers are required to work only as sole
                    traders and are ethically bound (subject to agreement being
                    reached as to their costs) to accept briefs on behalf of any
                    client.
                  </p>
                </div>
              ),
            },

            {
              title: 'How do barristers charge?',
              content: (
                <div>
                  <p>
                    Barristers costs will vary depending on the nature of the
                    work required, their special expertise, and their seniority.
                    Barristers charge costs that are either based on the time
                    spent or, on occasion, a fixed cost on brief.
                  </p>
                  <p>
                    Barristers are required to disclose their costs before
                    commencing work. If urgent work is required before a cost
                    disclosure can be made, then the barrister must make a
                    disclosure at the earliest opportunity. A barrister is
                    (usually) not to perform any work for a client unless a cost
                    agreement has first been reached.
                  </p>
                  <p>
                    Barristers are sometimes willing to work on a deferred
                    payment basis. Other barristers may be willing to work on a
                    conditional basis - that is - where payment depends wholly
                    or partly upon success in the case.
                  </p>
                </div>
              ),
            },

            {
              title: 'Do I also need a solicitor?',
              content: (
                <div>
                  <p>
                    Some barristers are willing to accept direct briefs from the
                    public. This usually occurs with barristers conducting
                    criminal work in lower courts. Many (probably most)
                    barristers will only accept client briefs via a solicitor's
                    firm. Litigation work is often very complex and labour
                    intensive. Barristers must work as sole traders so they lack
                    the human and other resources that a solicitors firm can
                    devote to pre-trial paperwork. Robert only accepts briefs
                    via a solicitor.
                  </p>
                </div>
              ),
            },

            {
              title: 'How do I employ a barrister?',
              content: (
                <div>
                  <p>
                    If you are a member of the public and wish to directly
                    engage a barrister then you should phone around to find
                    someone who is suitable. If you already have a solicitor
                    then he or she will advise you about which barristers are
                    best suited to your circumstances. You can carry out your
                    own research into the barristers suggested, but your
                    solicitor is often the best source of information in this
                    regard.
                  </p>
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>

    <More />

    <Hero image="/img/footer-faq.jpg" footer={true} />
  </div>
)

export default FAQPage
