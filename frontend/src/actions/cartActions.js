import axios from "axios"
import { CART_ADD_ITEM } from "../constants/cartConstants"

// using thunk so need to pass in dispatch
// saving cart to localstorage - getState allows us to get entire state tree (product list, details, cartitems etc)
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`api/products/${id}`)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  })

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}
// can only save strings in localstorage -once we take it back out we will need to parse it
