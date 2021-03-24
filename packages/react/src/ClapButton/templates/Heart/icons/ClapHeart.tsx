import React from 'react';

interface Props {
  className?: string;
}

export const ClapHeart = ({ className }: Props) => (
  <svg
    version="1.1"
    id="ClapHeart"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 110 115"
    aria-label="clap"
    className={className}
  >
    <g>
      <g>
        <path d="M42.68,27.43c-0.7,0-1.4-0.27-1.93-0.8l-5.91-5.91c-1.07-1.07-1.07-2.79,0-3.86c1.07-1.07,2.79-1.07,3.86,0 l5.91,5.91c1.07,1.07,1.07,2.79,0,3.86C44.08,27.16,43.38,27.43,42.68,27.43z" />
      </g>
      <g>
        <path d="M70.43,26.52c-0.7,0-1.4-0.27-1.93-0.8c-1.07-1.07-1.07-2.79,0-3.86l5.91-5.91c1.07-1.07,2.79-1.07,3.86,0 c1.07,1.07,1.07,2.79,0,3.86l-5.91,5.91C71.82,26.25,71.13,26.52,70.43,26.52z" />
      </g>
      <path d="M67.23,7.48c-0.12-1.34-0.82-2.56-1.93-3.34l0,0c-1.77-1.24-4.33-0.97-5.94,0.65l-2.8,2.79l-2.79-2.79 c-1.61-1.61-4.17-1.9-5.94-0.65c-1.11,0.78-1.82,2-1.93,3.34c-0.12,1.34,0.36,2.66,1.31,3.61L53.11,17c0.86,0.86,2,1.33,3.22,1.33 c0.07,0,0.15,0,0.23-0.01c0.08,0.01,0.15,0.01,0.23,0.01c1.22,0,2.36-0.47,3.22-1.33l5.91-5.91C66.86,10.14,67.34,8.82,67.23,7.48z" />
      <path d="M104.64,60.44c-0.28-1.84-1.22-3.52-2.54-4.83l-0.06-0.06c-1.02-1.02-2.25-1.75-3.6-2.15l0.16-0.16 c3.32-3.32,3.33-8.71,0-12.04l-0.21-0.21c-1-1-2.19-1.71-3.5-2.12c1.4-3.13,0.82-6.94-1.75-9.5l-0.04-0.04 c-1.71-1.71-4.03-2.72-6.45-2.65c-1.76,0.05-3.48,0.54-4.8,1.67c-0.29,0.25-2.61,2.55-3.11,3.04c-0.8,0.79-0.71,2.1,0.19,2.77 l0.88,0.66c0.61,0.46,1.47,0.4,2.01-0.14l2.29-2.29c0.77-0.77,1.79-1.16,2.8-1.16c1.01,0,2.03,0.39,2.8,1.16l0.21,0.21 c1.55,1.55,1.55,4.06,0,5.61l-11.3,11.3c-0.85-0.69-1.81-1.21-2.84-1.53c1.4-3.13,0.82-6.94-1.75-9.5l-0.21-0.21 c-1.61-1.61-3.75-2.49-6.02-2.49c-1.22,0-2.41,0.26-3.49,0.74c-0.39-1.28-1.1-2.49-2.11-3.5l-0.21-0.21 c-1.61-1.61-3.75-2.49-6.02-2.49c-2.27,0-4.41,0.89-6.02,2.49L34.35,48.43c-0.4-1.34-1.13-2.58-2.15-3.6l-1.49-1.49 c-1.26-1.26-2.94-1.96-4.73-1.96c-1.79,0-3.47,0.7-4.73,1.96l-8.49,8.49l-0.58,0.58l-3.64,3.64c-3.64,3.64-5.52,9.27-5.3,15.84 c0.32,9.4,4.72,18.68,11.76,24.83c9.22,8.05,15.07,11.87,23.37,11.87c1.2,0,2.47-0.08,3.9-0.24c9.42-1.05,16.6-7.92,17.23-8.55 l0.44-0.42c0.47-0.04,0.93-0.07,1.43-0.13c9.42-1.05,16.6-7.92,17.23-8.55l23.59-22.88l0.05-0.05 C104.16,65.87,105.05,63.2,104.64,60.44z M92.38,43.04c1.01,0,2.03,0.39,2.8,1.16l0.21,0.21c1.55,1.55,1.55,4.06,0,5.6L81.75,63.66 c-0.74-0.51-1.55-0.92-2.4-1.17l0.16-0.16c2.62-2.62,3.16-6.53,1.65-9.7l8.43-8.43C90.36,43.43,91.37,43.04,92.38,43.04z M56.33,96.56c0,0-6.37,6.37-14.55,7.28c-1.2,0.13-2.32,0.21-3.4,0.21c-6.26,0-10.96-2.53-20.38-10.75 c-11.05-9.64-13.16-27.1-6.24-34.03l3.64-3.64l0.58-0.58l8.49-8.49c0.42-0.42,0.97-0.63,1.51-0.63c0.55,0,1.1,0.21,1.51,0.63 l1.49,1.49c1.55,1.55,1.55,4.06,0,5.6l-6.13,6.2c-0.89,0.9-0.89,2.35,0.01,3.25c0.45,0.45,1.04,0.67,1.63,0.67 c0.59,0,1.18-0.22,1.63-0.67l8.38-8.38l18.7-18.7c0.77-0.77,1.79-1.16,2.8-1.16c1.01,0,2.03,0.39,2.8,1.16l0.21,0.21 c1.55,1.55,1.55,4.06,0,5.61l-17.2,17.2c-0.79,0.79-0.78,2.07,0.02,2.85c0.39,0.38,0.89,0.57,1.4,0.57c0.51,0,1.02-0.2,1.41-0.59 l20.38-20.38c0.77-0.77,1.79-1.16,2.8-1.16c1.01,0,2.03,0.39,2.8,1.16l0.21,0.21c1.55,1.55,1.55,4.06,0,5.61L50.56,67.56 c-0.79,0.79-0.78,2.07,0.02,2.85c0.39,0.38,0.89,0.57,1.4,0.57c0.51,0,1.02-0.2,1.41-0.59L70.48,53.3c0.77-0.77,1.79-1.16,2.8-1.16 c1.01,0,2.03,0.39,2.8,1.16l0.21,0.21c0.38,0.38,0.66,0.81,0.85,1.28l0.27,1.59l0.04-0.04c-0.01,1.01-0.39,2.01-1.16,2.78 L59.54,75.87c-0.91,0.91-0.91,2.4,0.02,3.3c0.45,0.44,1.04,0.66,1.62,0.66c0.59,0,1.19-0.23,1.64-0.68l11.3-11.3 c0.77-0.77,1.79-1.16,2.8-1.16c1.01,0,2.03,0.39,2.8,1.16l0.21,0.21c1.55,1.55,1.55,4.06,0,5.6L56.33,96.56z M99.03,64.57 l-23.6,22.89c0,0-3.81,3.8-9.32,5.94L83.1,76.93l0.02-0.02l0.02-0.02c1.61-1.61,2.49-3.74,2.49-6.02c0-1.3-0.3-2.55-0.84-3.68 l8.42-8.42c0.77-0.77,1.79-1.16,2.8-1.16s2.03,0.39,2.8,1.16l0.21,0.21C100.58,60.51,100.58,63.02,99.03,64.57z" />
    </g>
  </svg>
);