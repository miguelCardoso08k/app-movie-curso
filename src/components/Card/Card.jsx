import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconFavorite from "./favorite.png";
import iconUnfavorite from "./unfavorite.png";

const Card = ({ id }) => {
  return (
    <section className={styles.card}>
      <Link to={`/watch/${id}`}>
        <img
          src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
          alt="capa"
          className={styles.cover}
        />
      </Link>
      <figure className={styles.icon}>
        <img src={iconFavorite} alt="icon " />
      </figure>
    </section>
  );
};
export default Card;
