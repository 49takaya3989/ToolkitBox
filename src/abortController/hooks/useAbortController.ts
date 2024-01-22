import { useEffect, useRef } from 'react';

/**
 * useAbortSignal
 * コンポーネントのアンマウント時に fetch をキャンセルするhooks
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