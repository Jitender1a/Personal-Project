import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {getCart} from '../ducks/reducer'

class CartItem extends Component {

    updateQuantity = (update) => {
        let {id, quantity} = this.props.cartItem
        if(update === 'up') {
            quantity++
        } else if (update === 'down') {
         quantity--   
        }
        axios.put(`/api/cart/${id}?quantity=${quantity}`).then(results => {
            this.props.getCart(results.data)
        })
    }

    deleteItem = () => {
        axios.delete(`/api/cart/${this.props.cartItem.id}`).then(results => {
            this.props.getCart(results.data)
        })
    }

    render() {
        let {name,quantity,img} = this.props.cartItem
        return (
            <div>
                <h3>{name}</h3>
                <img width="100px" height="100px" src={img} alt="" /> 
                <p>Quantity {quantity}</p>
                <button className="up" onClick={() => this.updateQuantity('up')}>+</button>
                <button className="up" onClick={() => this.updateQuantity('down')}>-</button>
                <button className="Deletebutton" onClick={this.deleteItem}>Delete</button>
                {/* <p>${Math.floor(price * quantity * 100) / 100}</p> */}
            </div>
        )
    }
}

export default connect(null, {getCart})(CartItem)