import logo from "../../img/logo.png";
import FlagUA from "../../img/Flag_of_Ukraine 1.svg";
import FlagUK from "../../img/FlagUK.png";
import shopingCart from "../../img/icon_shopping_cart_.svg";
import "./index.css";
export const Header = (props) => {
  return (
    <header>
      <div className="Header_link">
        <ul>
          <li>
            <a href={props.a1} className="Header_link_a">
              {props.name1}
            </a>
          </li>
          <li className="Special_list">
            <a href={props.a2} className="Header_link_a">
              Каталог
            </a>
            <ul className="dropdown5">
              <li>
                <a href="#" className="dropdown_a">
                  Одяг
                </a>
              </li>
              <li>
                <a href="#" className="dropdown_a">
                  Тактичні Рукавиці
                </a>
              </li>
              <li>
                <a href="#" className="dropdown_a">
                  Тактичні Окуляри
                </a>
              </li>
              <li>
                <a href="#" className="dropdown_a">
                  Взуття
                </a>
              </li>
              <li>
                <a href="#" className="dropdown_a">
                  Рюкзаки
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div>
              <a href="#" className="logo_link">
                <img src={logo} className="logo" alt="Логотип" />
              </a>
            </div>
          </li>
          <li>
            <a href={props.a3} className="Header_link_a">
              {props.name3}
            </a>
          </li>
          <li>
            <a href={props.a4} className="Header_link_a">
              {props.name4}
            </a>
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
