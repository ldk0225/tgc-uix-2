## TGC2 Rendering

### 프로젝트 시작법

```
터미널을 열고 tgc-rendering 프로젝트에 진입합니다.
1. yarn set version 4.1.1
2. yarn install
3. yarn dev:rendering
```

### 요구사항
```
`/api/banners` API는 1초 지연을 가지고 있습니다.
지연에따른 랜더링 을 자유롭게 구현해주세요.

호출 예제는 apps/rendering/src/component/Component.tsx 를 확인해주세요.
```

### API 인터페이스
```typescript
interface Banner {
  id: number;
  url: string;
}
```