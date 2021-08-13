import { Fragment, useEffect, useState } from "react";
import { Formulario } from "./component/Formulario";
import { Header } from "./component/Header";
import { ListadoNoticias } from "./component/ListadoNoticias";

function App() {

  const [ categoria, guardarCategoria ] = useState('');
  const [ noticias, guardarNoticias ] = useState([]);
  useEffect(() => {
    const consultarAPI = async ()=>{
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=60cfb7a559014e7e8c84af8d81f6c6b6`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria])

  return (
    <Fragment>
      <Header
        titulo='Buscador de Noticias'  
      />
      <div className='container white'>
        <Formulario 
          guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </Fragment>

  );
}

export default App;
