import React from 'react'

export default function Cart({info}) {

  return (
    <div>
        <div className="card w-96 bg-base-100">
  <figure><img className='w-96 h-72 object-cover fill' src={info.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-4xl font-bold text-center text-red-600">
      {info.detail}
      
    </h2>
    <p className='font-bold text-3xl text-black'>{info.worker_name}</p>
    
  </div>
</div>
    </div>
  )
}
