import { ChangeEventHandler, FocusEventHandler } from 'react';

type Props = {
  error: boolean;
  firstTouch: boolean;
  htmlFor: string;
  label: string;
  maxLength?: number;
  onBlur: FocusEventHandler<HTMLTextAreaElement>;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  required?: boolean;
  rows?: number;
  showCharLimit?: boolean;
  value: string;
};

function ContactFormTextArea({
  error,
  firstTouch,
  htmlFor,
  label,
  maxLength = 1500,
  onBlur,
  onChange,
  required = false,
  rows = 4,
  showCharLimit = false,
  value,
}: Props) {
  return (
    <div className="flex flex-col col-span-12">
      <label
        htmlFor={htmlFor}
        className="mt-3 text-lg text-dark uppercase sm:mt-8"
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <textarea
        name={htmlFor}
        onBlur={onBlur}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`bg-transparent border-b-2 border-opacity-50 font-light py-1 resize-none text-dark focus:border-opacity-100 focus:outline-none focus:text-darker sm:py-2 ${
          error && firstTouch ? 'border-red-500' : 'border-darker'
        }`}
      />
      {showCharLimit && (
        <span className="text-dark text-sm text-right">
          nombre de caractères : {value.trim().length}/{maxLength}
        </span>
      )}
    </div>
  );
}

export default ContactFormTextArea;
