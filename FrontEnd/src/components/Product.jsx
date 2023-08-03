import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product.data.uri}`}>
        <Card.Img
          src={product.data.images.items[0].sources[0].url}
          variant="top"
        ></Card.Img>
      </Link>
      <Card.Body>
        <Link to={`/product/${product.data.uri}`}>
          <Card.Title as="div">
            <strong className="text-capitalize text-black">
              {product.data.name}
            </strong>{" "}
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating value={4} text={`${5} reviews`} />
        </Card.Text>

        <Card.Text as="h3">$322</Card.Text>
        <Button variant="primary" className="mt-1">
          Add To cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
