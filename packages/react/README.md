## Lyket React

Lyket is a tool to quickly implement GDPR-compliant clap/like/vote buttons on a webpage. To create a new button you need to choose a behaviour (Like, Clap or Up/down) and an identifier. From that moment on, the server will keep track of every visitor interaction on that button without storing personal data.

## Installation

To install the component run

```javascript
yarn add @lyket/react
```

or

```javascript
npm install @lyket/react
```

## Configuration

## The Provider Component

Add the Provider component top-level and configure it using your personal public API key that you can get after registering to Lyket

```javascript
import { Provider } from '@lyket/react';

ReactDOM.render(
  <Provider apiKey="[YOUR-API-KEY]">
    <App />
  </Provider>,
  document.getElementById('root')
);
```

##### Required props

- **apiKey**: you can get your public API key by registering on [Lyket](https://app.lyket.dev).

##### Optional props

- **theme**: allows you to provide your custom colors and style to buttons. It just applies to some of the templates. Read more about it in the _Styling buttons_ section at the end of this document.

- **recaptchaSiteKey**: if you enabled reCAPTCHA you need to provide your public key. Read more in the _ReCAPTCHA_ section at the end of this document.

## The buttons

Once you configured the Provider you can start adding buttons anywhere in your app.

There are three different button types that have different behaviours and purposes, but they all share these basic features and props:

- As soon as a button component is mounted, a fetch request is made to retrieve info on the button that identifies with id and namespace that you provided. If no button is found, a new one will be created using the id/namespace identifier.

- Notice that the server will create a new button for every different and unique identifier, so if you change id or namespace or type the new button won’t inherit the votes.

- Every time a user interacts with a button, the button counter will update and flag that the user has already voted. There is no need to signup or to use any third party service.

### Button props

All buttons have the same prop types and need at least an ID to be created. Here we list in detail all required and optional props.

##### Required props

- **id**: The API uses the ID to find a button. It should be unique for namespace. It accepts an alphanumeric string with maximum 50 characters.

##### Optional props

- **namespace**: Giving a namespace is useful to keep buttons organised, and can be used to fetch statistics. Check the API docs for more information.

- **hideCounterIfLessThan**:
  You may want to hide the counter if you are not getting enough feedback. Specify the number of votes/claps/likes you want to receive before showing the counter.

- **component**:
  To change the aspect of the default button you can either provide one of the ready-made **templates** that Lyket provides or a **custom component** in the component attribute.

## Button types

The three types of buttons are the following:

### Like Button

Like buttons behave as Twitter "likes".

Users can only like once and a subsequent request from the same user will remove the user's like.

```javascript
import { LikeButton } from '@lyket/react';

export BlogPost = ({ title, content }) => {
  return (
    <div>
      {title}
      <LikeButton
        id="how-to-reduce-footprint"
        namespace="post"
      />
      {content}
    </div>
  );
};
```

### Up/down Button

Up/down buttons behave as Reddit like/dislike buttons.

Users can only like or dislike once and a subsequent call from the same user will remove the user's like or dislike.

```javascript
import { UpdownButton } from '@lyket/react';

export BlogPost = ({ title, content }) => {
  return (
    <div>
      {title}
      <UpdownButton
        id="how-i-joined-the-raiders-of-the-lost-ark"
        namespace="post"
      />
      {content}
    </div>
  );
};
```

### Clap Button

Clap buttons behave like Medium applauses. Users can like multiple times and every other call from the same user will increment the claps number.

```javascript
import { ClapButton } from '@lyket/react';

export BlogPost = ({ title, content }) => {
  return (
    <div>
      {title}
      <ClapButton id="diy-fish-holder" namespace="post" />
      {content}
    </div>
  );
};
```

## Button Templates

Lyket provides a set of out-of-the-box templates. You can see all the available templates on [lyket.dev/templates](https://lyket.dev/templates)

By default, ie. if you don't specify any template or custom component, Lyket will show the Simple Template.

- **Simple**: default LikeButton - supports custom theme
- **Twitter**: Twitter style LikeButton
- **Simple**: default UpdownButton - supports custom theme
- **Reddit**: Reddit style UpdownButton
- **Simple**: default ClapButton - supports custom theme
- **Medium**: Medium style ClapButton

Import templates directly from the button. Here is an example of using the Twitter template on a LikeButton.

```javascript
import { LikeButton } from '@lyket/react';

export StandingOvation = () => {
  return (
    <>
      <h2>Do you like pizza?</h2>
      <LikeButton
        id="do-you-like-pizza"
        component={ClapButton.templates.Twitter}
      />
    </>
  );
};
```

## Custom Buttons

You may want to give a different flavour to a button, for example using your logo as icon. You can do that by creating your own component!

Here is an example for each button type of passing a custom component through children. You can pass a custom component also through the component prop.

**Custom LikeButton**

```javascript
import { LikeButton } from '@lyket/react';

export Faq = () => {
  return (
    <>
      <h2>Do you like pizza?</h2>
      <LikeButton
        id="do-you-like-pizza"
        namespace="faq"
        hideCounterIfLessThan={1}
      >
        {({
          pressButton,
          totalLikes,
          userLiked,
          isLoading,
          isCounterVisible
        }) => (
          <>
            <button onClick={pressButton} disabled={isLoading}>
              Of course! 🍕🍕🍕
            </button>
            {isCounterVisible && <div>Total: {totalLikes}</div>}
            {userLiked && <div>Thanks for your vote!</div>}
          </>
        )}
      </LikeButton>
    </>
  )
};
```

**Custom ClapButton**

```javascript
import { ClapButton } from '@lyket/react';

export Faq = () => {
  return (
    <>
      <h2>Do you like pizza?</h2>
      <ClapButton
        id="do-you-like-pizza"
        namespace="faq"
        hideCounterIfLessThan={3}
      >
        {({
          pressButton,
          totalClaps,
          userClaps,
          isLoading,
          isCounterVisible,
        }) => (
          <>
            <button onClick={pressButton} disabled={isLoading}>
              Of course! 🍕🍕🍕
            </button>
            {isCounterVisible && <div>Total: {totalClaps}</div>}
            <div>You clapped {userClaps} times</div>
          </>
        )}
      </ClapButton>
    </>
  );
};
```

**Custom UpdownButton**

```javascript
import { UpdownButton } from '@lyket/react';

export Faq = () => {
  return (
    <>
      <h2>Do you like pizza?</h2>
      <UpdownButton
        id="do-you-like-pizza"
        namespace="faq"
        hideCounterIfLessThan={1}
      >
        {({
          pressUp,
          pressDown,
          totalScore,
          userVoteDirection,
          isCounterVisible,
          isLoading,
        }) => (
          <>
            <button onClick={pressUp} disabled={isLoading}>
              Of course! 🍕🍕🍕
            </button>
            <button onClick={pressDown} disabled={isLoading}>
              I am a bad person
            </button>
            {isCounterVisible && <p>Total: {totalScore}</p>}
            <p>Your vote: {userVoteDirection}</p>
          </>
        )}
      </UpdownButton>
    </>
  );
};
```

## Styling buttons

### Resizing

All buttons can be resized by wrapping them in a container and changing the font-size.

### Apply your color scheme and fonts

Lyket uses the [theme-ui](https://theme-ui.com/home) library, allowing you to provide your own theme to the buttons through the **theme** prop in the provider.

- **primary** - Changes the color of the "like" button, when user has liked.
- **secondary** - Changes the color of the "dislike" button, when user has disliked.
- **background** - Changes the background color of the inactive button.
- **text** - Changes the counter's text and the inactive icon's color.
- **highlight** - Changes the animation color.

These are the default values:

```js
const defaultTheme = {
  colors: {
    primary: '#22c1c3',
    secondary: '#ff00c3',
    background: 'transparent',
    text: '#292929',
    highlight: '#e095ed',
  },
  fonts: {
    body: 'inherit',
    heading: 'inherit',
    monospace: 'inherit',
  },
  fontWeights: {
    body: 400,
    bold: 700,
  },
};
```

The Provider component makes a deep merge, so you can overwrite the theme object totally or partially.

Not all the templates support theming. Read the templates detail to know which ones.

## reCAPTCHA

Lyket is integrated with Google reCAPTCHA V3 to handle malicious use without interrupting _human_ users. To enable it you need to provide your Google reCAPTCHA secret key in the user settings in the private area and add your recaptcha site key through the recaptchaSiteKey prop in the Provider. The key will be encrypted.
