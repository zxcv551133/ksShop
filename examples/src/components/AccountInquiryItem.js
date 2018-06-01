import React, { Component } from 'react'
import './AccountInquiryItem.css'

class AccountInquiryItem extends Component {
  render () {
    const { name, val, deposit, time } = this.props

    return (
      <div className='ai-item'>
      {deposit === 1 ? (
        <div className='deposit' >
          {time} {val} {name}
        </div>
      ) : (
        <div className='withdraw' >
          {time} {val} {name}
        </div>
      )}
      </div>
    )
  }
}

export default AccountInquiryItem
