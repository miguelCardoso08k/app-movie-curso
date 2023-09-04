import styles from "./Favorites.module.css";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Favorites = () => {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.favorites}>
          <h2>Meus favoritos</h2>
          <p>Favoritos</p>
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default Favorites;
