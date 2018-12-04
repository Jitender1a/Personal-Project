import React, {Component} from 'react'
//import {Link} from 'react-router-dom'

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
            
            {/* <div class='services2'>
            <div>
            <h1>Services</h1>       
            <Link  className='Linkss'to='/Returns'>Delivery & Returns</Link>
            </div>
            <div>-</div>
            <div>
            <Link className="AboutUs" to='/About'>About Us</Link>
            </div>
            <div>-</div>
            <div>
            <a className="twitter" href="https://twitter.com">Twitter</a>
            </div>
            <div>-</div>
            <div className="facebookdiv">
            <a className="facebook" href="https://www.facebook.com/">Facebook</a>
            </div>
            </div>     */}

            </div>
            
        )
    }
}
export default About