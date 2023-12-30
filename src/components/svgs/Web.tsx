import { SVGProps } from 'react';

export const Web = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth={1.5}
    className='icon icon-tabler icon-tabler-world-www'
    viewBox='0 0 24 24'
    {...props}
  >
    <title>Website</title>
    <path stroke='none' d='M0 0h24v24H0z' />
    <path d='M19.5 7A9 9 0 0 0 12 3a8.991 8.991 0 0 0-7.484 4' />
    <path d='M11.5 3a16.989 16.989 0 0 0-1.826 4M12.5 3a16.989 16.989 0 0 1 1.828 4M19.5 17a9 9 0 0 1-7.5 4 8.991 8.991 0 0 1-7.484-4' />
    <path d='M11.5 21a16.989 16.989 0 0 1-1.826-4M12.5 21a16.989 16.989 0 0 0 1.828-4M2 10l1 4 1.5-4L6 14l1-4M17 10l1 4 1.5-4 1.5 4 1-4M9.5 10l1 4 1.5-4 1.5 4 1-4' />
  </svg>
);
