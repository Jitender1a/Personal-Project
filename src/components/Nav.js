import React from 'react'
import {Link, withRouter} from 'react-router-dom'

function Nav(props) {
    return(
        <div className='nav-bar'>
            <h1 onClick={() => props.history.push('/')}>SNEAKERHEADZ</h1>
            <div>
                <div className="navwords">
                <Link to='/'>Home</Link>
                <Link to='/About'>About Us</Link>
                <Link to='/ProductsList'>Sneakers</Link>
                <Link to='/cart'><i class="fas fa-shopping-cart"></i></Link>
                </div>
            </div>
        </div>
    )
}


export default withRouter(Nav)