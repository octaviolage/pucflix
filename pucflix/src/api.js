const key = '1CTrQ6UvqUG_s-z_9AsdWko108U01B8iOqHoDWK0RyAg';
const URL_DISCIPLINAS = `https://spreadsheets.google.com/feeds/list/${key}/1/public/values?alt=json`;
const URL_AULAS = `https://spreadsheets.google.com/feeds/list/${key}/2/public/values?alt=json`;

function getJsonData(url) {
    return fetch(`${url}`)
      .then(async (respostaDoServidor) => {
        if (respostaDoServidor.ok) {
          let resposta = await respostaDoServidor.json();
          resposta = resposta.feed.entry;
          return resposta;
        }
  
        throw new Error('Não foi possível pegar os dados :(');
      });
  }

    async function getDados() {
        let dados = [];
        const disciplinas = await getJsonData(URL_DISCIPLINAS);
        const aulas = await getJsonData(URL_AULAS);

        disciplinas.map((disciplina) => {
            disciplina.aulas = [];
            dados.push(disciplina)
            return disciplina;
        }
        );
        aulas.map((aula) => {
          dados.map((disciplina) => {
            if(disciplina.gsx$id.$t === aula.gsx$disciplinaid.$t){
                disciplina.aulas.push(aula);
            }
            return disciplina;
        }
        );
        return aula;
      }
      );
        return dados;
    }

    export default {
        getDados,
      };