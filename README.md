# My-Leisurely-Day

## 주제: 느린하루.

- 내가 좋아하는 '집'이라는 장소에서 하루를 느긋하게 보내고싶다는 마음에 이 주제를 선택하게되었다. 집에서 즐기는 취미관련 용품들을 판매하고 관련정보를 공유한다.
- 긴장완화에 도움이 되며 눈에도 건강한 회색이 가미된 파란색 계열의 색을 사용하여 편하게 둘러볼 수 있게 하였다.

### 😉 Hooks패턴적용

- 기존에 사용하던 container/presenter패턴을 대신 hooks패턴을 사용해 좀더 간단하고 효율적으로 코드를 작성해 보았다.

### ⌨️ 적용한 기능

#### 로그인/ 회원가입

- 로그인 진행시 accessToken과 refreshToken을 저장하여 accessToken 만료시 쿠키에 저장된 refreshToken을 활용하여 자동으로 새로운 accessToken이 발급되며 로그인이 연장됩니다.
- 회원가입 및 로그인에 yup을 활용한 검증이 진행됩니다.

#### 상품 등록

- 상품등록시 로그인이 필요합니다. 필수 값에 대한 yup을 활용한 검증이 진행됩니다.
- 주소를 검색하면 카카오 맵을 통해 해당 위치에 마커가 생성됨

#### 상품상세

- 사진은 기본으로 1개가 보이며 그 이상 사진이 등록되어있다면 ant의 캐러셀이 자동으로 재생되며 사진이 넘어감.
- 생성된 주소 위치가 지도로 보임.
- 댓글, 대댓글.(문의 , 답변)

### 💻 사용한 기술스텍 정리

- Next.js
  - 리엑트에서 지원되지않는 서버사이드 렌더링이 가능.
- TypeScript
  - 타입에 대한 정의를 분명히 하여 실행시 에러를 방지할 수 있음.
- React
  - 기존에 자바스크립트를 배워왔고, 컴포넌트를 분리함에있어서 자바스크립트 언어의 문법을 사용하고자 하였기에 React를 선택하였다.
- GraphQL
  - rest-api의 오버패칭 문제를 해결하여 원하는 값만 보내고, 받아올 수 있게 하기위해 선택하였다.
  - 단 하나의 EndPoint가 존재해 사용이 간편하다.
- ESlint
  - 자바스크립트 코드에서 오류를 찾고 예방하고 코드의 가독성, 유지 보수성 및 안정성을 향상시킨다.
- emotion
  - 스타일을 컴포넌트화 하는데에 최고의 툴
- Recoil
  - 전역 상태 관리를 해주는 라이브러리중하나로, 사용량은 Redux가 많으나 Redux는 초기세팅이 많고, 그것을 도와주는 라이브러리 또한 필요하다.
    다만 Recoil의 경우에는 초기세팅이 필요하지 않아 훨씬 간편히 이용할 수 있어 선택하였다.
