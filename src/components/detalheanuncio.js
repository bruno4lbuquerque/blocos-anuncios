import { BsFillBriefcaseFill } from "react-icons/bs"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { FaWhatsapp } from "react-icons/fa"
import { VscEye } from "react-icons/vsc"
import DetalhesItem from "./DetalhesItem";
import Link from "next/link";

function Anuncio({ titulo, data, empresa, vagas, endereco, horario, nivel, contrato, vagaspcd, regime, escolaridade, views }) {
    return (
        <div className="min-h-[700px] min-w-[750px] max-w-[750px] bg-white rounded-[16px] shadow-md p-4">
        
        <h1 className="truncate text-[20px] text-gray-500 font-semibold p-2">
          Detalhes do anúncio
        </h1>
        <div className="relative w-70 h-3">
          <div className="absolute inset-x-0 top-1/2 h-[2px] bg-gray-300"></div>
        </div>
        
        <div className="flex items-center">
      <div className="flex items-center justify-center w-12 h-12 bg-white shadow-md rounded-full text-gray-500">
        <BsFillBriefcaseFill className="w-6 h-6" />
      </div>
      <div className="flex flex-col ml-3 mr-3">
        <h1 className="truncate text-[16px] font-semibold max-w-[170px]">{titulo}</h1>
        <h2 className="truncate text-[14px] text-gray-500 font-semibold max-w-[170px]">
          {empresa}
        </h2>
        {data && <h3 className="text-[10px] text-gray-500 max-w-[120px] whitespace-nowrap overflow-hidden">Publicado em {data}</h3>}
      </div>
          <div className="flex items-center text-[12px] text-gray-500 max-w-[185px] ml-auto mr-auto">
             <h1 className="mr-1">{views}</h1> <VscEye className="h-[16px] w-[16px]"/>
          </div>

          <div className="p-4 relative">
            <div className="absolute top-0 right-0">
              <span> 
                <BiDotsVerticalRounded className="h-[20px] w-[20px] items-center cursor-pointer" />
              </span>
            </div>
          </div>
        </div>

        <div class="relative w-70 h-3">
          <div class="absolute inset-x-0 top-1/2 h-[1px] bg-gray-300"></div>
        </div>

        <div className="grid justify-items-start text-[14px] grid-cols-2 gap-1 py-2 max-w-[500px]">
          <DetalhesItem title='Quantidade de vagas' value={vagas}/>
          <DetalhesItem title='Tipo' value={horario}/>
          <DetalhesItem title='Regime' value={regime}/>
          <DetalhesItem title='Nível' value={nivel}/>
          <DetalhesItem title='Contrato' value={contrato}/>
          <DetalhesItem title='Vagas PCD' value={vagaspcd}/>
          <DetalhesItem title='Escolaridade' value={escolaridade}/>
        </div>
    
          <div className="flex inline text-[14px] font-semibold text-ellipsis overflow-hidden">
            <h1 className="mr-1 text-gray-950">Localização:</h1> <h2 className="text-gray-500">{endereco}</h2>
          </div>

          <div className="w-full p-2 text-[14px] flex space-x-2">
            <Link href="/curriculo">
            <button className=" shadow-md bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-5 rounded transition duration-300 ease-in-out">
              Candidatar-me
            </button>
            </Link>
            <button className=" flex items-center text-blue-600 hover:text-blue-800 underline underline-offset-4 py-2 px-6 rounded transition-all duration-300 ease-in-out">
             Compartilhar vaga <FaWhatsapp className="ml-1"/>
            </button>
          </div>
        
        <div class="relative w-70 h-3">
          <div class="absolute inset-x-0 top-1/2 h-[1px] bg-gray-300"></div>
        </div>

        <div>
          <h1 className="font-semibold text-[16px]">Sobre a vaga:</h1>
          <p className="p-2 text-[14px] max-w-[650px] text-gray-500">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido 
          pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos...
          Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido 
          pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos...</p>
        </div>

        <div class="relative w-70 h-3">
          <div class="absolute inset-x-0 top-1/2 h-[1px] bg-gray-300"></div>
        </div>

        <div>
          <h1 className="font-semibold text-[16px]">Responsabilidade de trabalho:</h1>
          <ul className="p-2 text-[14px] max-w-[650px] text-gray-500">Design and build the application architecture
          Develop and manage the database and server integration
          Develop quality WordPress websites along with generating WordPress themes and plugins
          Analyze and maintain existing requirements and implement them into web applications
          Design highly scalable, testable code
          Conducting performance tests, troubleshooting issues, and monitor the performance of the application</ul>
        </div>

        <div class="relative w-70 h-3">
          <div class="absolute inset-x-0 top-1/2 h-[1px] bg-gray-300"></div>
        </div>

        <div>
          <h1 className="font-semibold text-[16px]">Requisitos de trabalho:</h1>
          <p className="p-2 text-[14px] max-w-[650px] text-gray-500">Bachelor’s/Master’s degree in Computer Science (or equivalent experience)
          Must be experienced with PHP and WordPress
          Strong sense of ownership and responsibility for code quality
          Experience designing and developing responsive design websites
          Familiarity with building user interfaces for websites and web applications
          Proficient understanding of code versioning tools such as Git</p>
        </div>
      </div>
    )
}

export default Anuncio;