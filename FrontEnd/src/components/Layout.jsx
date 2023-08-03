import React from "react";
import Header from "./Header";
import { Container } from "react-bootstrap";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <header className="sticky-top">
        <Header />
      </header>

      <Container>
        <main className="py-3">{children}</main>
      </Container>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
