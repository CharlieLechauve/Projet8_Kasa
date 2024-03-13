import React, { useState } from "react";

function Slider({ slides }) {
  
  const [current, setCurrent] = useState(0); 
  const length = slides.length; 

  
  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1); 
  };
  
  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1); 
  };

  if (!Array.isArray(slides) || slides.length <= 0) {

    return null;
  }
  return (
    <section className="slide">
      {length > 1 && (
        <p className="left-Arrow" onClick={prevImage}>
        </p>
      )}
      {length > 1 && (
        <p className="right-Arrow" onClick={nextImage}>
        </p>
      )}
      {slides.map((image, index) => {
        return (
          <div
            key={index}
            className={index === current ? "slider" : "slider"}
          >
            {index === current && (
              <img src={image} alt="img-appartement" className="slider__image" />
            )}
            {length > 1 && (
              <span className="slider__number">
                {current + 1}/{length}
              </span>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Slider;