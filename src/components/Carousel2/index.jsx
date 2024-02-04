import "slick-carousel/slick/slick.css";
import "../Carousel2/index.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import { Product } from "../../components/product";
import Slider from "react-slick";
import Product1 from "../../img/product.png";
import Product2 from "../../img/product2.avif";
import Product3 from "../../img/product3.avif";
import Product4 from "../../img/product4.avif";
import Product5 from "../../img/product5.avif";
import Product6 from "../../img/product6.avif";
import Product7 from "../../img/product7.avif";
import Product8 from "../../img/product8.avif";
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
        <Product
          src={Product1}
          name="Хімічна грілка для рук"
          id={1}
          price="450.53 "
        />
        <Product src={Product2} name="Brandit Фліска" id={2} price="1895" />
        <Product
          src={Product3}
          name="Сумка через плече Badger Outdoor Sling"
          id={3}
          price="999"
        />
        <Product
          src={Product4}
          name="Черевики Lowa Zephyr"
          id={4}
          price="7786.68"
        />

        <Product
          src={Product5}
          name="Сумка через плече Badger Outdoor Sling Tactical Large - Olive"
          id={5}
          price="868,14"
        />
        <Product
          src={Product6}
          name="Тактичні рукавички Mechanix Wear M-Pact MultiCam"
          id={6}
          price="300"
        />
        <Product src={Product7} name="Налобний ліхтар" id={7} price="1968" />
        <Product src={Product8} name="Окуляри маска" id={8} price="3459" />
      </Slider>
    </div>
  );
};
export default Carousel2;
