import React from "react"
import useBackground from "../custom-hooks/useBackground"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper"
import data from "../data.json"
import "../css/crew.css"

const Crew = () => {
  const Image = useBackground()
  document.body.style.backgroundImage = `url(${Image})`
  const { crew } = data
  return (
    <section className='crew'>
      <div className='header'>
        <h3 className='span' aria-hidden='true'>
          02
        </h3>
        <h3>meet your crew </h3>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
          el: ".my-custom-pagination-div",
          renderBullet: (index, className) => {
            return `<span class= ${className}> </span>`
          },
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        {crew.map((item, index) => {
          const { name, images, role, bio } = item
          return (
            <SwiperSlide key={index}>
              <div className='flex'>
                <div className='img-parent'>
                  <img src={images.webp} alt='crew' />
                </div>
                <div className='inner-flex'>
                  <div className='my-custom-pagination-div' />
                  <article className='main-content'>
                    <h3 className='role'>{role}</h3>
                    <h1 className='name'>{name}</h1>
                    <p className='bio'>{bio}</p>
                  </article>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Crew
