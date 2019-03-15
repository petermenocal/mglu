import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box, Heading, Text } from 'rebass'

const HotelFact = props => (
  <Flex>
    <Box py={2}>
      <Heading fontSize={1}>{props.title}</Heading>
      <Text>{props.value}</Text>
    </Box>
  </Flex>
)

export default HotelFact

HotelFact.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string
}

HotelFact.defaultProps = {
  title: 'Title',
  value: 'Value'
}
