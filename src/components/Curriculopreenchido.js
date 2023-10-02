import React from 'react'

function Curriculopreenchido({ title, value }) {
  return (
    <div>
        <h1 className="text-[14px] text-gray-500 font-semibold">
                {title} 
            </h1>
        <h2 className="w-full text-gray-950 bg-gray-200 p-2 shadow-inner rounded-lg">{value}</h2>    
    </div>
    
    
    )
}

export default Curriculopreenchido;