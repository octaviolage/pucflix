
import React, { useEffect, useState } from 'react';
//import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import dados from '../../repositories/db';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
        setDadosIniciais(dados);
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            
            <div key={categoria.id}>
              {/* <BannerMain
                videoTitle={dadosIniciais[0].aulas[0].nome}
                url={dadosIniciais[0].aulas[0].url}
              /> */}
              <Carousel
                //ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
