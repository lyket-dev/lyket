import React, { FC, useCallback, useContext, useState } from 'react';
import { ClientContext } from '../contexts/ClientContext';
import { useSafeEffect } from '../hooks/useSafeEffect';
import { Simple } from './themes/Simple';
import { Twitter } from './themes/Twitter';

const themes = {
  Simple,
  Twitter,
};

export interface LikeButtonThemeComponentProps {
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
    props: LikeButtonThemeComponentProps
  ) => React.ReactElement<any, any> | null;
  component?: React.ComponentType<LikeButtonThemeComponentProps>;
}

type FCWithThemes<Props> = FC<Props> & {
  themes: {
    Simple: React.ComponentType<LikeButtonThemeComponentProps>;
    Twitter: React.ComponentType<LikeButtonThemeComponentProps>;
  };
};

const LikeButton: FCWithThemes<LikeButtonProps> = ({
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

LikeButton.themes = themes;

export { LikeButton };
