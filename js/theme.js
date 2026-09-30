import { STATE } from './state.js';

export function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (STATE.theme === 'dark' || (!localStorage.getItem('theme') && prefersDark)) {
        document.body.classList.add('dark');
        themeToggle.textContent = '☀️';
        STATE.theme = 'dark';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');
        
        STATE.theme = isDark ? 'dark' : 'light';
        themeToggle.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', STATE.theme);
    });
}