import PreVisualizado from "@/components/previsualizacao";

const jobs = [{
    nome: "Pedro Loss",
    sobrenome: "Alfredo",
    bairro: "Bairro dos Estados",
    rua:"Rua presidente Dutra",
    cidade: "Boa Vista",
    numero: "789",
  }];

function PreVisualizacao() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-200">
    <div className="">
    {jobs.map((item, index) => (
          <PreVisualizado key={index} {...item} />
        ))}
    </div>
    </main>
  );
}

export default PreVisualizacao;