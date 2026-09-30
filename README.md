# 포트폴리오 웹사이트 🎯

순수 HTML, CSS, JavaScript만으로 구현한 **반응형 포트폴리오 웹사이트**입니다.  
사용자 이벤트, 상태 관리, DOM 조작을 통해 웹의 동작 원리를 구현하고 GitHub API를 연동하여 실시간 프로젝트를 표시합니다.

---

## 📋 프로젝트 개요

### 🎓 미션 목표
- **외부 라이브러리 없이** 순수 HTML/CSS/JavaScript로 포트폴리오 완성
- **사용자 이벤트 → 상태 변경 → 화면 업데이트** 흐름의 이해
- **비동기 처리**와 **API 연동** 경험 습득
- **반응형 디자인**으로 모든 기기에서 최적화된 경험 제공

### 🎯 핵심 학습 포인트
이 프로젝트를 완성하면 다음을 이해할 수 있습니다:
1. **HTML 시맨틱 마크업**의 필요성과 구조 설계
2. **CSS Flexbox와 Grid**의 차이와 선택 기준
3. **이벤트 리스너**와 **DOM 조작**의 흐름
4. **ES6+ 문법** (화살표 함수, 구조분해, 템플릿 리터럴)
5. **fetch & async/await**로 비동기 데이터 처리
6. **상태 관리 패턴** (React 선행학습)

---

## ✨ 주요 기능

### 1️⃣ 반응형 레이아웃
- **모바일 퍼스트** 설계 (320px 이상)
- **브레이크포인트**: 768px (태블릿), 1024px (데스크톱)
- 모든 화면 크기에서 최적화된 경험

### 2️⃣ 다크 모드 토글 🌙
```javascript
// 사용자 선택 → 상태 변경 → UI 업데이트
클릭 → STATE.theme 변경 → localStorage 저장 → 화면 즉시 반영
새로고침 후에도 설정 유지 (localStorage)
시스템 다크 모드 설정 자동 감지
```

### 3️⃣ 인터랙티브 네비게이션
- **햄버거 메뉴**: 모바일에서 자동 활성화
- **부드러운 스크롤**: 메뉴 클릭 시 섹션으로 자동 이동
- **맨 위로 이동 버튼**: 300px 이상 스크롤 시 표시

### 4️⃣ GitHub API 연동 📊
```javascript
// 상태 흐름: 로딩 → 성공/에러 → UI 렌더링
✅ 로딩 상태: 스피너 표시
✅ 성공 상태: 저장소 카드 동적 렌더링
✅ 에러 상태: 오류 메시지 + 재시도 안내
✅ 빈 상태: "표시할 저장소가 없습니다" 메시지

GitHub API: https://api.github.com/users/{아이디}/repos
최신 저장소 6개 자동 불러오기
각 카드에 별⭐ 개수 및 프로그래밍 언어 표시
```

### 5️⃣ 스크롤 애니메이션 ✨
```javascript
Intersection Observer API 활용
About, Projects 섹션이 화면에 진입하면 페이드인 효과
threshold: 0.2 (20% 보이면 실행)
```

### 6️⃣ 폼 유효성 검사 ✔️
```javascript
검증 규칙:
- 이름: 공백 제외 필수
- 이메일: 올바른 형식 필수 (/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
- 메시지: 공백 제외 필수

실패 시: 입력 필드 빨간색 테두리 + 에러 메시지 표시
성공 시: ✅ 성공 메시지 3초 표시 + 폼 초기화
```

---

## 🗂️ 프로젝트 구조

```
📦 __Codyssey__B1-1/
├── 📄 index.html           # HTML 시맨틱 마크업 (Hero, About, Skills, Projects, Contact, Footer)
├── 📁 css/
│   ├── style.css           # 메인 스타일 시트 (@import 진입점)
│   ├── base.css            # 기본 스타일 (Reset, Typography, Global)
│   ├── layout.css          # 레이아웃 (Grid, Flexbox, 반응형)
│   └── components.css      # 컴포넌트 스타일 (버튼, 카드, 폼 등)
├── 📁 js/
│   ├── main.js             # 진입점 (모든 모듈 초기화)
│   ├── state.js            # 전역 상태 관리
│   ├── theme.js            # 다크 모드 로직
│   ├── navigation.js       # 햄버거 메뉴 + 맨 위로 이동 버튼
│   ├── animation.js        # 스크롤 애니메이션 (Intersection Observer)
│   ├── contact.js          # 폼 유효성 검사
│   └── projects.js         # GitHub API 연동
└── 📁 images/             # 이미지 자산 (필요시)
```

