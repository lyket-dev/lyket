import { h, render } from 'preact';
import { Provider } from '@lyket/react';
import {
  getProviderProps,
  getComponentProps,
  getUrlParameter,
} from './getProps.js';
import { observeMutations } from './mutationObserver.js';
import { typeToButton } from './typeToButton.js';

const scriptSrc = document.currentScript.getAttribute('src');

document.addEventListener('DOMContentLoaded', function(_event) {
  const apiKey = getUrlParameter(scriptSrc, 'apiKey');

  if (!apiKey) {
    console.error('Lyket Error: Api key missing!');
    throw 'Lyket Error: Api key missing!';
  }

  const renderButtons = () =>
    document.querySelectorAll('[data-lyket-type]').forEach(element => {
      const { lyketId: id, lyketType: type } = element.dataset;

      const button = typeToButton[type.toLowerCase()];

      if (!id) {
        console.error('Lyket Error: Missing ID!');
        return element;
      }

      if (!button) {
        console.error(`Lyket Error: "${type}" is not a valid button type`);
        return element;
      }

      const Component = button.component;

      render(
        h(
          Provider,
          getProviderProps(element.dataset, scriptSrc),
          h(Component, getComponentProps(element.dataset, button))
        ),
        element
      );
    });

  const handleMutations = newAttr => {
    if (newAttr.startsWith('data-lyket-')) {
      renderButtons();
    }
  };

  document
    .querySelectorAll('[data-lyket-type]')
    .forEach(el => observeMutations(el, handleMutations));

  renderButtons();
});
