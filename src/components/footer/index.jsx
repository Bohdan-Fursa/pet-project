import "../footer/index.css";
import Logo from "../../img/logo2.png";
import Facebook from "../../img/facebook.svg";
import Instagram from "../../img/instagram.svg";
import Telegram from "../../img/telegram.svg";
export const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer_description">
          <img className="footer_logo" src={Logo} />
          <div className="footer_text">
            <div className="footer_deteils">
              <p>Наші контакти:</p>
              <p>380(371)579-20-47</p>
              <p>380(2162)076-31-38</p>
              <p>380(1951)951-11-69</p>
            </div>
            <div className="footer_deteils">
              <p>
                СЛУЖБА ПІДТРИМКИ
                <br /> КЛІЄНТІВ
              </p>
              <a href="#">Детальніше про нас</a>
              <a href="#">Контактна інформація</a>
              <a href="#">Допомога</a>
              <a href="#">Оптові замовлення</a>
            </div>
            <div className="footer_deteils_end">
              <span>Знайдіть нас</span>
              <div className="socials">
                <a href="#">
                  <img src={Facebook} />
                </a>
                <a href="#">
                  <img src={Instagram} />
                </a>
                <a href="#">
                  <img src={Telegram} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
