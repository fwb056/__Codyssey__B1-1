// 네비게이션 관련 동작을 초기화합니다.
// 모바일 메뉴 열기/닫기와, 스크롤 시 상단 이동 버튼 표시 기능을 담당합니다.
export function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    // 햄버거 메뉴를 눌렀을 때 모바일 네비게이션 목록을 토글합니다.
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });

        // 메뉴 항목 클릭 시 모바일 메뉴를 자동으로 닫아 UX를 자연스럽게 만듭니다.
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => navMenu.classList.remove('open'));
        });
    }

    // 스크롤 위치가 일정 이상이면 아래 버튼을 보이고, 아니면 숨깁니다.
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        // 버튼 클릭 시 부드럽게 페이지 최상단으로 이동합니다.
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}
