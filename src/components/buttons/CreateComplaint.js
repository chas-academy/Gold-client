import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const CreateComplaint = () => {
  return (
    <Link to={`/admin/orders/complaints/add`}>
      <button className="Create__button">Lägg till reklamation</button>
    </Link>
  );
};

export default CreateComplaint;
