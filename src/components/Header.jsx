import React, { useState } from 'react';
import logo from '../assets/images/logo.png'; // 로고 이미지 import

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

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="#" tabIndex="0">
            <img src={logo} alt="남도맛기행 축제 로고" />
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
                <a href="#" className="menu-link" tabIndex="0">{menu}</a>
                {activeMenu === menu && (
                  <ul className="sub-menu">
                    {menuData[menu].map((subMenu) => (
                      <li key={subMenu}>
                        <a href="#" className="sub-menu-link" tabIndex="0">{subMenu}</a>
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