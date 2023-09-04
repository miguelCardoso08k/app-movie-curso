import Banner from "../../components/Banner/Banner.jsx";
import Card from "../../components/Card/Card.jsx";
import Carousel from "../../components/Carousel/Carousel.jsx";
import Category, {
  categories,
  filterCategory,
} from "../../components/Category/Category.jsx";
import Container from "../../components/Container/Container.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header.jsx";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Header />
      <Banner image="favoritos" />
      <Container>
        {categories.map((category, index) => (
          <Category category={category}>
            <Carousel>
              {filterCategory(index).map(({ id }) => {
                return <Card id={id} key={id} />;
              })}
            </Carousel>
          </Category>
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default Home;
