import { useContext } from 'react';
import { LanguageContext } from '../store/LanguageContext';
import { GithubIcon, LinkedinIcon } from './svgs';

export const SocialNetworks = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className='flex items-center justify-center gap-x-2'>
      <a
        href={
          language === 'en'
            ? 'https://www.linkedin.com/in/pablo-aviles-prieto/?locale=en_US'
            : 'https://www.linkedin.com/in/pablo-aviles-prieto/'
        }
        target='_blank'
        rel='noopener noreferrer'
      >
        <LinkedinIcon className='w-12 h-12 hover:scale-105' />
      </a>
      <a
        href='https://github.com/Pablo-Aviles-Prieto'
        target='_blank'
        rel='noopener noreferrer'
      >
        <GithubIcon className='w-12 h-12 hover:scale-105' />
      </a>
    </div>
  );
};
