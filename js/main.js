import { initTheme } from './theme.js';
import { loadRepos } from './projects.js';

// 앱 초기화 실행
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadRepos();
    
    // 필요하다면 네비게이션, 폼 검증 등 다른 모듈의 init 함수도 여기서 호출
});