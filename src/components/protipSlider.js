import React from 'react'
import InputRange from 'react-input-range'
// import 'react-input-range/lib/css/index.css'
import './protipSlider.css'
import { Flex, Heading } from 'rebass'

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: 1 }
  }

  render() {
    var satisfaction = this.state.value
    let followUpform
    if (satisfaction === 1) {
      followUpform = (
        <Flex mt={4} flexDirection="column">
          <label>
            What problem(s) did you run into during the event and how did the
            venue help resolve this?
          </label>
          <textarea />
        </Flex>
      )
    }
    if (satisfaction === 2) {
      followUpform = (
        <Flex mt={4} flexDirection="column">
          <label>
            What problem(s) did you run into during the event and how did the
            venue help resolve this?
          </label>
          <textarea />
        </Flex>
      )
    }

    return (
      <div>
        <InputRange
          maxValue={5}
          minValue={1}
          formatLabel={value => {
            if (value === 1) {
              return `Negative experience`
            }
            if (value === 2) {
              return `Bare minimum met`
            }
            if (value === 3) {
              return `Acceptable experience`
            }
            if (value === 4) {
              return `100% satisfied`
            }
            if (value === 5) {
              return `Above and beyond`
            }
          }}
          value={this.state.value}
          onChange={value => this.setState({ value })}
        />
        {followUpform}
      </div>
    )
  }
}

export default Slider
