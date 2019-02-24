import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import _get from 'lodash/get'
import _format from 'date-fns/format'
import Link from 'gatsby-link'
import { ChevronLeft } from 'react-feather'

import Content from '../components/Content'
import Image from '../components/Image'
import './SinglePost.css'

export const SinglePostTemplate = ({
  title,
  date,
  featuredImage,
  body,
  nextPostURL,
  prevPostURL,
  hotelInfo,
  categories = []
}) => (
  <article
    className="SinglePost section light"
    itemScope
    itemType="http://schema.org/BlogPosting"
  >
    <Helmet>
      <title>{title}</title>
    </Helmet>

    {featuredImage && (
      <Image
        background
        className="SinglePost--BackgroundImage"
        src={featuredImage}
        alt={title}
      />
    )}

    <div className="container">
      <Link className="SinglePost--BackButton" to="/blog/">
        <ChevronLeft /> BACK
      </Link>
      <div className="SinglePost--Content relative">
        <div className="SinglePost--TitleBar">
          <div className="SinglePost--TitleBar--Title">
            <div className="SinglePost--Meta">
              {categories && (
                <Fragment>
                  {categories.map((cat, index) => (
                    <span
                      key={cat.category}
                      className="SinglePost--Meta--Category"
                    >
                      {cat.category}
                      {/* Add a comma on all but last category */}
                      {index !== categories.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </Fragment>
              )}
            </div>
            {title && (
              <h1 className="SinglePost--Title" itemProp="title">
                {title}
              </h1>
            )}
          </div>
          <div className="SinglePost--Title--Address">
            <div className="SinglePost--Meta">
              <span className="SinglePost--Meta--Category">Address</span>
            </div>
            {hotelInfo.address && (
              <h1 className="SinglePost--Title">{hotelInfo.address}</h1>
            )}
          </div>
        </div>

        <div className="SinglePost--InfoPanel">
          <div className="SinglePost--InfoPanel--Gallery">
            <h1>Gallery</h1>
            <img src="//placehold.it/250x250" alt="" />
            <img src="//placehold.it/250x250" alt="" />
            <img src="//placehold.it/250x250" alt="" />
            <img src="//placehold.it/250x250" alt="" />
          </div>
          <div className="SinglePost--InfoPanel--Facts">
            <h1>Quick Facts</h1>
            <div>
              <h3 className="SinglePost--InfoPanel--Facts--FactTitle">yo</h3>
              <p />
            </div>
          </div>
          <div>Twitter</div>
        </div>

        <div className="SinglePost--Pagination">
          {prevPostURL && (
            <Link
              className="SinglePost--Pagination--Link prev"
              to={prevPostURL}
            >
              Previous
            </Link>
          )}
          {nextPostURL && (
            <Link
              className="SinglePost--Pagination--Link next"
              to={nextPostURL}
            >
              Next
            </Link>
          )}
        </div>
      </div>
    </div>
  </article>
)

// Export Default SinglePost for front-end
const Hotel = ({ data, pathContext }) => {
  const { post, allPosts } = data
  const thisEdge = allPosts.edges.find(edge => edge.node.id === post.id)
  return (
    <SinglePostTemplate
      {...post}
      {...post.frontmatter}
      body={post.html}
      nextPostURL={_get(thisEdge, 'next.fields.slug')}
      prevPostURL={_get(thisEdge, 'previous.fields.slug')}
    />
  )
}

export default Hotel

export const HotelQuery = graphql`
  ## Query for SinglePost data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HotelQuery($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      html
      id
      frontmatter {
        title
        template
        subtitle
        hotelInfo {
          address
          city
          closestAirport
          cvbMember
          diamonds
          direcotSales
          fitnessCenter
          generalEmail
          largestRoom1
          largestRoom2
          loyaltyProgramName
          meetingRoomsAmount
          parkingFeeSelf
          parkingFeeValet
          hasPool
          hasPoolIndoors
          hasSpa
          publicWifiFee
          resortFee
          roomsTaxPercent
          salesEmail
          salesTax
          salesTelephone
          serviceChargePercent
          numberOfSleepingRooms
          numberOfSuites
          telephone
          twitter
          website
        }
        categories {
          category
        }
        featuredImage {
          ...FluidImage
        }
      }
    }

    allPosts: allMarkdownRemark(
      filter: { fields: { contentType: { regex: "/^(cvbs|hotels)$/" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
        }
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
