import { h, render } from 'preact';
import { Provider, ClapButton, LikeButton, UpdownButton } from '@lyket/react';

function getUrlParameter(url, name) {
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(url);

  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

const scriptSrc = document.currentScript.getAttribute('src');

const baseUrl = getUrlParameter(scriptSrc, 'baseUrl');
const recaptchaSiteKey = getUrlParameter(scriptSrc, 'recaptchaSiteKey');
const apiKey = getUrlParameter(scriptSrc, 'apiKey');

if (!apiKey) {
  console.error('Lyket Error: Api key missing!');
} else {
  const themeHashGenerator = button => {
    const themeObj = {};

    Object.keys(button.themes).forEach(
      key => (themeObj[key.toLowerCase()] = button.themes[key])
    );

    return themeObj;
  };

  const typeToButton = {
    clap: {
      component: ClapButton,
      themes: themeHashGenerator(ClapButton),
    },
    updown: {
      component: UpdownButton,
      themes: themeHashGenerator(UpdownButton),
    },
    like: {
      component: LikeButton,
      themes: themeHashGenerator(LikeButton),
    },
  };

  document.querySelectorAll('[data-lyket-type]').forEach(element => {
    const {
      lyketId: id,
      lyketNamespace: namespace,
      lyketType: type,
      lyketTemplate: template,
    } = element.dataset;
    const button = typeToButton[type.toLowerCase()];

    if (!id) {
      console.error('Lyket Error: Missing ID!');
    } else if (!button) {
      console.error(`Lyket Error: "${type}" is not a valid button type`);
    } else {
      const buttonProps = { id, namespace };

      if (template) {
        buttonProps.component = button.themes[template.toLowerCase()];
      }

      const Component = button.component;
      render(
        h(
          Provider,
          { baseUrl, recaptchaSiteKey, apiKey },
          h(Component, buttonProps)
        ),
        element
      );
    }
  });
}
