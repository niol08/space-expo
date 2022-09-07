import React from "react"
import "../css/home.css"
import { NavLink } from "react-router-dom"
import useBackground from "../custom-hooks/useBackground"

const Home = () => {
  const Image = useBackground()
  document.body.style.backgroundImage = `url(${Image})`
  return (
    <section className='home'>
      <div className='content'>
        <h5>So, you want to travel to</h5>
        <h1>Space</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className='explore'>
        <NavLink to='/destination'>explore</NavLink>
      </div>
    </section>
  )
}

export default Home
