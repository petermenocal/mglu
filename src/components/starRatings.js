import StarRatings from 'react-star-ratings'
import React from 'react'

class Foo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: 0
    }
  }

  render() {
    // rating = 2;
    return (
      <StarRatings rating={2.403} starDimension="40px" starSpacing="15px" />
    )
  }
}

export default Foo
