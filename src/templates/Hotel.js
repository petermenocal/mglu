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
          <div>Facts</div>
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
