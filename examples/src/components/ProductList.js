import React, {Component} from 'react'

class ProductList extends Component {
  render () {
    const { data } = this.props
    
  }
}

ProductList.defaultProps = {
  data: [{img: '위치1', title: '개성만두', aim: [100, 500, 1000], current: '300'},
         {img: '위치2', title: '개성김치', aim: [40, 300, 700], current: '1200'},
         {img: '위치3', title: '개성전자레인지', aim: [800, 900, 9900], current: '500'}]
}

export default ProductList
