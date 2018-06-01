import React, { Component } from 'react'
import './AchieveBar.css'

class AchieveBar extends Component {
  state = {
    rate: 0
  }

  // aim에서 가장 큰 값을 구하고 setstate함
  getRate() {
    const { aim, current } = this.props
  }

  
  makeBar() {
    
  }

  render () {
    const { aim, current } = this.props

    return (
      // bar 의 aim 은 flex를 이용해 가로로 늘어지게한다.
      <div className='Bar'>

      </div>
    )
  }
}
export default AchieveBar
