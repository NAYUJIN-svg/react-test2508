
# 남도맛기행 축제 웹사이트

웹디자인개발기능사 시험 문제를 기반으로 제작된 "남도맛기행 축제" 공식 웹사이트입니다.

## 📋 프로젝트 개요

- **주제**: 남도맛기행 축제 홍보 웹사이트
- **기술스택**: React, HTML5, CSS3, JavaScript
- **반응형**: 모바일, 태블릿, 데스크톱 지원
- **웹표준**: HTML5, CSS3 준수

## 🚀 주요 기능

### 🌟 헤더 (Header)
- 반응형 로고 및 내비게이션 메뉴
- 마우스 오버 시 하이라이트 효과
- 드롭다운 서브메뉴 (부드러운 애니메이션)
- 키보드 접근성 지원 (Tab 키 네비게이션)

### 🎬 슬라이드 (Slide)
- 3개 이미지 자동 슬라이드쇼 (3초마다 전환)
- 좌우 이동 애니메이션 효과
- 텍스트 오버레이 (제목, 부제목)
- 무한 반복 슬라이드

### 📝 콘텐츠 (Contents)
- **공지사항**: 목록 표시, 첫 번째 항목 클릭 시 레이어 팝업
- **사진갤러리**: 3개 이미지 세로 배치, 호버 효과 (투명도 변화)
- **배너**: HTML/CSS로 제작된 참가신청 배너

### 🦶 푸터 (Footer)
- 그레이스케일 로고
- 하단 메뉴 링크
- 저작권 및 연락처 정보

### 🔧 기술적 특징
- HTML5 웹표준 준수
- CSS3 애니메이션 효과
- JavaScript ES6+ 문법 사용
- 반응형 웹 디자인 (모바일 우선)
- 웹 접근성 고려 (alt 속성, tabindex)

## 📁 프로젝트 구조

```
namdo-festival-website/
├── public/
│   ├── index.html
│   └── images/
│       ├── logo.png
│       ├── slide1.jpg
│       ├── slide2.jpg
│       ├── slide3.jpg
│       ├── gallery1.jpg
│       ├── gallery2.jpg
│       └── gallery3.jpg
├── src/
│   ├── components/
│   │   ├── App.jsx
│   │   ├── Header.jsx
│   │   ├── Slide.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   └── App.css
│   └── index.js
├── package.json
└── README.md
```

## 🛠️ 설치 및 실행

### 1. 프로젝트 클론
```bash
git clone https://github.com/your-username/namdo-festival-website.git
cd namdo-festival-website
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 개발 서버 실행
```bash
npm start
```

브라우저에서 `http://localhost:3000` 접속

### 4. 빌드 (배포용)
```bash
npm run build
```

## 🖼️ 이미지 설정

다음 이미지들을 `public/images/` 폴더에 추가하세요:

- **logo.png**: 헤더/푸터 로고 이미지
- **slide1.jpg**: 첫 번째 슬라이드 이미지 (800x400 권장)
- **slide2.jpg**: 두 번째 슬라이드 이미지 (800x400 권장)
- **slide3.jpg**: 세 번째 슬라이드 이미지 (800x400 권장)
- **gallery1.jpg**: 갤러리 첫 번째 이미지 (300x200 권장)
- **gallery2.jpg**: 갤러리 두 번째 이미지 (300x200 권장)
- **gallery3.jpg**: 갤러리 세 번째 이미지 (300x200 권장)

## 🎨 디자인 가이드

### 색상 팔레트
- **주조색**: #2c5530 (진한 녹색)
- **보조색**: #3a6b3e (중간 녹색)
- **강조색**: #ffeb3b (노란색)
- **배경색**: #ffffff (흰색)
- **텍스트색**: #333333 (진한 회색)

### 폰트
- **기본 폰트**: Noto Sans KR
- **백업 폰트**: Arial, sans-serif

## 📱 반응형 브레이크포인트

- **모바일**: 480px 이하
- **태블릿**: 768px 이하
- **데스크톱**: 769px 이상

## ✨ 주요 애니메이션

- 메뉴 호버 효과
- 서브메뉴 슬라이드 다운
- 슬라이드 좌우 전환
- 갤러리 이미지 호버 효과
- 레이어 팝업 페이드인

## 🔍 웹표준 및 접근성

- HTML5 시맨틱 태그 사용
- alt 속성으로 이미지 대체텍스트 제공
- tabindex로 키보드 네비게이션 지원
- 충분한 색상 대비율 유지
- 포커스 표시자 제공

## 🌐 브라우저 지원

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 제공됩니다.

## 👨‍💻 개발자

- **이름**: [nayujin]
- **이메일**: [your-email@example.com]
- **GitHub**: [https://github.com/your-username]

## 📞 문의사항

프로젝트 관련 문의사항이 있으시면 GitHub Issues를 통해 연락해 주세요.

---

**⚠️ 참고사항**
이 프로젝트는 웹디자인개발기능사 시험 문제를 바탕으로 제작된 학습용 프로젝트입니다.