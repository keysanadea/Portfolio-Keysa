"use client";

import { Navbar } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Hometown() {
  return (
    <div>
      <div className="bg-[url('/img/hometown_bg.png')] bg-cover h-fit md:h-screen overflow-hidden">
        <Navbar></Navbar>
        <div className="flex flex-col h-fit w-full py-10 space-y-10 md:h-full md:flex-row md:justify-center md:items-center lg:space-x-12">
          <div className="flex items-center mx-auto md:hidden">
            <iframe
              src="https://maps.google.com/maps?q=Bojonegoro&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              style={{ overflow: "hidden" }}
            ></iframe>
          </div>
          <div className="flex flex-col h-fit text-center w-[80%] lg:w-[40%] mx-auto">
            <h1 className="flex font-bold text-3xl justify-center p-5 md:justify-start">
              Bojonegoro
            </h1>
            <p className="text-2xl p-5 md:text-justify">
              Bojonegoro adalah sebuah kabupaten yang terletak di provinsi Jawa
              Timur, Indonesia. Kabupaten ini memiliki sejumlah atraksi wisata
              dan kuliner yang menarik bagi para pengunjung. Berikut adalah
              beberapa informasi mengenai Bojonegoro:
            </p>
          </div>
          <div className="hidden lg:flex md:m-auto md:p-5">
            <iframe
              src="https://maps.google.com/maps?q=Bojonegoro&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              style={{ overflow: "hidden" }}
              width={480}
              height={480}
            ></iframe>
          </div>
        </div>
        
      </div>
      <div className="bg-[url('/img/hometown_bg_1.png')] h-fit bg-cover md:h-screen">
        <div className="flex flex-col h-fit py-10 space-y-10 md:h-full md:flex-row md:justify-center md:items-center lg:space-x-12">
        
          <div className="lg:flex items-center mx-auto w-[30%] lg:w-[30%] md:p-5 md:hidden lg:mx-0 hover:scale-110">
            <img src="/img/kuliner_img.png"></img>
          </div>
          <div className="flex flex-col h-fit w-[80%] lg:w-[40%] md:mx-auto swiper">
            <h1 className="flex font-bold text-3xl text-center justify-center p-5 md:justify-start">
              Kuliner di Bojonegoro
            </h1>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              scrollbar={{ draggable: true }}
              className="cursor-pointer"
            >
              <SwiperSlide>
                <p className="text-2xl text-center p-5 md:text-justify pb-10">
                  <span className="font-bold"> &quot;Bakso Pak Gendut&quot; </span> Bakso
                  adalah hidangan bakso yang sangat populer di Indonesia. Bakso
                  Pak Gendut adalah salah satu warung bakso terkenal di
                  Bojonegoro. Rasanya yang lezat dan tekstur baksonya yang
                  kenyal menjadikannya pilihan yang populer di kalangan penduduk
                  setempat dan pengunjung.
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="text-2xl text-center p-5 md:text-justify pb-10">
                  <span className="font-bold"> &quot;Lalapan Ikan Wader&quot; </span> Ikan
                  Wader adalah ikan air tawar yang sering ditemukan di Sungai
                  Bengawan Solo, yang melintasi Bojonegoro. Lalapan ikan Wader
                  adalah hidangan yang menggunakan ikan ini sebagai bahan utama
                  dan biasanya disajikan dengan sambal serta pelengkap lainnya.
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="text-2xl text-center p-5 md:text-justify pb-10">
                  <span className="font-bold"> &quot;Soto Rajawali&quot; </span> Soto
                  Rajawali adalah varian soto ayam khas Bojonegoro. Salah satu
                  ciri khasnya adalah penggunaan santan, yang memberikan rasa
                  kaya dan lembut pada kuah soto. Tambahannya berupa toge pendek
                  (kecambah) juga menambah citarasa yang unik. Hidangan ini
                  menjadi favorit wisatawan yang ingin mencicipi kuliner lokal
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="bg-[url('/img/hometown_bg.png')] h-fit bg-cover md:h-screen">
        <div className="flex flex-col h-fit py-10 space-y-10 md:h-full md:flex-row md:justify-center md:items-center lg:space-x-12">
          <div className="flex-col w-[30%] m-auto space-y-10 md:hidden hover:scale-110">
            <img src="/img/tourist_img.png"></img>
          </div>
          <div className="flex flex-col h-fit w-[80%] lg:w-[40%] swiper">
            <h1 className="flex font-bold text-3xl text-center justify-center p-5 md:justify-start ">
              Wisata di Bojonegoro
            </h1>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              scrollbar={{ draggable: true }}
              className="cursor-pointer"
            >
              <SwiperSlide>
                <p className="text-2xl text-center p-5 md:text-justify pb-10">
                  <span className="font-bold">&quot;Museum Bojonegoro&quot;</span> Museum
                  ini merupakan tempat yang baik untuk memahami sejarah dan
                  budaya Bojonegoro. Anda dapat melihat berbagai koleksi artefak
                  sejarah, seni, dan budaya yang ada di sini.
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="text-2xl text-center p-5 md:text-justify pb-10">
                  <span className="font-bold">&quot;Air Terjun Coban Talun&quot;</span>{" "}
                  Air terjun ini terletak di Desa Randugunting, Kecamatan
                  Kalitidu, Bojonegoro. Coban Talun menawarkan pemandangan alam
                  yang indah dan suasana yang tenang.
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="text-2xl text-center p-5 md:text-justify pb-10">
                  <span className="font-bold">&quot;Taman Budaya Bojonegoro&quot;</span>{" "}
                  Tempat ini sering digunakan untuk pertunjukan seni dan budaya
                  lokal. Pengunjung dapat menikmati berbagai acara seni
                  tradisional dan modern di sini.
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="text-2xl text-center p-5 md:text-justify pb-10">
                  <span className="font-bold">&quot;Goa Lowo&quot;</span> Goa ini memiliki
                  keunikan dengan banyaknya kelelawar yang berdiam di dalamnya.
                  Terletak di Desa Ringinagung, Kecamatan Kapas, Goa Lowo
                  menjadi tempat menarik bagi para pecinta alam.
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="hidden lg:flex md:w-[30%] hover:scale-110">
            <img src="/img/tourist_img.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
