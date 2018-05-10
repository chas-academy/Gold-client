import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const CreateInternalOrder = () => {
  return (
    <Link to={`/admin/orders/internal/add`}>
      <button className="Create__button">
        <i className="fas fa-plus"></i>
      </button>
    </Link>
  );
};

export default CreateInternalOrder;
