import { SVGProps } from 'react';

export const Close = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    stroke='#2c3e50'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth={1.5}
    className='icon icon-tabler icon-tabler-arrows-minimize'
    viewBox='0 0 24 24'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <path d='M5 9h4V5M3 3l6 6M5 15h4v4M3 21l6-6M19 9h-4V5M15 9l6-6M19 15h-4v4M15 15l6 6' />
  </svg>
);
