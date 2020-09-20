import React, { FC, useCallback, useContext, useState } from 'react';
import { ClientContext } from '../contexts/ClientContext';
import { useSafeEffect } from '../hooks/useSafeEffect';
import { Simple } from './themes/Simple';
import { Medium } from './themes/Medium';

const themes = {
  Simple,
  Medium,
};

export interface ClapButtonThemeComponentProps {
  isLoading: boolean;
  userClaps: number | undefined;
  totalClaps: number | undefined;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isCounterVisible: boolean;
}

export interface ClapButtonProps {
  id: string;
  namespace?: string;
  hideCounterIfLessThan?: number;
  children?: (
    props: ClapButtonThemeComponentProps
  ) => React.ReactElement<any, any> | null;
  component?: React.ComponentType<ClapButtonThemeComponentProps>;
}

type FCWithThemes<Props> = FC<Props> & {
  themes: {
    Simple: React.ComponentType<ClapButtonThemeComponentProps>;
    Medium: React.ComponentType<ClapButtonThemeComponentProps>;
  };
};

const ClapButton: FCWithThemes<ClapButtonProps> = ({
  id,
  namespace,
  hideCounterIfLessThan,
  children,
  component,
}) => {
  const client = useContext(ClientContext);

  const [response, setResponse] = useState<
    Components.Schemas.ClapButton['data'] | null
  >(null);

  useSafeEffect(async () => {
    try {
      if (client) {
        const response = await client.clapButtons.info({ id, namespace });
        setResponse(response.data);
      }
    } catch (error) {
      console.error('Lyket error:', error);
      throw error;
    }
  }, [client, id, namespace]);

  const handleClick = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();

      try {
        if (client) {
          const response = await client.clapButtons.press({ id, namespace });
          setResponse(response.data);
        }
      } catch (error) {
        console.error('Lyket error:', error);
        throw error;
      }
    },
    [client, id, namespace]
  );

  let isCounterVisible = true;

  if (
    !response ||
    (hideCounterIfLessThan &&
      response &&
      response.attributes.total_claps < hideCounterIfLessThan)
  ) {
    isCounterVisible = false;
  }

  const props = {
    isLoading: !response,
    totalClaps: response?.attributes.total_claps,
    userClaps: response?.attributes.user_claps,
    onClick: handleClick,
    isCounterVisible,
  };

  if (children) {
    return children(props);
  }

  const Component = component || Simple;

  return <Component {...props} />;
};

ClapButton.themes = themes;

export { ClapButton };
