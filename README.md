# 스페인어 공부 앱 (GitHub Pages)

## 파일
- `index.html`: 앱 홈 화면
- `class-notes.html`: 학원 노트 (주차별 노트 · 빠른 메모 · 카드 복습)
- `class-data.js`: 학원 노트 내용 (매주 이 파일만 바꿔서 업로드)
- `dele-a2.html`: 기존 DELE A2 총정리 노트
- `speaking.html`: 회화 직전 5분 치트시트
- `manifest.json`, `sw.js`, `icon.svg`: 홈 화면 설치(PWA) 지원 파일

## GitHub에 올리는 방법
1. GitHub에 로그인하고 `New repository`를 눌러 새 저장소를 만듭니다. 예: `spanish-study`.
2. 저장소는 Public으로 선택하고 `Create repository`를 누릅니다.
3. 저장소에서 `Add file` → `Upload files`를 선택합니다.
4. 이 폴더 안의 **파일을 모두** 업로드합니다 (`index.html`, `class-notes.html`, `class-data.js`, `dele-a2.html`, `speaking.html`, `manifest.json`, `sw.js`, `icon.svg`). 폴더 자체가 아니라 파일을 업로드하세요.
5. 아래 `Commit changes` 영역에 메시지 `Add Spanish study app`를 입력하고 `Commit changes`를 누릅니다.
6. 저장소의 `Settings` → `Pages`로 갑니다.
7. `Build and deployment`에서 `Deploy from a branch`를 선택하고 Branch `main`, folder `/(root)`를 선택한 뒤 `Save`를 누릅니다.
8. 잠시 기다린 후 Pages 화면에 표시되는 URL을 엽니다. 보통 `https://YOUR-USERNAME.github.io/spanish-study/` 형태입니다.

## 휴대폰에 앱처럼 추가하기
1. Android Chrome에서 게시된 GitHub Pages 주소를 엽니다.
2. 우측 상단 `⋮` 메뉴를 누릅니다.
3. `앱 설치` 또는 `홈 화면에 추가`를 선택합니다. 표시되는 문구는 브라우저에 따라 다릅니다.

## 업데이트
파일을 수정한 뒤 같은 저장소에 다시 업로드하고 커밋하면 Pages가 업데이트됩니다. GitHub 계정 비밀번호나 토큰을 다른 사람과 공유하지 마세요.

## 매주 학원 노트 업데이트 루틴
1. 수업 직후: 앱 → 학원 노트 → ✏️ 메모 탭에 기억나는 걸 대충 적고 `추가`.
2. 주말: `📋 Claude에게 보낼 내용 복사` → Claude의 **스페인어 공부방** 프로젝트 채팅에 붙여넣기.
3. Claude가 활용표·예문·관련 표현·퀴즈를 채운 `class-data.js`를 줍니다.
4. GitHub 저장소에서 `Add file` → `Upload files`로 `class-data.js`만 올리고 커밋 (같은 이름이라 덮어쓰기 됨).
5. 앱에서 `보낸 메모로 표시`를 누르면 다음 주 메모와 섞이지 않아요.

메모와 ⭐ 표시는 휴대폰 브라우저에만 저장되니, 폰을 바꾸기 전에 `⬇️ 백업 받기`를 해두세요.
