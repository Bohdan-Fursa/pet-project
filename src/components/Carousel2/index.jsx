import "slick-carousel/slick/slick.css";
import "../Carousel2/index.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Product from "../../img/product.png";
import shopingCart from "../../img/icon_shopping_cart_.svg";
const Carousel2 = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="product">
          <a href="#">
            <img src={Product} />
            <span>Хімічна грілка для рук</span>
            <div className="product_description">
              <p>₴ 450,53 </p>
              <img src={shopingCart} className="shopingCart2" />
            </div>
          </a>
        </div>
        <div className="product">
          <a href="#">
            <img src={Product} />
            <span>Хімічна грілка для рук</span>
            <div className="product_description">
              <p>₴ 450,53 </p>
              <img src={shopingCart} className="shopingCart2" />
            </div>
          </a>
        </div>
        <div className="product">
          <a href="#">
            <img src={Product} />
            <span>Хімічна грілка для рук</span>
            <div className="product_description">
              <p>₴ 450,53 </p>
              <img src={shopingCart} className="shopingCart2" />
            </div>
          </a>
        </div>
        <div className="product">
          <a href="#">
            <img src={Product} />
            <span>Хімічна грілка для рук</span>
            <div className="product_description">
              <p>₴ 450,53 </p>
              <img src={shopingCart} className="shopingCart2" />
            </div>
          </a>
        </div>
        <div className="product">
          <a href="#">
            <img src={Product} />
            <span>Хімічна грілка для рук</span>
            <div className="product_description">
              <p>₴ 450,53 </p>
              <img src={shopingCart} className="shopingCart2" />
            </div>
          </a>
        </div>
        <div className="product">
          <a href="#">
            <img src={Product} />
            <span>Хімічна грілка для рук</span>
            <div className="product_description">
              <p>₴ 450,53 </p>
              <img src={shopingCart} className="shopingCart2" />
            </div>
          </a>
        </div>
        <div className="product">
          <a href="#">
            <img src={Product} />
            <span>Хімічна грілка для рук</span>
            <div className="product_description">
              <p>₴ 450,53 </p>
              <img src={shopingCart} className="shopingCart2" />
            </div>
          </a>
        </div>
        <div className="product">
          <a href="#">
            <img src={Product} />
            <span>Хімічна грілка для рук</span>
            <div className="product_description">
              <p>₴ 450,53 </p>
              <img src={shopingCart} className="shopingCart2" />
            </div>
          </a>
        </div>
      </Slider>
    </div>
  );
};
export default Carousel2;
