import React from "react";
import "../assets/styles/components/Search.scss";

const main__title_text = "¿Qué quieres ver hoy?";
const main__input_text = "Buscar...";

const Search = () => (
  <section className="main">
    <h2 className="main__title">{main__title_text}</h2>
    <input type="text" className="input" placeholder={main__input_text} />
  </section>
);

export default Search;
