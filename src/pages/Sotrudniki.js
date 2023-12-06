import Sotrudnik from "../components/Sotrudnik_card";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import { motion, useInView } from "framer-motion";



// Import Swiper styles
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




export default function Sotrudniki() {

  const anim = {
    hidden: { opacity: 0, },
    show: {
      opacity: 1,
      transition: { duration: 2 }
    },
  }
  const targetRef = useRef(null);
  const isInView = useInView(targetRef, { once: true });

  let prepodi = [{ name: <div className="Prepodiii">Дыптан <br />Елена Арнольдовна</div>, title: 'cтарший преподаватель', title2: '' }
    , { name: <div className="Prepodiii">Беляев <br />Игорь Сергеевич</div>, title: 'Доцент', title2: 'Кандидат экономических наук' },
  { name: <div className="Prepodiii">Петров <br />Алексей Михайлович</div>, title: 'Доцент', title2: '' }
    , { name: <div className="Prepodiii">Бодрякова <br />Людмила Николаевна</div>, title: 'Доцент', title2: 'Кандидат технических наук' },
  { name: <div className="Prepodiii">Фаддееенков <br />Андрей Владимирович</div>, title: 'Доцент', title2: 'Кандидат технических наук' }
    , { name: <div className="Prepodiii">Попкова <br />Алла Алексеевна</div>, title: 'Доцент', title2: 'Кандидат технических наук' },
  { name: <div className="Prepodiii">Феденко <br />Антон Олегович</div>, title: 'Ассистент', title2: '' }
    , { name: <div className="Prepodiii">Бут <br />Владислав Владимирович</div>, title: 'доцент', title2: '' },
  { name: <div className="Prepodiii">Цуканов <br />Глеб Константинович</div>, title: 'ассистент', title2: '' }]

  return <motion.div ref={targetRef} initial={'hidden'} animate={isInView ? 'show' : 'none'} variants={anim}>
    <div className='Text logo' id='Sotrud' style={{ textAlign: 'center', fontSize: '70px', margin: '150px 0 100px 0', zIndex: 1 }}>Сотрудники</div>
    <Swiper
      spaceBetween={0}
      centeredSlides={true}

      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Navigation]}
      slidesPerView={3}
      className="mySwiper"
    >
      <SwiperSlide><Sotrudnik prepod={prepodi[0]} /></SwiperSlide>
      <SwiperSlide><Sotrudnik prepod={prepodi[1]} /></SwiperSlide>
      <SwiperSlide><Sotrudnik prepod={prepodi[2]} /></SwiperSlide>
      <SwiperSlide><Sotrudnik prepod={prepodi[3]} /></SwiperSlide>
      <SwiperSlide><Sotrudnik prepod={prepodi[4]} /></SwiperSlide>
      <SwiperSlide><Sotrudnik prepod={prepodi[5]} /></SwiperSlide>
      <SwiperSlide><Sotrudnik prepod={prepodi[6]} /></SwiperSlide>
      <SwiperSlide><Sotrudnik prepod={prepodi[7]} /></SwiperSlide>
      <SwiperSlide><Sotrudnik prepod={prepodi[8]} /></SwiperSlide>
    </Swiper>


  </motion.div>
}