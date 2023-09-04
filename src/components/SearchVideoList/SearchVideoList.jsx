import styles from "./SearchVideoList.module.css";
import VideoList from "../VideoList/VideoList";
import { useState } from "react";

const filterVideos = (videos, searchText) => {
  return videos.filter(
    (video) =>
      video.category.includes(searchText) || video.title.includes(searchText)
  );
};

const SearchVideoList = ({ videos }) => {
  const [searchText, setSearchText] = useState("");
  const foundVideos = filterVideos(videos, searchText);

  return (
    <section className={styles.container}>
      <input
        type="search"
        placeholder="Pesquisar..."
        onChange={(e) => setSearchText(e.target.value)}
      />
      <VideoList
        videos={foundVideos}
        emptyHeading={`não encontramos '${searchText}'`}
      />
    </section>
  );
};

export default SearchVideoList;
