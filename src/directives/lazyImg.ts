/**
 *  이미지 파일 lazyLoding
 *  @Example v-lazyImg = "UserInfo.pictures"
 */

import type { App, Directive, DirectiveBinding } from "vue";

import { useIntersectionObserver } from "@vueuse/core";

import defaultImg from "/@/assets/images/logo.png";

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
  app.directive("lazyImg", LazyImgDirective);
}

export default LazyImgDirective;
