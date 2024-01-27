import logo from "../../img/logo.png";
import FlagUA from "../../img/Flag_of_Ukraine 1.svg";
import FlagUK from "../../img/FlagUK.png";
import shopingCart from "../../img/icon_shopping_cart_.svg";
import "./index.css";
export const Header = () => {
  return (
    <header>
      <div className="Header_link">
        <ul>
          <li>
            <a href="#">Про нас</a>
          </li>
          <li>
            <a href="#">Каталог</a>
          </li>
          <li>
            <div>
              <a href="#" className="logo_link">
                <img src={logo} className="logo" alt="Логотип" />
              </a>
            </div>
          </li>
          <li>
            <a href="#">Контакти</a>
          </li>
          <li>
            <a href="#">Тех.Підтримка</a>
          </li>
        </ul>
      </div>
      <div className="other_links">
        <div className="shopping">
          <img className="shopingCart" src={shopingCart} />
          <span className="shopping_counter">0</span>
        </div>
        <div className="change_language">
          <a href="#">
            <img src={FlagUA} className="FlagUA" />
          </a>
          <span className="line"></span>
          <a href="#">
            <img src={FlagUK} />
          </a>
        </div>
      </div>
    </header>
  );
};
