/**
 * @name configManualChunk
 * @description chunk 언팩 최적화
 */

const vendorLibs: { match: string[]; output: string }[] = [
  {
    match: ['echarts'],
    output: 'echarts',
  },
];

export const configManualChunk = (id: string) => {
  if (/[\\/]node_modules[\\/]/.test(id)) {
    const matchItem = vendorLibs.find((item) => {
      const reg = new RegExp(
        `[\\/]node_modules[\\/]_?(${item.match.join('|')})(.*)`,
        'ig'
      );
      return reg.test(id);
    });
    return matchItem ? matchItem.output : null;
  }
};
