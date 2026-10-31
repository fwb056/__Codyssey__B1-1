export const STATE = {
    // 사용자가 선택한 테마 상태를 저장합니다.
    // 기본값은 'light'이며, 브라우저 저장소(localStorage)에 값이 있으면 그 값을 우선 사용합니다.
    theme: localStorage.getItem('theme') || 'light',

    // GitHub 저장소 목록을 담는 배열입니다.
    repos: [],

    // 현재 GitHub API 요청이 진행 중인지 여부입니다.
    isLoading: false,

    // 최근 요청 실패 원인을 저장합니다.
    error: null
};
