import React, { useState, useEffect } from 'react';

type PromiseFactory = () => Promise<any>;

export const useSafeEffect = (
  effect: PromiseFactory,
  deps?: React.DependencyList | undefined
) => {
  const setState = useState<boolean>()[1];

  return useEffect(() => {
    async function safeRunner() {
      try {
        await effect();
      } catch (e) {
        setState(() => {
          throw e;
        });
      }
    }

    safeRunner();
    // eslint-disable-next-line
  }, [...(deps || []), setState]);
};
