import React, {Component} from 'react'
import axios from 'axios'
import {getCart} from '../ducks/reducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class Product extends Component {

    addToCart = (id) => {
        axios.post(`/api/cart/${id}`).then(results => {
            this.props.getCart(results.data)
        })
    }

    render() {
        let {name, img,  id} = this.props.product
        return (
            <div class='nav3'>
                 <Link className="productLink" to={`/Item/${id}`}><img width="500px" height="400px" src={img} alt="" /></Link>
                <h3>{name}</h3>
                {/* <p>${price}</p> */}
                {/* <p>{description}</p> */}
                {/* <Link className="productLink" to={`/Item/${id}`}>More Info</Link> */}
                {/* <button onClick={() => this.addToCart(id)} >Add To Cart</button> */}
            </div>    

        )
    }
}

export default connect(null, {getCart})(Product)