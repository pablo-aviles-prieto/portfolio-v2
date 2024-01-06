import { useContext, useEffect, useState } from 'react';
import { FlagContainer } from './styles/FlagContainer';
import { LanguageContext } from '../store/LanguageContext';
import { UkFlag, SpanishFlag } from './svgs';

export const Header = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const [isWideEnough, setIsWideEnough] = useState(window.innerWidth > 500);

  useEffect(() => {
    const handleResize = () => {
      setIsWideEnough(window.innerWidth > 500);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='flex items-center px-2 pt-6 justify-evenly xs:justify-between xl:px-0'>
      {isWideEnough && (
        <p className='text-lg font-bold sm:text-2xl md:text-3xl text-muted-shady-red-0'>
          Pablo Avilés
        </p>
      )}
      <div className='flex text-xs sm:text-sm md:text-base lg:text-lg gap-x-3 sm:gap-x-5 md:gap-x-10'>
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
        <div className='flex items-center gap-2'>
          <FlagContainer
            onClick={() => changeLanguage('es')}
            grayscale={language !== 'es'}
          >
            <SpanishFlag width={20} height={20} />
          </FlagContainer>
          <FlagContainer
            onClick={() => changeLanguage('en')}
            grayscale={language !== 'en'}
          >
            <UkFlag width={20} height={20} />
          </FlagContainer>
        </div>
      </div>
    </div>
  );
};
