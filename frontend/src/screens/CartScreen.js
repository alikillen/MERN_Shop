import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col, ListGroup, Image, Form, Button, Card } from "react-bootstrap"
import Message from "../components/Message"
import { addToCart } from "../actions/cartActions"

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split("=")[1]) : 1
  // this will be the query params
  
  const dispatch = useDispatch()

  // const cart = useSelector((state) => state.cart)
  // const { cartItems } = cart

  // console.log(cartItems)

  // we only want to add to cart if there is a product ID
  useEffect(() => {
    if(productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])
  
  return (
    <div>Cart</div>
  )
}

export default CartScreen
