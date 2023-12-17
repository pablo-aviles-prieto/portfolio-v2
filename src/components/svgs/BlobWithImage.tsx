import { SVGProps } from 'react';

export const BlobWithImage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' {...props}>
    <defs>
      <linearGradient
        id='a'
        x1='0%'
        x2='100%'
        y1='0%'
        y2='0%'
        gradientTransform='rotate(141 .5 .5)'
      >
        <stop offset='0%' stopColor='#A64942' />
        <stop offset='100%' stopColor='#572523' />
      </linearGradient>
      <clipPath id='blobClip'>
        <path d='M81.5 60.5Q79 71 70 76.5t-20 6Q39 83 32.5 75T20 58.5Q14 50 20 41t12.5-16.5Q39 17 50.5 15T64 25.5Q66 38 75 44t6.5 16.5Z' />
      </clipPath>
    </defs>
    <path
      fill='url(#a)'
      d='M81.5 60.5Q79 71 70 76.5t-20 6Q39 83 32.5 75T20 58.5Q14 50 20 41t12.5-16.5Q39 17 50.5 15T64 25.5Q66 38 75 44t6.5 16.5Z'
    />
    <image
      href='/images/profile-pic-no-bground.webp'
      x='20'
      y='23'
      width='60'
      clipPath='url(#blobClip)'
    />
  </svg>
);
