import React, { FC, useCallback, useContext, useState } from 'react';
import { ClientContext } from '../contexts/ClientContext';
import { useSafeEffect } from '../hooks/useSafeEffect';
import { Simple } from './templates/Simple';
import { Reddit } from './templates/Reddit';

const templates = {
  Simple,
  Reddit,
};

export interface UpdownButtonTemplateComponentProps {
  isLoading: boolean;
  userVoteDirection: number | undefined;
  totalScore: number | undefined;
  onPressUp: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onPressDown: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isCounterVisible: boolean;
}

export interface UpdownButtonProps {
  id: string;
  namespace?: string;
  hideCounterIfLessThan?: number;
  children?: (
    props: UpdownButtonTemplateComponentProps
  ) => React.ReactElement<any, any> | null;
  component?: React.ComponentType<UpdownButtonTemplateComponentProps>;
}

type FCWithTemplates<Props> = FC<Props> & {
  templates: {
    Simple: React.ComponentType<UpdownButtonTemplateComponentProps>;
    Reddit: React.ComponentType<UpdownButtonTemplateComponentProps>;
  };
};

const UpdownButton: FCWithTemplates<UpdownButtonProps> = ({
  id,
  namespace,
  hideCounterIfLessThan,
  children,
  component,
}) => {
  const client = useContext(ClientContext);

  const [response, setResponse] = useState<
    Components.Schemas.UpdownButton['data'] | null
  >(null);

  useSafeEffect(async () => {
    try {
      if (client) {
        const response = await client.updownButtons.info({ id, namespace });
        setResponse(response.data);
      }
    } catch (error) {
      console.error('Lyket error:', error);
      throw error;
    }
  }, [client, id, namespace]);

  const handlePressUp = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();

      try {
        if (client) {
          const response = await client.updownButtons.pressUp({
            id,
            namespace,
          });
          setResponse(response.data);
        }
      } catch (error) {
        console.error('Lyket error:', error);
        throw error;
      }
    },
    [client, id, namespace]
  );

  const handlePressDown = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();

      try {
        if (client) {
          const response = await client.updownButtons.pressDown({
            id,
            namespace,
          });
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
      response.attributes.total_score < hideCounterIfLessThan)
  ) {
    isCounterVisible = false;
  }

  const props = {
    isLoading: !response,
    totalScore: (response && response.attributes.total_score) || 0,
    userVoteDirection:
      (response && response.attributes.user_vote_direction) || 0,
    onPressUp: handlePressUp,
    onPressDown: handlePressDown,
    isCounterVisible,
  };

  if (children) {
    return children(props);
  }

  const Component = component || Simple;

  return <Component {...props} />;
};

UpdownButton.templates = templates;

export { UpdownButton };
