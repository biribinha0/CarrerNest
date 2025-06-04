"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export default function CarrosselEmpresas() {

  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const API_URL = 'http://localhost:3001';
      const response = await fetch(`${API_URL}/empresas`);
      const empresas = await response.json();
      setEmpresas(empresas);
    };

    fetchImages();
  }, []);

  return (
    <Swiper
      spaceBetween={30}
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      modules={[Autoplay]}
    >
      {empresas.map((empresa) => (
        <SwiperSlide key={empresa.id} className="carrossel">
          <div className="d-flex justify-content-center align-items-center">
            <img
              src={empresa.logo
              className="rounded-full w-20 h-20 object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
