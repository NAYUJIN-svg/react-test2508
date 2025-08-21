import React from 'react';

const Footer = () => {
  // SVG 로고 컴포넌트 (그레이스케일)
  const FooterLogoSVG = () => (
    <svg width="200" height="50" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="8" width="190" height="34" rx="17" fill="#666666" stroke="#999999" strokeWidth="1"/>
      <text x="100" y="22" fontFamily="'Noto Sans KR', sans-serif" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#999999">남도맛기행</text>
      <text x="100" y="35" fontFamily="'Noto Sans KR', sans-serif" fontSize="8" textAnchor="middle" fill="#999999">NAMDO FESTIVAL</text>
    </svg>
  );

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <FooterLogoSVG />
        </div>
        <div className="footer-menu">
          <a href="#" tabIndex="0" onClick={(e) => e.preventDefault()}>개인정보처리방침</a>
          <a href="#" tabIndex="0" onClick={(e) => e.preventDefault()}>이용약관</a>
          <a href="#" tabIndex="0" onClick={(e) => e.preventDefault()}>사이트맵</a>
          <a href="#" tabIndex="0" onClick={(e) => e.preventDefault()}>관리자</a>
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