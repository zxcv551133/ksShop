import React, {Component} from 'react'
import Product from './Product';

class ProductList extends Component {
  render () {
    const { data } = this.props
    
    const pList = data.map(
      ({img, title, aim, current, id}) => (
        <Product
          id={id}
          img={img}
          aim={aim}
          current={current}
          key={id}
      />)
      )
    return (
      <div>
        {pList}
      </div>
    )
  }
}

ProductList.defaultProps = {
  data: [{img: '위치1', title: '개성만두', aim: [100, 500, 1000], current: '300', id: 0},
         {img: '위치2', title: '개성김치', aim: [40, 300, 700], current: '1200', id: 1},
         {img: '위치3', title: '개성전자레인지', aim: [800, 900, 9900], current: '500', id: 2}]
}

export default ProductList
