import { Header } from './Header';
import { BlobWithImage } from './svgs/BlobWithImage';

export const HeroSection = () => {
  return (
    <div className='relative h-screen'>
      <div className='relative z-10'>
        <Header />
      </div>
      <div className='waves' />
      <div className='flex items-center justify-center h-[80%] gap-x-8 text-xl text-[21px]'>
        <p className='w-[50%] text-right'>
          <span className='block'>
            🤗 Hi there, I'm{' '}
            <span className='font-bold text-muted-shady-red-0'>
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
          <BlobWithImage className='absolute w-[685px] h-full -left-[85px] bottom-[15px]' />
        </div>
      </div>
      <div className='text-2xl font-bold text-center'>
        <p className='inline-block text-transparent bg-gradient-to-r from-muted-shady-red-1 via-muted-shady-red-0 to-muted-shady-red-1 bg-clip-text'>
          Keep scrolling to know more about me
        </p>
      </div>
    </div>
  );
};
