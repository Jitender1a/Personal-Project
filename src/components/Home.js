import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import addidas from '../Adidas.jpg'
import supreme from '../Supreme1.jpg'
import nike from '../nike.jpg'
import jordan from '../jordan.jpg'
import yeezy from '../yeezy1.jpg'
import nikeS from '../nikeS.jpg'
import jordanS from '../jordanS.jpg'
import nmd from '../nmdS.jpg'
import yzyS from '../yzyS.jpg'
import nike2S from '../nike2S.jpg'
class Home extends Component {
    render(){    
    return (
     <div>
         <div class="wrapper">
             <div class="cube">
             <div class="side s-1"></div>
             <div class="side s-2"></div>
             <div class="side s-3"></div>
             <div class="side s-4"></div>
             <div class="side s-5"></div>
             <div class="side s-6"></div>
            </div>
         </div> 
         
         <div className="none">none</div>
         {/* <div class='collection'>
             <Link className='EnterTheCollection'to='/ProductsList'>Enter The Collection</Link>
         </div> */}

         <div class="brand">
            <h1>Brands</h1>
            <img src={addidas} alt="" width="250px" height="250px"></img>
            <img src={supreme} alt="" width="250px" height="250px"></img>
            <img src={nike} alt="" width="250px" height="250px"></img> 
            <img src={jordan} alt="" width="250px" height="250px"></img> 
            <img src={yeezy} alt="" width="250px" height="250px"></img>     
    
         </div>

         <div class="topSeller">
            <h1>Top Sellers</h1>
            <img src={nikeS} alt="" width="250px" height="250px"></img> 
            <img src={jordanS} alt="" width="250px" height="250px"></img>
            <img src={nmd} alt="" width="250px" height="250px"></img>
            <img src={yzyS} alt="" width="250px" height="250px"></img>
            <img src={nike2S} alt="" width="250px" height="250px"></img>
         </div>
        
         <div class='services'>
            <div>
            <h1>Services</h1>       
            <Link  className='AboutUs'to='/Returns'>Delivery & Returns</Link>
            </div>
            <div>&#10022;</div>
            <div>
            <Link className="AboutUs" to='/About'>About Us</Link>
            </div>
            <div>&#10022;</div>
            <div>
            <a className="twitter" href="https://twitter.com"><i class="fab fa-twitter fa-2x"></i></a>
            </div>
            <div>&#10022;</div>
            <div className="facebookdiv">
            <a className="facebook" href="https://www.facebook.com/"><i class="fab fa-facebook fa-2x"></i></a>
            </div>

         </div>
     
      </div>  
      
        )
    }    
}
export default Home

