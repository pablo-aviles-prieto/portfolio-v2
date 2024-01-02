import { useContext } from 'react';
import { FlagContainer } from './styles/FlagContainer';
import { LanguageContext } from '../store/LanguageContext';
import { UkFlag, SpanishFlag } from './svgs';

export const Header = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  return (
    <div className='flex items-center justify-between pt-6'>
      <p className='text-3xl font-bold text-muted-shady-red-0'>Pablo Avilés</p>
      <div className='flex text-lg gap-x-10'>
        <a className='hover-effect' href='#timeline-bottom-side'>
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
