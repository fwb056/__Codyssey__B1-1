import { STATE } from './state.js';

// 다크 모드 초기화와 토글 동작을 담당하는 모듈입니다.
// 목적: 사용자가 선택한 테마를 저장하고, 새로고침 후에도 유지되도록 합니다.
export function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // 저장된 테마가 있으면 우선 적용합니다.
    // 저장된 값이 없고 시스템이 다크 모드를 선호하면 자동으로 다크 모드로 설정합니다.
    if (STATE.theme === 'dark' || (!localStorage.getItem('theme') && prefersDark)) {
        document.body.classList.add('dark');
        themeToggle.textContent = '☀️';
        STATE.theme = 'dark';
    } else {
        document.body.classList.remove('dark');
        themeToggle.textContent = '🌙';
        STATE.theme = 'light';
    }

    // 버튼 클릭 시 테마를 전환하고, 상태를 localStorage에 저장합니다.
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');

        STATE.theme = isDark ? 'dark' : 'light';
        themeToggle.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', STATE.theme);
    });
}
