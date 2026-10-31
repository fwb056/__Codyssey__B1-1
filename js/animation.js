// 스크롤 시 등장 애니메이션을 적용합니다.
// .reveal 클래스가 붙은 요소는 사용자가 화면에 보일 때 active 클래스를 추가해 서서히 보이게 됩니다.
export function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length === 0) return;

    // IntersectionObserver는 스크롤 위치를 감시해 요소가 화면 안으로 들어왔는지 판단합니다.
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // 사용자가 요소의 15% 이상 보게 되면 애니메이션을 시작합니다.
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });

    reveals.forEach(el => observer.observe(el));
}
