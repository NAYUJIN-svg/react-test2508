import React, { useState } from 'react';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  // 메뉴 데이터
  const menuData = {
    '협회소개': ['인사말', '명인', '오시는길'],
    '행사안내': ['요리경연대회', '전시참가', '참가신청'],
    '홍보마당': ['축제소식', '보도자료', '레시피'],
    '회원마당': ['Q&A', '사진갤러리', '공지사항']
  };

  // 메뉴 호버 처리
  const handleMenuHover = (menu) => {
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  // SVG 로고 컴포넌트
  const LogoSVG = () => (
    <svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:'#ffeb3b', stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:'#ffc107', stopOpacity:1}} />
        </linearGradient>
      </defs>
      <rect x="5" y="10" width="190" height="40" rx="20" fill="url(#logoGradient)" stroke="#ffffff" strokeWidth="2"/>
      <text x="100" y="27" fontFamily="'Noto Sans KR', sans-serif" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#2c5530">남도맛기행</text>
      <text x="100" y="42" fontFamily="'Noto Sans KR', sans-serif" fontSize="9" textAnchor="middle" fill="#2c5530">NAMDO FESTIVAL</text>
    </svg>
  );

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="#" tabIndex="0" onClick={(e) => e.preventDefault()}>
            <LogoSVG />
          </a>
        </div>
        <nav className="navigation">
          <ul className="main-menu">
            {Object.keys(menuData).map((menu) => (
              <li 
                key={menu}
                className="menu-item"
                onMouseEnter={() => handleMenuHover(menu)}
                onMouseLeave={handleMenuLeave}
              >
                <a href="#" className="menu-link" tabIndex="0" onClick={(e) => e.preventDefault()}>
                  {menu}
                </a>
                {activeMenu === menu && (
                  <ul className="sub-menu">
                    {menuData[menu].map((subMenu) => (
                      <li key={subMenu}>
                        <a href="#" className="sub-menu-link" tabIndex="0" onClick={(e) => e.preventDefault()}>
                          {subMenu}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;