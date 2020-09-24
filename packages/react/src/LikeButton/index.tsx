import React, { FC, useCallback, useContext, useState } from 'react';
import { ClientContext } from '../contexts/ClientContext';
import { useSafeEffect } from '../hooks/useSafeEffect';
import { Simple } from './templates/Simple';
import { Twitter } from './templates/Twitter';

const templates = {
  Simple,
  Twitter,
};

export interface LikeButtonTemplateComponentProps {
  isLoading: boolean;
  userLiked: boolean | undefined;
  totalLikes: number | undefined;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isCounterVisible: boolean;
}

export interface LikeButtonProps {
  id: string;
  namespace?: string;
  hideCounterIfLessThan?: number;
  children?: (
    props: LikeButtonTemplateComponentProps
  ) => React.ReactElement<any, any> | null;
  component?: React.ComponentType<LikeButtonTemplateComponentProps>;
}

type FCWithTemplates<Props> = FC<Props> & {
  templates: {
    Simple: React.ComponentType<LikeButtonTemplateComponentProps>;
    Twitter: React.ComponentType<LikeButtonTemplateComponentProps>;
  };
};

const LikeButton: FCWithTemplates<LikeButtonProps> = ({
  id,
  namespace,
  hideCounterIfLessThan,
  children,
  component,
}) => {
  const client = useContext(ClientContext);

  const [response, setResponse] = useState<
    Components.Schemas.LikeButton['data'] | null
  >(null);

  useSafeEffect(async () => {
    try {
      if (client) {
        const response = await client.likeButtons.info({ id, namespace });
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
          const response = await client.likeButtons.press({ id, namespace });
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
      response.attributes.total_likes < hideCounterIfLessThan)
  ) {
    isCounterVisible = false;
  }

  const props = {
    isLoading: !response,
    totalLikes: (response && response.attributes.total_likes) || 0,
    userLiked: (response && response.attributes.user_has_liked) || false,
    onClick: handleClick,
    isCounterVisible,
  };

  if (children) {
    return children(props);
  }

  const Component = component || Simple;

  return <Component {...props} />;
};

LikeButton.templates = templates;

export { LikeButton };
