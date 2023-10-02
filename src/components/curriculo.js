import PreencherCurriculo from "./Preenchercurriculo";
import PreencherCurriculoGrande from "./PreencherCurriculoGrande";
import Link from "next/link"




function Curriculo({  }) {
    return (
        <div className="min-h-[750px] min-w-[750px] max-w-[750px] bg-white rounded-[16px] shadow-md p-4">
        
        <h1 className="truncate text-[20px] text-gray-500 font-semibold p-2">
          Currículo
        </h1>
        <div className="relative w-70 h-3">
          <div className="absolute inset-x-0 top-1/2 h-[2px] bg-gray-300"></div>
        </div>
        <div className="grid grid-cols-2 gap-2 p-2 text-gray-500">
        <PreencherCurriculo title='Nome' />
        <PreencherCurriculo title='Sobrenome' />
        <PreencherCurriculo title='Bairro' />
        <PreencherCurriculo title='Rua'/>
        <PreencherCurriculo title='Número Residencial'/>
        <PreencherCurriculo title='Cidade'/>
        </div>
        <div className="grid gap-2 p-2 text-gray-500">
        <PreencherCurriculoGrande title='Apresentação pessoal'/>
        <PreencherCurriculoGrande title='Objetivos'/>
        <PreencherCurriculoGrande title='Metas'/>
        </div>

        <div className="p-2 text-gray-500">
          <div className="flex grid-cols-2 gap-[475px]">
          <h1 className="col-span-2 text-[14px] font-semibold place-self-stretch" >Experiência Profissional</h1>
          <div className="">
          <button className=" text-[30px] px-2"> - </button> <button className="text-[30px] px-2"> + </button>
          </div>
          </div>
          <PreencherCurriculo className="p-2" title=""/>
          
          <div className="flex grid-cols-2 gap-[548px]">
          <h1 className="col-span-2 text-[14px] font-semibold place-self-stretch" >Escolaridade</h1>
          <div className="">
          <button className=" text-[30px] px-2"> - </button> <button className="text-[30px] px-2"> + </button>
          </div>
          </div>
          <PreencherCurriculo className="p-2" title=""/>
          
        </div>
        

        <div className="flex justify-end bottom-[-350px] right-[400px] p-2 space-x-2">
          <Link href="/anuncio">
            <button className="bg-white hover:bg-slate-300 text-black py-2 px-4 rounded border border-black transition-all duration-150 ease-in-out right-0">
            Cancelar
            </button>
          </Link>
            <button className="bg-blue-900 hover:bg-blue-950 text-white py-2 px-4 rounded transition-all duration-150 ease-in-out">
            Salvar
            </button>    
            <Link href="/previsualizacao">        
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded transition-all duration-150 ease-in-out">
            Pré-visualizar
            </button>
            </Link>            
        </div>
    </div>
    )
}

export default Curriculo;