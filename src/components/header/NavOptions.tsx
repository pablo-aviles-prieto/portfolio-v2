import { useContext } from 'react';
import { LanguageContext } from '../../store/LanguageContext';
import { FlagContainer } from '../styles/FlagContainer';
import { SpanishFlag, UkFlag } from '../svgs';

interface NavOptionsProps {
  showGoBackTop?: boolean;
}

export const NavOptions = ({ showGoBackTop = false }: NavOptionsProps) => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const scrollToTop = (event: React.MouseEvent<HTMLParagraphElement>) => {
    event.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showGoBackTop && (
        <li>
          <span className='cursor-pointer hover-effect' onClick={scrollToTop}>
            {language === 'es' ? 'Volver al inicio' : 'Go back to top'}
          </span>
        </li>
      )}
      <li>
        <a className='hover-effect' href='#professional-trajectory'>
          {language === 'es'
            ? 'Trayectoria profesional'
            : 'Professional trajectory'}
        </a>
      </li>
      <li>
        <a className='hover-effect' href='#personal-projects'>
          {language === 'es' ? 'Proyectos personales' : 'Personal projects'}
        </a>
      </li>
      <li>
        <a className='hover-effect' href='#contact-me'>
          {language === 'es' ? 'Contáctame' : 'Contact me'}
        </a>
      </li>
      <li className='flex items-center gap-2'>
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
      </li>
    </>
  );
};
