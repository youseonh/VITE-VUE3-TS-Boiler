/**
 *  커스텀 디렉티브 파일
 *
 * Vue는 코어에 포함된 기본 디렉티브 세트(v-model과 v-show) 외에도
 * 사용자 정의 디렉티브를 등록할 수 있다. directive를 사용하면
 *  HTML 요소에 속성처럼 추가하여 요소에 추가적인 처리를 할 수 있다.
 */

import type { App } from 'vue';
import { setupLazyImgDirectives } from './lazyImg';
export function setupGlobDirectives(app: App) {
  setupLazyImgDirectives(app);
}
