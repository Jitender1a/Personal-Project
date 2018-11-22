import React from 'react'
import Product from './Product'
import {connect} from 'react-redux'

function ProductsList(props) {
    let products = props.products.map( e => {
        return (
            <Product product={e} key={e.id}/>
        )
    })
    return (
        <div className='sneakers'>
            <h1>THE COLLECTION</h1>
            {products}
        </div>
    )
}


function mapStateToProps(state) {
    return {
        products: state.products
    }
}


export default connect(mapStateToProps)(ProductsList)