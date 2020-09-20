import { h, render } from "preact";
import { Provider, ClapButton, LikeButton, UpdownButton } from "@lyket/react";

function getUrlParameter(url, name) {
  const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  const results = regex.exec(url);

  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

const scriptSrc = document.currentScript.getAttribute("src");

const baseUrl = getUrlParameter(scriptSrc, "baseUrl");
const recaptchaSiteKey = getUrlParameter(scriptSrc, "recaptchaSiteKey");
const apiKey = getUrlParameter(scriptSrc, "apiKey");

if (!apiKey) {
  console.error("Lyket Error!!!!!!: Api key missing!");
} else {
  const typeToComponent = {
    clap: ClapButton,
    updown: UpdownButton,
    like: LikeButton,
  };

  document.querySelectorAll("[data-lyket-type]").forEach((element) => {
    const {
      lyketId: id,
      lyketNamespace: namespace,
      lyketType: type,
      lyketTheme: theme,
    } = element.dataset;

    const Component = typeToComponent[type];

    if (!Component) {
      console.error("Lyket Error: Invalid type", type);
    } else if (!id) {
      console.error("Lyket Error: Missing ID!");
    } else {
      render(
        h(
          Provider,
          { baseUrl, recaptchaSiteKey, apiKey },
          h(Component, { id, namespace })
        ),
        element
      );
    }
  });
}
