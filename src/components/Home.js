import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Home extends Component {
    render(){    
    return (
    
        <div class="wrapper">
             <div class="cube">
             <div class="side s-1"></div>
             <div class="side s-2"></div>
             <div class="side s-3"></div>
             <div class="side s-4"></div>
             <div class="side s-5"></div>
             <div class="side s-6"></div>
            </div>
        
             <div class='collection'>
             <Link to='/ProductsList'>Enter The Collection</Link>
            </div>
      </div>  
      
        )
    }    
}
export default Home

