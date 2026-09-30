import { initTheme } from './theme.js';
import { initNavigation } from './navigation.js';
import { initScrollReveal } from './animation.js';
import { initContactForm } from './contact.js';
import { loadRepos } from './projects.js';

// DOM이 완전히 로드된 후 모든 기능 모듈을 초기화합니다.
document.addEventListener('DOMContentLoaded', () => {
    initTheme();          // 다크 모드 적용
    initNavigation();     // 햄버거 메뉴 및 맨 위로 이동 버튼
    initScrollReveal();   // 스크롤 애니메이션 (reveal 클래스 활성화 -> 프로필 등장!)
    initContactForm();    // 폼 유효성 검사
    loadRepos();          // GitHub API 프로젝트 가져오기
});