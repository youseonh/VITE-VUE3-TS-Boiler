# 예시 코드

```tsx
<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue';
import { Type1, Type2 } from '../types';
import A from './A.vue';

export default defineComponent({
  name: 'B',
  components: {
    A,
  },
  setup() {
    const state = reactive({
      obj: { ... } as Type1,
      arr: [] as Type2[],
    });
    const onClick = () => { ... };
    onMounted(() => {
      state.arr.filter((i: Type2) => i.flag === false);
    });

    return {
      ...toRefs(state),
      onClick,
    };
  },
});
</script>
```

# 사용 방법

## 1. 개발 언어 속성 명시

- 타입스크립트 사용시 명시 필요

```tsx
<script lang="ts">...</script>
```

## 2. 타입스크립트에서 보는 새로운 타입들 (기본 외)

- 타입체킹에 대한 파일은 `node_modules\vuex\types\index.d.ts` 파일에서 기본적으로 도움을 받을 수 있다.
- 타입
  1. any : 기본적으로 타입 체킹을 하지 않는 것과 같음 (권고하지 않음)
  2. type : 타입이 명시되어 있는 고정된 수의 요소를 포함한 타입 배열을 정의
  3. enum : numberic값들을 익숙한 네임으로 정의 할 수 있다.
  이 외의 것들은 아래 페이지 참고
  [Documentation - Everyday Types](https://www.typescriptlang.org/docs/handbook/basic-types.html)
  [[TypeScript] 타입스크립트 시작하기](https://hasudoki.tistory.com/entry/TypeScript-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0)
  [타입스크립트에서 기본적으로 제공해주는 유틸 타입](https://blog.martinwork.co.kr/typescript/2019/05/28/typescript-util-types.html)

## 3. Vue3 Composition API

### 1) setup

- `setup`이 실행될 때, 컴포넌트 인스턴스가 아직 생성되지않아 `setup`옵션 내에 `this`가 존재하지 않습니다. 즉, `props`를 제외하고, 컴포넌트 내 다른 속성에 접근할 수 없습니다 – **local state**, **computedproperties** 또는 **methods**
- `setup(props, context) { ... }`의 형태로 사용할 수 있다. 이는 선택사항이며, 컴포넌트가 생성되기 전에 필요한 것들을 세팅하는 함수이다.
- setup()은 Vue 2의 라이프사이클 훅과 비교하면 beforeCreate와 created 훅 사이에 불려진다.
- 다른 컴포넌트와 달리 this에 접근이 불가하다. 그로인해 `this.[??]` 코드가 data 옵션의 변수인지 computed인지 코드만 보고 헷갈리는 현상이 없어졌다.
- 첫번째 전달인자로 props가 두번째 전달인자로는 context가 존재한다. 필요에 따라 context를 destructring하여 attr, slots, parent, root, emit 등을 사용할 수 있다.
- data, methods 옵션과 더불어 라이프사이클 훅도 setup() 내부에서 사용 가능하다.
- setup() 내부에서 정의한 객체들을 반환하면 속성들은 템플릿영역의 렌더 컨텍스트에 병합되어 렌더링에 영향을 미치게 된다.
- Vue 2의 option들이 1depth-hierarchy 구조와 달리 Vue 3에서 setup()로 인해 hierarchy 구조가 달라졌다.

### 2) reactive() vs. ref()

- 대표적인 반응성 방식 2가지는 reactive, ref이다.
- reactive()의 파라미터는 오직 객체만 받으며, 반환 결과로는 인자로 받은 객체와 동일한 반응형 객체로서 원본 객체 내부에 Vue 옵저버만 추가하여 그대로 반환한다. Proxy로 반응형이 구현되어있어 새로운 속성을 추가, 삭제하더라도 감지가 가능하며, 중첩된 객체라도 깊은 감지가 가능하여 반응성이 유지된다. Vue 2의 Vue.Observable API와 동일하다.
- ref()는 객체를 포함한 primitive 타입을 받을 수 있으며, 반응성을 유지하기 위해서 파라미터를 감싼 .value 속성을 가진 가변참조객체를 만들고 그 안에 값을 캡슐화한 결과로 나온다. template 상의 ref와 ref()가 통합되어 주로 onMounted 훅에서 엘리먼트를 가져올 때 사용할 수 있다.

### 3) method, computed, watch

- method : setup() 내부에서 함수를 정의하고 리턴하여 컴포넌트에 대한 접근 권한을 부여한 다음 템플릿 상에서 사용한다.
- computed : setup() 내부에서 옵션 방식이 아닌 computed() 내 익명함수로 작성하고 리턴하여 사용. computed 내부는 ref로 이루어져있어 .value를 통해 값을 접근한다.
- watch : 첫번째 인자로는 감시할 대상, 두번째는 현재값, 이전값을 알 수 있는 콜백, 세번째는 감시옵션을 넣어 사용한다.

[https://github.com/vuejs/composition-api](https://github.com/vuejs/composition-api)

# 추가 코드 작성시 주의사항

## 1. \***\*Vue 이벤트 버스 사용을 피한다.\*\***

이 패턴은 단순한 시나리오에서 `$dispatch`와 `$broadcast`를 대체 할 수 있지만, 더 복잡한 경우에는 Vuex와 같은 전용 상태 관리 레이어를 사용하는 것이 좋다.

이벤트 버스 개념이 프로그래밍에서 흔히 쓰이는 발행-구독(publish-subscribe) 패턴이기 때문에 아직은 [mitt](https://github.com/developit/mitt)와 같은 다른 라이브러리를 이용하여 이 개념을 사용해도 무관하다. 😉

```jsx
// 이벤트 버스 예시 (Vue 2)
import Vue from "vue";
const eventBus = new Vue();

// 구독
eventBus.$on("sandwich-made", () => console.log("sandwich made!"));

// 발행
eventBus.$emit("sandwich-made");
// 써드 파티 라이브러리(ex. mitt)를 사용하여 리팩토링
import mitt from "mitt";
const eventBus = mitt();

// 구독
eventBus.on("sandwich-made", () => console.log("sandwich made!"));

// 발행
eventBus.emit("sandwich-made");
```

## 2. Filter 함수를 사용하지 않는다.

Vue2에서 사용하던 Filter함수 사용법은 Method 안에서 작성한다.

```jsx
// 전: filter 사용
{
  filter: {
    toCurrency (value) {
      return `$${value.toFixed(2)}`
    }
  }
}

// 후: method 사용
{
  methods: {
    toCurrency (value) {
      return `$${value.toFixed(2)}`
    }
  }
}
```
