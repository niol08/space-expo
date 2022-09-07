import React from "react"
import { useState } from "react"
import useBackground from "../custom-hooks/useBackground"
import data from "../data.json"
import "../css/technology.css"

const Technology = () => {
  const [value, setvalue] = useState(0)

  const Image = useBackground()
  document.body.style.backgroundImage = `url(${Image})`

  const { technology } = data
  const { name, images, description } = technology[value]
  return (
    <section className='technology'>
      <div className='header'>
        <h3 className='span' aria-hidden='true'>
          03
        </h3>
        <h3>space launch 101</h3>
      </div>
      <div className='flex'>
        <div className='img-parent'>
          <img src={images.landscape} alt='destination' className='landscape' />
          <img src={images.portrait} alt='destination' className='portrait' />
        </div>
        <div className='btn-parent'>
          {technology.map((item, index) => {
            return (
              <button
                key={item.id}
                className={`btn ${index === value && "active-btn"}`}
                onClick={() => {
                  setvalue(index)
                }}
              >
                {item.id}
              </button>
            )
          })}
        </div>
        <article className='main-content'>
          <h3 className='term'> the terminology...</h3>
          <h1 className='name'>{name}</h1>
          <p className='desc'>{description}</p>
        </article>
      </div>
    </section>
  )
}

export default Technology
