import { useEffect, useRef, useState } from "react";
import CardImage from "../cardImage/CardImage";
import "./CarrouselCards.scss";
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

export interface CardIniciativaItem {
  tag?: string;
  title?: string;
  body?: string;
  url?: string;
  rich?: string;
}

interface CarrouselCardsProps {
  images: CardIniciativaItem[];
  currentIndex: number;
  onChangeIndex?: (index: number) => void;
}

const CarrouselCards: React.FC<CarrouselCardsProps> = ({
  images,
  currentIndex,
  onChangeIndex,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(currentIndex);
  const [scrollPosition, setScrollPosition] = useState({
    scrollTop: 0,
    scrollLeft: 0,
  });
  const scrollCarrosuelRef = useRef(null);
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    changeIndex(currentIndex);
  }, []);

  const changeIndex = (index: number) => {
    setSelectedIndex(index);
    if (onChangeIndex) {
      onChangeIndex(index);
    }
  };

  const next = () => {
    if (swiperRef.current) swiperRef.current?.swiper.slideNext();
    currentIndex++;
    changeIndex(currentIndex);
  };

  const previous = () => {
    if (currentIndex > 0) {
      currentIndex--;
      changeIndex(currentIndex);
      if (swiperRef.current) swiperRef.current?.swiper.slidePrev();
    }
  };

  // const handleNextScroll = () => {
  //   scrollPosition.scrollLeft += WIDTH_COLUMN;
  //   setScrollPosition(scrollPosition);
  //   handleScroll();
  // };

  const handleScroll = () => {
    if (scrollCarrosuelRef.current) {
      const { scrollTop, scrollLeft } = scrollCarrosuelRef.current;
      setScrollPosition({ scrollTop, scrollLeft });
      //   const WIDTH_COLUMN = 982;
      //   const fullWidth = window.outerWidth;
      //   const calc = Math.ceil(currentIndex * WIDTH_COLUMN / fullWidth);
    }
  };

  return (
    <div
      className={"carrousel-cards"}
      // ref={scrollCarrosuelRef}
      // onScroll={handleScroll}
    >
      <Swiper
        ref={swiperRef}
        spaceBetween={0}
        // slidesPerView={1.5}
        breakpoints={{
          768: {
            slidesPerView: 1.5,
          },
          360: {
            slidesPerView: 1.2
          }
        }}
        centeredSlides={true}
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        // allowSlidePrev={false}
        rewind={true}
        // loop={true}
        onSlideChange={() => {

        }}
        onSwiper={(swiper) => {}}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <CardImage
              tag={item.tag}
              title={item.title}
              body={item.body}
              imageUrl={item.url}
              richText={item.rich}
              index={index}
              currentIndex={currentIndex}
              onChangeIndex={() => {
                next();
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarrouselCards;
