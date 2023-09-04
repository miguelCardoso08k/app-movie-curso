import Slider from "react-slick";
import "./Carousel.css";

const Carousel = ({ children }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    variableWidth: true,
    adaptativeHeight: true,
    slideToShow: 5,
    slidesToScroll: 1,
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
