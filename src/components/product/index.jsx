import shopingCart from "../../img/icon_shopping_cart_.svg";
import "../product/index.css";
import { Link } from "react-router-dom";
export const Product = (props) => {
  return (
    <>
      <div className="product">
        <Link to={`/product/${props.id}`}>
          <img src={props.src} className="mini_product" />
          <span>{props.name}</span>
          <div className="product_description">
            <p>₴ {props.price}</p>
            <img src={shopingCart} className="shopingCart2" />
          </div>
        </Link>
      </div>
    </>
  );
};
