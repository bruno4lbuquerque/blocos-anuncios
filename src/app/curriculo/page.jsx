import Curriculo from "@/components/curriculo";

const jobs = [{
    nome: "Pedro Loss",
    sobrenome: "Alfredo",
    bairro: "Bairro dos Estados",
    rua:"Rua presidente Dutra",
    cidade: "Boa Vista",
    numero: "789",
  }];

function Detalhes() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-200">
    <div className="">
    {jobs.map((item, index) => (
          <Curriculo key={index} {...item} />
        ))}
    </div>
    </main>
  );
}

export default Detalhes;