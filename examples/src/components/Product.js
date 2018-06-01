import React, {Component} from 'react'
import './ProductList.css'
import AchieveBar from './AchieveBar'

class Product extends Component {
  render () {
    const { img, title, aim, current } = this.props

    return (
      // item 썸네일, 타이틀, 바
      <div className='item'>

        <div className='thumbnail'>
          <img src={img} />
        </div>

        <div className='product-title'>
          {title}
        </div>
        
        <div className='bar'>        
          <AchieveBar aim={aim} current={current} />
        </div>
      </div>
    )
  }
}
export default Product
