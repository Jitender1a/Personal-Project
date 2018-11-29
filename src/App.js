import React, { Component } from 'react';
import './App.css';
import ProductsList from './components/ProductsList'
import Cart from './components/Cart'
import Home from './components/Home'
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
        </Switch>
      </div>
    );
  }
}
export default withRouter(connect(null, {getProducts})(App))
