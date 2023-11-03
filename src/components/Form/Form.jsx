import { categories } from "../Category/Category";
import { useState } from "react";
import styles from "./Form.module.css";
import { json } from "react-router-dom";

const Form = () => {
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [videos, setVideos] = useState([]);
  const [errors, setErrors] = useState("");

  const validationUrl = (url) => {
    const regex =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/;

    if (!regex.test(url) || url.length < 43) {
      setErrors("ERRO: URL inválida!");
      return false;
    } else {
      return url.substring(32, 43);
    }
  };

  const onSave = (e) => {
    e.preventDefault();
    console.log(url, category);

    if (!category || category === "") {
      setErrors("ERRO: Escolha uma categoria");
      return;
    } else {
      setErrors("");
    }

    const urlVal = validationUrl(url);

    if (urlVal && category) {
      const newVideo = { url, category };
      setVideos([...videos, newVideo]);
      localStorage.setItem("videos", JSON.stringify([...videos, newVideo]));
    } else {
      setErrors("Url inválida");
    }

    setUrl("");
    setCategory("");
  };

  return (
    <section className={styles.container}>
      <h2>Cadastro de Vídeo</h2>
      <form onSubmit={onSave}>
        <div>
          <label>URL do vídeo</label>
          <input
            type="text"
            placeholder="Digite a URL do vídeo"
            required="required"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div>
          <label>Categoria</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}>
            <option value=" ">Selecione uma categoria</option>
            {categories.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
        </div>
        <div>
          <button>Cadastrar</button>
        </div>
        <div>{errors}</div>
      </form>
    </section>
  );
};

export default Form;
