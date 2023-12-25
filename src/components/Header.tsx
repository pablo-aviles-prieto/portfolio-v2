import { useContext } from 'react';
import { FlagContainer } from './styles/FlagContainer';
import { SpanishFlag } from './svgs/SpanishFlag';
import { LanguageContext } from '../store/LanguageContext';
import { UkFlag } from './svgs/UkFlag';

export const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  // TODO: Add hover color to the sections links
  // TODO: Add gradient to the Pablo Avilés?
  return (
    <div className='flex items-center justify-between pt-6'>
      <p className='text-3xl font-bold text-muted-shady-red-1'>Pablo Avilés</p>
      <div className='flex text-lg gap-x-10'>
        <p>About me</p>
        <p>Timeline</p>
        <p>Previous works</p>
        <p>Contact me</p>
        <div className='flex items-center gap-2'>
          <FlagContainer
            onClick={() => setLanguage('es')}
            grayscale={language !== 'es'}
          >
            <SpanishFlag width={20} height={20} />
          </FlagContainer>
          <FlagContainer
            onClick={() => setLanguage('en')}
            grayscale={language !== 'en'}
          >
            <UkFlag width={20} height={20} />
          </FlagContainer>
        </div>
      </div>
    </div>
  );
};
