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
  const templateHashGenerator = button => {
    const templateObj = {};

    Object.keys(button.templates).forEach(
      key => (templateObj[key.toLowerCase()] = button.templates[key])
    );

    return templateObj;
  };

  const typeToButton = {
    clap: {
      component: ClapButton,
      templates: templateHashGenerator(ClapButton),
    },
    updown: {
      component: UpdownButton,
      templates: templateHashGenerator(UpdownButton),
    },
    like: {
      component: LikeButton,
      templates: templateHashGenerator(LikeButton),
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
        buttonProps.component = button.templates[template.toLowerCase()];
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
