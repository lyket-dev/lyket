export const getUrlParameter = (url, name) => {
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(url);

  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

export const getProviderProps = (dataset, scriptSrc) => {
  const {
    lyketColorBackground,
    lyketColorPrimary,
    lyketColorSecondary,
    lyketColorText,
    lyketColorHighlight,
  } = dataset;

  const apiKey = getUrlParameter(scriptSrc, 'apiKey');
  const baseUrl = getUrlParameter(scriptSrc, 'baseUrl');
  const recaptchaSiteKey = getUrlParameter(scriptSrc, 'recaptchaSiteKey');

  const providerProps = { baseUrl, recaptchaSiteKey, apiKey };

  if (
    lyketColorBackground ||
    lyketColorPrimary ||
    lyketColorSecondary ||
    lyketColorText ||
    lyketColorHighlight
  ) {
    providerProps.theme = { colors: {} };

    if (lyketColorBackground)
      providerProps.theme.colors.background = lyketColorBackground;
    if (lyketColorPrimary)
      providerProps.theme.colors.primary = lyketColorPrimary;
    if (lyketColorSecondary)
      providerProps.theme.colors.secondary = lyketColorSecondary;
    if (lyketColorText) providerProps.theme.colors.text = lyketColorText;
    if (lyketColorHighlight)
      providerProps.theme.colors.highlight = lyketColorHighlight;
  }
  return providerProps;
};

export const getComponentProps = (dataset, button) => {
  const {
    lyketId: id,
    lyketNamespace: namespace,
    lyketHideCounter: hideCounterIfLessThan,
    lyketTemplate: template,
  } = dataset;

  const initialProps = { id, namespace, hideCounterIfLessThan };

  if (template) {
    initialProps.component = button.templates[template.toLowerCase()];
  }

  return initialProps;
};