### 📝 각 파일의 역할

| 파일 | 역할 |
|------|------|
| **main.js** | 모든 초기화 함수 호출 (DOMContentLoaded 이벤트) |
| **state.js** | 전역 상태 객체 (theme, repos, isLoading, error) |
| **theme.js** | 다크 모드 토글 + localStorage 저장 |
| **navigation.js** | 햄버거 메뉴 토글 + 맨 위로 이동 버튼 |
| **animation.js** | Intersection Observer로 스크롤 애니메이션 |
| **contact.js** | 폼 입력 검증 + 에러 메시지 관리 |
| **projects.js** | GitHub API 호출 + 동적 카드 렌더링 |

---

## 🔧 기술 스택

### 필수 기술
- **HTML5**: 시맨틱 태그 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- **CSS3**: Flexbox, Grid, Media Queries, CSS 변수, 애니메이션
- **JavaScript (ES6+)**:
  - 화살표 함수 (`=>`)
  - 구조분해 할당 (`const { name } = obj`)
  - 템플릿 리터럴 (`` `text ${var}` ``)
  - 배열 메서드 (`.map()`, `.filter()`, `.forEach()`)
  - `async/await` & `fetch`
  - `querySelector`, `addEventListener`

### API & 브라우저 API
- **GitHub REST API**: 사용자 저장소 데이터 수집
- **Intersection Observer API**: 스크롤 애니메이션
- **localStorage**: 테마 설정 영속성

### 외부 라이브러리
- ❌ 프레임워크 (React, Vue, Angular) 사용 안 함
- ✅ 웹 폰트/아이콘 허용 (Google Fonts, Font Awesome 등)

---

## 🚀 배포 및 실행

### 로컬 개발 환경

#### 1️⃣ 저장소 클론
```bash
git clone https://github.com/fwb056/__Codyssey__B1-1.git
cd __Codyssey__B1-1
```

#### 2️⃣ VS Code + Live Server로 실행
- VS Code 설치
- **Live Server** 확장 프로그램 설치
- `index.html` 우클릭 → "Open with Live Server" 클릭
- 자동으로 브라우저에서 `http://localhost:5500` 열림

#### 3️⃣ 수동으로 브라우저에서 열기
- `index.html`을 더블클릭하거나 브라우저에 드래그 드롭

### GitHub Pages 배포 ✅

이 프로젝트는 **GitHub Pages**로 배포되어 있습니다:

🔗 **라이브 URL**: https://fwb056.github.io/__Codyssey__B1-1/

#### 배포 설정
1. 저장소 **Settings** → **Pages**
2. **Source**: Deploy from a branch
3. **Branch**: main (또는 master)
4. **Folder**: / (root)
5. **Save** 클릭

변경사항 반영까지 2~3분 대기 후 라이브 사이트 새로고침

---

## 💡 핵심 구현 설명

### 1. 상태 → 렌더링 패턴 (React 기초)

#### 패턴 1: 다크 모드 토글
```
사용자 클릭
  ↓
STATE.theme 변경 ('light' ↔ 'dark')
  ↓
localStorage에 저장 (새로고침 후에도 유지)
  ↓
body에 'dark' 클래스 추가/제거
  ↓
CSS에서 body.dark에 따른 스타일 적용
  ↓
화면 즉시 변경
```

#### 패턴 2: GitHub API 로딩 상태
```
loadRepos() 호출
  ↓
STATE.isLoading = true
  ↓
UI: 스피너 표시
  ↓
fetch로 API 호출 (async/await)
  ↓
응답 받음
  ↓
STATE.repos 업데이트
STATE.isLoading = false
  ↓
UI: 스피너 제거 → 카드 렌더링 (map 활용)
```

#### 패턴 3: 폼 유효성 검사
```
사용자가 폼 제출
  ↓
각 필드 검증 (빈값, 이메일 형식)
  ↓
검증 실패 시:
  ↓ 입력 필드에 'invalid' 클래스 추가
  ↓ 에러 메시지 표시
  
검증 성공 시:
  ↓ 에러 메시지 숨김
  ↓ 성공 메시지 표시
  ↓ 폼 초기화
```

