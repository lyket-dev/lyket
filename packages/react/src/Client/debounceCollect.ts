const now = () => new Date().getTime();

type Deferred = {
  resolve: (value: any) => void;
  reject: (value: any) => void;
};

export function debounceCollect<Args extends any[]>(
  func: (calls: Args[]) => Promise<any[]>,
  wait: number
) {
  let timer: NodeJS.Timeout | null;
  let timestamp: number;

  let args: Args[] = [];
  let deferreds: Deferred[] = [];

  async function onTimeout() {
    let elapsed = now() - timestamp;

    if (elapsed < wait && elapsed > 0) {
      timer = setTimeout(onTimeout, wait - elapsed);
    } else {
      timer = null;
      await call();
      if (!timer) { reset(); }
    }
  }

  async function call() {
    const results = await func.call(null, args);

    for (let i = 0; i < results.length; i++) {
      deferreds[i].resolve(results[i]);
    }
  }

  function reset() {
    args = [];
    deferreds = [];
  }

  return function debounced(...callArgs: Args): Promise<any> {
    args.push(callArgs);

    timestamp = now();

    if (!timer) { timer = setTimeout(onTimeout, wait); }

    return new Promise((resolve, reject) => {
      deferreds.push({ resolve, reject });
    });
  };
}
