import { useContext } from 'react';
import { LanguageContext } from '../../store/LanguageContext';
import { FlagContainer } from '../styles/FlagContainer';
import { SpanishFlag, UkFlag } from '../svgs';

interface NavOptionsProps {
  showGoBackTop?: boolean;
}

export const NavOptions = ({ showGoBackTop = false }: NavOptionsProps) => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    pxToReach: number,
    anchor: string
  ) => {
    event.preventDefault();
    window.scrollTo({
      top: pxToReach,
      behavior: 'smooth',
    });
    window.history.pushState(null, '', anchor);
  };

  return (
    <>
      {showGoBackTop && (
        <li>
          <a
            className='cursor-pointer hover-effect'
            onClick={(e) => scrollToSection(e, 0, '#')}
          >
            {language === 'es' ? 'Volver al inicio' : 'Go back to top'}
          </a>
        </li>
      )}
      <li>
        <a
          className='cursor-pointer hover-effect'
          onClick={(e) => scrollToSection(e, 1500, '#professional-trajectory')}
        >
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
