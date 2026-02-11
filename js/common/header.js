/* Constants */
const HEADER_SCROLL_LIMIT = 200;  // 투명 헤더 스크롤 범위

/* ========== Define Variables ==========*/
// JS media query
//const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

let isTopArea = true;
let isHeaderHovered = false;

/* ========== DOM Element ==========*/
const $header = document.getElementById('header');
const $header_basic = document.querySelector('.header__basic');
const $gnbPs5 = document.querySelector('.gnb--ps5');
const $header_lnb = document.querySelector('.header__lnb');
const $headerSearchBtn = document.getElementById('headerSearchBtn');
const $headerLoginBtn = document.getElementById('headerLoginBtn');
const $headerXBtn = document.getElementById('headerXBtn');
const $hamBtn = document.getElementById('hamBtn');
const $header_search_wrap = document.querySelector('.header__search-wrap');
const $mobileMenu = document.getElementById('mobileMenu');
const $mobileLoginBtn = document.getElementById('mobileLoginBtn');
const $mobileXBtn = document.getElementById('mobileXBtn');



/* ========== Execute Functions ==========*/
/* 스크롤 시 투명 헤더 유색으로 전환 */
window.addEventListener('scroll', transparentHeaderScroll);
transparentHeaderScroll();

/* 투명 헤더에 마우스 엔터 리브 이벤트 */
if(canHover){
  $header.addEventListener('mouseenter', transparentHeaderMouseEnter);
  $header.addEventListener('mouseleave', transparentHeaderMouseLeave);
}

/* lnb 열고 닫기 */
$gnbPs5.addEventListener('click', gnbPs5Click);
document.addEventListener('click', lnbOutClick);

/* 헤더 검색 영역 열고 닫기 */
$headerSearchBtn.addEventListener('click', headerSearchBtnClick);
$headerXBtn.addEventListener('click', headerXBtnBtnClick);
document.addEventListener('click', headerSearchWrapOutClick);

/* 헤더 유저 버튼 클릭하여 로그인 페이지로 이동 */
$headerLoginBtn.addEventListener('click', loginBtnClick);

/* 모바일 메뉴 열고 닫기, 로그인으로 이동 */
$hamBtn.addEventListener('click', hamBtnClick);
$mobileXBtn.addEventListener('click', mobileXBtnClick);
document.addEventListener('click', mobileMenuOutClick);
$mobileLoginBtn.addEventListener('click', loginBtnClick);




/* 추후 추가해야 하는 기능 (games.js 정의 후 추가)
- 검색 영역에서 input 이벤트에 따라 실시간으로 검색 결과 표시
- 검색창 밑 라벨 클릭 시 그 키워드로 검색 결과 표시
*/




/* ========== Define Functions ==========*/
/* 헤더 상태 동기화 */
function syncHeaderBasicBg(){
  // 헤더 lnb나 검색 영역이 활성화되어 있는지 판별
  const hasPanelOpen = $header_lnb.classList.contains('active') || $header_search_wrap.classList.contains('active');

  // 헤더 패널이 열려있으면 항상 유색 배경
  if(hasPanelOpen){
    $header_basic.classList.remove('transparent');
    return;
  }

  // 최상단 영역일 때 호버 불가 기기거나 호버가 아니면 항상 투명
  if(isTopArea && (!canHover || !isHeaderHovered)){
    $header_basic.classList.add('transparent');
  }
  else{
    $header_basic.classList.remove('transparent');
  }
}

/* 스크롤 시 헤더 투명-유색 전환 */
function transparentHeaderScroll(){
  const scrollTop = window.scrollY;

  isTopArea = scrollTop <= HEADER_SCROLL_LIMIT;
  syncHeaderBasicBg();
}

/* 투명 헤더에 마우스 엔터 시 유색으로 전환 */
function transparentHeaderMouseEnter(){
  isHeaderHovered = true;
  syncHeaderBasicBg();
}

/* 유색 헤더에서 마우스 리브 시 투명으로 전환 */
function transparentHeaderMouseLeave(){
  isHeaderHovered = false;
  syncHeaderBasicBg();
}

/* gnb 클릭으로 lnb 토글 */
function gnbPs5Click(){
  $gnbPs5.classList.toggle('active');
  $header_lnb.classList.toggle('active');

  syncHeaderBasicBg();
}

/* lnb 외부 영역 클릭해서 닫기 */
function lnbOutClick(e){
  if(
    $gnbPs5.classList.contains('active') && 
    $header_lnb.classList.contains('active') &&
    !$gnbPs5.contains(e.target) &&
    !$header_lnb.contains(e.target)
  ){
    $gnbPs5.classList.remove('active');
    $header_lnb.classList.remove('active');

    syncHeaderBasicBg();
  }
}

/* 헤더 검색 버튼 클릭 */
function headerSearchBtnClick(){
  $header_search_wrap.classList.add('active');
  document.body.style.overflowY = 'hidden';
  syncHeaderBasicBg();
}

/* 헤더 검색 닫기 버튼 클릭 */
function headerXBtnBtnClick(){
  $header_search_wrap.classList.remove('active');
  document.body.style.overflowY = 'auto';
  syncHeaderBasicBg();
}

/* 헤더 검색 외부 영역 클릭해서 닫기 */
function headerSearchWrapOutClick(e){
  if(
    $header_search_wrap.classList.contains('active') &&
    !$headerSearchBtn.contains(e.target) &&
    !document.querySelector('.search-wrap-bg').contains(e.target)
  ){
    $header_search_wrap.classList.remove('active');
    document.body.style.overflowY = 'auto';
    syncHeaderBasicBg();
  }
}

/* 헤더, 모바일 메뉴의 유저 버튼 클릭하여 로그인 페이지 이동 */
function loginBtnClick(){
  location.href='login.html';
}

/* 모바일 메뉴 열기 */
function hamBtnClick(){
  $mobileMenu.classList.add('active');
  document.body.style.overflowY = 'hidden';
}

/* 모바일 메뉴 닫기 */
function mobileXBtnClick(){
  $mobileMenu.classList.remove('active');
  document.body.style.overflowY = 'auto';
}

/* 모바일 메뉴 외부 영역 클릭해서 닫기 */
function mobileMenuOutClick(e){
  if(
    $mobileMenu.classList.contains('active') &&
    $mobileMenu.querySelector('.overlay').contains(e.target)
  ){
    $mobileMenu.classList.remove('active');
    document.body.style.overflowY = 'auto';
  }
}