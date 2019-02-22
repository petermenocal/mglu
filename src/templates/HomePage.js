import React from 'react'

import PageHeader from '../components/PageHeader'
import { Box, Flex, Heading, Card, Text } from 'rebass'

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
        <Flex flexDirection="row" alignItems="center" justifyContent="center">
          <Box bg="rebeccapurple" width={[1]} p={3}>
            <Heading color="#75b418">Invite a fellow planner</Heading>
            <Flex
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box width={[1, 1, 1 / 2]}>
                <input
                  style={{
                    width: `90%`,
                    background: `transparent`,
                    border: `3px solid white`,
                    padding: `1rem`,
                    color: `white`
                  }}
                  type="text"
                  placeholder="your name"
                />
              </Box>
              <Box width={[1, 1, 1 / 2]}>
                <input
                  style={{
                    width: `90%`,
                    background: `transparent`,
                    border: `3px solid white`,
                    padding: `1rem`,
                    color: `white`
                  }}
                  type="text"
                  placeholder="their email address"
                />
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Flex
          bg="black"
          p={3}
          flexDirection="row"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
        >
          <Box width={[1, 1, 1 / 2]}>
            <Heading fontSize={2} color="#ffa500">
              Reviews
            </Heading>
            <Card p={3}>
              <Heading color="#70ac17">{reviews.review1property}</Heading>
              <Text color="lightgrey">{reviews.review1body}</Text>
            </Card>
            <Card p={3}>
              <Heading color="#70ac17">{reviews.review2property}</Heading>
              <Text color="lightgrey">{reviews.review2body}</Text>
            </Card>
            <Card p={3}>
              <Heading color="#70ac17">{reviews.review3property}</Heading>
              <Text color="lightgrey">{reviews.review3body}</Text>
            </Card>
          </Box>
          <Box width={[1, 1, 1 / 2]} mt={[5, 0]}>
            <Heading fontSize={2} color="#ffa500">
              Industry News
            </Heading>
            <Card p={3} bg="whitesmoke" mb="3">
              <Heading color="#70ac17">
                Pulvinar molestie consequat montes
              </Heading>
              <img src="//placehold.it/400x200" width="100%" />
              <Text color="black">
                Molestie sapien mus curae facilisi placerat vestibulum torquent
                ultrices, ridiculus pellentesque in sodales ac senectus potenti
                lobortis adipiscing, felis posuere massa nascetur tellus magna
                tincidunt.
              </Text>
            </Card>
          </Box>
        </Flex>
        <Flex
          bg="whitesmoke"
          p={3}
          flexDirection="row"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
        >
          <Box width={[1, 1, 1 / 3]}>
            <Heading fontSize={2} color="rebeccapurple">
              Featured property
            </Heading>
            <Card p={3}>
              <Heading color="#70ac17">Hyatt Regency Washington</Heading>
            </Card>
          </Box>
          <Box width={[1, 1, 1 / 3]}>
            <Heading fontSize={2} color="rebeccapurple">
              Hot Openings
            </Heading>
            <Card p={3}>
              <Heading color="#70ac17">Hyatt Regency Washington</Heading>
            </Card>
          </Box>
          <Box width={[1, 1, 1 / 3]}>
            <Heading fontSize={2} color="rebeccapurple">
              Polls
            </Heading>
            <Card p={3}>
              <Heading color="#70ac17">Hyatt Regency Washington</Heading>
            </Card>
          </Box>
        </Flex>
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
