/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';
import { prevWorks, techs } from '../utils/const';
import { Github } from './svgs/Github';
import { Web } from './svgs/Web';

export const Card = () => {
  const containerRef = useRef<any>(null);
  const config = {
    proximity: 40,
    spread: 80,
    blur: 20,
    gap: 16,
    vertical: false,
    opacity: 0,
  };

  useEffect(() => {
    const container = containerRef.current;
    const cards = container.querySelectorAll('article');

    const update = (event: any) => {
      for (const card of cards) {
        const cardBounds = card.getBoundingClientRect();
        if (
          event.x > cardBounds.left - config.proximity &&
          event.x < cardBounds.right + config.proximity &&
          event.y > cardBounds.top - config.proximity &&
          event.y < cardBounds.bottom + config.proximity
        ) {
          card.style.setProperty('--active', 1);
        } else {
          card.style.setProperty('--active', config.opacity);
        }
        const cardCenter = [
          cardBounds.left + cardBounds.width * 0.5,
          cardBounds.top + cardBounds.height * 0.5,
        ];
        let angle =
          (Math.atan2(event?.y - cardCenter[1], event?.x - cardCenter[0]) *
            180) /
          Math.PI;
        angle = angle < 0 ? angle + 360 : angle;
        card.style.setProperty('--start', angle + 90);
      }
    };

    document.addEventListener('pointermove', update);

    const restyle = () => {
      container.style.setProperty('--gap', config.gap);
      container.style.setProperty('--blur', config.blur);
      container.style.setProperty('--spread', config.spread);
      container.style.setProperty(
        '--direction',
        config.vertical ? 'column' : 'row'
      );
    };
    restyle();

    return () => {
      document.removeEventListener('pointermove', update);
    };
  }, [config]);

  return (
    <div ref={containerRef} className='container'>
      {prevWorks.map((work) => (
        <article key={work.title} className='overflow-hidden'>
          <div className='glows' />
          {work.image && (
            <div
              className='w-[400px] h-[225px] flex border-t border-x 
              border-transparent justify-center items-center overflow-hidden'
            >
              <img
                src={`/images/prev-works/${work.image}`}
                alt={work.title}
                className='w-[100%] h-[100%] object-cover'
              />
            </div>
          )}
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
                {work.descriptionEn}{' '}
                {work.subDescriptionEn && (
                  <span className='text-xs italic'>
                    *{work.subDescriptionEn}
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
                <a
                  href={work.website}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Web className='w-8 h-8 cursor-pointer hover:text-vibrant-orange-1' />
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};
