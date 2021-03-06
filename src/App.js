/** @jsx jsx */
import React from "react";
import ProductList from "./views/productList";
import { Global, jsx } from "@emotion/core";
import Catalog from "../src/views/Catalog";
import { Router } from "@reach/router";
import Login from "./views/Login";
import Record from "./views/Record";
import Order from "./views/Order";
import Location from "./views/Location";

function App() {
  return (
    <div
      css={{
        height: "100vh"
      }}
    >
      <Router>
        <Login path="/login" />
        <Catalog path="/" />
        <ProductList path="/product-list" />
        <Record path="/record" />
        <Location path="/location/:id" />
        <Order path="/order" />
      </Router>
    </div>
  );
}

export default App;
