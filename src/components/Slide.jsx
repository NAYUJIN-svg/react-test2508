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
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              transform: `translateX(${(index - currentSlide) * 100}%)`,
              opacity: index === currentSlide ? 1 : 0
            }}
          >
            {/* 이미지 위 오버레이 */}
            <div className="slide-overlay"></div>
            
            {/* 슬라이드 콘텐츠 */}
            <div className="slide-content">
              <h2 className="slide-title">{slide.title}</h2>
              <p className="slide-subtitle">{slide.subtitle}</p>
            </div>
          </div>
        ))}
        
        {/* 슬라이드 인디케이터 */}
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              aria-label={`슬라이드 ${index + 1}로 이동`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slide;