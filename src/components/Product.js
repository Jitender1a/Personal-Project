import React, {Component} from 'react'
import axios from 'axios'
import {getCart} from '../ducks/reducer'
import {connect} from 'react-redux'

class Product extends Component {

    addToCart = (id) => {
        axios.post(`/api/cart/${id}`).then(results => {
            this.props.getCart(results.data)
        })
    }

    render() {
        let {name, price, img, description, id} = this.props.product
        return (
            <div class='nav3'>
                <img width="500px" height="400px" src={img} alt="" />   
                <h3>{name}</h3>
                <p>${price}</p>
                <p>{description}</p>
                <button onClick={() => this.addToCart(id)} >Add To Cart</button>
            </div>    

        )
    }
}

export default connect(null, {getCart})(Product)