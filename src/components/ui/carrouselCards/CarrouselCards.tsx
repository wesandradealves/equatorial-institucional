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
  currentIndex = 1,
  onChangeIndex,
}) => {
  const WIDTH_COLUMN = 982;
  const [selectedIndex, setSelectedIndex] = useState<number>(currentIndex);
  const [scrollPosition, setScrollPosition] = useState({
    scrollTop: 0,
    scrollLeft: 0,
  });
  const scrollCarrosuelRef = useRef(null);
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    setSelectedIndex(currentIndex);
    // window.addEventListener("scroll", handleScroll, { passive: true });

    // const container = document.getElementsByClassName("carrousel-cards")[0];
    // const middle = container.children[1];
    // middle.scrollIntoView();
  }, []);

  const changeIndex = (index: number) => {
    setSelectedIndex(index);
    if (onChangeIndex) {
      onChangeIndex(index);
    }
  };

  const next = () => {
    // if (currentIndex < images.length - 1) {
      if (swiperRef.current) swiperRef.current?.swiper.slideNext();
      currentIndex++;
      changeIndex(currentIndex);

      // const container = document.getElementsByClassName("carrousel-cards")[0];
      // const middle = container.children[currentIndex];
      // middle.scrollIntoView();
    // } else {
      // currentIndex = 0;
      // changeIndex(currentIndex);

      // const container = document.getElementsByClassName("carrousel-cards")[0];
      // const middle = container.children[currentIndex];
      // middle.scrollIntoView();
    // }
    // handleNextScroll();
  };

  const previous = () => {
    if (currentIndex > 0) {
      currentIndex--;
      changeIndex(currentIndex);
      if (swiperRef.current) swiperRef.current?.swiper.slidePrev();
      // const container = document.getElementsByClassName("carrousel-cards")[0];
      // const middle = container.children[currentIndex];
      // middle.scrollIntoView();
    }
  };

  const handleNextScroll = () => {
    scrollPosition.scrollLeft += WIDTH_COLUMN;
    setScrollPosition(scrollPosition);
    handleScroll();
  };

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
        slidesPerView={1.5}
        centeredSlides={true}
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        allowSlidePrev={false}
        loop={true}
        onSlideChange={() => {
          console.log("ref");
        }}
        onSwiper={(swiper) => {
          swiper = swiper;
        }}
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

{
  /* <p>currentIndex: {currentIndex}</p> */
}
{
  /* <p>scrollPosition: {scrollPosition.scrollLeft}</p> */
}
{
  /* <p>Item {Math.ceil((index * 982) / 1884)}</p> */
}
// className={`${["card-image"]} ${currentIndex === index ? styles.active : ''}`}

export default CarrouselCards;
