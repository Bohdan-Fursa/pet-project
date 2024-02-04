import { Header } from "../components/header";
import { Product } from "../components/product";
import { Footer } from "../components/footer";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "../pages/AllProducts.css";
import Product1 from "../img/product.png";
import Product2 from "../img/product2.avif";
import Product3 from "../img/product3.avif";
import Product4 from "../img/product4.avif";
import Product5 from "../img/product5.avif";
import Product6 from "../img/product6.avif";
import Product7 from "../img/product7.avif";
import Product8 from "../img/product8.avif";
import Product9 from "../img/product9.avif";
import Product10 from "../img/product10.avif";
import Product11 from "../img/product11.avif";
import Product12 from "../img/product12.avif";
import Carousel1 from "../components/Carousel1";
import Carousel2 from "../components/Carousel2";

export const AllProducts = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: "300" });
  });
  return (
    <>
      <Header
        name1="Головна"
        a1="/"
        a2="#"
        name3="Тех.Підтримка"
        a3="#footer "
        name4="Акції"
        a4="#"
      />
      <div data-aos="zoom-in-down">
        <Carousel1 />
      </div>
      <div className="products_too" data-aos="fade-right">
        <h9>Всі товари</h9>
        <div className="Products_wrapper">
          <div className="Products">
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
            <Product
              src={Product7}
              name="Налобний ліхтар"
              id={7}
              price="1968"
            />
            <Product src={Product8} name="Окуляри маска" id={8} price="3459" />
            <Product
              src={Product9}
              name="Бінокиль з тепловізором"
              id={9}
              price="10945"
            />
            <Product src={Product10} name="Берци" id={10} price="3945" />
            <Product
              src={Product11}
              name="Куртка зимова"
              id={11}
              price="5935"
            />
            <Product
              src={Product12}
              name="Утеплена куртка"
              id={12}
              price="7590"
            />
          </div>
        </div>
      </div>
      <div className="bestsellers" data-aos="fade-left">
        <h5>БЕСТСЕЛЕРИ</h5>
        <Carousel2 />
      </div>
      <Footer />
    </>
  );
};
