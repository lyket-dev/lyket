import { getSessionId } from './getSessionId';
import { generateRecaptchaToken } from './generateRecaptchaToken';
import { ApiError } from './ApiError';

export type ConstructorArguments = {
  apiKey: string;
  recaptchaSiteKey?: string;
  baseUrl?: string;
};

class LikeButtonClient {
  client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  press({
    id,
    namespace,
  }: Paths.LikeButtonPress.PathParameters): Promise<
    Paths.LikeButtonPress.Responses.$200
  > {
    return this.client.put(
      namespace
        ? `/like-buttons/${namespace}/${id}/press`
        : `/like-buttons/${id}/press`,
      'press'
    );
  }

  info({
    id,
    namespace,
  }: Paths.LikeButtonInfo.PathParameters): Promise<
    Paths.LikeButtonInfo.Responses.$200
  > {
    return this.client.get(
      namespace ? `/like-buttons/${namespace}/${id}` : `/like-buttons/${id}`
    );
  }
}

class ClapButtonClient {
  client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  press({
    id,
    namespace,
  }: Paths.ClapButtonPress.PathParameters): Promise<
    Paths.ClapButtonPress.Responses.$200
  > {
    return this.client.put(
      namespace
        ? `/clap-buttons/${namespace}/${id}/press`
        : `/clap-buttons/${id}/press`,
      'press'
    );
  }

  info({
    id,
    namespace,
  }: Paths.ClapButtonInfo.PathParameters): Promise<
    Paths.ClapButtonInfo.Responses.$200
  > {
    return this.client.get(
      namespace ? `/clap-buttons/${namespace}/${id}` : `/clap-buttons/${id}`
    );
  }
}

class UpdownButtonClient {
  client: Client;

  constructor(client: Client) {
    this.client = client;
  }
  info({
    id,
    namespace,
  }: Paths.UpdownButtonInfo.PathParameters): Promise<
    Paths.UpdownButtonInfo.Responses.$200
  > {
    return this.client.get(
      namespace ? `/updown-buttons/${namespace}/${id}` : `/updown-buttons/${id}`
    );
  }

  pressUp({
    id,
    namespace,
  }: Paths.UpdownButtonPressUp.PathParameters): Promise<
    Paths.UpdownButtonPressUp.Responses.$200
  > {
    return this.client.put(
      namespace
        ? `/updown-buttons/${namespace}/${id}/press-up`
        : `/updown-buttons/${id}/press-up`,
      'pressUp'
    );
  }

  pressDown({
    id,
    namespace,
  }: Paths.UpdownButtonPressDown.PathParameters): Promise<
    Paths.UpdownButtonPressDown.Responses.$200
  > {
    return this.client.put(
      namespace
        ? `/updown-buttons/${namespace}/${id}/press-down`
        : `/updown-buttons/${id}/press-down`,
      'pressDown'
    );
  }
}

export class Client {
  apiKey: string;
  baseUrl: string;
  recaptchaSiteKey: string | undefined;
  likeButtons: LikeButtonClient;
  clapButtons: ClapButtonClient;
  updownButtons: UpdownButtonClient;

  constructor({ apiKey, recaptchaSiteKey, baseUrl }: ConstructorArguments) {
    this.apiKey = apiKey;
    this.recaptchaSiteKey = recaptchaSiteKey;
    this.baseUrl = baseUrl || 'https://lyket.herokuapp.com';

    this.likeButtons = new LikeButtonClient(this);
    this.clapButtons = new ClapButtonClient(this);
    this.updownButtons = new UpdownButtonClient(this);
  }

  get(url: string) {
    return this.request(url);
  }

  put(url: string, recaptchaAction: string) {
    return this.request(url, { method: 'PUT', recaptchaAction });
  }

  async request(
    input: string,
    init?: Omit<RequestInit, 'body'> & {
      body?: Record<string, any>;
      recaptchaAction?: string;
    }
  ) {
    if (typeof window === 'undefined') {
      throw 'Client is supposed to be used client-side only!';
    }

    const defaultHeaders: Record<string, string> = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
      'x-session-id': getSessionId(),
    };

    if (this.recaptchaSiteKey && init && init.recaptchaAction) {
      defaultHeaders['x-recaptcha-token'] = await generateRecaptchaToken(
        this.recaptchaSiteKey,
        init.recaptchaAction
      );
    }

    const url: RequestInfo = `${this.baseUrl}/v1${input}`;
    const requestInit: RequestInit = init
      ? {
          ...init,
          headers: { ...defaultHeaders, ...init.headers },
          body: init.body && JSON.stringify(init.body),
        }
      : { headers: defaultHeaders };

    const response = await fetch(url, requestInit);

    if (response.status < 200 || response.status >= 300) {
      throw new ApiError(url, requestInit, response);
    }

    return response.json();
  }
}
