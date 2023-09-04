import style from "./Banner.module.css";

const Banner = ({ image }) => {
  return (
    <div
      className={style.banner}
      style={{
        backgroundImage: `url('/images/banner-${image}.png')`,
      }}></div>
  );
};

export default Banner;
