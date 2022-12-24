declare namespace Components {
	namespace Schemas {
		export interface ClapButton {
			data: {
				/**
				 * Button ID
				 * example:
				 * applaud-me-if-you-can
				 */
				id: string;
				type: string;
				/**
				 * JSON API attributes
				 */
				attributes: {
					/**
					 * A namespace for categorizing a button
					 * example:
					 * blog-post
					 */
					namespace: string;
					/**
					 * The updated number of votes
					 * example:
					 * 42
					 */
					total_claps: number; // int64
					/**
					 * How many times a user has voted
					 * example:
					 * 1
					 */
					user_claps: number; // int64
				};
			};
		}
		export interface LikeButton {
			data: {
				/**
				 * Button ID
				 * example:
				 * how-to-ride-a-t-rex
				 */
				id: string;
				type: string;
				/**
				 * JSON API attributes
				 */
				attributes: {
					/**
					 * A namespace for categorizing a button
					 * example:
					 * blog-post
					 */
					namespace: string;
					/**
					 * The updated number of votes
					 * example:
					 * 42
					 */
					total_likes: number; // int64
					/**
					 * Whether the user has liked or not
					 * example:
					 * true
					 */
					user_has_liked: boolean;
				};
			};
		}
		export interface UpdownButton {
			data: {
				/**
				 * Button ID
				 * example:
				 * do-you-want-to-be-my-friend
				 */
				id: string;
				type: string;
				/**
				 * JSON API attributes
				 */
				attributes: {
					/**
					 * A namespace for categorizing a button
					 * example:
					 * blog-post
					 */
					namespace: string;
					/**
					 * The updated number of votes
					 * example:
					 * 42
					 */
					total_score: number; // int64
					/**
					 * Vote direction, one of (1, 0, -1)
					 * example:
					 * 1
					 */
					user_vote_direction: number; // int64
				};
			};
		}
		export interface RateButton {
			data: {
				/**
				 * Button ID
				 * example:
				 * applaud-me-if-you-can
				 */
				id: string;
				type: string;
				/**
				 * JSON API attributes
				 */
				attributes: {
					/**
					 * A namespace for categorizing a button
					 * example:
					 * blog-post
					 */
					namespace: string;
					/**
					 * The average rating
					 * example:
					 * 42
					 */
					average_rating: number; // int64
					/**
					 * The rate the user has given
					 * example:
					 * 1
					 */
					user_rating: number; // int64
					/**
					 * Total votes
					 * example:
					 * 1
					 */
					total_votes: number; // int64
				};
			};
		}
	}
}
declare namespace Paths {
	namespace ClapButtonInfo {
		namespace Parameters {
			/**
			 * example:
			 * how-to-reduce-your-footprint
			 */
			export type Id = string;
			/**
			 * example:
			 * blog-post
			 */
			export type Namespace = string;
		}
		export interface PathParameters {
			namespace?: /**
			 * example:
			 * blog-post
			 */
			Parameters.Namespace;
			id: /**
			 * example:
			 * how-to-reduce-your-footprint
			 */
			Parameters.Id;
		}
		namespace Responses {
			export type $200 = Components.Schemas.ClapButton;
		}
	}
	namespace ClapButtonPress {
		export interface BodyParameters {
			amount?: /**
			 * example:
			 * 3
			 */
			Parameters.Amount;
		}
		namespace Parameters {
			/**
			 * example:
			 * 3
			 */
			export type Amount = number;
			/**
			 * example:
			 * how-to-reduce-your-footprint
			 */
			export type Id = string;
			/**
			 * example:
			 * blog-post
			 */
			export type Namespace = string;
		}
		export interface PathParameters {
			namespace?: /**
			 * example:
			 * blog-post
			 */
			Parameters.Namespace;
			id: /**
			 * example:
			 * how-to-reduce-your-footprint
			 */
			Parameters.Id;
		}
		namespace Responses {
			export type $200 = Components.Schemas.ClapButton;
		}
	}
	namespace LikeButtonInfo {
		namespace Parameters {
			/**
			 * example:
			 * how-to-reduce-your-footprint
			 */
			export type Id = string;
			/**
			 * example:
			 * blog-post
			 */
			export type Namespace = string;
		}
		export interface PathParameters {
			namespace?: /**
			 * example:
			 * blog-post
			 */
			Parameters.Namespace;
			id: /**
			 * example:
			 * how-to-reduce-your-footprint
			 */
			Parameters.Id;
		}
		namespace Responses {
			export type $200 = Components.Schemas.LikeButton;
		}
	}
	namespace LikeButtonPress {
		namespace Parameters {
			/**
			 * example:
			 * how-to-reduce-your-footprint
			 */
			export type Id = string;
			/**
			 * example:
			 * blog-post
			 */
			export type Namespace = string;
		}
		export interface PathParameters {
			namespace?: /**
			 * example:
			 * blog-post
			 */
			Parameters.Namespace;
			id: /**
			 * example:
			 * how-to-reduce-your-footprint
			 */
			Parameters.Id;
		}
		namespace Responses {
			export type $200 = Components.Schemas.LikeButton;
		}
	}
	namespace UpdownButtonInfo {
		namespace Parameters {
			/**
			 * example:
			 * how-to-reduce-your-footprint
			 */
			export type Id = string;
			/**
			 * example:
			 * blog-post
			 */
			export type Namespace = string;
		}
		export interface PathParameters {
			namespace?: /**
			 * example:
			 * blog-post
			 */
			Parameters.Namespace;
			id: /**
			 * example:
			 * how-to-reduce-your-footprint
			 */
			Parameters.Id;
		}
		namespace Responses {
			export type $200 = Components.Schemas.UpdownButton;
		}
	}
	namespace UpdownButtonPressDown {
		namespace Parameters {
			/**
			 * example:
			 * how-to-reduce-your-footprint
			 */
			export type Id = string;
			/**
			 * example:
			 * blog-post
			 */
			export type Namespace = string;
		}
		export interface PathParameters {
			namespace?: /**
			 * example:
			 * blog-post
			 */
			Parameters.Namespace;
			id: /**
			 * example:
			 * how-to-reduce-your-footprint
			 */
			Parameters.Id;
		}
		namespace Responses {
			export type $200 = Components.Schemas.UpdownButton;
		}
	}
	namespace UpdownButtonPressUp {
		namespace Parameters {
			/**
			 * example:
			 * how-to-reduce-your-footprint
			 */
			export type Id = string;
			/**
			 * example:
			 * blog-post
			 */
			export type Namespace = string;
		}
		export interface PathParameters {
			namespace?: /**
			 * example:
			 * blog-post
			 */
			Parameters.Namespace;
			id: /**
			 * example:
			 * how-to-reduce-your-footprint
			 */
			Parameters.Id;
		}
		namespace Responses {
			export type $200 = Components.Schemas.UpdownButton;
		}
	}
	namespace RateButtonInfo {
		namespace Parameters {
			/**
			 * example:
			 * how-to-reduce-your-footprint
			 */
			export type Id = string;
			/**
			 * example:
			 * blog-post
			 */
			export type Namespace = string;
		}
		export interface PathParameters {
			namespace?: /**
			 * example:
			 * blog-post
			 */
			Parameters.Namespace;
			id: /**
			 * example:
			 * how-to-reduce-your-footprint
			 */
			Parameters.Id;
		}
		namespace Responses {
			export type $200 = Components.Schemas.RateButton;
		}
	}
	namespace RateButtonPress {
		export interface BodyParameters {
			amount?: /**
			 * example:
			 * 3
			 */
			Parameters.Amount;
		}
		namespace Parameters {
			/**
			 * example:
			 * 3
			 */
			export type Amount = number;
			/**
			 * example:
			 * how-to-reduce-your-footprint
			 */
			export type Id = string;
			/**
			 * example:
			 * blog-post
			 */
			export type Namespace = string;
		}
		export interface PathParameters {
			namespace?: /**
			 * example:
			 * blog-post
			 */
			Parameters.Namespace;
			id: /**
			 * example:
			 * how-to-reduce-your-footprint
			 */
			Parameters.Id;
			amount: /**
			 * example:
			 * 3
			 */
			Parameters.Amount;
		}
		namespace Responses {
			export type $200 = Components.Schemas.RateButton;
		}
	}
}
