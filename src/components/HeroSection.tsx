import { useContext } from 'react';
import { Header } from './Header';
import { BlobWithImage } from './svgs';
import { LanguageContext } from '../store/LanguageContext';
import { SocialNetworks } from './SocialNetworks';

// TODO: Add some animations
export const HeroSection = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className='relative h-screen'>
      <div className='relative z-10'>
        <Header />
      </div>
      {/* TODO: Remove waves on mobile/tablet devices? */}
      <div className='waves' />
      <div className='flex items-center justify-center h-[80%] gap-x-8 text-xl text-[21px]'>
        <div className='w-[50%]'>
          <p className='text-right'>
            <span className='block'>
              🤗 {language === 'es' ? 'Hola, soy' : `Hi there, I'm`}{' '}
              <span className='font-bold text-muted-shady-red-0'>
                Pablo Avilés
              </span>
              ,{' '}
              <span className='italic font-bold text-bright-color-2'>
                {language === 'es'
                  ? 'desarrollador full-stack'
                  : `full-stack developer!`}
              </span>
              👋
            </span>
            <span className='block'>
              {language === 'es'
                ? 'He estado trabajando en el'
                : `I've been working in the`}{' '}
              <span className='italic font-bold text-bright-color-2'>
                {language === 'es' ? 'mundo IT' : `IT world`}
              </span>{' '}
              {language === 'es' ? `durante más de` : `for more than`}{' '}
              <span className='italic font-bold text-bright-color-2'>
                {language === 'es' ? `6 años` : `6 years.`}
              </span>
            </span>
            {language === 'es'
              ? `Completamente centrado en el desarrollo web`
              : `Now completely focused on web development.`}
          </p>
          <div className='pt-2 pl-48'>
            <SocialNetworks />
          </div>
        </div>
        <div className='w-[50%] h-full text-left relative'>
          <BlobWithImage className='absolute w-[685px] h-full -left-[85px] bottom-[15px]' />
        </div>
      </div>
      <div className='mt-4 text-2xl font-bold text-center'>
        <p className='inline-block text-transparent bg-gradient-to-r from-muted-shady-red-1 via-muted-shady-red-0 to-muted-shady-red-1 bg-clip-text'>
          {language === 'es'
            ? `Sigue bajando para conocer más sobre mí`
            : `Keep scrolling to know more about me`}
        </p>
      </div>
    </div>
  );
};
