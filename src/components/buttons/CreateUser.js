import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

const CreateUser = () => {
      return (
        <Link to={`/admin/accounts/add`} >
          <button className="Create__button">
            <i class="fas fa-plus"></i>
          </button>
        </Link>  
      );
}

export default CreateUser;
