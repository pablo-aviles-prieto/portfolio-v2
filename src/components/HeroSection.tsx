import { useContext, useEffect, useRef } from 'react';
import { Header } from './Header';
import { BlobWithImage } from './svgs';
import { LanguageContext } from '../store/LanguageContext';
import { SocialNetworks } from './SocialNetworks';
import gsap from 'gsap';

export const HeroSection = () => {
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const keepScrollingRef = useRef<HTMLParagraphElement | null>(null);
  const socialNetworkRef = useRef<HTMLDivElement | null>(null);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      y: -40,
      duration: 1.2,
    });
    gsap.from(socialNetworkRef.current, {
      opacity: 0,
      y: 40,
      duration: 1.2,
    });
    gsap.from(keepScrollingRef.current, {
      opacity: 0,
      y: 100,
      duration: 2,
    });
  }, []);

  return (
    <div className='relative h-screen'>
      <div className='relative z-10'>
        <Header />
      </div>
      <div className='waves' />
      <div
        className='flex mt-12 sm:mt-0 flex-col lg:flex-row items-center justify-center h-[80%] 
        gap-x-8 text-[21px] relative z-10'
      >
        <div className='w-full lg:w-[50%]'>
          <p
            ref={textRef}
            className='pt-28 lg:pt-0 text-center lg:text-right text-sm xxs:text-base sm:text-xl 
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
          <div
            ref={socialNetworkRef}
            className='w-full lg:w-[435px] xl:w-[500px] ml-auto pt-2'
          >
            <SocialNetworks />
          </div>
        </div>
        <div className='w-full lg:w-[50%] h-full relative'>
          <BlobWithImage
            className='absolute w-[685px] h-[80%] sm:h-full left-[calc(50%-(685px/2))] 
            lg:-left-[85px] top-[25px] sm:top-0 sm:bottom-[15px]'
          />
        </div>
      </div>
      <div className='text-lg font-bold text-center sm:mt-4 sm:text-2xl'>
        <p
          ref={keepScrollingRef}
          className='relative z-10 inline-block text-transparent bg-gradient-to-r from-muted-shady-red-1 via-muted-shady-red-0 to-muted-shady-red-1 bg-clip-text'
        >
          {language === 'es'
            ? `Sigue bajando para conocer más sobre mí`
            : `Keep scrolling to know more about me`}
        </p>
      </div>
    </div>
  );
};
