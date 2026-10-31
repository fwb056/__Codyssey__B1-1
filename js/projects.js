import { STATE } from './state.js';

// GitHub 사용자 저장소 목록을 불러와 화면에 렌더링합니다.
// 로딩 상태, 빈 결과 상태, 오류 상태를 각각 분리해서 표시합니다.
const GITHUB_USER = 'fwb056';

export async function loadRepos() {
    const statusArea = document.getElementById('statusArea');
    const projectsGrid = document.getElementById('projectsGrid');
    if (!statusArea || !projectsGrid) return;

    // API 호출 전에 로딩 상태를 표시합니다.
    STATE.isLoading = true;
    statusArea.innerHTML = '<div class="spinner"></div>';
    projectsGrid.innerHTML = '';

    try {
        const url = `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=6`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`요청 실패 (상태 코드: ${response.status})`);
        }

        const data = await response.json();
        STATE.repos = data;
        STATE.isLoading = false;

        // 저장소가 하나도 없을 때의 빈 상태를 처리합니다.
        if (STATE.repos.length === 0) {
            statusArea.innerHTML = '<p class="status-msg">📭 표시할 저장소가 없습니다.</p>';
            return;
        }

        // 정상 데이터가 오면 카드 UI를 생성해 렌더링합니다.
        statusArea.innerHTML = '';
        projectsGrid.innerHTML = STATE.repos.map(repo => `
            <div class="project-card">
                <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
                    <div class="thumb"></div>
                    <div class="info">
                        <h3>${repo.name}
                            <span class="stars">⭐ ${repo.stargazers_count}</span>
                        </h3>
                        <p>${repo.description || '설명이 없습니다.'}</p>
                        <span class="lang">${repo.language || 'Unknown'}</span>
                    </div>
                </a>
            </div>
        `).join('');

    } catch (error) {
        // 네트워크 오류나 API 실패가 발생하면 에러 상태를 표시합니다.
        STATE.isLoading = false;
        STATE.error = error.message;
        statusArea.innerHTML = `
            <p class="status-msg error">
                ⚠️ 저장소를 불러오지 못했습니다.<br>${error.message}
            </p>`;
        console.error(error);
    }
}
