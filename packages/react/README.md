# Lyket React

Lyket is a tool to quickly implement clap/like/vote buttons on a webpage. To create a new button you need to choose a behaviour (Like, Clap or Updown) and an identifier. From that moment on, the server will keep track of every user interaction on that button.

# Installation

To install the component run

```javascript
yarn add @lyket/react
```

or

```javascript
npm install @lyket/react
```

# Configuration

Configure the Provider top-level using your public API key.

```javascript
import { Provider } from "@lyket/react";

ReactDOM.render(
  <Provider apiKey="[YOUR-API-KEY]">
    <App />
  </Provider>,
  document.getElementById("root")
);
```

Required props

- **apiKey**: you can get your public API key by registering on lyket.dev

Optional props

- **recaptchaKey**: if you enabled reCAPTCHA you need to provide your public key. Read more at the end of this document

# Buttons

When the component is mounted, a fetch request is made to retrieve info about the button with that certain id and namespace. If no button is found, a new resource is created with the id/namespace identifier.

Notice that the server will create a new resource for every different and unique identifier, so if you change id or namespace the new button won’t inherit the votes.

Every time a user clicks on a button, the component will update the likes counter and flag that the user has already voted. There is no need of signup or third party service.

There are three different button types that have different behaviours.

### Like Button

Like buttons behave like Twitter buttons. Users can only like once and a subsequent call from the same user will remove the user's like.

```javascript
import { LikeButton } from "@lyket/react";

export default BlogPost = ({ title, content }) => {
  return (
    <div>
      {title}
      <LikeButton
        id="how-to-reduce-footprint"
        namespace="post"
        component={LikeButton.themes.Twitter}
      />
      {content}
    </div>
  );
};
```

### Updown Button

Updown buttons behave like Reddit buttons. Users can only like or dislike once and a subsequent call from the same user will remove the user's like or dislike.

```javascript
import { UpdownButton } from "@lyket/react";

export default BlogPost = ({ title, content }) => {
  return (
    <div>
      {title}
      <UpdownButton
        id="how-i-joined-the-raiders-of-the-lost-ark"
        namespace="post"
        component={LikeButton.themes.Reddit}
      />
      {content}
    </div>
  );
};
```

### Clap Button

Clap buttons behave like Medium applauses. Users can like multiple times and every other call from the same user will increment the claps number.

```javascript
import { ClapButton } from "@lyket/react";

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

Required props

- **id**: The API uses the ID to determine which resource you want to interact with. It should be unique. It accepts an alphanumeric string with maximum 50 characters.

You need either to provide a theme or a custom component. If neither is provided a default theme will be rendered.

- **themes**: A number of themes is provided to use Lyket out-of-the-box. You can see the themes demo on [lyket.dev/demo](https://lyket.dev/demo)
  - **Simple**: thumb up LikeButton (default)
  - **Twitter**: Twitter style LikeButton animated
  - **Simple**: thumb UpdownButton (default)
  - **Reddit**: Reddit style UpdownButton
  - **Simple**: ClapButton (default)
  - **Medium**: Medium style ClapButton animated

Here is an example of using themes

```javascript
import { ClapButton } from "@lyket/react";

export default StandingOvation = () => {
  return (
    <>
      <h2>Do you like pizza?</h2>
      <ClapButton id="do-you-like-pizza" component={ClapButton.themes.Medium} />
    </>
  );
};
```

OR

- **component** or **children**

Here are a few example of using children for each button type

#### UpdownButton

```javascript
import { UpdownButton } from '@lyket/react';

export default Faq = () => {
  return (
    <>
      <h2>Do you like pizza?</h2>
      <UpdownButton id="do-you-like-pizza" namespace="faq">
        ({ pressUp, pressDown, totalScore, userVoteDirection }) => {
          return (
            <>
              <button onClick={pressUp}>Of course! 🍕🍕🍕</button>
              <button onClick={pressDown}>I am a bad person</button>
              <p>Total: {totalScore}</p>
              <p>Your vote: {userVoteDirection}</p>
            </>
          )
        }
      </UpdownButton>
    </>
  )
};
```

#### LikeButton

```javascript
import { LikeButton } from '@lyket/react';

export default Faq = () => {
  return (
    <>
      <h2>Do you like pizza?</h2>
      <LikeButton id="do-you-like-pizza" namespace="faq">
        ({ onClick, totalLikes, userHasVoted }) => {
          return (
            <>
              <button onClick={onClick}>Of course! 🍕🍕🍕</button>
              <div>Total: {totalLikes}</div>
              {userHasVoted && <div>Thanks for your vote!</div>}
            </>
          )
        }
      </LikeButton>
    </>
  )
};
```

#### ClapButton

```javascript
import { ClapButton } from '@lyket/react';

export default Faq = () => {
  return (
    <>
      <h2>Do you like pizza?</h2>
      <ClapButton id="do-you-like-pizza" namespace="faq">
        ({ onClick, totalClaps, userClaps }) => {
          return (
            <>
              <button onClick={onClick}>Of course! 🍕🍕🍕</button>
              <div>Total: {totalClaps}</div>
              <div>You clapped {userClaps} times</div>
            </>
          )
        }
      </ClapButton>
    </>
  )
};
```

Optional props

- **namespace**: Giving a namespace is useful to keep buttons organized, and can be used to fetch statistics by namespace. Check the API docs for more information.

- **hideCounterIfLessThan**
  You may not want to show a counter if you are not getting enough feedback. Specify the number of votes you want to receive before showing the counter.

# reCAPTCHA

Lyket is integrated with Google reCAPTCHA V3 to handle malicious use without interrupting _human_ users. To enable it you need to provide your Google reCAPTCHA secret key in the user settings in the private area. The key will be encrypted.
