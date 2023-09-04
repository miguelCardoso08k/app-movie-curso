import error404 from "./erro404.png";
import styles from "./NotFound.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const NotFound = () => {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <h2>Ops! Página não localizada!</h2>
        <img src={error404} alt="error 404" />
      </section>
      <Footer />
    </>
  );
};

export default NotFound;
