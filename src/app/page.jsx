"use client"
import Blocos from "../components/Blocos";

const job = [{
    
  titulo: "Analista de Comercio",
  empresa: "Loja Adventure",
  data: "11/12/2020",
  endereco: "R. Laura Pinheiro Maia, 299, Tancredo Neves, Boa Vista, Roraima, Brazil, America do Sul",
  horario: "Integral",
  regime: "Remoto",
  nivel: "Júnior",
  contrato: "CLT",
},
{
    titulo: "Analista de thecc",
    empresa: "Loja GFTech",
    data: "11/12/2020",
    endereco: "R. Laura Pinheiro Maia, 299, Tancredo Neves, Boa Vista, Roraima, Brazil, America do Sul",
    horario: "Integral",
    regime: "Remoto",
    nivel: "Júnior",
    contrato: "CLT",
},

{
  titulo: "Analista de thecc",
  empresa: "Loja GFTech",
  data: "11/12/2020",
  endereco: "R. Laura Pinheiro Maia, 299, Tancredo Neves, Boa Vista, Roraima, Brazil, America do Sul",
  horario: "Integral",
  regime: "Remoto",
  nivel: "Júnior",
  contrato: "CLT",
},
{
  titulo: "Analista de thecc",
  empresa: "Loja GFTech",
  data: "11/12/2020",
  endereco: "R. Laura Pinheiro Maia, 299, Tancredo Neves, Boa Vista, Roraima, Brazil, America do Sul",
  horario: "Integral",
  regime: "Remoto",
  nivel: "Júnior",
  contrato: "CLT",
},
{
  titulo: "Analista de thecc",
  empresa: "Loja GFTech",
  data: "11/12/2020",
  endereco: "R. Laura Pinheiro Maia, 299, Tancredo Neves, Boa Vista, Roraima, Brazil, America do Sul",
  horario: "Integral",
  regime: "Remoto",
  nivel: "Júnior",
  contrato: "CLT",
}];

function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="md:p-6 xl:p-24 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {job.map((item, index) => (
          <Blocos key={index} {...item} />        ))} 
      </div>
    </main>
  );
}

export default Home;