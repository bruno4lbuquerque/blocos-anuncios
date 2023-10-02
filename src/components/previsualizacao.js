import Curriculopreenchido from "./Curriculopreenchido";

import Link from "next/link"




function PreVisualizado({  }) {
    return (

        <div className="min-h-[750px] min-w-[750px] max-w-[750px] bg-white rounded-[16px] shadow-md p-4">
        
        <h1 className="truncate text-[20px] text-gray-500 font-semibold p-2">
          Currículo
        </h1>
        <div className="relative w-70 h-3">
          <div className="absolute inset-x-0 top-1/2 h-[2px] bg-gray-300"></div>
        </div>
        <div className="grid grid-cols-2 gap-2 p-2">
        <Curriculopreenchido title='Nome' value='Fernando'/>
        <Curriculopreenchido title='Sobrenome' value='Macedo'/>
        <Curriculopreenchido title='Bairro' value='Joquei Clube'/>
        <Curriculopreenchido title='Rua' value='Campelo'/>
        <Curriculopreenchido title='Número Residencial' value='279'/>
        <Curriculopreenchido title='Cidade' value='Boa Vista'/>
        </div>
        <div className="grid gap-2 p-2 ">
        <Curriculopreenchido title='Apresentação pessoal' value='Me chamo Fernando, sou desenvolvedor front-end, já programei em javascript, fiz faculdade de ciências da computação'/>
        <Curriculopreenchido title='Objetivos' value='Objetivo é poder contribuir para melhorias e implementações em projetos, dando um up nas inovações e usabilidade do software'/>
        <Curriculopreenchido title='Metas' value='Minhas metas são inovar e melhorar o desenvolvimento da empresa, alvancando e sendo útil para os projetos, fazendo novos software'/>
        </div>

        <div className="p-2">
          <div className="flex grid-cols-2 gap-[475px]">
          <h1 className="col-span-2 text-[14px] font-semibold place-self-stretch" >Experiência Profissional</h1>
          <div className="">
          <button className=" text-[30px] text-gray-500 px-2"> - </button> <button className="text-[30px] text-gray-500 px-2"> + </button>
          </div>
          </div>
          <Curriculopreenchido className="p-2" value='2002 - 2010 CEO e Desenvolvedor de software'/>
         </div> 
         <div className="p-2">
          <div className="flex grid-cols-2 gap-[548px]">
          <h1 className="col-span-2 text-[14px] font-semibold place-self-stretch" >Escolaridade</h1>
          <div className="">
          <button className=" text-[30px] text-gray-500 px-2"> - </button> <button className="text-[30px] text-gray-500 px-2"> + </button>
          </div>
          </div>
          <Curriculopreenchido className="p-2" value=''/>
          
        </div>
        

        <div className="flex justify-end bottom-[-350px] right-[400px] p-2 space-x-2">
          <Link href="/curriculo">
            <button className="bg-white hover:bg-slate-300 text-black py-2 px-4 rounded border border-black transition-all duration-150 ease-in-out right-0">
            Voltar
            </button>
          </Link>            
        </div>
    </div>
    )
}

export default PreVisualizado;