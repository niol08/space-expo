import React from "react"
import { useState } from "react"
import useBackground from "../custom-hooks/useBackground"
import data from "../data.json"
import "../css/destination.css"

const Destination = () => {
  const [value, setvalue] = useState(0)

  const Image = useBackground()
  document.body.style.backgroundImage = `url(${Image})`
  const { destinations } = data
  const { name, images, description, distance, travel } = destinations[value]
  return (
    <section className='destination'>
      <div className='header'>
        <h3 className='span' aria-hidden='true'>
          01
        </h3>
        <h3>Pick your destination </h3>
      </div>
      <div className='flex'>
        <div className='img-parent'>
          <img src={images.webp} alt='destination' />
        </div>
        <section className='main-content'>
          <div className='btn-parent'>
            {destinations.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`btn ${index === value && "active-btn"}`}
                  onClick={() => {
                    setvalue(index)
                  }}
                >
                  {item.name}
                </button>
              )
            })}
          </div>
          <h1 className='name'>{name}</h1>
          <p className='description'>{description}</p>
          <div className='subheader'>
            <div className='subheader-content'>
              <h5>avg. distance</h5>
              <p>{distance}</p>
            </div>
            <div className='subheader-content'>
              <h5>est. travel time</h5>
              <p>{travel}</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Destination
