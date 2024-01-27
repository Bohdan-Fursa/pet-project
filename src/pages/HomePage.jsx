import { Header } from "../components/header";
import { Footer } from "../components/footer";
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
export const HomePage = () => {
  return (
    <>
      <Header />
      <div className="main_section">
        <img src={Soldier} className="soldier" />
        <div className="main_section_text">
          <h1>MILITARY UA</h1>
          <span>
            Наша компанія спеціалізується на виробництві й забезпеченні зброї
            для ЗСУ
          </span>
          <a href="#" className="main_section_button">
            Замовити
          </a>
        </div>
      </div>
      <div className="about_us">
        <img src={Drone} className="Drone" />
        <div className="about_us_text">
          <h2>ПРО НАС</h2>
          <span>
            Ми на ринку 10 років і вже отримали десятки тисяч позитивних
            відгуків від наших покупців.
            <br /> Кожному хто замовляє в нас наші товари отримує гарантію на 10
            років.
            <br /> Якщо у вас виникли якісь запитання зателефонуйте і зв’яжіться
            з нами!
          </span>
          <a href="#" className="about_us_button">
            Замовити
          </a>
        </div>
      </div>
      <div className="catalog">
        <h3>КАТАЛОГ</h3>
        <Carousel1 />
        <h4>РЕКОМЕНДОВАНІ ДЛЯ ВАС</h4>
        <div className="recommendations">
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
        <div className="bestsellers">
          <h5>БЕСТСЕЛЕРИ</h5>
          <Carousel2 />
        </div>
      </div>
      <div className="contacts">
        <div className="contacts_form">
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
