import { Header } from "../components/header";
import { Product } from "../components/product";
import { Footer } from "../components/footer";
import "../pages/AllProducts.css";
import Product1 from "../img/product.png";
import Clothes from "../img/clothes.png";
import Gloves from "../img/gloves.png";
import Glasses from "../img/glasses.png";
import Shoes from "../img/shoes.png";
import Backpack from "../img/Backpack.png";
import Carousel1 from "../components/Carousel1";
export const AllProducts = () => {
  return (
    <>
      <Header
        name1="Головна"
        a1="/pet-project"
        a2="#"
        name3="Тех.Підтримка"
        a3="#footer "
        name4="Акції"
        a4="#"
      />
      <Carousel1 />
      <h9>Всі товари</h9>
      <div className="Products_wrapper">
        <div className="Products">
          <Product
            src={Product1}
            name="Хімічна грілка для рук"
            price="154"
            href="/pet-project/product"
          />
          <Product
            src={Clothes}
            name="Зимова куртка"
            price="1895"
            href="/pet-project/product"
          />
          <Product
            src={Product1}
            name="Хімічна грілка для рук"
            price="300"
            href="/pet-project/product"
          />
          <Product
            src={Product1}
            name="Хімічна грілка для рук"
            price="300"
            href="/pet-project/product"
          />

          <Product
            src={Product1}
            name="Хімічна грілка для рук"
            price="300"
            href="/pet-project/product"
          />
          <Product
            src={Product1}
            name="Хімічна грілка для рук"
            price="300"
            href="/pet-project/product"
          />
          <Product
            src={Product1}
            name="Хімічна грілка для рук"
            price="1968"
            href="/pet-project/product"
          />
          <Product
            src={Product1}
            name="Хімічна грілка для рук"
            price="999"
            href="/pet-project/product"
          />
          <Product
            src={Product1}
            name="Хімічна грілка для рук"
            price="960"
            href="/pet-project/product"
          />
          <Product
            src={Product1}
            name="Хімічна грілка для рук"
            price="300"
            href="/pet-project/product"
          />
          <Product
            src={Product1}
            name="Хімічна грілка для рук"
            price="300"
            href="/pet-project/product"
          />
          <Product
            src={Product1}
            name="Хімічна грілка для рук"
            price="300"
            href="/pet-project/product"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};
