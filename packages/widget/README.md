## Lyket Widget

A simple script that lets you embed Lyket in your html/Wordpress/Webflow/Notion website and more!

## Installation

In your html file add the script top-level passing your Lyket API key as argument, then just add an element with a data-lyket-type anywhere in your code.

```html
<script src="https://unpkg.com/@lyket/widget@latest/dist/lyket.js?apiKey=[YOUR-API-KEY]"></script>
```

## Buttons

When you add a Lyket element a GET request is made to retrieve info about the button with that certain id and namespace. If no button is found, a new resource is created with the id/namespace identifier.

Notice that the server will create a new resource for every different and unique identifier, so if you change id or namespace the new button won’t inherit the votes.

Every time a user clicks on a button, the template will update the likes counter and flag that the user has already voted. There is no need of signup or third party service.

There are three different button types that have different behaviours.

### Add a like button

Like buttons behave like Twitter buttons. Users can only like once and a subsequent call from the same user will remove the user's like.

Use the data-lyket-type="like" to create a like button.

```html
<!-- minimal settings -->
<div data-lyket-type="like" data-lyket-id="my-first-post"></div>

<!-- with namespace -->
<div
  data-lyket-type="like"
  data-lyket-id="my-first-post"
  data-lyket-namespace="blog"
></div>

<!-- with non-default template -->
<div
  data-lyket-type="like"
  data-lyket-id="my-first-post"
  data-lyket-namespace="blog"
  data-lyket-template="twitter"
></div>
```

### Add a clap button

Clap buttons behave like Medium applauses. Users can like multiple times and every other call from the same user will increment the claps number.

Use the data-lyket-type="clap" to create a clap button.

```html
<!-- minimal settings -->
<div data-lyket-type="clap" data-lyket-id="my-first-post"></div>

<!-- with namespace -->
<div
  data-lyket-type="clap"
  data-lyket-id="my-first-post"
  data-lyket-namespace="blog"
></div>

<!-- with non-default template -->
<div
  data-lyket-type="clap"
  data-lyket-id="my-first-post"
  data-lyket-namespace="blog"
  data-lyket-template="medium"
></div>
```

### Add an up/down button

Up/down buttons behave like Reddit buttons. Users can only vote or unvote once and a subsequent call from the same user will remove the user's vote or unvote.

Use the data-lyket-type="updown" to create a updown button.

```html
<!-- minimal settings -->
<div data-lyket-type="updown" data-lyket-id="my-first-post"></div>

<!-- with namespace -->
<div
  data-lyket-type="updown"
  data-lyket-id="my-first-post"
  data-lyket-namespace="blog"
></div>

<!-- with non-default template -->
<div
  data-lyket-type="updown"
  data-lyket-id="my-first-post"
  data-lyket-namespace="blog"
  data-lyket-template="reddit"
></div>
```

## Styling the buttons

You can change the default colors by providing your own color scheme. The color scheme does not apply on buttons with non-default templates.

- **data-lyket-color-primary** - Changes the color of the "like" button, when user has liked.
- **data-lyket-color-secondary** - Changes the color of the "dislike" button, when user has disliked.
- **data-lyket-color-background** - Changes the background color of the inactive button.
- **data-lyket-color-text** - Changes the counter's text and the inactive icon's color.
- **data-lyket-color-highligh** - Changes the animation's color.

Here is an example for a updown button

```html
<!-- button with color scheme -->
<div
  data-lyket-type="updown"
  data-lyket-id="my-first-post"
  data-lyket-color-primary="#e095ed"
  data-lyket-color-secondary="blue"
  data-lyket-color-background="#333"
  data-lyket-color-text="green"
  data-lyket-color-highligh="#ff00c3"
></div>
```