### 2. ES6+ 문법 활용

#### 화살표 함수
```javascript
// 간결하고 읽기 쉬운 코드
repos.map(repo => `<div>${repo.name}</div>`).join('')
```

#### 구조분해 할당
```javascript
// API 응답에서 필요한 속성만 추출
const { name, html_url, stargazers_count, description, language } = repo;
```

#### 템플릿 리터럴
```javascript
// 동적 HTML 생성
`
  <div class="project-card">
    <h3>${repo.name}</h3>
    <p>${repo.description || '설명이 없습니다.'}</p>
  </div>
`
```

#### 배열 메서드
```javascript
// map: 배열의 각 요소를 변환
repos.map(repo => createCardHTML(repo))

// filter: 조건에 맞는 요소만 선택 (확장 가능)
repos.filter(repo => repo.language === 'JavaScript')

// forEach: 배열 순회하며 동작 실행
items.forEach(item => observer.observe(item))
```

### 3. 비동기 처리

```javascript
async function loadRepos() {
    try {
        // 1️⃣ 로딩 상태 표시
        statusArea.innerHTML = '<div class="spinner"></div>';
        
        // 2️⃣ fetch로 API 호출 (네트워크 대기)
        const response = await fetch(url);
        
        // 3️⃣ 응답 확인
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        
        // 4️⃣ JSON 파싱 (대기)
        const data = await response.json();
        
        // 5️⃣ 상태 업데이트 + 렌더링
        STATE.repos = data;
        renderCards(data);
        
    } catch (error) {
        // 6️⃣ 에러 처리
        console.error(error);
        statusArea.innerHTML = `<p>❌ ${error.message}</p>`;
    }
}
```

---

## 📱 반응형 디자인 브레이크포인트

| 디바이스 | 화면 너비 | 특징 |
|---------|---------|------|
| **모바일** | 320px ~ 767px | 단일 열, 햄버거 메뉴, 세로 정렬 |
| **태블릿** | 768px ~ 1023px | 2열 그리드, 수평 메뉴 표시 |
| **데스크톱** | 1024px 이상 | 3~4열 그리드, 전체 레이아웃 최적화 |

### CSS Grid 반응형 예시
```css
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
}
/* 화면 크기에 따라 자동으로 열 개수 조정 */
```

---

## 🎨 다크 모드 구현

### CSS 변수 활용
```css
/* Light 모드 (기본) */
:root {
    --bg-primary: #ffffff;
    --text-primary: #333333;
    --border-color: #eeeeee;
}

/* Dark 모드 */
body.dark {
    --bg-primary: #1a1a1a;
    --text-primary: #eeeeee;
    --border-color: #444444;
}
```

### 상태 관리
```javascript
// STATE 객체에서 현재 테마 추적
export const STATE = {
    theme: localStorage.getItem('theme') || 'light',
    repos: [],
    isLoading: false,
    error: null
};
```

---

## ⚠️ GitHub API 주의사항

### Rate Limit (속도 제한)
- **인증 없이**: 시간당 **60회** 제한
- **인증 with token**: 시간당 **5,000회** 제한

### 에러 처리
```javascript
// 403 Forbidden (Rate Limit 초과) 시 자동으로 에러 메시지 표시
if (response.status === 403) {
    throw new Error('GitHub API 요청 횟수 초과. 잠시 후 다시 시도하세요.');
}
```

### 최적화 팁
- ✅ 짧은 시간에 반복 새로고침 피하기
- ✅ 캐싱 구현 (선택사항)
- ✅ GitHub Personal Access Token 사용 (선택사항)

---

## 🎯 각 섹션 설명

### 🏠 Hero
```html
<!-- 첫 인상을 결정하는 큰 이미지 배경 섹션 -->
- 자기소개 문구
- CTA 버튼 ("연락하기" → Contact 섹션으로 스크롤)
```

### 👤 About
```html
<!-- 프로필 이미지 + 자기소개 텍스트 -->
- 프로필 사진 (원형)
- 짧은 소개 문구
- 스크롤 진입 시 페이드인 애니메이션
```

### 🛠️ Skills
```html
<!-- 기술 스택 표시 -->
- 격자형 카드 레이아웃
- ORACLE SQL, HTML, CSS, JavaScript 등
- 반응형 그리드 (모바일: 2열 → 태블릿: 3열 → 데스크톱: 4열)
```

