import React from "react";

interface FormInputProps {
  name: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  name,
  placeholder,
  value,
  error,
  onChange,
  type = "text",
}) => {
  return (
    <div className="flex flex-col">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`p-2 rounded bg-[#4a5156] text-white border ${
          error ? "border-red-500" : "border-[#808a92]"
        }`}
      />
      {error && <span className="text-red-400 text-xs mt-1">{error}</span>}
    </div>
  );
};
