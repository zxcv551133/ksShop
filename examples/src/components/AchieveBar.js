import React, { Component } from 'react'
import './AchieveBar.css'

class AchieveBar extends Component {
  state = {
    achieveRate: 0,
    achievedState: 0
  }

  // aim에서 가장 큰 값을 구하고 setstate함
  getRate() {
    const { aim, current } = this.props
    let maxVal = aim[aim.length - 1]
    if(maxVal <= current) {
      this.setState ({
        achieveRate: 1
      })
    } else {
      this.setState ({
        achieveRate: current/maxVal
      })
    }
  }

  // 몇단계 목표금액 %
  makeBar(rate) {
    return (
      <div className='Bar'>
        <div className='graduation'>
        </div>
      </div>      
    )
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
