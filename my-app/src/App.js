import "./App.css";
import { useState, useEffect } from "react";
import json from "./data/data.json";
import { About } from "./components/about/About";
import { Gallery } from "./components/gallery/Gallery";
import { Contact } from "./components/contact/Contact";
import { Header } from "./components/header/Header";
const App = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(json);
  }, []);

  return (
    <>
  
        <Header data={data.Header} />
        <Gallery data={data.Gallery} />
        <About data={data.About} />
        <Contact data={data.Contact} />

    </>
  );
};

export default App;
