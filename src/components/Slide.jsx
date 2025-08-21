import React from 'react';

const Slide = ({ slides, currentSlide }) => {
  return (
    <section className="slide-section">
      <div className="slide-container">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: `translateX(${(index - currentSlide) * 100}%)`
            }}
          >
            <div className="slide-content">
              <h2 className="slide-title">{slide.title}</h2>
              <p className="slide-subtitle">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slide;