import { ChangeEvent } from 'react';

interface InputProps {
  id: string;
  placeholder: string;
  label: string;
  rows?: number;
  containerClasses?: string;
  hasError?: boolean;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea = ({
  id,
  placeholder,
  label,
  rows = 5,
  containerClasses = '',
  hasError = false,
  onChange,
}: InputProps) => {
  return (
    <div className={`group relative w-auto ${containerClasses}`}>
      <label
        htmlFor={id}
        className={`block w-full pb-1 text-sm font-medium text-gray-300 
        transition-all duration-200 ease-in-out 
        ${
          hasError
            ? 'group-focus-within:text-red-600'
            : 'group-focus-within:text-muted-shady-red-0'
        }`}
      >
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        id={id}
        rows={rows}
        onChange={onChange}
        className={`w-full rounded-md bg-gray-50 px-4 outline-none drop-shadow-sm focus:bg-white 
        focus:ring-muted-shady-red-0 text-slate-800 placeholder-slate-500
        border-2 ${hasError ? 'border-red-600 focus:ring-0' : 'focus:ring-2'}`}
      />
    </div>
  );
};
