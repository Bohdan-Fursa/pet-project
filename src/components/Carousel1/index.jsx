import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner1 from "../../img/banner1.jpg";
import Banner2 from "../../img/banner2.jpg";
import Banner3 from "../../img/banner3.jpg";
function Carousel1() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={Banner1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel1;
