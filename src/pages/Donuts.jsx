/* eslint-disable react-hooks/exhaustive-deps */
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import Controls from '../components/Ui/Controls';
import DonutCard from '../components/Donuts/DonutCard';
import {
  AddUserButton,
  HistoryButton,
  HomeButton,
} from '../components/Buttons/Buttons';

const Donuts = () => {
  const { donuts, currentUser, CheckIfUserExist } = useAppContext();

  useEffect(() => {
    CheckIfUserExist();
  }, []);

  return (
    currentUser && (
      <div className="h-[90%] max-w-96 mx-auto">
        <Controls>
          <HomeButton />
          <HistoryButton />
          <AddUserButton />
        </Controls>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="mt-8"
        >
          {donuts &&
            donuts.map((donut) => (
              <SwiperSlide key={donut.id}>
                <DonutCard donut={donut} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    )
  );
};

export default Donuts;
