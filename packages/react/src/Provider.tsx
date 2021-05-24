/** @jsxRuntime classic */
/* @jsx jsx */

import { FC, HTMLAttributes, ReactChild, useState, useEffect } from 'react';
import { jsx, ThemeProvider } from 'theme-ui';
import { Client, ConstructorArguments } from './Client';
import { ClientContext } from './contexts/ClientContext';
import { defaultTheme, ThemeRecord } from './theme';

export interface ProviderProps extends HTMLAttributes<HTMLDivElement> {
  apiKey: string;
  recaptchaSiteKey?: string;
  disableSessionId?: boolean;
  baseUrl?: string;
  children?: ReactChild;
  theme?: ThemeRecord | null;
}

const clientInstances: Record<string, Client> = {};

const getClientInstanceForSettings = (settings: ConstructorArguments) => {
  const key = JSON.stringify(settings);

  if (clientInstances[key]) {
    return clientInstances[key];
  }

  const client = new Client(settings);
  clientInstances[key] = client;
  return client;
};

export const Provider: FC<ProviderProps> = ({
  apiKey,
  recaptchaSiteKey,
  disableSessionId,
  baseUrl,
  children,
  theme: customTheme,
}) => {
  const [client, setClient] = useState<Client>(
    getClientInstanceForSettings({
      apiKey,
      recaptchaSiteKey,
      disableSessionId,
      baseUrl,
    })
  );

  useEffect(() => {
    setClient(
      getClientInstanceForSettings({
        apiKey,
        recaptchaSiteKey,
        disableSessionId,
        baseUrl,
      })
    );
  }, [apiKey, disableSessionId, recaptchaSiteKey, baseUrl]);

  const theme = customTheme || { colors: {}, fonts: {} };
  const colors = { ...defaultTheme.colors, ...theme.colors };
  const fonts = { ...defaultTheme.fonts, ...theme.fonts };

  return (
    <ThemeProvider
      theme={{
        config: {
          useRootStyles: false,
          useLocalStorage: false,
          useColorSchemeMediaQuery: false,
        },
        colors,
        fonts,
      }}
    >
      <ClientContext.Provider value={client}>{children}</ClientContext.Provider>
    </ThemeProvider>
  );
};
