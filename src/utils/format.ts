export declare interface instanceObject {
  [key: string]: string;
}

/**
 * JSON -> url
 * @param data Json
 * */
export const formatJsonToUrlParams = (data: instanceObject) => {
  return typeof data === 'object'
    ? Object.keys(data)
        .map((key) => {
          return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`;
        })
        .join('&')
    : '';
};

export default formatJsonToUrlParams;
