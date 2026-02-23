# 🎮 PlayStation Website Renewal Project

> 공식 PlayStation 웹사이트를 사용자 중심 UI/UX와 인터랙션 중심 구조로 재해석한 프론트엔드 팀 프로젝트  
> **“게임을 하듯 몰입하게 만드는 웹 경험”**을 목표로 기획·설계·구현했습니다.

---

## 📌 1. Project Overview

### 1) 기획 배경

기존 PlayStation 공식 사이트는

- 정적인 레이아웃
- 단조로운 컬러 운용
- 텍스트 위계 부족
- 인터랙션 부재
- 웹과 콘솔 앱의 분리 구조

등의 한계로 인해 **신규 유입과 브랜드 몰입 경험이 약한 구조**였습니다.

본 프로젝트는 이를 개선하여:

- 신규 고객 유입 확대  
- 브랜드 이미지의 동적 전환  
- 웹 기반 경험 강화  

를 목표로 리뉴얼을 진행했습니다.

---

## 🎯 2. Renewal Strategy

### ✔ 문제 정의

- 텍스트 계층 구조 불명확  
- 작은 검색 필드  
- 인터랙션 단절감  
- 단일 톤 컬러 사용  
- 콘텐츠 대비 공간 비효율  

### ✔ 컨셉 키워드

- 새로움  
- 재미  
- 몰입감  
- 빛  
- 생동감  

### ✔ 리뉴얼 방향

- 메인 블루 기반 다채로운 컬러 확장  
- 타이포그래피 위계 정립  
- 하이엔드 스크롤 인터랙션 도입  
- 데이터 기반 동적 렌더링 구조 설계  

---

## 🗺 3. Site Map
```
Loading
└─ Main
├─ Login
├─ Game Detail
├─ PS5
├─ PS5 Pro
├─ Accessories
├─ Store
│ └─ Game Detail
└─ News
```
---

## 🖥 4. Core Features

### 🏠 Main Page

- Hero Video 기반 몰입형 비주얼
- GSAP + ScrollTrigger 시네마틱 인터랙션
- DualSense 가로 스크롤 섹션
- Intersection Observer 기반 성능 최적화

---

### 🛒 Store Page

- **Multi-Filtering 시스템**
  - 장르 / 가격 / 별점 / 검색어 조합
- **LocalStorage 기반 위시리스트**
- 반응형 Swiper 동적 생성/해제

---

### 🎮 Game Detail Page

- URLSearchParams 기반 단일 템플릿 전략
- games.js 중앙 데이터 관리
- 게임별 브랜딩 커스터마이징 (컬러·커서·배경 동기화)

---

### 🕹 PS5 Hardware Page

- 수학적 각도 계산 기반 Rotation UI
- 모바일 Scroll Lock 시스템
- 스크롤 위치 동기화 애니메이션

---

### 📰 News Page

- 2단계 액션 UX (모바일)
- 반응형 슬라이더 자동 전환
- 데이터 기반 외부 링크 연동

---

## ⚙ 5. Tech Stack

| Category | Stack |
|----------|--------|
| Markup | HTML5 |
| Style | CSS3 (Variable Architecture) |
| Script | JavaScript (ES6) |
| Library | GSAP / ScrollTrigger / Swiper / jQuery |
| Optimization | Intersection Observer |
| Storage | LocalStorage |

---

## 📂 6. Folder Structure

```plaintext
project-root/
├─ index.html
├─ login.html
├─ ps5.html
├─ ps5-pro.html
├─ accessories.html
├─ store.html
├─ game.html
├─ news.html
│
├─ include/
│  ├─ header.html
│  ├─ footer.html
│  └─ mobile-menu.html
│
├─ css/
│  ├─ common/
│  │  ├─ font.css
│  │  ├─ variable.css
│  │  ├─ reset.css
│  │  ├─ component.css
│  │  ├─ import.css
│  │  └─ basic-layout.css
│  └─ pages/
│     ├─ index.css
│     ├─ login.css
│     ├─ ps5.css
│     ├─ ps5-pro.css
│     ├─ accessories.css
│     ├─ store.css
│     ├─ game.css
│     └─ news.css
│
├─ js/
│  ├─ data/
│  │  └─ games.js
│  ├─ common/
│  │  ├─ import.js
│  │  ├─ header.js
│  │  └─ footer.js
│  └─ pages/
│     ├─ index/
│     │  ├─ index.js
│     │  └─ constants.js
│     ├─ login/
│     │  ├─ index.js
│     │  └─ constants.js
│     ├─ ps5/
│     │  ├─ index.js
│     │  └─ constants.js
│     ├─ ps5-pro/
│     │  ├─ index.js
│     │  └─ constants.js
│     ├─ accessories/
│     │  ├─ index.js
│     │  └─ constants.js
│     ├─ store/
│     │  ├─ index.js
│     │  └─ constants.js
│     ├─ game/
│     │  ├─ index.js
│     │  └─ selectors.js
│     └─ news/
│        ├─ index.js
│        └─ constants.js
│
├─ vendor/ (optional)
│
└─ assets/
   ├─ icon/
   ├─ img/
   └─ video/
