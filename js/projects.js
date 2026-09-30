import { STATE } from './state.js';

const GITHUB_USER = 'fwb056';
const statusArea = document.getElementById('statusArea');
const projectsGrid = document.getElementById('projectsGrid');

export async function loadRepos() {
    STATE.isLoading = true;
    statusArea.innerHTML = '<div class="spinner"></div>';
    projectsGrid.innerHTML = '';

    try {
        const url = `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=6`;
        const response = await fetch(url);

        if (!response.ok) throw new Error(`요청 실패 (${response.status})`);

        STATE.repos = await response.json();
        STATE.isLoading = false;

        if (STATE.repos.length === 0) {
            statusArea.innerHTML = '<p class="status-msg">📭 표시할 저장소가 없습니다.</p>';
            return;
        }

        statusArea.innerHTML = '';
        projectsGrid.innerHTML = STATE.repos.map(repo => `
            <div class="project-card">
                <a href="${repo.html_url}" target="_blank">
                    <div class="thumb"></div>
                    <div class="info">
                        <h3>${repo.name} <span class="stars">⭐ ${repo.stargazers_count}</span></h3>
                        <p>${repo.description || '설명이 없습니다.'}</p>
                        <span class="lang">${repo.language || 'Unknown'}</span>
                    </div>
                </a>
            </div>
        `).join('');

    } catch (error) {
        STATE.isLoading = false;
        STATE.error = error.message;
        statusArea.innerHTML = `<p class="status-msg error">⚠️ 저장소를 불러오지 못했습니다.<br>${error.message}</p>`;
    }
}