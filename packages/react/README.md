# Lyket React

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

### The provider

Configure the Provider top-level using your public API key.

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

- **apiKey**: you can get your public API key by registering on lyket.dev

##### Optional props

- **theme**: This prop allows you to provide your own style to custom buttons or to some of the templates. Read more about it in the _Styling buttons_ section at the end of this document

- **recaptchaSiteKey**: if you enabled reCAPTCHA you need to provide your public key. Read more at the end of this document

### The buttons

When the component is mounted, a fetch request is made to retrieve info about the button with that certain id and namespace. If no button is found, a new resource is created with the id/namespace identifier.

Notice that the server will create a new resource for every different and unique identifier, so if you change id or namespace the new button won’t inherit the votes.

Every time a user clicks on a button, the component will update the likes counter and flag that the user has already voted. There is no need of signup or third party service.

There are three different button types that have different behaviours.

### Like Button

Like buttons behave like Twitter buttons. Users can only like once and a subsequent call from the same user will remove the user's like.

```javascript
import { LikeButton } from '@lyket/react';

export default BlogPost = ({ title, content }) => {
  return (
    <div>
      {title}
      <LikeButton
        id="how-to-reduce-footprint"
        namespace="post"
        component={LikeButton.templates.Twitter}
      />
      {content}
    </div>
  );
};
```

### Up/down Button

Up/down buttons behave like Reddit buttons. Users can only vote or unvote once and a subsequent call from the same user will remove the user's vote or unvote.

```javascript
import { UpdownButton } from '@lyket/react';

export default BlogPost = ({ title, content }) => {
  return (
    <div>
      {title}
      <UpdownButton
        id="how-i-joined-the-raiders-of-the-lost-ark"
        namespace="post"
        component={LikeButton.templates.Reddit}
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

export default BlogPost = ({ title, content }) => {
  return (
    <div>
      {title}
      <ClapButton id="diy-fish-holder" namespace="post" />
      {content}
    </div>
  );
};
```

#### Buttons props

All buttons have the same prop types and need at least an ID to be created. You can see in detail all the required and optional props

##### Required props

- **id**: The API uses the ID to determine which resource you want to interact with. It should be unique. It accepts an alphanumeric string with maximum 50 characters.

##### Optional props

- **namespace**: Giving a namespace is useful to keep buttons organized, and can be used to fetch statistics by namespace. Check the API docs for more information.

- **hideCounterIfLessThan**:
  You may not want to show a counter if you are not getting enough feedback. Specify the number of votes/claps/likes you want to receive before showing the counter.

- **component**:
  To change the aspect of the default button you can either provide one of the ready-made **templates** that Lyket provides or a **custom component** in the component attribute. Let's go deeper on this crucial prop.

#### Templates

A number of templates are provided to use Lyket out-of-the-box. You can see all the available options on [lyket.dev/demo](https://lyket.dev/demo)

- **Simple**: default LikeButton - supports themes
- **Twitter**: Twitter style LikeButton
- **Simple**: default UpdownButton - supports themes
- **Reddit**: Reddit style UpdownButton
- **Simple**: default ClapButton - supports themes
- **Medium**: Medium style ClapButton

Import templates directly from the button. Here is an example of using templates.

```javascript
import { ClapButton } from '@lyket/react';

export default StandingOvation = () => {
  return (
    <>
      <h2>Do you like pizza?</h2>
      <ClapButton
        id="do-you-like-pizza"
        component={ClapButton.templates.Medium}
      />
    </>
  );
};
```

#### Children or custom component

You may want to give a different flavour to a button, for example using your logo as icon or add a callback after a user click. You can do that by providing your own component!

Here are a few examples of using children for each button type. You can pass a component also through the component prop.

**LikeButton**

```javascript
import { LikeButton } from '@lyket/react';

export default Faq = () => {
  return (
    <>
      <h2>Do you like pizza?</h2>
      <LikeButton id="do-you-like-pizza" namespace="faq" hideCounterIfLessThan=10>
        ({ onClick, totalLikes, userHasVoted, isLoading, isCounterVisible }) => {
          return (
            <>
              <button onClick={onClick} disabled={isLoading}>Of course! 🍕🍕🍕</button>
              {isCounterVisible && <div>Total: {totalLikes}</div>}
              {userHasVoted && <div>Thanks for your vote!</div>}
            </>
          )
        }
      </LikeButton>
    </>
  )
};
```

**ClapButton**

```javascript
import { ClapButton } from '@lyket/react';

export default Faq = () => {
  return (
    <>
      <h2>Do you like pizza?</h2>
      <ClapButton id="do-you-like-pizza" namespace="faq" hideCounterIfLessThan=10>
        ({ onClick, totalClaps, userClaps, isLoading, isCounterVisible }) => {
          return (
            <>
              <button onClick={onClick} disabled={isLoading}>Of course! 🍕🍕🍕</button>
              {isCounterVisible && <div>Total: {totalClaps}</div>}
              <div>You clapped {userClaps} times</div>
            </>
          )
        }
      </ClapButton>
    </>
  )
};
```

**UpdownButton**

```javascript
import { UpdownButton } from '@lyket/react';

export default Faq = () => {
  return (
    <>
      <h2>Do you like pizza?</h2>
      <UpdownButton id="do-you-like-pizza" namespace="faq" hideCounterIfLessThan=10>
        ({
          pressUp,
          pressDown,
          totalScore,
          userVoteDirection,
          isCounterVisible,
          isLoading
        }) => {
          return (
            <>
              <button onClick={pressUp} disabled={isLoading}>Of course! 🍕🍕🍕</button>
              <button onClick={pressDown} disabled={isLoading}>I am a bad person</button>
              {isCounterVisible && <p>Total: {totalScore}</p>}
              <p>Your vote: {userVoteDirection}</p>
            </>
          )
        }
      </UpdownButton>
    </>
  )
};
```

# Styling buttons

### Resizing

All buttons can be resized by wrapping them in a container and changing the font-size.

### Apply your theme

Lyket uses the [theme-ui](https://theme-ui.com/home) library, allowing you to provide your own theme to the buttons through the **theme** prop in the provider.

These are the default values:

```js
const defaultTheme = {
  colors: {
    background: '#e0e0e0',
    text: '#292929',
    primary: '#22c1c3',
    secondary: '#ff00c3',
    accent: '#fcff4b',
    highlight: '#e095ed',
    muted: '#aaa',
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

There are a few templates that support theming. Read the templates detail to know which ones.

# reCAPTCHA

Lyket is integrated with Google reCAPTCHA V3 to handle malicious use without interrupting _human_ users. To enable it you need to provide your Google reCAPTCHA secret key in the user settings in the private area and add your recaptcha site key through the recaptchaSiteKey prop in the Provider. The key will be encrypted.
