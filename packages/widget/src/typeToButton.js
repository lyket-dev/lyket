import { ClapButton, LikeButton, UpdownButton } from '@lyket/react';

const templateHashGenerator = button => {
  const templateObj = {};

  Object.keys(button.templates).forEach(
    key => (templateObj[key.toLowerCase()] = button.templates[key])
  );

  return templateObj;
};

export const typeToButton = {
  clap: {
    component: ClapButton,
    templates: templateHashGenerator(ClapButton),
  },
  updown: {
    component: UpdownButton,
    templates: templateHashGenerator(UpdownButton),
  },
  like: {
    component: LikeButton,
    templates: templateHashGenerator(LikeButton),
  },
};
