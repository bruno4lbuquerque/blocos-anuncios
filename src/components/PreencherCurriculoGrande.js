import React from 'react'

function PreencherCurriculoGrande({ title }) {
  return (
    <div>
        <h1 className="text-[14px] font-semibold">
                {title} 
            </h1>
            <textarea className="w-full h-[200px] text-[14px] text-slate-950 bg-gray-200 p-2 rounded-lg resize-none"></textarea>    
    </div>
    
    
    )
}

export default PreencherCurriculoGrande