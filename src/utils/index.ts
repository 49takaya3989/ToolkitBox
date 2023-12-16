/**
 * 空オブジェクトかどうかの判定する関数
 * */
const isEmptyObject = (obj: object): boolean => {
  return Object.keys(obj).length === 0;
}