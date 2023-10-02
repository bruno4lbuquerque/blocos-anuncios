import React from 'react'

function PreencherCurriculo({ title }) {
  return (
    <div>
        <h1 className="text-[14px] font-semibold">
                {title} 
            </h1>
            <input className="w-full text-[14px] text-slate-950 bg-gray-200 p-2 shadow-inner rounded-lg"></input>    
    </div>
    
    
    )
}

export default PreencherCurriculo