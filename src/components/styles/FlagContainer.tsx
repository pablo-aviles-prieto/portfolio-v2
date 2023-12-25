import { ReactNode } from 'react';

type Params = {
  grayscale: boolean;
  children: ReactNode;
  onClick: () => void;
};

export const FlagContainer = ({ grayscale, children, onClick }: Params) => {
  return (
    <div
      className='cursor-pointer'
      style={{
        filter: grayscale ? 'grayscale(1)' : 'none',
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
