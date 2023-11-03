import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconFavorite from "./favorite.png";
import iconUnfavorite from "./unfavorite.png";
import { useFavoritesContext } from "../../context/Favorites";

const Card = ({ id }) => {
  const { favorite, addFavorite } = useFavoritesContext();
  const isFavorite = favorite.some((fav) => fav.id === id);
  const favIcon = !isFavorite ? iconFavorite : iconUnfavorite;

  return (
    <section className={styles.card} key={id}>
      <Link to={`/watch/${id}`}>
        <img
          src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
          alt="capa"
          className={styles.cover}
        />
      </Link>
      <figure className={styles.icon}>
        <img src={favIcon} alt="icon " onClick={() => addFavorite({ id })} />
      </figure>
    </section>
  );
};
export default Card;
