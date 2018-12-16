
let initialState = {
    isAuthenticated: false,
    user: {},
    products: [],
    cart: []
}

const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_CART = 'GET_CART'
const USER_LOGGED_IN = 'USER_LOGGED_IN'
const USER_LOGGED_OUT = 'USER_LOGGED_OUT'

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_PRODUCTS: 
        return Object.assign({}, state, {products: action.payload})
        
        case GET_CART: 
        return Object.assign({},state, {cart: action.payload})
        
        case USER_LOGGED_IN:
        return { ...state, isAuthenticated: true , user: action.payload }
        
        case USER_LOGGED_OUT:
        return { ...state, isAuthenticated: false, user: {} }

        default: 
            return state
    }
}

export function getProducts(products) {
    return {
        type: GET_PRODUCTS,
        payload: products
    }
}
export function getCart(cart) {
    return {
        type: GET_CART,
        payload: cart
    }
}

export function userLoggedIn(user) {
    return {
      type: USER_LOGGED_IN,
      payload: user
    }
  }
  
  export function userLoggedOut() {
    return {
      type: USER_LOGGED_OUT
    }
  }
