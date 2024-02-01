import shopingCart from "../../img/icon_shopping_cart_.svg";
import "../product/index.css";
export const Product = (props) => {
  return (
    <>
      <div className="product">
        <a href={props.href}>
          <img src={props.src} />
          <span>{props.name}</span>
          <div className="product_description">
            <p>₴ {props.price}</p>
            <img src={shopingCart} className="shopingCart2" />
          </div>
        </a>
      </div>
    </>
  );
};
