import { SelectHTMLAttributes } from "react";
import { BsInfoCircle } from "react-icons/bs";
import "./select.scss";

export interface SelectProps {
  label?: string;
  labelFor?: string;
  placeholder?: string;
  attributes?: SelectHTMLAttributes<HTMLSelectElement>;
  disabled?: boolean;
  error?: any;
  note?: string;
  size?: "sm" | "lg";
  options: { label: string; value: string }[];
}

const Select = ({
  label,
  labelFor,
  placeholder,
  attributes,
  error,
  note,
  size = "lg",
  options,
}: SelectProps) => {
  return (
    <div className="select-wrapper">
      {label && (
        <label className="select-label" htmlFor={labelFor}>
          {label}
        </label>
      )}
      <div className="select-container">
        <select
          className={`select-field ${size === "sm" ? "sm" : "lg"}`}
          {...attributes}
        >
          <option value="">{placeholder ? placeholder : "Select"}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {error && <span className="select-error">{error}</span>}
      {note && (
        <span className="select-note">
          <BsInfoCircle />
          {note}
        </span>
      )}
    </div>
  );
};

export default Select;
