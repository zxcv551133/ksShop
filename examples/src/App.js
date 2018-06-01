import React, { Component } from 'react'
import AccountInquiry from './components/AccountInquiry'

class App extends Component {
  state = {
    data: [{name: '구매자A', val: '10', deposit: 1, time: '20170601032633', id: '1'},
    {name: '구매자B', val: '12', deposit: 1, time: '20170601072710', id: '2'},
    {name: '판매자A', val: '10', deposit: 0, time: '20170602175830', id: '3'}]
  }



  render () {
    console.log(this.state.data[0].name)
    
    return (
      <div>
        <AccountInquiry data={this.state.data}/>
      </div>
    )
  }
}

export default App
