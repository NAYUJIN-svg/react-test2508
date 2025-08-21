import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Slide from './components/Slide';
import Footer from './components/Footer';
import './styles/App.css';

// 임시 테스트용 온라인 이미지 (파일이 없을 경우 사용)
// import slide1 from './assets/images/slide1.jpg';
// import slide2 from './assets/images/slide2.jpg';
// import slide3 from './assets/images/slide3.jpg';
// import gallery1 from './assets/images/gallery1.jpg';
// import gallery2 from './assets/images/gallery2.jpg';
// import gallery3 from './assets/images/gallery3.jpg';

// 임시 이미지 URL
const slide1 = 'https://picsum.photos/1200/500?random=1';
const slide2 = 'https://picsum.photos/1200/500?random=2';
const slide3 = 'https://picsum.photos/1200/500?random=3';
const gallery1 = 'https://picsum.photos/400/300?random=4';
const gallery2 = 'https://picsum.photos/400/300?random=5';
const gallery3 = 'https://picsum.photos/400/300?random=6';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  // 슬라이드 데이터 (import한 이미지 사용)
  const slides = [
    {
      id: 1,
      image: slide1,  // import한 이미지 사용
      title: '남도의 맛을 만나다',
      subtitle: '전통 음식의 진수를 경험하세요'
    },
    {
      id: 2,
      image: slide2,  // import한 이미지 사용
      title: '축제의 흥겨움',
      subtitle: '민속놀이와 공연이 어우러진 축제'
    },
    {
      id: 3,
      image: slide3,  // import한 이미지 사용
      title: '요리경연대회',
      subtitle: '최고의 요리사들이 펼치는 경연'
    }
  ];

  // 공지사항 데이터
  const notices = [
    { id: 1, title: '2025년 남도맛기행 축제 개최 안내', date: '2025-08-20' },
    { id: 2, title: '요리경연대회 참가 신청 안내', date: '2025-08-19' },
    { id: 3, title: '축제 자원봉사자 모집', date: '2025-08-18' },
    { id: 4, title: '전시 부스 임대 안내', date: '2025-08-17' }
  ];

  // 갤러리 이미지 (import한 이미지 사용)
  const galleryImages = [
    gallery1,  // import한 이미지 사용
    gallery2,
    gallery3
  ];

  // 슬라이드 자동 전환
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // 팝업 열기
  const openPopup = () => {
    setShowPopup(true);
  };

  // 팝업 닫기
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="app">
      <Header />
      <Slide slides={slides} currentSlide={currentSlide} />
      
      {/* Contents */}
      <section className="contents">
        <div className="contents-container">
          {/* 공지사항 */}
          <div className="notice-section">
            <h3 className="section-title">공지사항</h3>
            <ul className="notice-list">
              {notices.map((notice, index) => (
                <li key={notice.id} className="notice-item">
                  <a 
                    href="#" 
                    className="notice-link"
                    onClick={index === 0 ? openPopup : undefined}
                  >
                    <span className="notice-title">{notice.title}</span>
                    <span className="notice-date">{notice.date}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 갤러리 */}
          <div className="gallery-section">
            <h3 className="section-title">사진갤러리</h3>
            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image} alt={`갤러리 이미지 ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* 배너 */}
          <div className="banner-section">
            <div className="banner">
              <h4>2025 남도맛기행 축제</h4>
              <p>전통과 현대가 만나는 특별한 축제</p>
              <a href="#" className="banner-btn">참가신청</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* 레이어 팝업 */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <div className="popup-header">
              <h3>2025년 남도맛기행 축제 개최 안내</h3>
              <button className="close-btn" onClick={closePopup}>×</button>
            </div>
            <div className="popup-content">
              <p>2025년 남도맛기행 축제가 오는 10월 15일부터 17일까지 3일간 전라남도 일원에서 개최됩니다.</p>
              <p>이번 축제에서는 전통 음식 시식회, 요리경연대회, 민속놀이, 공연 등 다양한 프로그램이 준비되어 있습니다.</p>
              <p>많은 관심과 참여 부탁드립니다.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;