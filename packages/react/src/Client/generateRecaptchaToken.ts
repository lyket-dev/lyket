import { lazyLoadScript } from './lazyLoadScript';

declare const grecaptcha: any;

export function generateRecaptchaToken(
  siteKey: string,
  action: string
): Promise<string> {
  return lazyLoadScript(
    `https://www.google.com/recaptcha/api.js?render=${siteKey}`
  ).then(
    () =>
      new Promise((resolve, reject) => {
        grecaptcha.ready(async () => {
          try {
            const token = await grecaptcha.execute(siteKey, {
              action,
            });
            resolve(token);
          } catch (e) {
            console.error('recaptcha error!', e);
            reject(e);
          }
        });
      })
  );
}
