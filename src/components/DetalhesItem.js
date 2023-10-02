import React from 'react'

function DetalhesItem({ title, value }) {
  return (
    <div className="flex items-center font-semibold gap-1">
            <h1 className="mr-1 text-gray-950">{title}:</h1>
            <h2 className="text-gray-500">{value}</h2>
          </div>
  )
}

export default DetalhesItem