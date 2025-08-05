import { useState, useEffect } from "react";
import cls from "./ImageSlider.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface ImageSliderProps {
  images: string[];
  autoPlay: boolean;
  autoPlayInterval: number;
  descriptions?: string[];
}

const ImageSlider = (props: ImageSliderProps) => {
  const { images, autoPlay, autoPlayInterval, descriptions = [] } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [currentIndex, autoPlay]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  return (
    <div className={classNames(cls.sliderContainer, {}, [])}>
      <div
        className={cls.slider}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {images.map((image, index: number) => (
          <div
            key={index}
            className={cls.slide}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {/* Текстовая подпись - теперь только одна для текущего слайда */}
      {descriptions.length > 0 && (
        <div className={cls.textContainer}>
          <h4 className={cls.text}>{descriptions[currentIndex]}</h4>
        </div>
      )}

      <button
        className={classNames(cls.navButton, {}, [cls.prev])}
        onClick={goToPrev}
        aria-label="Previous slide"
      >
        <svg viewBox="0 0 24 24">
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
        </svg>
      </button>

      <button
        className={classNames(cls.navButton, {}, [cls.next])}
        onClick={goToNext}
        aria-label="Next slide"
      >
        <svg viewBox="0 0 24 24">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
        </svg>
      </button>

      <div className={cls.dotsContainer}>
        {images.map((_, index: number) => (
          <button
            key={index}
            className={classNames(
              cls.dot,
              { [cls.active]: index === currentIndex },
              []
            )}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
