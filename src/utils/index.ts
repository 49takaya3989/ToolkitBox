/**
 * isEmptyObject
 * 空オブジェクトかどうかの判定する関数
 * */
const isEmptyObject = (obj: object): boolean => {
  return Object.keys(obj).length === 0;
}

/**
 * str2Links
 * 文字列にURLパターンをリンクに変換する関数
 * */
const str2Links = (str: string): string => {
  // URLを検出する正規表現パターン
  const urlPattern = /https?:\/\/[^\s<>"]+|www\.[^\s<>"]+/g;

  // URLにマッチする部分をリンクに置換
  return str.replace(urlPattern, (url) => `<a href="${url}">${url}</a>`);
}