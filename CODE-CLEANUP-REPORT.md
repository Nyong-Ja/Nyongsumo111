# NyongJa Phasmophobia — 코드 정리 리포트 (v4)

## 이번 단계
- CSS의 잘못 닫힌 주석(`/* ... *`)을 정상 주석으로 수정했습니다.
- 중복으로 존재하던 동일 테마 보정 규칙을 제거했습니다.
- HTML의 `style="cursor: pointer"`를 기존 `.is-clickable` 클래스로 이동했습니다.
- 데이터 JS 파일은 수정하지 않았습니다.
- 기능 변경을 목적으로 하는 JS 리팩터링은 이번 단계에서 하지 않았습니다.

## 안전성 원칙
현재 정상 작동하는 사이트를 기준으로, 동작을 바꿀 가능성이 큰 CSS 구조 재설계와 `!important` 전면 제거는 보류했습니다.
`!important`는 테마별 가독성 보정에 사용되는 부분이 남아 있습니다.

## 검증
- JavaScript `node --check`: 전체 통과
- CSS `tinycss2` 파싱 오류: 0
- HTML 인라인 `style=`: 0개
