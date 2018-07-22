import React from 'react'
import CMS from 'netlify-cms'
import './admin.css'

import { HomePageTemplate } from '../templates/HomePage'
import { AboutPageTemplate } from '../templates/AboutPage'
import { AreasPageTemplate } from '../templates/AreasPage'
import { FAQPageTemplate } from '../templates/FAQPage'
import { ContactPageTemplate } from '../templates/ContactPage'

CMS.registerPreviewStyle('/styles.css')

CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <HomePageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('about-page', ({ entry }) => (
  <AboutPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('areas-page', ({ entry }) => (
  <AreasPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('faq-page', ({ entry }) => (
  <FAQPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('contact-page', ({ entry }) => (
  <ContactPageTemplate {...entry.toJS().data} />
))

if (process.env.NETLIFY_SITE_URL && typeof window !== 'undefined') {
  window.localStorage.setItem('netlifySiteURL', process.env.NETLIFY_SITE_URL)
}

// Log netlifySiteURL if editing on localhost
if (
  window.location.hostname === 'localhost' &&
  window.localStorage.getItem('netlifySiteURL')
) {
  console.log(
    `%cnetlifySiteURL: ${window.localStorage.getItem('netlifySiteURL')}`,
    'color: hotpink; font-size: 15px'
  )
}
