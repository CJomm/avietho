import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

const ANNOUNCEMENTS_ENDPOINT = "";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(ANNOUNCEMENTS_ENDPOINT);

        const data = response.data;

        setAnnouncements(data);
      } catch (error) {
        console.log(error);
      }
    };

    // fetchAnnouncements();
  }, []);

  return (
    <div className="container">
      <div>
        <Swiper
          spaceBetween={15}
          slidesPerView={3}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          className="mySwiper"
        >
          {Array(9)
            .fill(0)
            .map((_, index) => (
              <SwiperSlide>
                <div key={index}>hi</div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Announcements;
