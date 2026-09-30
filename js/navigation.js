export function initNavigation() {
    // 1. 햄버거 메뉴 토글
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });

        // 메뉴 항목을 클릭하면 모바일 메뉴가 자동으로 닫히도록 설정
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => navMenu.classList.remove('open'));
        });
    }

    // 2. 맨 위로 이동 버튼 (Back-to-top)
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}