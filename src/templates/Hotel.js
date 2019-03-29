import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import _get from 'lodash/get'
import _format from 'date-fns/format'
import Link from 'gatsby-link'
import { ChevronLeft } from 'react-feather'
import { Flex, Box, Heading, Text } from 'rebass'
import Content from '../components/Content'
import Image from '../components/Image'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import { Heart, Star, Frown } from 'react-feather'
import HotelFact from '../components/HotelFact'

import './SinglePost.css'

const EventItem = props => (
  <Flex flexDirection="row" flexWrap="wrap">
    <Flex alignItems="center" justifyContent="center" width={[1, 1 / 3]} pr={3}>
      <img
        src="//placehold.it/300x300"
        width="100%"
        style={{ borderRadius: `50%` }}
      />
    </Flex>
    <Box width={[1, 2 / 3]}>
      <Heading color="orange">Event Name</Heading>
      <Heading fontSize={1} fontWeight={2} mb={2}>
        12/12/2008
      </Heading>
      <Text fontSize={1}>
        Quam dis ad venenatis mollis penatibus aenean aliquet vulputate
        pellentesque, taciti felis nam etiam luctus semper leo natoque finibus,
        maecenas proin sapien lacinia sit condimentum.
      </Text>
    </Box>
  </Flex>
)

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
        <Flex flexWrap="wrap" bg="rebeccapurple" color="white" p={2}>
          <Box width={[1, 1, 1 / 2]}>
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
                <h1
                  className="SinglePost--Title"
                  itemProp="title"
                  style={{ textAlign: `left` }}
                >
                  {title}
                </h1>
              )}
            </div>
          </Box>

          <Box width={[1, 1, 1 / 2]}>
            <div>
              <div className="SinglePost--Meta">
                <span className="SinglePost--Meta--Category">Address</span>
              </div>
              {hotelInfo.address && (
                <h1 className="SinglePost--Title" style={{ textAlign: `left` }}>
                  {hotelInfo.address}
                </h1>
              )}
            </div>
          </Box>
        </Flex>
        <Flex
          bg="black"
          color="white"
          p={3}
          flexWrap="wrap"
          flexDirection="row"
        >
          <Box width={[1, 1, 2 / 3]}>
            <Flex flexDirection="row" flexWrap="wrap">
              <Box p={3}>
                <img src="//placehold.it/200x200" />
              </Box>
              <Box p={3}>
                <img src="//placehold.it/200x200" />
              </Box>
              <Box p={3}>
                <img src="//placehold.it/200x200" />
              </Box>
              <Box p={3}>
                <img src="//placehold.it/200x200" />
              </Box>
              <Box p={3}>
                <img src="//placehold.it/200x200" />
              </Box>
              <Box p={3}>
                <img src="//placehold.it/200x200" />
              </Box>
            </Flex>
          </Box>
          <Box
            width={[1, 1, 1 / 3]}
            style={{ maxHeight: 500, overflow: `scroll` }}
          >
            <HotelFact
              title="Director of Sales"
              value={hotelInfo.direcotSales}
            />
            <HotelFact
              title="Director of Catering"
              value={hotelInfo.directorCatering}
            />
            <HotelFact title="Twitter" value={hotelInfo.twitter} />
            <HotelFact
              title="Sleeping Rooms"
              value={hotelInfo.numberOfSleepingRooms}
            />
            <HotelFact title="Rooms Tax" value={hotelInfo.roomsTaxPercent} />
            <HotelFact title="Resort Fee" value={hotelInfo.resortFee} />
            <HotelFact
              title="Wifi (Guestroom)"
              value={hotelInfo.publicWifiFee}
            />
            <HotelFact
              title="Self Parking Fee"
              value={hotelInfo.parkingFeeSelf}
            />
            <HotelFact
              title="Valet Parking Fee"
              value={hotelInfo.parkingFeeValet}
            />
            <HotelFact
              title="Total Meeting Space"
              value={hotelInfo.meetingRoomsAmount}
            />
            <HotelFact
              title="Total Meeting Space"
              value={hotelInfo.meetingRoomsAmount}
            />
            <HotelFact
              title="Largest Room (1)"
              value={hotelInfo.largestRoom1}
            />
            <HotelFact
              title="Largest Room (2)"
              value={hotelInfo.largestRoom2}
            />
            <HotelFact
              title="Number of Meeting Rooms"
              value={hotelInfo.meetingRoomsAmount}
            />
            <HotelFact
              title="Public Space Wifi"
              value={hotelInfo.publicWifiFee}
            />
            <HotelFact
              title="Public Space Wifi"
              value={hotelInfo.publicWifiFee}
            />
            <HotelFact title="Sales Tax" value={hotelInfo.salesTax} />
            <HotelFact
              title="Service Charge"
              value={hotelInfo.serviceChargePercent}
            />
            <HotelFact title="Hotel Rating" value={hotelInfo.diamonds} />
            <HotelFact
              title="Loyalty Program"
              value={hotelInfo.loyaltyProgramName}
            />
            <HotelFact
              title="Closest Airport"
              value={hotelInfo.closestAirport}
            />
            <HotelFact title="Fitness Center" value={hotelInfo.fitnessCenter} />
            <HotelFact title="Pool" value={hotelInfo.hasPool} />
            <HotelFact title="Spa" value={hotelInfo.hasSpa} />
          </Box>
        </Flex>

        <Flex bg="white" p={3}>
          <Box>
            <Heading textAlign="center">Pro Tips</Heading>
            <Flex flexDirection="row" flexWrap="wrap">
              <Box width={[1, 1, 1 / 2]}>
                <Flex
                  alignItems="center"
                  pb={2}
                  mb={2}
                  style={{ borderBottom: `1px solid rgba(0, 0, 0, 0.3)` }}
                >
                  <Text pr={2}>Rating category:</Text>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </Flex>
                <Flex
                  alignItems="center"
                  pb={2}
                  mb={2}
                  style={{ borderBottom: `1px solid rgba(0, 0, 0, 0.3)` }}
                >
                  <Text pr={2}>Rating category:</Text>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </Flex>
                <Flex
                  alignItems="center"
                  pb={2}
                  mb={2}
                  style={{ borderBottom: `1px solid rgba(0, 0, 0, 0.3)` }}
                >
                  <Text pr={2}>Rating category:</Text>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </Flex>
                <Flex
                  alignItems="center"
                  pb={2}
                  mb={2}
                  style={{ borderBottom: `1px solid rgba(0, 0, 0, 0.3)` }}
                >
                  <Text pr={2}>Rating category:</Text>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </Flex>
                <Flex
                  alignItems="center"
                  pb={2}
                  mb={2}
                  style={{ borderBottom: `1px solid rgba(0, 0, 0, 0.3)` }}
                >
                  <Text pr={2}>Rating category:</Text>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </Flex>
              </Box>
              <Box width={[1, 1, 1 / 2]} p={3}>
                <Text>
                  "Diam adipiscing sed eget curae suspendisse leo velit eleifend
                  fermentum, platea suscipit per nulla habitasse neque
                  sollicitudin habitant orci sapien, potenti a placerat nascetur
                  vivamus netus ullamcorper blandit." <br /> - by user 59291
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>

        {body && (
          <section className="SinglePost--InnerContent">
            <div className="container">
              <Content source={body} />
            </div>
          </section>
        )}

        <div className="SinglePost--Events">
          <Flex>
            <Box width={[1, 1, 1 / 3]}>
              {hotelInfo.twitter && (
                <Flex
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                  pt={4}
                >
                  <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName={hotelInfo.twitter}
                    options={{ height: 850 }}
                  />
                </Flex>
              )}
            </Box>
            <Box width={[1, 2 / 3]} pl={3}>
              <Flex flexDirection="column">
                {title && (
                  <Heading fontSize={3} textAlign="center" color="orange">
                    Events nearby
                  </Heading>
                )}
                <Box width={1}>
                  <img src="//placehold.it/500x200" width="100%" />
                  <h1>Event Name</h1>
                  <p>
                    Quam dis ad venenatis mollis penatibus aenean aliquet
                    vulputate pellentesque, taciti felis nam etiam luctus semper
                    leo natoque finibus, maecenas proin sapien lacinia sit
                    condimentum dictumst.
                  </p>
                </Box>
                <EventItem />
                <EventItem />
                <EventItem />
              </Flex>
            </Box>
          </Flex>
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
