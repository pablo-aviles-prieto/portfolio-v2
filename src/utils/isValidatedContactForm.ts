import { FORM_PLAYER_INIT_VALUES } from '../components/ContactForm';

type FormErrors = typeof FORM_PLAYER_INIT_VALUES;

type Params = {
  formData: typeof FORM_PLAYER_INIT_VALUES;
  setFormErrors: (errors: FormErrors) => void;
};

export const isValidatedContactForm = ({ formData, setFormErrors }: Params) => {
  const errorMessages: Record<keyof typeof formData, string> = {
    name: 'Name is required',
    contactMethod: 'Contact method is required',
    contactInfo: 'Contact information is required',
    message: 'Message is required',
  };

  const errors: FormErrors = { ...FORM_PLAYER_INIT_VALUES };

  Object.keys(formData).forEach((key) => {
    const field = key as keyof typeof formData;
    if (!formData[field]) {
      errors[field] = errorMessages[field];
    }
  });

  setFormErrors(errors);
  return Object.values(errors).every((error) => error === '');
};
