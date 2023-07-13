import React from "react";
import "./Card.scss";
import { NavLink } from "react-router-dom";

const Card = ({ item }) => {
  console.log(item);
  return (
    <NavLink className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={
              item.attributes?.img?.data?.attributes?.formats?.medium?.url
            }
            alt=""
            className="mainImg"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>Rs {item?.attributes.oldPrice}</h3>
          <h3>Rs {item?.attributes.price}</h3>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
