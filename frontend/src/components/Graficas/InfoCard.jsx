import React from 'react'

const InfoCard = ({ title, description, style }) => {
  return (
    <div className='absolute bg-white p-4 rounded-lg shadow-md' style={style}>
        <h2 className='text-lg font-bold mb-2'>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default InfoCard
