import {
  CONTACT_FORM_ERR_VALUES,
  CONTACT_FORM_INIT_VALUES,
} from '../components/ContactForm';

type FormErrors = typeof CONTACT_FORM_INIT_VALUES;

type Params = {
  formData: typeof CONTACT_FORM_INIT_VALUES;
  setFormErrors: (errors: FormErrors) => void;
};

// TODO: Use both languages
export const isValidatedContactForm = ({ formData, setFormErrors }: Params) => {
  const errorMessages: Record<keyof typeof formData, string> = {
    name: 'Name is required',
    contactMethod: 'Contact method is required',
    contactInfo: 'Contact information is required',
    message: 'Message is required',
  };

  const errors: FormErrors = { ...CONTACT_FORM_ERR_VALUES };

  Object.keys(formData).forEach((key) => {
    const field = key as keyof typeof formData;
    if (!formData[field]) {
      errors[field] = errorMessages[field];
    }
  });

  setFormErrors(errors);
  return Object.values(errors).every((error) => error === '');
};
