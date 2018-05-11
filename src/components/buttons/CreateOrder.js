import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const CreateOrder = () => {
      return (
        <Link to={`/admin/orders/add`} >
          <button className="Create__button">
            <i className="fas fa-plus"></i>
          </button> 
        </Link> 
      );
}

export default CreateOrder