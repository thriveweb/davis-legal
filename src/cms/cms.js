import React from 'react'
import CMS from 'netlify-cms'
import './cms-utils'

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
