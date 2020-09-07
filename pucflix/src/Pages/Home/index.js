import React from 'react';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/Banner'
import dados from '../../db';

function Home() {

  return (
    <PageDefault paddingAll={0}>
      {dados.map((categoria, indice) => {
        if (indice === 0) {
          return (
            
            <div key={categoria.id}>
              <BannerMain />
              <Carousel
                category={dados[0]}
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
