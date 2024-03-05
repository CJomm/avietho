import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import AnnouncementCard, { lengthRuler } from "./AnnouncementCard";

export interface AnnouncementInterface {
  id: number;
  title: { rendered: string };
  date: string;
  link: string;
  content: { rendered: string };
  featured_media: number;
}

const ANNOUNCEMENTS_ENDPOINT = "";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        if (lengthRuler(announcements)) {
          const response = await axios.get(ANNOUNCEMENTS_ENDPOINT);

          const data = response.data;

          setAnnouncements(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    // fetchAnnouncements();
  }, []);

  return (
    <div className="container">
      <div className="my-5 text-center">
        <h2 className="mt-lg-5">ANNOUNCEMENTS</h2>
        <Swiper
          spaceBetween={1}
          slidesPerView={4}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
        >
          {Array(9)
            .fill(0)
            .map((_, index) => (
              <SwiperSlide>
                <AnnouncementCard />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Announcements;
