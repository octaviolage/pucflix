import React, { useEffect, useState } from 'react';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/Banner';
import api from '../../api';

function Home() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    api.getDados()
      .then((videos) => {
        //console.log(videos);
        setDados(videos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <PageDefault>
      {dados.map((categoria, indice) => {
        if (indice === 0) {
          return (
            
            <div key={categoria.gsx$id.$t}>
              <BannerMain />
              <Carousel
                category={dados[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.gsx$id.$t}
            category={categoria}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
