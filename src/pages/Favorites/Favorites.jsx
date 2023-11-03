import styles from "./Favorites.module.css";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import VideoList from "../../components/VideoList/VideoList";
import { useFavoritesContext } from "../../context/Favorites";

const Favorites = () => {
  const { favorite } = useFavoritesContext();

  return (
    <>
      <Header />
      <Container>
        <section className={styles.favorites}>
          <h2>Meus favoritos</h2>
          {favorite.length > 0 ? (
            <VideoList videos={favorite} />
          ) : (
            <p>Nenhum video adicionado 😔</p>
          )}
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default Favorites;
