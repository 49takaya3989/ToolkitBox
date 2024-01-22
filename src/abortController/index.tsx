import { useEffect } from 'react';
import { useAbortSignal } from './hooks/useAbortController';

const Component = () => {
  const abortSignalOne = useAbortSignal();
  const abortSignalTwo = useAbortSignal();

  // 最初のAPIリクエスト
  useEffect(() => {
    fetch('https://api-endpoint-one.com', { signal: abortSignalOne })
      .then(res => { /* 省略 */ })
      .catch(err => { /* 省略 */ });
  }, [abortSignalOne]);

  // 二つ目のAPIリクエスト
  useEffect(() => {
    fetch('https://api-endpoint-two.com', { signal: abortSignalOne })
      .then(res => { /* 省略 */ })
      .catch(err => { /* 省略 */ });
  }, [abortSignalTwo]);

  return <div>Component</div>;
};

export default Component;
