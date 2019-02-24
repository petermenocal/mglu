import React from 'react'
import CMS from 'netlify-cms'
import './cms-utils'

import { HomePageTemplate } from '../templates/HomePage'
import { DefaultPageTemplate } from '../templates/DefaultPage'
import { BlogIndexTemplate } from '../templates/BlogIndex'
import { SinglePostTemplate } from '../templates/SinglePost'
import { CVBTemplate } from '../templates/CVB'
import { HotelTemplate } from '../templates/Hotel'

CMS.registerPreviewStyle('/styles.css')

CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <HomePageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('infoPages', ({ entry }) => (
  <DefaultPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('blog-page', ({ entry }) => (
  <BlogIndexTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('posts', ({ entry }) => (
  <SinglePostTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('hotels', ({ entry }) => (
  <HotelTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('cvbs', ({ entry }) => (
  <CVBTemplate {...entry.toJS().data} />
))
