/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';
import { prevWorks } from '../utils/const';

export const Card = () => {
  const containerRef = useRef<any>(null);
  const config = {
    proximity: 40,
    spread: 80,
    blur: 20,
    gap: 32,
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
        <article key={work.title} className='!w-[400px]'>
          <div className='glows' />
          <p>{work.image || 'Image'}</p>
          <p>{work.title}</p>
          <p>{work.descriptionEn}</p>
          <p>{work.subDescriptionEn}</p>
          <p>{work.techs.join(' ')}</p>
          <p>Githubs y website</p>
        </article>
      ))}
    </div>
  );
};
