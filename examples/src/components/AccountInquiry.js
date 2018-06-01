import React, { Component } from 'react'
import './AccountInquiry.css'
import AccountInquiryItem from './AccountInquiryItem'

class AccountInquiry extends Component {
  render () {
    const { data } = this.props
    
    const aiList = data.map(
      ({name, val, deposit, time, id}) => (
        <AccountInquiryItem
          name={name}
          val={val}
          deposit={deposit}
          time={time}
          key={id}
      />)
      )
    
    return (
      <div>
        {aiList}
      </div>
    )
  }
}

export default AccountInquiry
