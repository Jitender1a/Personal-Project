import React from 'react'
import {Link, withRouter} from 'react-router-dom'

function Nav(props) {
    return(
        <div className='nav-bar'>
            <h1 onClick={() => props.history.push('/')}>SNEAKERHEADZ</h1>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/About'>About Us</Link>
                <Link to='/ProductsList'>Sneakers</Link>
                <Link to='/cart'>Cart</Link>
            </div>
        </div>
    )
}


export default withRouter(Nav)