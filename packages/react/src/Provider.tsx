/* @jsx jsx */

import { FC, HTMLAttributes, ReactChild, useState, useEffect } from 'react';
import { jsx, ThemeProvider } from 'theme-ui';
import { Client, ConstructorArguments } from './Client';
import { ClientContext } from './contexts/ClientContext';
import { theme } from './theme';

export interface ProviderProps extends HTMLAttributes<HTMLDivElement> {
  apiKey: string;
  recaptchaSiteKey?: string;
  baseUrl?: string;
  children?: ReactChild;
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
  baseUrl,
  children,
}) => {
  const [client, setClient] = useState<Client>(
    getClientInstanceForSettings({ apiKey, recaptchaSiteKey, baseUrl })
  );

  console.log(Object.keys(clientInstances));

  useEffect(() => {
    setClient(
      getClientInstanceForSettings({ apiKey, recaptchaSiteKey, baseUrl })
    );
  }, [apiKey, recaptchaSiteKey, baseUrl]);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        styles: {},
        useBodyStyles: false,
        useLocalStorage: false,
      }}
    >
      <ClientContext.Provider value={client}>{children}</ClientContext.Provider>
    </ThemeProvider>
  );
};
