import { useContext, useEffect, useRef, useState } from 'react';
import { FlagContainer } from './styles/FlagContainer';
import { LanguageContext } from '../store/LanguageContext';
import { UkFlag, SpanishFlag } from './svgs';
import gsap from 'gsap';

const MAX_VIEWPORT_WIDTH = 515;

export const Header = () => {
  const [isWideEnough, setIsWideEnough] = useState(
    window.innerWidth > MAX_VIEWPORT_WIDTH
  );
  const nameRef = useRef<HTMLParagraphElement | null>(null);
  const sectionsRef = useRef<HTMLDivElement | null>(null);
  const { language, changeLanguage } = useContext(LanguageContext);

  useEffect(() => {
    gsap.from(nameRef.current, {
      opacity: 0,
      x: -400,
      duration: 1.5,
    });
    gsap.from(sectionsRef.current, {
      opacity: 0,
      x: 400,
      duration: 1.5,
    });

    const handleResize = () => {
      setIsWideEnough(window.innerWidth > MAX_VIEWPORT_WIDTH);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='flex items-center px-2 pt-6 justify-evenly xs:justify-between xl:px-0'>
      {isWideEnough && (
        <p
          ref={nameRef}
          className='text-lg font-bold sm:text-2xl md:text-3xl text-muted-shady-red-0'
        >
          Pablo Avilés
        </p>
      )}
      <div
        ref={sectionsRef}
        className='flex items-center justify-around w-full text-xs xs:justify-normal xs:w-auto sm:text-sm md:text-base lg:text-lg gap-x-1 sm:gap-x-5 md:gap-x-10'
      >
        <a className='hover-effect' href='#professional-trajectory'>
          {language === 'es'
            ? 'Trayectoria profesional'
            : 'Professional trajectory'}
        </a>
        <a className='hover-effect' href='#personal-projects'>
          {language === 'es' ? 'Proyectos personales' : 'Personal projects'}
        </a>
        <a className='hover-effect' href='#contact-me'>
          {language === 'es' ? 'Contáctame' : 'Contact me'}
        </a>
        <div className='flex items-center gap-2 mt-1'>
          <FlagContainer
            onClick={() => changeLanguage('es')}
            grayscale={language !== 'es'}
          >
            <SpanishFlag className='w-[16px] sm:w-[20px] h-[16px] sm:h-[20px]' />
          </FlagContainer>
          <FlagContainer
            onClick={() => changeLanguage('en')}
            grayscale={language !== 'en'}
          >
            <UkFlag className='w-[16px] sm:w-[20px] h-[16px] sm:h-[20px]' />
          </FlagContainer>
        </div>
      </div>
    </div>
  );
};
