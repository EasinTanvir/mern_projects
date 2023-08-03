import React from "react";
import HomeScreen from "./pages/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetailScreen from "./pages/ProductDetailScreen";
import Layout from "./components/Layout";
import { ContextWrapper } from "./store/contextApi";

const App = () => {
  return (
    <Router>
      <ContextWrapper>
        <Layout>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductDetailScreen />} />
          </Routes>
        </Layout>
      </ContextWrapper>
    </Router>
  );
};

export default App;
