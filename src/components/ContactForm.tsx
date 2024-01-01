import { FormEvent, useState } from 'react';
import { Input, Textarea } from './styles/form';
import { isValidatedContactForm } from '../utils/isValidatedContactForm';

export const FORM_PLAYER_INIT_VALUES = {
  name: '',
  contactMethod: '',
  contactInfo: '',
  message: '',
};

export const ContactForm = () => {
  const [formData, setFormData] = useState<typeof FORM_PLAYER_INIT_VALUES>(
    FORM_PLAYER_INIT_VALUES
  );
  const [formErrors, setFormErrors] = useState<typeof FORM_PLAYER_INIT_VALUES>(
    FORM_PLAYER_INIT_VALUES
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  console.log('isSubmitting', isSubmitting);

  const handleInputChange = ({
    value,
    key,
  }: {
    value: (typeof FORM_PLAYER_INIT_VALUES)[keyof typeof FORM_PLAYER_INIT_VALUES];
    key: keyof typeof FORM_PLAYER_INIT_VALUES;
  }) => {
    setFormData((prevState) => ({ ...prevState, [key]: value }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const isValidated = isValidatedContactForm({ formData, setFormErrors });
    if (!isValidated) {
      // TODO: Add a toast
      setIsSubmitting(false);
      return;
    }

    // TODO: Add formspree/react and a success toast bien bacano
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className='max-w-xl mx-auto'>
        <Input
          id='name'
          type='text'
          label='Name'
          placeholder='name...'
          containerClasses='my-4'
          hasError={!!formErrors.name}
          onChange={(e) =>
            handleInputChange({ key: 'name', value: e.target.value })
          }
        />
        <Input
          id='contact-method'
          type='text'
          label='Contact method'
          placeholder='contact method...'
          containerClasses='my-4'
          hasError={!!formErrors.contactMethod}
          onChange={(e) =>
            handleInputChange({ key: 'contactMethod', value: e.target.value })
          }
        />
        <Input
          id='contact-info'
          type='text'
          label='Contact information'
          placeholder='contact information...'
          containerClasses='my-4'
          hasError={!!formErrors.contactInfo}
          onChange={(e) =>
            handleInputChange({ key: 'contactInfo', value: e.target.value })
          }
        />
        <Textarea
          id='message'
          label='Message'
          placeholder='message...'
          containerClasses='my-4'
          rows={3}
          hasError={!!formErrors.message}
          onChange={(e) =>
            handleInputChange({ key: 'message', value: e.target.value })
          }
        />
      </div>
      <div className='text-center'>
        <button
          type='submit'
          disabled={isSubmitting}
          className={`relative items-center justify-center px-12 py-3 overflow-hidden font-medium text-center transition-all 
          ${
            isSubmitting ? 'bg-gray-400' : 'bg-white hover:bg-white group'
          } rounded`}
        >
          {!isSubmitting && (
            <span
              className={`w-64 h-48 rounded rotate-[-40deg] bg-muted-shady-red-0 absolute bottom-0 left-0 
              -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 
              group-hover:mb-32 group-hover:translate-x-0`}
            ></span>
          )}
          <span
            className={`relative w-full text-left transition-colors duration-300 ease-in-out 
          ${
            isSubmitting
              ? 'text-black'
              : 'text-muted-shady-red-2 group-hover:text-white'
          } `}
          >
            Submit
          </span>
        </button>
      </div>
    </form>
  );
};
