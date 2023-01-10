import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Slideshow.scss';

const Slideshow = (props) => {
  const { images, auto, showArrows } = props;
  const [state, setState] = useState({
    slideShow: images[0],
    slideIndex: 0
  });

  const [sliderInterval, setSliderInterval] = useState(0);

  const { slideShow, slideIndex } = state;
  let currentSlideIndex = 0;

  useEffect(() => {
    if (auto) {
      const timeInterval = setInterval(() => {
        autoMoveSlide();
      }, 5000);
      setSliderInterval(timeInterval);

      return () => {
        clearInterval(timeInterval);
        clearInterval(sliderInterval);
      };
    }
  }, []);

  const autoMoveSlide = () => {
    let lastIndex = 0;
    lastIndex = currentSlideIndex + 1;
    currentSlideIndex = lastIndex >= images.length ? 0 : lastIndex;
    setState((prev) => ({
      slideShow: images[currentSlideIndex],
      slideIndex: currentSlideIndex
    }));
  };

  const moveSlideWithArrows = (type) => {
    let index = slideIndex;
    if (type === 'prev') {
      if (slideIndex <= 0) {
        index = images.length - 1;
      } else {
        index -= 1;
      }
    }
    if (type === 'next') {
      if (slideIndex >= images.length - 1) {
        index = 0;
      } else {
        index += 1;
      }
    }
    // setCurrentIndex(index);
    setState((prev) => ({
      slideShow: images[index],
      slideIndex: index
    }));
  };

  const RenderArrows = () => {
    return (
      <div className="slider-arrows">
        <div
          className="slider-arrow slider-arrow--left"
          onClick={() => {
            moveSlideWithArrows('prev');
          }}
        />
        <div
          className="slider-arrow slider-arrow--right"
          onClick={() => {
            moveSlideWithArrows('next');
          }}
        />
      </div>
    );
  };

  const Indicators = (props) => {
    // eslint-disable-next-line react/prop-types
    const { currentSlide } = props;
    const listIndicators = images.map((slide, i) => {
      const butnClasses = i === currentSlide ? 'slider-navButton slider-navButton--active' : 'slider-navButton';
      return <button className={butnClasses} key={i} />;
    });
    return <div className="slider-nav">{listIndicators}</div>;
  };

  return (
    <div className="slider">
      <div className="slider-slides">
        {images && images.length && slideShow && (
          <div className="slider-image" style={{ backgroundImage: `url(${slideShow.url})` }}></div>
        )}
      </div>
      <Indicators currentSlide={slideIndex} />
      {showArrows ? <RenderArrows /> : null}
    </div>
  );
};

Slideshow.propTypes = {
  images: PropTypes.array.isRequired,
  auto: PropTypes.bool.isRequired,
  showArrows: PropTypes.bool.isRequired,
  currentSlide: PropTypes.number
};

export default Slideshow;
