# playstation - Renewal

## 프로젝트 개요

### 현재 프로젝트를 진행하는중이기때문에 미완성 프로젝트 ###
### 프로젝트 주제
*playstation** - 완전한 반응형 디자인을 갖춘 플랫폼

### 제작 목적
- **실전 웹 개발 학습**: HTML, CSS, JavaScript를 활용한 사이트 구현
- **반응형 웹 디자인 마스터**: 모바일, 태블릿, 데스크톱 모든 기기에서 완벽한 사용자 경험 제공

### 주요 타겟 사용자
- **주 사용자**: playstation 를 원하는 일반 소비자

### 사용 기술 스택
- **HTML5**: 시맨틱 마크업, 접근성 고려
- **/CSS3**: 변수를 활용한 효율적인 스타일 관리
- **JavaScript**: 기능 구현
- **Bootstrap Icons**: 아이콘 라이브러리
- **GSAP**: 스크롤 이벤트 구현
- **Swiper**: 슬라이드 구현
### 내가 맡은 섹션
- **콘솔섹션**
- **컨트롤러섹션**
- **오디오섹션**
- **plus구독섹션**



---

## 🏗️ 전체 구조 설명

### 폴더 구조

```
project-root/
├─ index.html 		#메인화면 html
├─ login.html 		#로그인화면 html
├─ ps5.html 		#PS5 기기 소개 화면 html
├─ ps5-pro.html		#PS5 Pro 기기 소개 화면 html
├─ accessories.html 	#액세서리 기기 소개 화면 html
├─ store.html 		#게임 스토어 화면 html
├─ game.html 		#게임 상세 소개 화면 html
├─ news.html 		#이달의 PS 화면 html
│
├─ include/
│  ├─ header.html 	#공통 header html
│  ├─ footer.html 	#공통 footer html
│  └─ mobile-menu.html 	#태블릿 사이즈 이하 헤더 사이드 메뉴 html
│
├─ css/
│  ├─ common/ 		#프로젝트 공통 css 폴더
│  │  ├─ font.css	#폰트 정의 css
│  │  ├─ variable.css	#변수 정의 css
│  │  ├─ reset.css	#작업 환경 초기화 css
│  │  ├─ component.css	#공통 요소 전용 css
│  │  ├─ import.css	#공통 css 및 CDN 링크 import용 css
│  │  └─ basic-layout.css	#전체 화면 공통 레이아웃 css
│  └─ pages/ 		#프로젝트 화면 전체 css 폴더
│     ├─ index.css	#메인 화면 css
│     ├─ login.css	#로그인 화면 css
│     ├─ ps5.css		#PS5 기기 소개 화면 css
│     ├─ ps5-pro.css	#PS5 Pro 기기 소개 화면 css
│     ├─ accessories.css	#액세서리 기기 소개 화면 css
│     ├─ store.css	#게임 스토어 화면 css
│     ├─ game.css	#게임 상세 소개 화면 css
│     └─ news.css	#이달의 PS 화면 css
│
├─ js/			#프로젝트 전역 js 데이터 폴더
│  ├─ data/		#프로젝트 전역 js 데이터 폴더
│  │  └─ games.js	#전체 게임 상세 정보 정의 객체 변수 js
│  ├─ common/		#프로젝트 전체페이지 공통 기능
│  │  ├─ import.js 	 # 라이브러리 cdn 주소 불러오기 및 시스템 전체 공통 기능
│  │  ├─ header.js
│  │  └─ footer.js
│  └─ pages/		#프로젝트 화면 전체 js 폴더
│     ├─ index/		#메인 화면 js 폴더
│     │  ├─ constants.js	#해당 화면 전용 변수/상수/옵션 모음 js (예시)
│     │  └─ function.js	#기능 함수 정의 js
│     │  └─ script.js	#기능 실행 js
│     ├─ login/		#로그인 화면 js 폴더 (하위 구조는 위와 동일)
│     ├─ ps5/		#PS5 기기 소개 화면 js 폴더 (하위 구조는 위와 동일)
│     ├─ ps5-pro/	#PS5 Pro 기기 소개 화면 js 폴더 (하위 구조는 위와 동일)
│     ├─ accessories/	#액세서리 기기 소개 화면 js 폴더 (하위 구조는 위와 동일)
│     ├─ store/		#게임 스토어 화면 js 폴더 (하위 구조는 위와 동일)
│     ├─ game/		#게임 상세 소개 화면 js 폴더 (하위 구조는 위와 동일)
│     └─ news/		#이달의 PS 화면 js 폴더 (하위 구조는 위와 동일)
│
├─ vendor/                  	 #라이브러리 로컬 파일 폴더(※ CDN 대신 로컬 라이브러리 파일 사용하는 경우 라이브러리별로 하위 폴더 생성)
│  ├─ gsap/
│  ├─ swiper/
│  └─ bootstrap/ 
│
└─ assets/			#프로젝트 전체 소스 파일 폴더
   ├─ icon/			#프로젝트 전체 아이콘 파일 폴더
   │  └─ (공통 아이콘 파일들)
   ├─ img/			#프로젝트 전체 이미지 파일 폴더
   │  ├─ pages/                        	#화면별 이미지 파일 폴더
   │  │  ├─ index/		#메인 화면 이미지 파일 폴더
   │  │  ├─ login/		#로그인 화면 이미지 파일 폴더
   │  │  ├─ ps5/		#PS5 기기 소개 화면 이미지 파일 폴더
   │  │  ├─ ps5-pro/		#PS5 Pro 기기 소개 화면 이미지 파일 폴더
   │  │  ├─ accessories/		#액세서리 기기 소개 화면 이미지 파일 폴더
   │  │  ├─ store/		#게임 스토어 화면 이미지 파일 폴더
   │  │  └─ news/		#이달의 PS 화면 이미지 파일 폴더
   │  └─ games/                        	게임별 이미지 파일 폴더 (하위 폴더 총 30개)
   │     ├─ game01/
   │     │  ├─ hero.jpg
   │     │  ├─ 01.jpg
   │     │  └─ 02.jpg
   │     └─ (30개 게임 폴더...)
   └─ video/			#프로젝트 전체 영상 파일 폴더
      ├─ pages/                        	#화면별 영상 파일 폴더
      │  ├─ index/		#메인 화면 영상 파일 폴더
      │  ├─ login/		#로그인 화면 영상 파일 폴더
      │  ├─ ps5/			#PS5 기기 소개 화면 영상 파일 폴더
      │  ├─ ps5-pro/		#PS5 Pro 기기 소개 화면 영상 파일 폴더
      │  ├─ accessories/		#액세서리 기기 소개 화면 영상 파일 폴더
      │  ├─ store/		#게임 스토어 화면 영상 파일 폴더
      │  └─ news/		#이달의 PS 화면 영상 파일 폴더
      └─ games/                        	#게임별 영상 파일 폴더 (하위 폴더 총 30개)
         ├─ game01/
         │  └─ trailer.mp4
         └─ (30개 게임 폴더...)
```
## 📄 페이지별 구현 의도 및 설명

### [메인 페이지 (index.html)]

**구현 목표**: 사용자가 제품의 장점과 기능을 볼수있게

**핵심 기능**:
- 콘솔, 컨트롤서, 오디오 스크롤 이벤트
- plus 구독 부분 스크롤 이벤트와 슬라이드


**구현 방법**:
- **콘솔, 컨트롤서, 오디오 스크롤 이벤트**: GSAP사용하여 스크롤 이벤트 구현
- **plus 구독**: GSAP, Swiper 사용하여 스크롤 이벤트와 슬라디으 구현


**어려웠던 점**:
- GSPA를 처음사용해보면서 익숙하지 않아서 공부하면서 작업했다
- 스크롤 이벤트를 애니매이션을 많이 넣고 하는것은 처음이여서 구현하는데 어려웠다


---
