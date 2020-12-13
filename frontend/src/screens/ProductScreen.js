import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap"
import Message from "../components/Message.js"
import Loader from "../components/Loader"
import Rating from "../components/Rating"
import { listProductDetails } from "../actions/productActions.js"

const ProductScreen = ({ history, match }) => {
  // using useState to setup quantity of items on product page
  const [qty, setQty] = useState(0)
  const dispatch = useDispatch()

  // getting product data from the state using useSelector
  const productDetails = useSelector(state => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match])

  // this is executed when we add things to our cart using button on product page
  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }


  
  return (
    <>
      <Link className = "btn btn-light my-3" to="/">
        Go back
      </Link>
      {loading 
      ? <Loader /> 
      : error
      ? <Message variant="danger">{error}</Message>
      : (
        <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating 
              value={product.rating} 
              text={`${product.numReviews} reviews`}

              />
            </ListGroup.Item>
            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant = "flush">
              <ListGroup.Item>
                <Row>
                  <Col>
                    Price:
                  </Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    Status:
                  </Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>

              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control 
                      as="select" 
                      value={qty}
                      onChange={(event)=> setQty(event.target.value)}
                      >
                        {[...Array(product.countInStock).keys()].map((initValue) => (
                          <option key={initValue + 1} value={initValue + 1}>
                            {initValue + 1}
                          </option>
                        ))}

                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}

              <ListGroup.Item>
                <Button 
                onClick={addToCartHandler}
                className="btn-block" 
                type="button" 
                disabled={product.countInStock === 0}>
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      )}
     
    </>
  )
}

export default ProductScreen
