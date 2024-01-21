import { useEffect, useRef } from 'react';

/**
 * useAbortSignal
 * コンポーネントのアンマウント時に fetch をキャンセルする関数
 */
export const useAbortSignal = (): AbortSignal => {
  const abortController = useRef(new AbortController());

  useEffect(
    () => () => {
      abortController.current.abort();
    },
    []
  );

  return abortController.current.signal;
};