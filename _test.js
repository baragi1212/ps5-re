/* ========== Constants ========== */
const HEADER_SCROLL_LIMIT = 200;

/* ========== DOM ========== */
const $header = document.getElementById('header');
const $basic = $header.querySelector('.header__basic');
const $gnbPs5 = $header.querySelector('.gnb--ps5');
const $lnb = $header.querySelector('.header__lnb');

const $searchWrap = $header.querySelector('.header__search-wrap');
const $searchBg = $header.querySelector('.search-wrap-bg');

const $searchBtn = document.getElementById('headerSearchBtn');
const $closeBtn = document.getElementById('headerXBtn');
const $loginBtn = document.getElementById('headerLoginBtn');

/* 모바일 메뉴 */
const $hamBtn = document.getElementById('hamBtn');
const $mobileMenu = document.getElementById('mobileMenu');
const $mobileXBtn = document.getElementById('mobileXBtn');
const $mobileLoginBtn = document.getElementById('mobileLoginBtn');

/* ========== State ========== */
const state = {
  topArea: true,
  hoveredByMouse: false, // ✅ "마우스"로 호버 중인지
};

/* ========== Utils ========== */
function getScrollTop() {
  return window.scrollY ?? window.pageYOffset ?? document.documentElement.scrollTop ?? 0;
}

function computeTopArea() {
  state.topArea = getScrollTop() <= HEADER_SCROLL_LIMIT;
}

function isAnyPanelOpen() {
  return (
    $lnb.classList.contains('active') ||
    $searchWrap.classList.contains('active') ||
    ($mobileMenu && $mobileMenu.classList.contains('active'))
  );
}

function syncBodyScrollLock() {
  document.body.style.overflowY = isAnyPanelOpen() ? 'hidden' : 'auto';
}

/* ✅ 핵심: 상태 -> 클래스 반영은 여기서만 */
function renderHeaderBg() {
  const panelOpen = $lnb.classList.contains('active') || $searchWrap.classList.contains('active');

  // 규칙:
  // 1) 패널(lnb/search) 열려 있으면 무조건 유색
  // 2) 그 외: topArea && 마우스 호버 중이 아니면 투명
  const shouldBeTransparent = !panelOpen && state.topArea && !state.hoveredByMouse;

  $basic.classList.toggle('transparent', shouldBeTransparent);
}

/* overflow 토글 직후 모바일에서 스크롤/레이아웃 반영이 밀릴 수 있어 다음 프레임 보정 */
function renderNextFrame() {
  requestAnimationFrame(() => {
    computeTopArea();
    renderHeaderBg();
  });
}

/* ========== Header Scroll / Hover ========== */
function onScroll() {
  computeTopArea();
  renderHeaderBg();
}

/* ✅ hover 이벤트는 "무조건" 걸고, mouse일 때만 반영 */
function onPointerEnter(e) {
  if (e.pointerType && e.pointerType !== 'mouse') return;
  state.hoveredByMouse = true;
  renderHeaderBg();
}

function onPointerLeave(e) {
  if (e.pointerType && e.pointerType !== 'mouse') return;
  state.hoveredByMouse = false;
  renderHeaderBg();
}

/* (브라우저에 따라 pointerenter/leave 지원이 애매하면 mouseenter/leave도 백업) */
function onMouseEnter() {
  state.hoveredByMouse = true;
  renderHeaderBg();
}
function onMouseLeave() {
  state.hoveredByMouse = false;
  renderHeaderBg();
}

/* ========== LNB ========== */
function toggleLnb() {
  $gnbPs5.classList.toggle('active');
  $lnb.classList.toggle('active');
  renderHeaderBg();
}

function closeLnb() {
  $gnbPs5.classList.remove('active');
  $lnb.classList.remove('active');
  renderHeaderBg();
}

/* ========== Search ========== */
function openSearch() {
  $searchWrap.classList.add('active');
  syncBodyScrollLock();
  renderNextFrame();
}

function closeSearch() {
  $searchWrap.classList.remove('active');
  syncBodyScrollLock();
  renderNextFrame();
}

/* ========== Mobile Menu ========== */
function openMobileMenu() {
  if (!$mobileMenu) return;
  $mobileMenu.classList.add('active');
  syncBodyScrollLock();
}

function closeMobileMenu() {
  if (!$mobileMenu) return;
  $mobileMenu.classList.remove('active');
  syncBodyScrollLock();
}

/* ========== Navigation ========== */
function goLogin() {
  location.href = 'login.html';
}

/* ========== Bind ========== */
window.addEventListener('scroll', onScroll, { passive: true });

/* ✅ hover: header__basic + lnb 영역 모두에 걸어두면 UX가 자연스러움 */
$basic.addEventListener('pointerenter', onPointerEnter);
$basic.addEventListener('pointerleave', onPointerLeave);
$lnb.addEventListener('pointerenter', onPointerEnter);
$lnb.addEventListener('pointerleave', onPointerLeave);

/* 백업(필요한 브라우저 대비) */
$basic.addEventListener('mouseenter', onMouseEnter);
$basic.addEventListener('mouseleave', onMouseLeave);
$lnb.addEventListener('mouseenter', onMouseEnter);
$lnb.addEventListener('mouseleave', onMouseLeave);

/* gnb ps5 -> lnb 토글 */
$gnbPs5.addEventListener('click', (e) => {
  e.preventDefault();
  toggleLnb();
});

/* lnb 바깥 클릭 닫기 */
document.addEventListener('click', (e) => {
  if (!$lnb.classList.contains('active')) return;

  const clickedInsideGnb = $gnbPs5.contains(e.target);
  const clickedInsideLnb = $lnb.contains(e.target);

  if (!clickedInsideGnb && !clickedInsideLnb) closeLnb();
});

/* 검색 열고 닫기 */
$searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  openSearch();
});

$closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  closeSearch();
});

/* 검색 바깥 클릭 닫기 */
document.addEventListener('click', (e) => {
  if (!$searchWrap.classList.contains('active')) return;

  const clickedSearchBtn = $searchBtn.contains(e.target);
  const clickedInsideSearchBg = $searchBg?.contains(e.target);

  if (!clickedSearchBtn && !clickedInsideSearchBg) closeSearch();
});

/* 로그인 이동 */
$loginBtn.addEventListener('click', goLogin);
$mobileLoginBtn?.addEventListener('click', goLogin);

/* 모바일 메뉴 열고 닫기 */
$hamBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  openMobileMenu();
});

$mobileXBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  closeMobileMenu();
});

/* 모바일 메뉴 overlay 클릭 닫기 */
document.addEventListener('click', (e) => {
  if (!$mobileMenu?.classList.contains('active')) return;

  const $overlay = $mobileMenu.querySelector('.overlay');
  if ($overlay && $overlay.contains(e.target)) closeMobileMenu();
});

/* ========== Init ========== */
computeTopArea();
renderHeaderBg();
syncBodyScrollLock();
