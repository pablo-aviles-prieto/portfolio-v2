import { ChangeEvent } from 'react';

type InputType = 'email' | 'password' | 'text';

interface InputProps {
  id: string;
  type: InputType;
  placeholder: string;
  label: string;
  containerClasses?: string;
  hasError?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  id,
  type,
  placeholder,
  label,
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
      <input
        placeholder={placeholder}
        id={id}
        type={type}
        onChange={onChange}
        className={`h-10 w-full rounded-md bg-gray-50 px-4
        outline-none drop-shadow-sm transition-all duration-200 
        ease-in-out focus:bg-white focus:ring-muted-shady-red-0
        text-slate-800 placeholder-slate-500 ${
          hasError ? 'border-2 border-red-600 focus:ring-0' : 'focus:ring-2'
        }`}
      />
    </div>
  );
};
