type Options = Partial<{
  async: boolean;
  integrity: string;
  type: string;
}>;

export function lazyLoadScript(src: string, opts: Options = {}) {
  return new Promise(function(resolve, reject) {
    const { async, integrity, type } = opts;

    const sc = document.querySelector(`script[src="${src}"]`);

    if (sc) {
      resolve(sc);
      return;
    }

    const script = document.createElement('script');
    script.src = src;

    if (async) { script.setAttribute('async', 'true'); }
    if (integrity) { script.setAttribute('integrity', integrity); }
    if (type) { script.setAttribute('type', type); }

    script.onload = () => resolve(script);
    script.onerror = event => reject(event);

    document.body.appendChild(script);
  });
}
