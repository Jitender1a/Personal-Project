import React, {Component} from 'react'
import axios from "axios";
import {getCart} from '../ducks/reducer'
import {connect} from 'react-redux'

class Item extends Component{
    constructor(){
        super();
        this.state={
           item:{}
        };
    }

    componentDidMount(){
        axios.get(`/api/products/${this.props.match.params.id}`).then(results=>{
            this.setState({item:results.data})
        });
        console.log(this.props);
    }
    addToCart = (id) => {
        axios.post(`/api/cart/${id}`).then(results => {
            this.props.getCart(results.data)
        })
    }

    render(){
        let {name, price, img, description, id} = this.state.item
        return(
            <div class="item">
                <div>
                <img className="itemImage"width="500px" height="400px" src={img} alt="" />   
                </div>

                <div className="wrappertext">
                <h3>{name}</h3>
                <p>${price}</p>
                <p>{description}</p>
                <button className="button" onClick={() => this.addToCart(id)} >Add To Cart</button>
                </div>
            </div>    
            
        )
    }
}
export default connect(null, {getCart})(Item)