import React, { Component } from 'react'
import {Row, Col} from "react-bootstrap"
import Product from "../components/Product"
import products from "../products"

export default class HomeScreen extends Component {
  render() {
    return (
      <>
        <h1>Latest Products</h1>
        <Row>
          {products.map(product=>
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          )}
        </Row>
      </>
    )
  }
}
