import './testimonios.css';
import { Data } from './Data';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const Testimonios = () => {
  return (
    
    <section className="testimonios container section">
      <h2 className="section__title">Experiencias Compartidas</h2>
      <span className="section__subtitle">Testimonios</span>

      <Swiper className="testimonio__container"
      loop={true}
      grabCursor={true}
       slidesPerView={1}
       spaceBetween={24}
       pagination={{
         clickable: true,
       }}
       breakpoints={{
         576: {
           slidesPerView: 2,
           
         },
         768: {
           slidesPerView: 2,
           spaceBetween: 48,
         },
       }}
       modules={[Pagination]}>
      
        {Data.map(({id, image, title, description}) => {
            return (
                <SwiperSlide className="testimonio__card" key={id}>
                    <img src={image} alt=''className='testimonio__img'/>
                    <h3 className="testimonio__name">{title}</h3>
                    <p className="testimonio__description">{description}</p>
                </SwiperSlide>
            )
        })}
      </Swiper>

    </section>
      

      )


      }


export default Testimonios