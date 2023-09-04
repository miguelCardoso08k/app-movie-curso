import { useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./Watch.module.css";
import videos from "../../json/videos.json";
import NotFound from "../NotFound/NotFound";

const Watch = () => {
  const params = useParams();
  const video = videos.find((video) => {
    return video.id === params.id;
  });
  if (!video) {
    return <NotFound />;
  }

  return (
    <>
      <Header />
      <Container>
        <section className={styles.watch}>
          <iframe
            width="854"
            height="480"
            src={`https://www.youtube.com/embed/${video.id}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default Watch;
