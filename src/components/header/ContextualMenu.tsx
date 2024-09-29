import { HamburgerIcon } from '../svgs';
import { NavOptions } from './NavOptions';

interface ContextualMenuProps {
  showContextualMenuBlock: boolean;
  showContextualMenuContent: boolean;
  setShowContextualMenuContent: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContextualMenu = ({
  showContextualMenuBlock,
  showContextualMenuContent,
  setShowContextualMenuContent,
}: ContextualMenuProps) => {
  const toggleMenu = () => {
    setShowContextualMenuContent((prevState) => !prevState);
  };

  return (
    <div
      className={`absolute -top-1 sm:top-0 right-6 pt-7 transform transition-all duration-700 ease-in-out ${
        showContextualMenuBlock ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <button className='flex justify-end w-full' onClick={toggleMenu}>
        <HamburgerIcon className='size-5 sm:size-8' />
      </button>

      <div
        className={`${
          showContextualMenuContent
            ? 'w-36 sm:w-44 h-[9.1rem] sm:h-[10.4rem] border'
            : 'w-0 h-0 border-0'
        } overflow-hidden mt-1 transform transition-all bg-shady-dark-blue-1 duration-500 rounded-md shadow-md border-muted-shady-red-0`}
      >
        <ul className='flex flex-col gap-3 p-2 text-xs sm:text-sm'>
          <NavOptions showGoBackTop />
        </ul>
      </div>
    </div>
  );
};
