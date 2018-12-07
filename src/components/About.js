import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class About extends Component{
    render(){
        return(
            <div>
               <div className="About">
                <h1 className="Hello">Every Pair Means Something Different. We source, scramble and curate the best selection of sneakers we can find from around the globe. We’re here to help you find just the right pair.</h1>
                </div>

                <div className="ztogether">
                <h1 className="together">Want to learn more? Give us a shout. We’re here to make the process as seamless and easy as possible, from start to finish.</h1>
              
              </div>   

            <div class='services1'>
            <div>
            <h1>Services</h1>       
            <Link  className='AboutUs1'to='/Returns'>Delivery & Returns</Link>
            </div>
            <div>&#10022;</div>
            <div>
            <Link className="AboutUs1" to='/About'>About Us</Link>
            </div>
            <div>&#10022;</div>
            <div>
            <a className="twitter1" href="https://twitter.com"><i class="fab fa-twitter fa-2x"></i></a>
            </div>
            <div>&#10022;</div>
            <div className="facebookdiv1">
            <a className="facebook1" href="https://www.facebook.com/"><i class="fab fa-facebook fa-2x"></i></a>
            </div>
            </div>



            </div>     
        )
    }
}
export default About