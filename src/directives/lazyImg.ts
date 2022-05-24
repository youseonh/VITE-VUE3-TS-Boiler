/**
 *  이미지 파일 lazyLoding
 *  초기에 이미지를 셋팅할때, 위와같이 구성합니다. 이미지가 실제 안보이는 영역에는 랜더링이 되어있지 않기 때문에 성능이 좋습니다.
 *  @Example v-lazyImg = "UserInfo.pictures"
 *  https://velog.io/@katanazero86/vue-%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%A0%95%EC%9D%98-%EC%A7%80%EC%8B%9C%EC%9E%90%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-image-lazy-loading-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
 */

import type { App, Directive, DirectiveBinding } from 'vue';

//단순 scroll을 감지하여 사용할 수도 있지만, 성능적인 문제로 Intersection Observer 사용을 권장한다.
// 교차 관찰자 API(Intersection Observer API)는 상위요소 또는 최상위 문서의 뷰포트
// (viewport)와 대상 요소의 교차점에서 변화를 비동기적으로 관찰할 수 있는 방법을 제공한다
import { useIntersectionObserver } from '@vueuse/core';

import defaultImg from '@assets/images/logo.png';

function lazyImg(el: HTMLImageElement, binding: any) {
  const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      el.src = el.src || binding.value || defaultImg;
      el.onerror = () => {
        el.src = binding.value || defaultImg;
      };
      stop();
    }
  });
}

// binding = 속성을 가진 객체
// 1. name = 디렉티브 이름
// 2. value = 전달받은 값
// 3. expression 4. arg 5. modifiers 6. oldValue
const mounted = (el: HTMLImageElement, binding: DirectiveBinding<any>) => {
  lazyImg(el, binding);
};

const LazyImgDirective: Directive = {
  mounted,
};

export function setupLazyImgDirectives(app: App) {
  app.directive('lazyImg', LazyImgDirective);
}

export default LazyImgDirective;
