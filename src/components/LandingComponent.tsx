import { Header } from './Header';
import { BlobWithImage } from './svgs/BlobWithImage';

export const LandingComponent = () => {
  return (
    <div className='h-screen'>
      <Header />
      <div className='flex items-center justify-center h-[45rem] gap-x-8 text-xl text-[21px]'>
        <p className='w-[50%] text-right'>
          <span className='block'>
            🤗 Hi there, I'm{' '}
            <span className='font-bold text-muted-shady-red-1'>
              Pablo Avilés
            </span>
            ,{' '}
            <span className='italic font-bold text-bright-color-2'>
              full-stack developer!
            </span>
            👋
          </span>
          <span className='block'>
            I've been working in the{' '}
            <span className='italic font-bold text-bright-color-2'>
              IT world
            </span>{' '}
            for more than{' '}
            <span className='italic font-bold text-bright-color-2'>
              6 years.
            </span>
          </span>
          Now completely focused on web development.
        </p>
        <div className='w-[50%] h-full text-left relative'>
          <BlobWithImage className='absolute w-[110%] -left-[85px] bottom-[15px]' />
        </div>
      </div>
      <div className='text-center'>Learn more about me</div>
    </div>
  );
};
