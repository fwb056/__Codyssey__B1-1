import { initTheme } from './theme.js';
import { initNavigation } from './navigation.js';
import { initScrollReveal } from './animation.js';
import { initContactForm } from './contact.js';
import { loadRepos } from './projects.js';

// 페이지가 완전히 로드된 뒤에 기능 초기화를 실행합니다.
// 각 모듈이 독립적으로 역할을 담당하게 만들어 유지보수와 재사용성을 높입니다.
document.addEventListener('DOMContentLoaded', () => {
    initTheme();         // 다크 모드 초기화 및 토글 이벤트 연결
    initNavigation();    // 모바일 메뉴 및 맨 위로 이동 버튼 동작 연결
    initScrollReveal();  // 스크롤 진입 애니메이션 연결
    initContactForm();   // 폼 입력 검증 및 제출 처리 연결
    loadRepos();         // GitHub API로 저장소 목록 불러오기
});
