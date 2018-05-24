import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

const AddUser = () => {
      return (
        <Link to={`/admin/accounts/create`} >
          <button className="Create__button">
            <i className="fas fa-user"></i>
            <i className="fas fa-plus"></i>
          </button>
        </Link>  
      );
}

export default AddUser;
