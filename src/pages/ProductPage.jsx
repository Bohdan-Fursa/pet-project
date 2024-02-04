import { useParams } from "react-router";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import "../pages/ProductPage.css";
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
export const ProductPage = () => {
  const { id: productId } = useParams();
  const productData = [
    {
      id: 1,
      image: Product1,
      name: "Хімічна грілка для рук",
      price: 450.53,
      category: "clothes",
    },
    {
      id: 2,
      image: Product2,
      name: "Brandit Фліска",
      price: 1895,
      category: "clothes",
    },
    {
      id: 3,
      image: Product3,
      name: "Сумка Badger Outdoor Sling",
      price: 999,
      category: "clothes",
    },
    {
      id: 4,
      image: Product4,
      name: "Черевики Lowa Zephyr GTX MID MK2 - Coyote OP",
      price: 7786.68,
      category: "clothes",
    },
    {
      id: 5,
      image: Product5,
      name: "Сумка через плече Badger Outdoor Sling Tactical Large - Olive",
      price: 868.14,
      category: "clothes",
    },
    {
      id: 6,
      image: Product6,
      name: "Тактичні рукавички Mechanix Wear M-Pact MultiCam",
      price: 300.0,
      category: "clothes",
    },
    {
      id: 7,
      image: Product7,
      name: "Налобний ліхтар",
      price: 1968,
      category: "clothes",
    },
    {
      id: 8,
      image: Product8,
      name: "Назва товару 8",
      price: 300.0,
      category: "clothes",
    },
    {
      id: 9,
      image: Product9,
      name: "Назва товару 9",
      price: 300.0,
      category: "clothes",
    },
    {
      id: 10,
      image: Product10,
      name: "Назва товару 10",
      price: 300.0,
      category: "clothes",
    },
    {
      id: 11,
      image: Product11,
      name: "Назва товару 11",
      price: 300.0,
      category: "clothes",
    },
    {
      id: 12,
      image: Product12,
      name: "Назва товару 12",
      price: 300.0,
      category: "clothes",
    },
  ];
  const foundProduct = productData.find(
    (product) => product.id === parseInt(productId)
  );
  return (
    <>
      <Header
        name1="Головна"
        a1="/"
        a2="/all-products"
        name3="Тех.Підтримка"
        a3="#footer "
        name4="Акції"
        a4="#"
      />
      {foundProduct ? (
        <div className="wrapper_product">
          <div className="big_product">
            <img src={foundProduct.image} alt={foundProduct.name} />
            <div className="big_product_text">
              <h10>{foundProduct.name}</h10>
              <p>
                Виробник: <span className="military">Military UA</span>
              </p>
              <p>
                Час відправлення: <span className="now">Негайно</span>
              </p>
              <p className="price">
                ₴ {foundProduct.price}
                <button className="buy_button">В кошик</button>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>Товар не знайдено</div>
      )}
      <div className="big_product_description">
        <h11>ОПИС</h11>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint a<br />
          tempore cum necessitatibus soluta officia hic, vero quaerat
          perspiciatis?
          <br /> Consequuntur praesentium corporis magni debitis fugiat amet
          dolorem officiis aut mollitia.
        </p>
      </div>
      <Footer />
    </>
  );
};
