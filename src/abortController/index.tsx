import { useEffect } from 'react';
import { useAbortSignal } from './hooks/useAbortController';

const Component = () => {
  const abortSignal = useAbortSignal();

  // 最初のAPIリクエスト
  useEffect(() => {
    fetch('https://api-endpoint-one.com', { signal: abortSignal })
      .then(res => { /* 省略 */ })
      .catch(err => { /* 省略 */ });
  }, [abortSignal]);

  // 二つ目のAPIリクエスト
  useEffect(() => {
    fetch('https://api-endpoint-two.com', { signal: abortSignal })
      .then(res => { /* 省略 */ })
      .catch(err => { /* 省略 */ });
  }, [abortSignal]);

  return <div>Component</div>;
};

export default Component;
