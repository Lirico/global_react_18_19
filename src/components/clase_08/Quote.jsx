import React from 'react'

const Quote = ({pokemon}) => {

    const {img, name, type} = pokemon;
  return (
    <>
        <div className='pokemon_card' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img src={img} alt="" width="200" />
            <h3>{name}</h3>
            <h4>{type}</h4>
        </div>
    </>
  )
}

export default Quote