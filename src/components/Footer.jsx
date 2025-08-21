import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/images/logo.png" alt="남도맛기행 축제 로고" className="grayscale" />
        </div>
        <div className="footer-menu">
          <a href="#" tabIndex="0">개인정보처리방침</a>
          <a href="#" tabIndex="0">이용약관</a>
          <a href="#" tabIndex="0">사이트맵</a>
          <a href="#" tabIndex="0">관리자</a>
        </div>
        <div className="copyright">
          <p>&copy; 2025 남도맛기행 축제. All rights reserved.</p>
          <p>주소: 전라남도 00시 00구 00로 123 | 전화: 061-000-0000</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;