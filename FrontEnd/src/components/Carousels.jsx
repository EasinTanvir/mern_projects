import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import { ContextData } from "../store/contextApi";

const Carousels = () => {
  const { playLists } = ContextData();

  return (
    <>
      <Carousel pause="hover" className="bg-dark rounded">
        {playLists.slice(1, 5).map((item) => (
          <Carousel.Item key={item.data.uri}>
            <Link to={`/product/${item.data.uri}`}>
              <Image
                src={item.data.images.items[0].sources[0].url}
                alt={item.data.uri}
                fluid
              />
              <Carousel.Caption className="carousel-caption">
                <h2>{item.data.name}</h2>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Carousels;
