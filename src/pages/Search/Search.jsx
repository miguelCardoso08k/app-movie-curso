import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SearchVideoList from "../../components/SearchVideoList/SearchVideoList";
import videos from "../../json/videos.json";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.search}>
          <h2>pesquisar</h2>
          <SearchVideoList videos={videos} />
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default Search;
