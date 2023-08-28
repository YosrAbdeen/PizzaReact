import React from 'react'


function MenuItem({image, name, ingredients, price}) {
  return (
    <div className='menuItem'>
   <div style={{ backgroundImage: `url('${image}')` }}></div>
      <h1>{name}</h1>
      <h2>{ingredients}</h2>
      <p>${price}</p>
    </div>
  )
}

export default MenuItem
