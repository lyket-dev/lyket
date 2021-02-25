## Lyket Widget

A simple script that lets you embed Lyket in your html/Wordpress/Webflow/Notion website and more!

Visit [Lyket website](https://lyket.dev/docs/widget) to get started with Lyket.

## How it works

To create a button you just need to provide a HTML element that has an ID, namespace and type.

Once you added this element a GET request is made to retrieve info about the button with that certain ID and namespace. If no button is found, a new resource is created with the ID/namespace identifier.

Notice that the server will create a new resource for every different and unique identifier, so if you change ID or namespace the new button won’t inherit the votes.

Every time a visitor clicks on a button, Lyket will update the likes counter and flag that the visitor has already voted, with no need to signup to any third party service.

Lyket does not store sensible data and is GDPR compliant.
