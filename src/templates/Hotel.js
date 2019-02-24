import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import _get from 'lodash/get'
import _format from 'date-fns/format'
import Link from 'gatsby-link'
import { ChevronLeft } from 'react-feather'

import Content from '../components/Content'
import Image from '../components/Image'
import './SinglePost.css'

export const HotelPostTemplate = ({
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
          <div>
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

          <div>
            <div className="SinglePost--Meta">
              <span className="SinglePost--Meta--Category">Address</span>
            </div>
            {hotelInfo.address && (
              <h1 className="SinglePost--Title">{hotelInfo.address}</h1>
            )}
          </div>
        </div>

        <div className="SinglePost--InfoPanel">
          <div>Gallery</div>
          <div>
            Facts
            <div className="SinglePost--InfoPanel--Fact">
              {hotelInfo.direcotSales && (
                <Fragment>
                  <h4 className="SinglePost--InfoPanel--Fact--Content">
                    {hotelInfo.direcotSales}
                  </h4>
                  <p className="SinglePost--InfoPanel--Fact--Title">
                    Director of Sales
                  </p>
                </Fragment>
              )}
            </div>
            <div className="SinglePost--InfoPanel--Fact">
              {hotelInfo.directorCatering && (
                <Fragment>
                  <h4 className="SinglePost--InfoPanel--Fact--Content">
                    {hotelInfo.directorCatering}
                  </h4>
                  <p className="SinglePost--InfoPanel--Fact--Title">
                    Director of Catering
                  </p>
                </Fragment>
              )}
            </div>
            <div className="SinglePost--InfoPanel--Fact">
              {hotelInfo.fitnessCenter && (
                <Fragment>
                  <h4 className="SinglePost--InfoPanel--Fact--Content">
                    {hotelInfo.fitnessCenter}
                  </h4>
                  <p className="SinglePost--InfoPanel--Fact--Title">
                    Fitness center
                  </p>
                </Fragment>
              )}
            </div>
            <div className="SinglePost--InfoPanel--Fact">
              {hotelInfo.generalEmail && (
                <Fragment>
                  <h4 className="SinglePost--InfoPanel--Fact--Content">
                    {hotelInfo.generalEmail}
                  </h4>
                  <p className="SinglePost--InfoPanel--Fact--Title">
                    General email
                  </p>
                </Fragment>
              )}
            </div>
            <div className="SinglePost--InfoPanel--Fact">
              {hotelInfo.hasPool && (
                <Fragment>
                  <h4 className="SinglePost--InfoPanel--Fact--Content">
                    {hotelInfo.hasPool}
                  </h4>
                  <p className="SinglePost--InfoPanel--Fact--Title">Pool</p>
                </Fragment>
              )}
            </div>
            <div className="SinglePost--InfoPanel--Fact">
              {hotelInfo.hasPoolIndoors && (
                <Fragment>
                  <h4 className="SinglePost--InfoPanel--Fact--Content">
                    {hotelInfo.hasPoolIndoors}
                  </h4>
                  <p className="SinglePost--InfoPanel--Fact--Title">
                    Pool indoors?
                  </p>
                </Fragment>
              )}
            </div>
            <div className="SinglePost--InfoPanel--Fact">
              {hotelInfo.hasSpa && (
                <Fragment>
                  <h4 className="SinglePost--InfoPanel--Fact--Content">
                    {hotelInfo.hasSpa}
                  </h4>
                  <p className="SinglePost--InfoPanel--Fact--Title">Spa?</p>
                </Fragment>
              )}
            </div>
            <div className="SinglePost--InfoPanel--Fact">
              {hotelInfo.largestRoom1 && (
                <Fragment>
                  <h4 className="SinglePost--InfoPanel--Fact--Content">
                    {hotelInfo.largestRoom1}
                  </h4>
                  <p className="SinglePost--InfoPanel--Fact--Title">
                    Largest room (sqft)
                  </p>
                </Fragment>
              )}
            </div>
            <div className="SinglePost--InfoPanel--Fact">
              {hotelInfo.largestRoom2 && (
                <Fragment>
                  <h4 className="SinglePost--InfoPanel--Fact--Content">
                    {hotelInfo.largestRoom2}
                  </h4>
                  <p className="SinglePost--InfoPanel--Fact--Title">
                    Second largest room (sqft)
                  </p>
                </Fragment>
              )}
            </div>
            <div className="SinglePost--InfoPanel--Fact">
              {hotelInfo.loyaltyProgramName && (
                <Fragment>
                  <h4 className="SinglePost--InfoPanel--Fact--Content">
                    {hotelInfo.loyaltyProgramName}
                  </h4>
                  <p className="SinglePost--InfoPanel--Fact--Title">
                    Loyalty Program Name
                  </p>
                </Fragment>
              )}
            </div>
            <div className="SinglePost--InfoPanel--Fact">
              {hotelInfo.meetingRoomsAmount && (
                <Fragment>
                  <h4 className="SinglePost--InfoPanel--Fact--Content">
                    {hotelInfo.meetingRoomsAmount}
                  </h4>
                  <p className="SinglePost--InfoPanel--Fact--Title">
                    Number of meeting rooms
                  </p>
                </Fragment>
              )}
            </div>
            <div className="SinglePost--InfoPanel--Fact">
              {hotelInfo.numberOfSleepingRooms && (
                <Fragment>
                  <h4 className="SinglePost--InfoPanel--Fact--Content">
                    {hotelInfo.numberOfSleepingRooms}
                  </h4>
                  <p className="SinglePost--InfoPanel--Fact--Title">
                    Number of sleeping rooms
                  </p>
                </Fragment>
              )}
            </div>
            <div className="SinglePost--InfoPanel--Fact">
              {hotelInfo.numberOfSuites && (
                <Fragment>
                  <h4 className="SinglePost--InfoPanel--Fact--Content">
                    {hotelInfo.numberOfSuites}
                  </h4>
                  <p className="SinglePost--InfoPanel--Fact--Title">
                    Number of suites
                  </p>
                </Fragment>
              )}
            </div>
            <div className="SinglePost--InfoPanel--Fact">
              {hotelInfo.parkingFeeSelf && (
                <Fragment>
                  <h4 className="SinglePost--InfoPanel--Fact--Content">
                    {hotelInfo.parkingFeeSelf}
                  </h4>
                  <p className="SinglePost--InfoPanel--Fact--Title">
                    Self parking fee
                  </p>
                </Fragment>
              )}
            </div>
            <div className="SinglePost--InfoPanel--Fact">
              {hotelInfo.parkingFeeValet && (
                <Fragment>
                  <h4 className="SinglePost--InfoPanel--Fact--Content">
                    {hotelInfo.parkingFeeValet}
                  </h4>
                  <p className="SinglePost--InfoPanel--Fact--Title">
                    Valet parking fee
                  </p>
                </Fragment>
              )}
            </div>
            <div className="SinglePost--InfoPanel--Fact">
              {hotelInfo.publicWifiFee && (
                <Fragment>
                  <h4 className="SinglePost--InfoPanel--Fact--Content">
                    {hotelInfo.publicWifiFee}
                  </h4>
                  <p className="SinglePost--InfoPanel--Fact--Title">
                    Public wifi fee
                  </p>
                </Fragment>
              )}
            </div>
            <div className="SinglePost--InfoPanel--Fact">
              {hotelInfo.resortFee && (
                <Fragment>
                  <h4 className="SinglePost--InfoPanel--Fact--Content">
                    ${hotelInfo.resortFee}
                  </h4>
                  <p className="SinglePost--InfoPanel--Fact--Title">
                    Resort fee
                  </p>
                </Fragment>
              )}
            </div>
            <div className="SinglePost--InfoPanel--Fact">
              {hotelInfo.roomsTaxPercent && (
                <Fragment>
                  <h4 className="SinglePost--InfoPanel--Fact--Content">
                    {hotelInfo.roomsTaxPercent}%
                  </h4>
                  <p className="SinglePost--InfoPanel--Fact--Title">
                    Rooms tax
                  </p>
                </Fragment>
              )}
            </div>
            <div className="SinglePost--InfoPanel--Fact">
              {hotelInfo.salesEmail && (
                <Fragment>
                  <h4 className="SinglePost--InfoPanel--Fact--Content">
                    {hotelInfo.salesEmail}
                  </h4>
                  <p className="SinglePost--InfoPanel--Fact--Title">
                    Sales email
                  </p>
                </Fragment>
              )}
            </div>
            <div className="SinglePost--InfoPanel--Fact">
              {hotelInfo.salesTelephone && (
                <Fragment>
                  <h4 className="SinglePost--InfoPanel--Fact--Content">
                    {hotelInfo.salesTelephone}
                  </h4>
                  <p className="SinglePost--InfoPanel--Fact--Title">
                    Sales telephone
                  </p>
                </Fragment>
              )}
            </div>
            <div className="SinglePost--InfoPanel--Fact">
              {hotelInfo.serviceChargePercent && (
                <Fragment>
                  <h4 className="SinglePost--InfoPanel--Fact--Content">
                    {hotelInfo.serviceChargePercent}%
                  </h4>
                  <p className="SinglePost--InfoPanel--Fact--Title">
                    Service charge percent
                  </p>
                </Fragment>
              )}
            </div>
            <div className="SinglePost--InfoPanel--Fact">
              {hotelInfo.telephone && (
                <Fragment>
                  <h4 className="SinglePost--InfoPanel--Fact--Content">
                    {hotelInfo.telephone}
                  </h4>
                  <p className="SinglePost--InfoPanel--Fact--Title">
                    Main telephone
                  </p>
                </Fragment>
              )}
            </div>
            <div className="SinglePost--InfoPanel--Fact">
              {hotelInfo.twitter && (
                <Fragment>
                  <h4 className="SinglePost--InfoPanel--Fact--Content">
                    {hotelInfo.twitter}
                  </h4>
                  <p className="SinglePost--InfoPanel--Fact--Title">twitter</p>
                </Fragment>
              )}
            </div>
            <div className="SinglePost--InfoPanel--Fact">
              {hotelInfo.website && (
                <Fragment>
                  <h4 className="SinglePost--InfoPanel--Fact--Content">
                    {hotelInfo.wesbite}
                  </h4>
                  <p className="SinglePost--InfoPanel--Fact--Title">Website</p>
                </Fragment>
              )}
            </div>
          </div>
          <div>Twitter</div>
        </div>

        {body && (
          <section className="SinglePost--InnerContent">
            <div className="container">
              <Content source={body} />
            </div>
          </section>
        )}

        <div className="SinglePost--Events">
          {title && (
            <h1 className="SinglePost--Title" itemProp="title">
              Events near {title}
            </h1>
          )}
          <div className="SinglePost--Events--Event">
            <img src="//placehold.it/200x200" />
            <div>
              <h1>Event Name</h1>
              <p>
                Quam dis ad venenatis mollis penatibus aenean aliquet vulputate
                pellentesque, taciti felis nam etiam luctus semper leo natoque
                finibus, maecenas proin sapien lacinia sit condimentum dictumst
                sodales.
              </p>
            </div>
          </div>
          <div className="SinglePost--Events--Event">
            <img src="//placehold.it/200x200" />
            <div>
              <h1>Event Name</h1>
              <p>
                Quam dis ad venenatis mollis penatibus aenean aliquet vulputate
                pellentesque, taciti felis nam etiam luctus semper leo natoque
                finibus, maecenas proin sapien lacinia sit condimentum dictumst
                sodales.
              </p>
            </div>
          </div>
          <div className="SinglePost--Events--Event">
            <img src="//placehold.it/200x200" />
            <div>
              <h1>Event Name</h1>
              <p>
                Quam dis ad venenatis mollis penatibus aenean aliquet vulputate
                pellentesque, taciti felis nam etiam luctus semper leo natoque
                finibus, maecenas proin sapien lacinia sit condimentum dictumst
                sodales.
              </p>
            </div>
          </div>
        </div>

        {hotelInfo.address && (
          <section className="SinglePost--SideBySide">
            <div>
              <img
                src={`https://maps.googleapis.com/maps/api/streetview?size=1000x500&location=${
                  hotelInfo.address
                }+${hotelInfo.city}+${
                  hotelInfo.state
                }&key=AIzaSyDFNHiqNqTY71ndy21IcODVX2MikRJZWmg`}
                width="100%"
                height="auto"
              />
            </div>
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDFNHiqNqTY71ndy21IcODVX2MikRJZWmg&q=${
                hotelInfo.address
              }+${hotelInfo.city}+${hotelInfo.state}`}
              allowfullscreen="allowfullscreen"
              style={{ border: `0px none` }}
              frameborder="0"
            />
          </section>
        )}

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
const HotelPost = ({ data, pathContext }) => {
  const { post, allPosts } = data
  const thisEdge = allPosts.edges.find(edge => edge.node.id === post.id)
  return (
    <HotelPostTemplate
      {...post}
      {...post.frontmatter}
      body={post.html}
      nextPostURL={_get(thisEdge, 'next.fields.slug')}
      prevPostURL={_get(thisEdge, 'previous.fields.slug')}
    />
  )
}

export default HotelPost

export const pageQuery = graphql`
  ## Query for SinglePost data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HotelPost($id: String!) {
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
          directorCatering
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
          zip
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
      filter: { fields: { contentType: { regex: "/^(hotels)$/" } } }
      sort: { order: DESC, fields: [frontmatter___title] }
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