### 📦 Projects
```html
<!-- GitHub API에서 동적으로 로드된 프로젝트 카드 -->
- 저장소 이름, 설명, 언어, 별⭐ 개수
- 로딩 스피너 표시 (데이터 로딩 중)
- 에러 메시지 표시 (API 호출 실패)
- 카드 클릭 시 GitHub 저장소로 이동
```

### 📧 Contact
```html
<!-- 방문자와의 소통 -->
- 이름 입력 (필수)
- 이메일 입력 (필수 + 형식 검증)
- 메시지 입력 (필수)
- 제출 시 폼 검증 + 성공/에러 메시지 표시
```

### 📋 Footer
```html
<!-- 저작권 정보 -->
- 저작권 표시 (© 2026 임대현)
- 다크 모드에서도 명확히 표시
```

---

## 🐛 트러블슈팅

### 문제: 애니메이션이 작동하지 않음
**해결**:
- 브라우저 개발자 도구에서 "Slow down animations" 체크 해제
- JavaScript 콘솔에 에러 메시지 확인

### 문제: 다크 모드가 새로고침 후 초기화됨
**해결**:
- `localStorage`가 정상 작동하는지 확인
- 브라우저 개발자 도구 → **Application** → **Local Storage** 확인

### 문제: GitHub API 에러 (403)
**해결**:
- 시간당 60회 제한에 도달했을 가능성
- 1시간 대기 후 다시 시도
- Personal Access Token 사용 고려

### 문제: 폼이 제출되지 않음
**해결**:
- 브라우저 콘솔 확인
- `novalidate` 속성으로 기본 HTML 검증 비활성화됨
- 콘솔에서 검증 로직 확인

---

## 📚 참고 자료

### 학습 자료
- [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [GitHub API Documentation](https://docs.github.com/en/rest)

### 핵심 개념
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [fetch & async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)
- [Flexbox vs Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

---

## 📸 스크린샷

### 💻 데스크톱 보기
- 풀 너비 레이아웃
- 수평 네비게이션
- 4열 그리드 (Projects)
- 다크 모드 토글 버튼 우측 상단

### 📱 모바일 보기
- 모바일 우선 설계
- 햄버거 메뉴 활성화
- 세로 정렬 (About, Skills)
- 2열 그리드 (Projects)
- 부드러운 스크롤

### 🌙 다크 모드
- 배경: 진한 회색 (#1a1a1a)
- 텍스트: 밝은 회색 (#eeeeee)
- 카드: 어두운 배경 (#2a2a2a)
- 부드러운 전환 효과 (0.3초)

---

## 🎓 학습 성과

이 프로젝트를 완성하면, 다음을 **스스로 설명할 수 있습니다**:

✅ **HTML 구조 설계**: 왜 `<div>`만 쓰지 않고 시맨틱 태그를 사용했는가?  
✅ **CSS 레이아웃**: Flexbox(네비게이션)와 Grid(프로젝트)를 어떻게 구분해서 사용했는가?  
✅ **JavaScript 이벤트**: `querySelector` → `addEventListener` → 상태 변경 → DOM 업데이트의 흐름  
✅ **ES6+ 문법**: 화살표 함수, 구조분해, 템플릿 리터럴의 실제 활용 사례  
✅ **비동기 처리**: `fetch` + `async/await`로 API에서 데이터를 받아 UI에 반영하는 방법  
✅ **상태 관리**: 한 번의 사용자 입력이 전체 화면을 어떻게 변경하는가? (React의 기초)

---

## 📝 라이센스

MIT License - 자유롭게 사용, 수정, 배포 가능

---

## 👨‍💻 개발자

**임대현** - 코디세이 AI 올인원 과정 2기

---

## 🙏 감사의 말

이 프로젝트는 웹 개발의 기초를 확실히 다지기 위한 학습 과정의 결과물입니다.  
순수 HTML/CSS/JavaScript만으로 실무에서 필요한 모든 기능을 구현했습니다.

🚀 **다음 단계**: React를 배워 이 프로젝트를 더 효율적으로 재작성할 준비가 되었습니다!

---

**마지막 업데이트**: 2026년 9월 30일  
**배포 URL**: https://fwb056.github.io/__Codyssey__B1-1/
