import React, { Component } from 'react';
import './App.css';
import ProductsList from './components/ProductsList'
import Cart from './components/Cart'
import Home from './components/Home'
import Returns from './components/Returns'
import About from './components/About'
import Item from './components/Item'
import Login from './components/Login'
import Register from './components/Register'
import LoginHome from './components/LoginHome'
import Logout from './components/Logout'
import axios from 'axios'
import Nav from './components/Nav'
import {connect} from 'react-redux'
import {getProducts} from './ducks/reducer'
import {Switch, Route, withRouter} from 'react-router-dom'


class App extends Component {
  componentDidMount() {
    axios.get('/api/products').then(results => {
      this.props.getProducts(results.data)
    })
  }

  render() {
    return (
      
      <div>
        <Nav/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/cart' component={Cart} />
          <Route path='/ProductsList' component={ProductsList}/>
          <Route path='/Returns' component={Returns}/>
          <Route path='/About' component={About}/>
          <Route path='/Item/:id' component={Item}/>
          <Route path='/Login' component={Login}/>
          <Route path='/Register' component={Register}/>
          <Route path='/LoginHome' component={LoginHome}/>
          <Route path='/Logout' component={Logout}/>
        </Switch>

       

      </div>
    );
  }
}
export default withRouter(connect(null, {getProducts})(App))
