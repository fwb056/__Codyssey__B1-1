import { initTheme } from './theme.js';
import { loadRepos } from './projects.js';
import { initScrollReveal } from './animation.js'; // 🔑 임포트 추가

document.addEventListener('DOMContentLoaded', () => {
    // 1. 다크모드 초기화
    initTheme();

    // 2. GitHub API 프로젝트 불러오기
    loadRepos();

    // 3. 스크롤 애니메이션 실행
    initScrollReveal();
});