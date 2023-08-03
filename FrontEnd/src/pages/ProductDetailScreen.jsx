import React, { useState } from "react";

import { Link, useParams } from "react-router-dom";

import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import Rating from "../components/Rating";
import { ContextData } from "../store/contextApi";

const ProductDetailScreen = () => {
  const [qty, setQty] = useState(5);
  const { playLists } = ContextData();
  const productId = useParams().id;

  const finalData = playLists?.find((item) => item.data.uri === productId);

  return (
    <React.Fragment>
      <Link to="/">
        {" "}
        <Button>Go Back</Button>
      </Link>
      <Row className="mt-3">
        <Col md={6}>
          <Image
            src={`${finalData.data.images.items[0].sources[0].url}`}
            alt={finalData?.data.name}
            fluid
          />
        </Col>
        <Col md={3}>
          <ListGroup variant="flash">
            <ListGroup.Item>
              <h3>{finalData?.data.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={4} text="4 reviews" />
            </ListGroup.Item>
            <ListGroup.Item>Price: $423</ListGroup.Item>
            <ListGroup.Item>
              Description: {finalData?.data.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flash">
              <ListGroup.Item>
                <Row>
                  <Col>Price: $ 423</Col>
                  <Col>
                    <strong>{finalData?.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>In Stock</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Quantity:</Col>
                  <Col>
                    <Form.Select
                      size="sm"
                      aria-label="Default select example"
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {[...Array(10).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item className="text-center my-2">
                <Button className="btn-block rounded" type="button">
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ProductDetailScreen;
