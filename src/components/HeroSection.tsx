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
      <div
        className='flex mt-12 sm:mt-0 flex-col lg:flex-row items-center justify-center h-[80%] 
        gap-x-8 text-[21px]'
      >
        <div className='w-full lg:w-[50%]'>
          <p
            className='pt-16 lg:pt-0 text-center lg:text-right text-sm xxs:text-base sm:text-xl 
            lg:text-[19px] xl:text-[22px]'
          >
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
                ? 'Estuve trabajando en el'
                : `I've been working in the`}{' '}
              <span className='italic font-bold text-bright-color-2'>
                {language === 'es' ? 'mundo IT' : `IT world`}
              </span>{' '}
              {language === 'es' ? `durante más de` : `for more than`}{' '}
              <span className='italic font-bold text-bright-color-2'>
                {language === 'es' ? `6 años.` : `6 years.`}
              </span>
            </span>
            {language === 'es'
              ? `Completamente centrado en el desarrollo web.`
              : `Now completely focused on web development.`}
          </p>
          <div className='w-full lg:w-[435px] xl:w-[500px] ml-auto pt-2'>
            <SocialNetworks />
          </div>
        </div>
        <div className='w-full lg:w-[50%] h-full relative'>
          <BlobWithImage
            className='absolute w-[685px] h-[80%] sm:h-full left-[calc(50%-(685px/2))] 
            lg:-left-[85px] sm:bottom-[15px]'
          />
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
