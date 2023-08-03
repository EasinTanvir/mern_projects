import React from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ContextData } from "../store/contextApi";

const SearchBox = () => {
  const { searchKey, setSearchKey } = ContextData();

  return (
    <div className="d-flex">
      <Form.Control
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
        className="rounded px-5 border border-light"
        required
        placeholder="Search here to find.."
      />
    </div>
  );
};

export default SearchBox;
