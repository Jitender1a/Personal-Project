import React, {Component} from 'react'
import CartItem from './CartItem'
import axios from 'axios'
import {getCart} from '../ducks/reducer'
import {connect} from 'react-redux'

class Cart extends Component {

    componentDidMount() {
        axios.get('/api/cart').then(results => {
            this.props.getCart(results.data)
        })
    }

    checkout = () => {
        if(this.props.cart.length) {
            //console.log(11)
            axios.delete('/api/cart/checkout').then(results => {

                alert('Items Purchased')
                this.props.getCart(results.data)
            })
        } else {
            alert("Please add items to your cart")
        }
    }

    render() {
        let cartTotal = 0
        let cart = this.props.cart.map(e => {
            
            cartTotal += e.price * e.quantity
            return (
                <CartItem cartItem={e} key={e.id}/>
            )
        })
        return (
            <div className='cart'>
                <h1>Cart</h1>
                {cart}
                <p>Total ${Math.floor(cartTotal * 100) / 100}</p>
                <button onClick={this.checkout}>Checkout</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, {getCart})(Cart)