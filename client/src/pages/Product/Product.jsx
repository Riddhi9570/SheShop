import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  data?.attributes?.img?.data?.attributes?.formats?.medium?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              { data?.attributes?.img2?.data?.attributes?.formats?.medium?.url ? (
              <img
                src={
                  data?.attributes?.img2?.data?.attributes?.formats?.medium?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
              ) : ("") }
            </div>
            <div className="mainImg">
              <img
                src={
                  data?.attributes[selectedImg]?.data?.attributes?.formats?.medium?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">Rs {data?.attributes?.price}</span>
            { data?.attributes?.oldPrice ?
            <span className ="oldPrice">Rs {data?.attributes?.oldPrice}</span>
            : ("") }

            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.formats.medium.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION : {data?.attributes?.desc}</span>
              <hr />
              <span>ADDITIONAL INFORMATION : {(data?.attributes?.additionalInfo) ? data?.attributes?.additionalInfo : " NA"} </span>
              <hr />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
