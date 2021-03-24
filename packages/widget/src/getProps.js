const allowedProviderProps = {
  lyketColorBackground: 'background',
  lyketColorPrimary: 'primary',
  lyketColorSecondary: 'secondary',
  lyketColorText: 'text',
  lyketColorHighlight: 'highlight',
  lyketColorIcon: 'icon',
};

export const getUrlParameter = (url, name) => {
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(url);

  return results && decodeURIComponent(results[1].replace(/\+/g, ' '));
};

export const getProviderProps = (dataset, scriptSrc) => {
  const apiKey = getUrlParameter(scriptSrc, 'apiKey');
  const baseUrl = getUrlParameter(scriptSrc, 'baseUrl');
  const recaptchaSiteKey = getUrlParameter(scriptSrc, 'recaptchaSiteKey');
  const disableSessionId = scriptSrc.includes('disableSessionId');

  const providerProps = { baseUrl, recaptchaSiteKey, apiKey, disableSessionId };

  if (
    Object.keys(dataset).some(k =>
      Object.keys(allowedProviderProps).includes(k)
    )
  ) {
    const colors = Object.entries(allowedProviderProps).reduce(
      (acc, [k, v]) => {
        if (dataset[k]) {
          acc[v] = dataset[k];
        }

        return acc;
      },
      {}
    );

    providerProps.theme = { colors };
  }

  return providerProps;
};

export const getComponentProps = (dataset, button) => {
  const {
    lyketId: id,
    lyketNamespace: namespace,
    lyketShowCounterFrom: hideCounterIfLessThan,
    lyketTemplate: template,
  } = dataset;

  const initialProps = { id, namespace, hideCounterIfLessThan };

  if (template) {
    initialProps.component = button.templates[template.toLowerCase()];
  }

  return initialProps;
};
