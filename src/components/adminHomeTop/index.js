import React from "react";

import './style.css'

const AdminHomeTop = () => {
  return (
    <div className="BasicList__container AdminHome">  
        <h4> Dagens jobb </h4>
      <ul>
        <li className="AdminHomeTop__li">
          <a href="admin/orders/3">
            <i
              className="fas fa-map-marker button-glow-new"
              style={{ color: "red", fontSize: "18px", marginRight: '10px' }}
            />
          </a>{" "}
           Stena
        </li>
        <li className="AdminHomeTop__li">
          <a href="admin/orders/4">
            <i
              className="fas fa-map-marker button-glow-new"
              style={{ color: "red", fontSize: "18px", marginRight: '10px' }}
            />
          </a>{" "}
           Köpenhamnsvägen 5 
        </li>
        <li className="AdminHomeTop__li">
          <a href="admin/orders/1">
            <i
              className="fas fa-map-marker button-glow-active"
              style={{ color: "orange", fontSize: "18px", marginRight: '10px' }}
            />
          </a>{" "}
           Köpenhamnsvägen 50 : Giovanna
        </li>
        <li className="AdminHomeTop__li">
          <a href="admin/orders/2">
            <i
              className="fas fa-map-marker button-glow-active"
              style={{ color: "orange", fontSize: "18px", marginRight: '10px' }}
            />
          </a>{" "}
           Lorensborgsgatan 7 : Tommy
        </li>
        <li className="AdminHomeTop__li">
          <a href="admin/orders/2">
            <i
              className="fas fa-map-marker "
              style={{ color: "green", fontSize: "18px", marginRight: '10px' }}
            />
          </a>{" "}
           Baltzarsgatan 3 : Karin
        </li>
        <li className="AdminHomeTop__li">
          <a href="admin/orders/2">
            <i
              className="fas fa-map-marker "
              style={{ color: "green", fontSize: "18px", marginRight: '10px' }}
            />
          </a>{" "}
           Caroli : Ivan
        </li>
        <li className="AdminHomeTop__li">
          <a href="admin/orders/2">
            <i
              className="fas fa-map-marker"
              style={{ color: "green", fontSize: "18px", marginRight: '10px' }}
            />
          </a>{" "}
           Södra förstadsgatan 7 : Tommy
        </li>
      </ul>
    </div>
  );
};

export default AdminHomeTop;
