# 접근성 친화적 모달 폼

React와 HTML5 `<dialog>` 엘리먼트를 활용하여 접근성을 고려한 모달 폼 컴포넌트를 구현한 프로젝트입니다.

## 주요 기능 및 특징

### 접근성 중점 기능

- **키보드 탐색 지원**: 모달 열기/닫기 시 포커스 관리
- **스크린 리더 호환**: ARIA 속성을 통한 접근성 향상
- **명확한 시맨틱 구조**: `<dialog>` 엘리먼트 활용

### 핵심 구현 사항

#### 1. 모달 상태 관리 (`useFormModal`)
- Promise 기반의 비동기 모달 처리
- 타입 안전한 폼 데이터 반환
- 모달 열기/닫기 상태 관리

#### 2. 접근성 최적화
- **포커스 관리**: 모달 열기 전 요소로 포커스 복원
- **ARIA 라벨링**: `aria-modal`, `aria-labelledby`, `aria-describedby` 속성
- **스크롤 제어**: 모달 열림 시 배경 스크롤 방지

#### 3. 사용자 경험 향상
- 백드롭 클릭으로 모달 닫기
- 폼 데이터 자동 수집 및 타입 변환
- 취소/제출 버튼 제공

## 프로젝트 구조

```
src/
├── @components/
│   └── FormModal/
│       ├── @hooks/
│       │   └── useFormModal.ts    # 모달 상태 관리 훅
│       ├── @utils.ts              # 스크롤 제어 유틸리티
│       ├── index.module.css       # 모달 스타일
│       └── index.tsx              # 모달 컴포넌트
├── ModalFormPage.tsx              # 메인 페이지
└── main.tsx                       # 앱 진입점
```

## 사용 방법

### 1. 개발 서버 실행
```bash
yarn dev
```

## 기술 스택

- **React 19** - UI 라이브러리
- **TypeScript** - 타입 안전성
- **Vite** - 빌드 도구
- **CSS Modules** - 스타일링

## 컴포넌트 사용 예시

```tsx
import { FormModal, useFormModal } from './@components/FormModal';

const MyPage = () => {
  const { modalProps, open } = useFormModal<FormValues>();
  
  const handleOpen = async () => {
    const result = await open();
    console.log(result); // 폼 데이터 출력
  };

  return (
    <>
      <button onClick={handleOpen}>폼 열기</button>
      <FormModal title="제목" description="설명" {...modalProps}>
        <input name="email" type="email" required />
        <input name="name" type="text" required />
      </FormModal>
    </>
  );
};
```

## 접근성 준수사항

- WAI-ARIA 가이드라인 준수
- 키보드만으로 모든 기능 이용 가능
- 스크린 리더 사용자를 위한 적절한 라벨링
- 색상에 의존하지 않는 UI 설계

이 프로젝트는 **웹 접근성**과 **사용자 경험**을 모두 고려한 모달 폼 구현에 중점을 두었습니다.
