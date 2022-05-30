export const template = {
  compilerOptions: {
    noImplicitAny: false, //noImplicitAny는 any라는 타입이 의도치않게 발생할 경우 에러를 띄워주는 설정
    strictNullChecks: true, //strictNullChecks는 null, undefined 타입에 이상한 조작하면 에러를 띄우는 설정
    target: 'esnext', // 타입스크립트 파일 컴파일 했을 때 빌드 디렉토리에 생성되는 자바스크립트 버전 (가장 최신 버전인 esnext)
    useDefineForClassFields: true,
    module: 'esnext', // 자바스크립트 파일간 import 문법을 구현할 때 어떤 문법을 쓸지 정하는 곳 ( esnext는 import 문법 )
    moduleResolution: 'node',
    strict: true,
    jsx: 'preserve', // tsx 파일을 jsx로 어떻게 컴파일할 것인지 'preserve', 'react-native', 'react'
    sourceMap: true,
    resolveJsonModule: true,
    esModuleInterop: true,
    baseUrl: '.',
    allowJs: true, // js 파일들 ts에서 import해서 쓸 수 있는지
    /**
     * path는 ./config > aliases.ts 참고
     */
    types: ['vite/client'],
    typeRoots: ['./node_modules/@types/', './types'],
    removeComments: true, //컴파일시 주석제거
    lib: ['esnext', 'dom', 'dom.iterable'], // 타입스크립트 파일을 자바스크립트로 컴파일 할 때 포함될 라이브러리의 목록
  },
  include: [
    'src/**/*.ts',
    'src/**/*.d.ts',
    'src/**/*.tsx',
    'src/**/*.vue',
    'config/**/*.ts',
  ], // 변환할 폴더 경로
  exclude: ['node_modules', 'dist'], //  변환하지 않을 폴더 경로
};
