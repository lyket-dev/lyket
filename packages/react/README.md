## Lyket React

Lyket is a tool to quickly implement GDPR-compliant applause, like, like/dislike and rating buttons on a webpage. To create a new button you need to choose a type (Like, Clap, Updown, Rate) and a unique identifier. From that moment on, Lyket's server will keep track of every visitor interaction on that button without storing personal data.

Visit [Lyket website](https://lyket.dev/docs/react) to get started with Lyket.

## How it works

To create a button you just need to provide a React component that has an ID, namespace and type.

Once you added this element a GET request is made to retrieve info about the button with that certain ID and namespace. If no button is found, a new resource is created with the ID/namespace identifier.

Notice that the server will create a new resource for every different and unique identifier, so if you change ID or namespace the new button won’t inherit the votes.

Every time a visitor clicks on a button, Lyket will update the likes counter and flag that the visitor has already voted, with no need to signup to any third party service.

Lyket does not store sensible data and is GDPR compliant.
