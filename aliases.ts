import path from 'path';
import fs from 'fs';
import prettier from 'prettier';

const aliases = {
  'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',

  '@': 'src',
  '@types': 'types',
  '@config': 'config',
  '@api': 'src/api',
  '@assets': 'src/assets',
  '@components': 'src/components',
  '@router': 'src/router',
  '@store': 'src/store',
  '@styles': 'src/styles',
  '@utils': 'src/utils',
  '@views': 'src/views',
  '@locales': 'src/locales',
  '@directives': 'src/directives',
  '@enums': 'src/enums',
};

export const aliasObj = {
  vite: {},
  jest: {},
  tsconfig: {},
  tsconfigPath: {},
};

for (const aliasKey in aliases) {
  const aliasValue = aliases[aliasKey];

  /** viteconfig.ts 파일 */
  aliasObj.vite[aliasKey] = resolveSrc(aliasValue);

  /** jest 파일 */
  const aliasHasExtension = /\.\w+$/.test(aliasValue);
  aliasObj.jest[`^${aliasKey}$`] = aliasHasExtension
    ? `<rootDir>/${aliasValue}`
    : `<rootDir>/${aliasValue}/index.ts`;
  aliasObj.jest[`^${aliasKey}/(.*)$`] = `<rootDir>/${aliasValue}/$1`;

  /**tsconfig.json 파일 */
  if (aliasKey !== 'vue-i18n') {
    aliasObj.tsconfig[aliasKey + '/*'] = [aliasValue + '/*'];
  }
  // aliasObj.tsconfig[aliasKey] = aliasValue.includes('/index.')
  //   ? [aliasValue]
  //   : [
  //       aliasValue + '/index.js',
  //       aliasValue + '/index.ts',
  //       aliasValue + '/index.json',
  //       aliasValue + '/index.vue',
  //       aliasValue + '/index.scss',
  //       aliasValue + '/index.css',
  //     ];
}

import { template } from './tsconfig.template';
import prettierrc from './.prettierrc';
const tsconfigTemplate = template;
const tsconfigPath = path.resolve(__dirname, 'tsconfig.json');

fs.writeFile(
  tsconfigPath,
  prettier.format(
    JSON.stringify({
      ...tsconfigTemplate,
      compilerOptions: {
        ...(tsconfigTemplate.compilerOptions || {}),
        paths: aliasObj.tsconfig,
      },
    }),
    {
      ...prettierrc,
      parser: 'json',
    }
  ),
  (error) => {
    if (error) {
      console.error('Error while creating tsconfig.json from aliases.ts.');
      throw error;
    }
  }
);

function resolveSrc(_path: string) {
  if (_path.includes('vue-i18n')) {
    return _path;
  } else {
    return path.resolve(__dirname, _path);
  }
}
