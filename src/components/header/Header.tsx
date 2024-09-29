import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ContextualMenu } from './ContextualMenu';
import { NavOptions } from './NavOptions';

const MAX_VIEWPORT_WIDTH = 515;

export const Header = () => {
  const [isWideEnough, setIsWideEnough] = useState(
    window.innerWidth > MAX_VIEWPORT_WIDTH
  );
  const [showContextualMenuBlock, setShowContextualMenuBlock] = useState(false);
  const [showContextualMenuContent, setShowContextualMenuContent] =
    useState(false);
  const nameRef = useRef<HTMLParagraphElement | null>(null);
  const sectionsRef = useRef<HTMLUListElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (nameRef.current) {
      gsap.from(nameRef.current, {
        opacity: 0,
        x: -400,
        duration: 1.5,
      });
    }
    gsap.from(sectionsRef.current, {
      opacity: 0,
      x: 400,
      duration: 1.5,
    });

    const handleResize = () => {
      setIsWideEnough(window.innerWidth > MAX_VIEWPORT_WIDTH);
    };
    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 100 && headerRef.current) {
        gsap.to(headerRef.current, {
          x: '45%',
          opacity: 0,
          scaleX: 0,
          duration: 0.5,
          ease: 'power2.out',
          onStart: () => setShowContextualMenuBlock(true),
        });
      } else if (scrollY <= 100 && headerRef.current) {
        gsap.to(headerRef.current, {
          x: '0px',
          opacity: 1,
          scaleX: 1,
          duration: 0.5,
          ease: 'power2.out',
          onStart: () => {
            setShowContextualMenuBlock(false);
            setShowContextualMenuContent(false);
          },
        });
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='fixed top-0 z-30 w-full max-w-7xl'>
      <div
        ref={headerRef}
        className='flex items-center w-full px-2 pt-6 justify-evenly xs:justify-between xl:px-0'
      >
        {isWideEnough && (
          <p
            ref={nameRef}
            className='text-lg font-bold sm:text-2xl md:text-3xl text-muted-shady-red-0'
          >
            Pablo Avilés
          </p>
        )}
        <ul
          ref={sectionsRef}
          className='flex items-center justify-around w-full text-xs xs:justify-normal xs:w-auto sm:text-sm md:text-base lg:text-lg gap-x-1 sm:gap-x-5 md:gap-x-10'
        >
          <NavOptions />
        </ul>
      </div>

      <ContextualMenu
        showContextualMenuBlock={showContextualMenuBlock}
        showContextualMenuContent={showContextualMenuContent}
        setShowContextualMenuContent={setShowContextualMenuContent}
      />
    </div>
  );
};
