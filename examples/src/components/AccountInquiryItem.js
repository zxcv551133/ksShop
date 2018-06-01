import React, { Component } from 'react'
import './AccountInquiryItem.css'

class AccountInquiryItem extends Component {
  render () {
    const { name, val, deposit, time } = this.props

    return (
      <div className='ai-item'>

        {deposit === 1 ? (
          <div className='deposit' >            
            <div className='aitext'>
              입금 {time} {val} {name}
            </div>
          </div>
      ) : (
        <div className='withdraw' >
          <div className='aitext'>
            출금 {time} {val} {name}
          </div>
        </div>
      )}
      </div>
    )
  }
}

export default AccountInquiryItem
