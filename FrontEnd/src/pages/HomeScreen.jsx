import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

import Product from "../components/Product";
import Carousels from "../components/Carousels";
import { ContextData } from "../store/contextApi";
import Loader from "../components/Loaders";

const HomeScreen = () => {
  const { playLists, searchKey, loading, error } = ContextData();

  const renderData = searchKey
    ? playLists?.filter((product) =>
        product.data.name.toLowerCase().includes(searchKey.toLowerCase())
      )
    : playLists;

  return (
    <Fragment>
      {!searchKey && <Carousels />}
      {!searchKey && (
        <h2 className="fw-bolder display-6 py-4">Music Collection For You</h2>
      )}
      <Row>
        {loading ? (
          <div className="mt-5">
            {" "}
            <Loader />
          </div>
        ) : (
          <>
            {renderData?.map((product) => (
              <Col key={product.data.uri} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </>
        )}
      </Row>
    </Fragment>
  );
};

export default HomeScreen;
