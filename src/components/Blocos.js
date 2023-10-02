import { BsFillBriefcaseFill } from "react-icons/bs"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { MdAlarmOn } from "react-icons/md"
import { TiLocation } from "react-icons/ti"
import { FaBuilding } from "react-icons/fa"
import { MdEqualizer } from "react-icons/md"
import { MdAssignment } from "react-icons/md"
import Link from "next/link"

function Blocos({ titulo, data, empresa, endereco, horario, nivel, contrato, regime }) {
    return (
        <div className="min-h-[190px] min-w-[280px] bg-white rounded-[16px] shadow-md p-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center w-[50px] bg-white shadow-md rounded-full text-gray-500">
            <BsFillBriefcaseFill className="w-full h-full p-2" />
          </div>
          <div className="flex flex-col">
            <h1 className="truncate text-[16px] font-semibold max-w-[170px]">{titulo}</h1>
            <h2 className="truncate text-[14px] text-gray-500 font-semibold max-w-[170px]">
              {empresa}
            </h2>
            {data && <h3 className=" text-[10px] text-gray-500 max-w-[120px] whitespace-nowrap overflow-hidden">Publicado em {data}</h3>}
          </div>

          <div class="p-4 relative">
            <div class="absolute top-0 right-0">
              <span> 
                <BiDotsVerticalRounded className="h-[20px] w-[20px] cursor-pointer" />
              </span>
            </div>
          </div>
        </div>

        <div class="relative w-70 h-2">
          <div class="absolute inset-x-0 top-1/2 h-[1px] bg-gray-300"></div>
        </div>

        <div className="grid justify-items-start grid-y-3 grid-cols-2 gap-1 py-2 max-w-[264px]">
          <div className="flex items-center text-gray-500 text-[14px] font-semibold gap-1">
            <MdAlarmOn className="w-[16px] h-[16px]" />
            {horario}
          </div>
          <div className="flex items-center text-gray-500 text-[14px] font-semibold gap-1">
            <FaBuilding className="w-[16px] h-[16px]" />
            {regime}
          </div>
          <div className="flex items-center text-gray-500 text-[14px] font-semibold gap-1">
            <MdEqualizer className="w-[16px] h-[16px]" />
            {nivel}
          </div>
          <div className="flex items-center text-gray-500 text-[14px] font-semibold gap-1">
            <MdAssignment className="w-[16px] h-[16px]" />
            {contrato}
          </div>
        </div>

        <div className="flex items-center text-gray-500 gap-1">
          <TiLocation className="min-w-[16px] min-h-[16px]" />
          <div className="truncate text-[14px] font-semibold text-ellipsis overflow-hidden max-w-[195px]">
            {endereco}
          </div>
        </div>

        <div className="w-full text-center p-2">
          <Link href="/anuncio">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded transition-all duration-150 ease-in-out">
            Visualizar
          </button>
          </Link>
        </div>
      </div>
    )
}

export default Blocos