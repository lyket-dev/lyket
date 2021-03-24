# Changelog

## v1.4.2 24-03-2021

- Added `chevron` template for like and updown button.
- Added `heart` template for clap button.
- Changed on hover animation for Medium template.
- Added `icon` color to theme.

## v1.4.0 25-02-2021

- Added `disableSessionId` parameter to Provider [React] and script URL [Widget]. Use this parameter to avoid saving a session ID for every visitor.
- Updated theme-ui to 0.6.0-alpha.7 to avoid unnecessary saving to local storage.
- Moved documentation to website.

## v1.3.9 21-02-2021

[React]

- Disabled useLocalStorage for theme-ui

[Widget]

- Now script can be loaded in <head>
- Added mutation observer for data-lyket attributes
- Add hide-counter prop

## v1.3.0 17-12-2020

- Renamed custom button functions from onPress to handlePress
- [React] Add onPress and onLoad callbacks to all buttons
- [Widget] Add color options to widget

## v1.2.0 24-09-2020

- Import templates by using `Button.templates` instead of `Button.themes`.
- Added the `theme` prop to Provider.
- Integrated debounced batch fetch info
- Better loading components
- More consistent default buttons

## v1.1.0 24-09-2020

- Created `@lyket/widget`
- Switched to mono repository
