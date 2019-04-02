import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box, Heading, Text } from 'rebass'

const HotelFact = props => {
  const val = props.value
  return (
    <Flex flexDirection="row">
      <Box width={[1, 2 / 3]}>
        <Heading fontSize={1} small>
          {props.title}
        </Heading>
      </Box>
      <Box width={[1, 1 / 3]}>
        <Text>{props.value}</Text>
      </Box>
    </Flex>
  )
}

export default HotelFact

HotelFact.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string
}

HotelFact.defaultProps = {
  title: 'Title',
  value: 'Value'
}
