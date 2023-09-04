import videos from "../../json/videos.json";
import stlyes from "./Category.module.css";

export const categories = [
  "Geografia",
  "Como fazer e usar",
  "Astronomia e Geografia",
  "Climatologia, Meteorologia, Vegetação",
  "Geologia e Hidrografia",
];

export const filterCategory = (id) => {
  return videos.filter((video) => video.category === categories[id]);
};

const Category = ({ category, children }) => {
  return (
    <section className={stlyes.category}>
      <h2>{category}</h2>
      <div className="cards">{children}</div>
    </section>
  );
};

export default Category;
