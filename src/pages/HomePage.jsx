import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomePage.css";
import Soldier from "../img/soldier.png";
import Drone from "../img/drone.png";
import Carousel1 from "../components/Carousel1";
import Carousel2 from "../components/Carousel2";
import Clothes from "../img/clothes.png";
import Gloves from "../img/gloves.png";
import Glasses from "../img/glasses.png";
import Shoes from "../img/shoes.png";
import Backpack from "../img/Backpack.png";
import { useEffect } from "react";
export const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: "300" });
  });
  return (
    <>
      <Header
        name1="Про нас"
        a1="#about_us"
        a2="/all-products"
        name3="Контакти"
        a3="#contacts"
        name4="Тех.Підтримка"
        a4="#footer"
      />
      <div className="main_section">
        <img src={Soldier} className="soldier" data-aos="fade-right" />
        <div className="main_section_text" data-aos="fade-left">
          <h1>MILITARY UA</h1>
          <span>
            Наша компанія спеціалізується на виробництві й забезпеченні зброї
            для ЗСУ
          </span>
          <Link to="/all-products" className="main_section_button">
            <a>Замовити</a>
          </Link>
        </div>
      </div>
      <div className="about_us" id="about_us">
        <img
          src={Drone}
          className="Drone fade-right"
          data-aos="fade-down-right"
        />
        <div className="about_us_text " data-aos="fade-left">
          <h2>ПРО НАС</h2>
          <span>
            Ми на ринку 10 років і вже отримали десятки тисяч позитивних
            відгуків від наших покупців.
            <br /> Кожному хто замовляє в нас наші товари отримує гарантію на 10
            років.
            <br /> Якщо у вас виникли якісь запитання зателефонуйте і зв’яжіться
            з нами!
          </span>
          <Link to="/all-products" className="about_us_button">
            <a>Замовити</a>
          </Link>
        </div>
      </div>
      <div className="catalog" id="catalog">
        <div data-aos="fade-up">
          <h3>КАТАЛОГ</h3>
          <Carousel1 />
        </div>
        <h4 data-aos="fade-right">РЕКОМЕНДОВАНІ ДЛЯ ВАС</h4>
        <div className="recommendations" data-aos="fade-right">
          <div className="choice">
            <div>
              <a href="#" className="clothes">
                <img src={Clothes} />
                <span>Одяг</span>
              </a>
            </div>
            <div>
              <a href="#" className="clothes">
                <img src={Gloves} />
                <span>
                  Тактичні
                  <br />
                  Рукавиці
                </span>
              </a>
            </div>
            <div>
              <a href="#" className="clothes">
                <img src={Glasses} />
                <span>
                  Тактичні <br />
                  Окуляри
                </span>
              </a>
            </div>
            <div>
              <a href="#" className="clothes">
                <img src={Shoes} />
                <span>Взуття</span>
              </a>
            </div>
            <div>
              <a href="#" className="clothes">
                <img src={Backpack} />
                <span>Рюкзаки</span>
              </a>
            </div>
          </div>
        </div>
        <div className="bestsellers" data-aos="fade-left">
          <h5>БЕСТСЕЛЕРИ</h5>
          <Carousel2 />
        </div>
      </div>
      <div className="contacts" id="contacts">
        <div className="contacts_form" data-aos="zoom-in">
          <h6>Контакти</h6>
          <input type="text" placeholder="Введіть ваше ім'я"></input>
          <input type="tel" placeholder="Введіть ваш номер"></input>
          <a href="#">Відправити заявку</a>
        </div>
      </div>
      <Footer />
    </>
  );
};
