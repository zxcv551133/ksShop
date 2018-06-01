import React, { Component } from 'react'
import AccountInquiryItem from './AccountInquiryItem'

class AccountInquiry extends Component {
  render () {
    const { data } = this.props

    // test
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

AccountInquiry.defaultProps = {
  data: [{name: '구매자A', val: '10', deposit: 1, time: '20170601032633', id: '1'},
    {name: '구매자B', val: '12', deposit: 1, time: '20170601072710', id: '2'},
    {name: '판매자A', val: '10', deposit: 0, time: '20170602175830', id: '3'}]
}

export default AccountInquiry
