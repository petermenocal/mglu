import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import _get from 'lodash/get'
import _format from 'date-fns/format'
import Link from 'gatsby-link'
import { ChevronLeft } from 'react-feather'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import Content from '../components/Content'
import Image from '../components/Image'
import './SinglePost.css'

export const CVBPostTemplate = ({
  title,
  date,
  featuredImage,
  body,
  nextPostURL,
  prevPostURL,
  cvbInfo,
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
        </div>

        <div className="SinglePost--InfoPanel">
          <iframe
            className="SinglePost--InfoPanel--Half"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDFNHiqNqTY71ndy21IcODVX2MikRJZWmg&q=${
              cvbInfo.address
            }`}
            allowfullscreen="allowfullscreen"
            style={{ border: `0px none` }}
            frameborder="0"
            width="100%"
            height="auto"
          />
          <div className="SinglePost--InfoPanel--Half">
            <h6>Address</h6>
            {cvbInfo.address & <p>{cvbInfo.address}</p>}
            <h6>Phone</h6>
            {cvbInfo.phone && <p>{cvbInfo.phone}</p>}
            <h6>Hotel inventory</h6>
            {cvbInfo.hotelInventory && <p>{cvbInfo.hotelInventory}</p>}
            <h6>Convention center</h6>
            {cvbInfo.conventionCenter && <p>{cvbInfo.conventionCenter}</p>}
          </div>
        </div>

        <section
          className="SinglePost--InnerContent"
          style={{ background: `white`, color: `black` }}
        >
          <div className="container" style={{ display: `flex` }}>
            <div style={{ width: `50%` }}>
              <h1 className="primary">CVB Updates</h1>
              <Content source={body} />
            </div>
            <div style={{ width: `50%` }}>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName={cvbInfo.twitter}
                options={{ height: 900 }}
              />
            </div>
          </div>
        </section>

        {body && (
          <section className="SinglePost--InnerContent">
            <h1 className="taCenter accent">Sales Staff</h1>
            <div className="container SinglePost--CVB--SalesStaff">
              <div>
                <h3 style={{ marginBottom: `0` }}>Portia Conerly</h3>
                <p style={{ marginBottom: `0`, color: `whitesmoke` }}>
                  Meetings and Conventions Manager
                </p>
                <small style={{ marginRight: `3rem` }}>
                  pconerly@arlingtonva.us
                </small>
                <small>703-228-0873</small>
              </div>
              <div>
                <h3 style={{ marginBottom: `0` }}>Portia Conerly</h3>
                <p style={{ marginBottom: `0`, color: `whitesmoke` }}>
                  Meetings and Conventions Manager
                </p>
                <small style={{ marginRight: `3rem` }}>
                  pconerly@arlingtonva.us
                </small>
                <small>703-228-0873</small>
              </div>
              <div>
                <h3 style={{ marginBottom: `0` }}>Portia Conerly</h3>
                <p style={{ marginBottom: `0`, color: `whitesmoke` }}>
                  Meetings and Conventions Manager
                </p>
                <small style={{ marginRight: `3rem` }}>
                  pconerly@arlingtonva.us
                </small>
                <small>703-228-0873</small>
              </div>
            </div>
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
const CVBPost = ({ data, pathContext }) => {
  const { post, allPosts } = data
  const thisEdge = allPosts.edges.find(edge => edge.node.id === post.id)
  return (
    <CVBPostTemplate
      {...post}
      {...post.frontmatter}
      body={post.html}
      nextPostURL={_get(thisEdge, 'next.fields.slug')}
      prevPostURL={_get(thisEdge, 'previous.fields.slug')}
    />
  )
}

export default CVBPost

export const pageQuery = graphql`
  ## Query for SinglePost data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query CVBPost($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      html
      id
      frontmatter {
        title
        template
        subtitle
        cvbInfo {
          address
          airports
          conventionCenter
          hotelInventory
          phone
          twitter
          transporationCosts
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
      filter: { fields: { contentType: { regex: "/^(cvbs)$/" } } }
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
