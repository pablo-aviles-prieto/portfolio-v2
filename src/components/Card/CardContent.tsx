import ZoomImage from 'react-medium-image-zoom';
import { useContext } from 'react';
import { PrevWork } from '../../interfaces';
import { techs } from '../../utils/const';
import { Github, Web, Close } from '../svgs';
import { LanguageContext } from '../../store/LanguageContext';
import 'react-medium-image-zoom/dist/styles.css';

type Props = {
  work: PrevWork;
};

export const CardContent = ({ work }: Props) => {
  const { language } = useContext(LanguageContext);

  return (
    <div key={work.title} className='overflow-hidden glow-card'>
      <div className='glows' />
      <div
        className='w-[400px] h-[225px] flex border-t border-x 
      border-transparent justify-center items-center overflow-hidden'
      >
        <ZoomImage IconUnzoom={Close}>
          <img
            src={`/images/prev-works/${work.image}`}
            alt={work.title}
            style={{ height: '225px', width: '400px' }}
          />
        </ZoomImage>
      </div>
      <div className='flex flex-col justify-between h-[calc(100%-225px)] p-4 text-base'>
        <div>
          <p className='mb-6 text-xl text-[22px] font-bold tracking-wider text-center text-vibrant-orange-1'>
            {work.title}
          </p>
          <div className='flex items-center justify-center mb-4 gap-x-4'>
            {work.techs.map((tech) => {
              const TechIcon = techs[tech as keyof typeof techs];
              return <TechIcon key={tech} className='w-7 h-7' />;
            })}
          </div>
          <p>
            {language === 'en' ? work.descriptionEn : work.descriptionEs}{' '}
            {work.subDescriptionEn && (
              <span className='text-xs italic'>
                *
                {language === 'en'
                  ? work.subDescriptionEn
                  : work.subDescriptionEs}
              </span>
            )}
          </p>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <a
              title={work.github2 ? 'Frontend repo' : 'Repository'}
              href={work.github}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Github className='w-8 h-8 cursor-pointer hover:text-vibrant-orange-1' />
            </a>
            {work.github2 && (
              <a
                title='Backend repo'
                href={work.github2}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Github className='w-8 h-8 cursor-pointer hover:text-vibrant-orange-1' />
              </a>
            )}
          </div>
          {work.website && (
            <a href={work.website} target='_blank' rel='noopener noreferrer'>
              <Web className='w-8 h-8 cursor-pointer hover:text-vibrant-orange-1' />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
