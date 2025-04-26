# 🎬 Netflix Clone

넷플릭스와 비슷한 UI로 구현한 **영화 정보 제공 웹앱**입니다.
React 기반으로 제작되었으며, 인기 영화, 평점 높은 영화, 개봉 영화, 상세 페이지 이동, 로딩 및 에러 처리 등
**넷플릭스 스타일의 주요 기능**을 갖추고 있습니다.

👉 **[배포된 앱 바로가기](https://netflix-demo-mu.vercel.app/)**

## 💡 주요 기능

- 메인 페이지에 인기 영화 / 평점 높은 영화 / 개봉 예정 영화 슬라이드별 노출
- 각 영화 클릭 시 상세 페이지 이동 및 상세 정보 조회
- 로딩 스피너 (Suspense 활용)을 통한 데이터 요청 중 상태 표시
- 검색 기능: 키워드로 영화 검색 가능
  1. 검색 결과 정렬 옵션 (인기순, 평점순, 개봉일순)
  2. 카테고리 필터링 기능 (장르별 필터링)
- 반응형 UI 적용 (React Bootstrap을 활용해 PC/태블릿/모바일 최적화)
- 환경 변수 관리: .env 파일을 통한 TMDB API 키 보호
- 컴포넌트 기반 설계로 유지보수성과 재사용성 강화
- React Query를 통한 서버 상태 관리 (fetch, cache, error handling)
- Axios를 통한 TMDB API 호출 및 토큰 인증 처리
- 404 NotFoundPage 구현: 잘못된 URL 접근 시 사용자 친화적인 안내 페이지 제공

## 🛠️ 사용 기술 스택

- React
- JavaScript (ES6+)
- React Router DOM – 페이지 라우팅
- Axios – API 통신
- React Query – 서버 상태 관리
- React Bootstrap – UI 컴포넌트 및 그리드 시스템
- Suspense – 비동기 컴포넌트 로딩
- Zustand – 전역 상태 관리 (확장성 고려)
- CSS – 커스텀 스타일링
- Vercel – 정적 배포

## 🔄 향후 업데이트 예정

- 무한 스크롤 (Infinite Scroll) 기능 추가
- 로그인 및 개인 추천 기능 구현
- 다크모드 / 라이트모드 테마 전환 기능
- 에러 메시지 처리 (Error Boundary 활용)
- 영화 찜하기(My List) 기능

## 👩‍💻 만든 사람

이유진 (@yuyu-kor)
응원과 피드백 언제든 환영 ✨
