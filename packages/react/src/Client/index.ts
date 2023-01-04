import { getSessionId } from "./sessionId";
import { generateRecaptchaToken } from "./generateRecaptchaToken";
import { ApiError } from "./ApiError";
import { debounceCollect } from "./debounceCollect";

export type ConstructorArguments = {
	apiKey: string;
	recaptchaSiteKey?: string;
	baseUrl?: string;
	disableSessionId?: boolean;
};

class LikeButtonClient {
	client: Client;

	constructor(client: Client) {
		this.client = client;
	}

	press({
		id,
		namespace,
	}: Paths.LikeButtonPress.PathParameters): Promise<Paths.LikeButtonPress.Responses.$200> {
		return this.client.put(
			namespace
				? `/like-buttons/${namespace}/${id}/press`
				: `/like-buttons/${id}/press`,
			"press",
		);
	}

	info({
		id,
		namespace,
	}: Paths.LikeButtonInfo.PathParameters): Promise<Paths.LikeButtonInfo.Responses.$200> {
		return this.client.enqueueToBatch(
			namespace ? `/like-buttons/${namespace}/${id}` : `/like-buttons/${id}`,
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
	}: Paths.ClapButtonPress.PathParameters): Promise<Paths.ClapButtonPress.Responses.$200> {
		return this.client.put(
			namespace
				? `/clap-buttons/${namespace}/${id}/press`
				: `/clap-buttons/${id}/press`,
			"press",
		);
	}

	info({
		id,
		namespace,
	}: Paths.ClapButtonInfo.PathParameters): Promise<Paths.ClapButtonInfo.Responses.$200> {
		return this.client.enqueueToBatch(
			namespace ? `/clap-buttons/${namespace}/${id}` : `/clap-buttons/${id}`,
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
	}: Paths.UpdownButtonInfo.PathParameters): Promise<Paths.UpdownButtonInfo.Responses.$200> {
		return this.client.enqueueToBatch(
			namespace
				? `/updown-buttons/${namespace}/${id}`
				: `/updown-buttons/${id}`,
		);
	}

	pressUp({
		id,
		namespace,
	}: Paths.UpdownButtonPressUp.PathParameters): Promise<Paths.UpdownButtonPressUp.Responses.$200> {
		return this.client.put(
			namespace
				? `/updown-buttons/${namespace}/${id}/press-up`
				: `/updown-buttons/${id}/press-up`,
			"pressUp",
		);
	}

	pressDown({
		id,
		namespace,
	}: Paths.UpdownButtonPressDown.PathParameters): Promise<Paths.UpdownButtonPressDown.Responses.$200> {
		return this.client.put(
			namespace
				? `/updown-buttons/${namespace}/${id}/press-down`
				: `/updown-buttons/${id}/press-down`,
			"pressDown",
		);
	}
}

class RateButtonClient {
	client: Client;

	constructor(client: Client) {
		this.client = client;
	}

	press({
		id,
		namespace,
		rating,
	}: Paths.RateButtonPress.PathParameters): Promise<Paths.RateButtonPress.Responses.$200> {
		return this.client.put(
			namespace
				? `/rate-buttons/${namespace}/${id}/press`
				: `/rate-buttons/${id}/press`,
			"press",
			{
				type: "rate-buttons",
				data: {
					attributes: { rating },
				},
			},
		);
	}

	info({
		id,
		namespace,
	}: Paths.RateButtonInfo.PathParameters): Promise<Paths.RateButtonInfo.Responses.$200> {
		return this.client.enqueueToBatch(
			namespace ? `/rate-buttons/${namespace}/${id}` : `/rate-buttons/${id}`,
		);
	}
}

export class Client {
	apiKey: string;
	baseUrl: string;
	disableSessionId: boolean;
	recaptchaSiteKey: string | undefined;
	likeButtons: LikeButtonClient;
	clapButtons: ClapButtonClient;
	rateButtons: RateButtonClient;
	updownButtons: UpdownButtonClient;
	enqueueToBatch: (url: string) => Promise<any>;

	constructor({
		apiKey,
		recaptchaSiteKey,
		baseUrl,
		disableSessionId,
	}: ConstructorArguments) {
		this.apiKey = apiKey;
		this.recaptchaSiteKey = recaptchaSiteKey;
		this.disableSessionId = disableSessionId;
		this.baseUrl = baseUrl || "https://api.lyket.dev";

		this.likeButtons = new LikeButtonClient(this);
		this.clapButtons = new ClapButtonClient(this);
		this.updownButtons = new UpdownButtonClient(this);
		this.rateButtons = new RateButtonClient(this);

		this.enqueueToBatch = debounceCollect<[string]>(this.batch.bind(this), 500);
	}

	get(url: string) {
		return this.request(url);
	}

	async batch(calls: [string][]) {
		// return Promise.all(calls.map(args => this.request(args[0])));
		const url: RequestInfo = "/buttons/batch";

		const result = await this.request(url, {
			method: "POST",
			body: {
				type: "batch",
				data: {
					attributes: { urls: calls.map((args) => args[0]) },
				},
			},
		});

		return result.data.attributes.responses;
	}

	put(url: string, recaptchaAction: string, body = {}) {
		return this.request(url, { method: "PUT", recaptchaAction, body });
	}

	async request(
		input: string,
		init?: {
			method: string;
			body?: Record<string, any>;
			recaptchaAction?: string;
			headers?: Record<string, string>;
		},
	) {
		if (typeof window === "undefined") {
			throw new Error("Client is supposed to be used client-side only!");
		}

		const defaultHeaders: Record<string, string> = {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${this.apiKey}`,
		};

		if (!this.disableSessionId) {
			defaultHeaders["x-session-id"] = getSessionId();
		}

		if (this.recaptchaSiteKey && init && init.recaptchaAction) {
			defaultHeaders["x-recaptcha-token"] = await generateRecaptchaToken(
				this.recaptchaSiteKey,
				init.recaptchaAction,
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
			const errorMessages = await response.json();

			throw new ApiError(
				url,
				requestInit,
				response.status,
				errorMessages.errors,
			);
		}

		return response.json();
	}
}
