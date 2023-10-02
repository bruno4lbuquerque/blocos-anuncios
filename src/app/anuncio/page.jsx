import Anuncio from "../../components/detalheanuncio";

const jobs = [{
    titulo: "Analista de Comercio",
    empresa: "Loja Adventure",
    data:"11/11/2020",
    views: "1002",
    vagas: "9",
    endereco:"R. Laura Pinheiro Maia, 299, Tancredo Neves, Boa Vista, Roraima, Brazil",
    horario: "Integral",
    regime: "Remoto",
    nivel: "Júnior",
    contrato: "CLT",
    vagaspcd: "3",
    escolaridade: "Superior",
    
  }];

function Detalhes() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-200">
    <div className="">
    {jobs.map((item, index) => (
          <Anuncio key={index} {...item} />
        ))}
    </div>
    </main>
  );
}

export default Detalhes;