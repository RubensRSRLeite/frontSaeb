import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import api from "./services/api";


export default function App() {
  
  const [automovel, setAutomovel] = useState();

  useEffect(() => {
    api
      .get("/automovel")
      .then((response) => setAutomovel(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="App">
      <p>nome: {automovel?.nome}</p>
      <p>preço: {automovel?.preco}</p>
    </div>
  );
}
