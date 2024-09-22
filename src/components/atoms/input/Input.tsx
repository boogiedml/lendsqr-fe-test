import { InputHTMLAttributes, useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import "./input.scss";
import { IoSearch } from "react-icons/io5";

export interface InputProps {
  label?: string;
  labelFor?: string;
  attributes?: InputHTMLAttributes<HTMLInputElement>;
  passwordInput?: boolean;
  disabled?: boolean;
  error?: any;
  note?: string;
  size?: "sm" | "lg";
  search?: boolean;
}

const Input = ({
  label,
  labelFor,
  attributes,
  passwordInput,
  error,
  note,
  size = "lg",
  search,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = passwordInput
    ? showPassword
      ? "text"
      : "password"
    : attributes?.type || "text";

  return (
    <div className="input-wrapper">
      {label && (
        <label className="input-label" htmlFor={labelFor}>
          {label}
        </label>
      )}
      <div className="input-container">
        <input
          className={`input-field ${passwordInput ? "password-input" : ""} ${
            size === "sm" ? "sm" : "lg"
          } ${search ? "search" : ""}`}
          type={inputType}
          {...attributes}
        />
        {passwordInput && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="password-toggle"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
        {search && (
          <div className="search-icon-container">
            <IoSearch className="icon" size={18} />
          </div>
        )}
      </div>
      {error && <span className="input-error">{error}</span>}
      {note && (
        <span className="input-note">
          <BsInfoCircle />
          {note}
        </span>
      )}
    </div>
  );
};

export default Input;
