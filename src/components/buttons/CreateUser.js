import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

const CreateUser = () => {
      return (
        <Link to={`/admin/accounts/add`} >
          <button className="Create__button">Lägg till användare</button>
        </Link>  
      );
}

export default CreateUser;
