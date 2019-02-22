import React from 'react'

import PageHeader from '../components/PageHeader'
import { Box, Flex, Heading, Card, Text } from 'rebass'
import './HomePage.css'

// Export Template for use in CMS preview
export const HomePageTemplate = ({
  title,
  subtitle,
  featuredImage,
  body,
  reviews
}) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <div>Promotions</div>
        <div className="HomePage--InviteAFellowPlanner">
          <div className="HomePage--InviteAFellowPlanner--Heading">
            <h1>Invite a fellow planner</h1>
          </div>
          <div className="HomePage--InviteAFellowPlanner--Input--Container">
            <input
              type="text"
              placeholder="your name"
              className="HomePage--InviteAFellowPlanner--Input"
            />
          </div>
          <div className="HomePage--InviteAFellowPlanner--Input--Container">
            <input
              className="HomePage--InviteAFellowPlanner--Input"
              type="text"
              placeholder="their email"
            />
          </div>
          <div className="HomePage--InviteAFellowPlanner--Input--Container">
            <button className="HomePage--InviteAFellowPlanner--Button">
              Send invitation
            </button>
          </div>
        </div>

        <div className="HomePage--Reviews">
          <div className="HomePage--Reviews--Container">
            <h1 className="accent">Reviews</h1>
            <div>
              <h1 className="primary">{reviews.review1property}</h1>
              <p>{reviews.review1body}</p>
            </div>
            <div>
              <h1 className="primary">{reviews.review2property}</h1>
              <p>{reviews.review2body}</p>
            </div>
            <div>
              <h1 className="primary">{reviews.review3property}</h1>
              <p>{reviews.review3body}</p>
            </div>
          </div>
          <div className="HomePage--Reviews--Container">
            <h1 className="accent">Industry News</h1>
            <div className="card">
              <img src="//placehold.it/400x100" width="100%" height="auto" />
              <h2>
                Ornare tempus consequat ante primis tellus condimentum
                parturient luctus, nibh dui nullam netus dapibus ultricies erat
                odio, sapien ad tempor facilisis mollis eu pharetra.
              </h2>
              <p>
                Venenatis penatibus senectus fermentum blandit himenaeos
                pulvinar dictumst magna, mollis tempus enim curabitur facilisi
                sagittis consequat, nisl in nostra facilisis interdum faucibus
                purus.
              </p>
            </div>
          </div>
        </div>
        <div className="HomePage--PromoBoxes--Container">
          <div className="HomePage--PromoBoxes--Category">
            <h1 className="primary">Hot Openings</h1>
            <div className="HomePage--PromoBox--Opening">
              <h1>heading</h1>
            </div>
            <div className="HomePage--PromoBox--Opening">
              <h1>heading</h1>
            </div>
            <div className="HomePage--PromoBox--Opening">
              <h1>heading</h1>
            </div>
          </div>
          <div className="HomePage--PromoBoxes--Category">
            <h1 className="primary">Hot Openings</h1>
            <div className="HomePage--PromoBox--Opening">
              <h1>heading</h1>
            </div>
            <div className="HomePage--PromoBox--Opening">
              <h1>heading</h1>
            </div>
            <div className="HomePage--PromoBox--Opening">
              <h1>heading</h1>
            </div>
          </div>
          <div className="HomePage--PromoBoxes--Category">
            <h1 className="primary">Polls</h1>
          </div>
        </div>
      </div>
    </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        reviews {
          review1property
          review1body
          review2property
          review2body
          review3property
          review3body
        }
        featuredImage {
          ...FluidImage
        }
      }
    }
  }
`
