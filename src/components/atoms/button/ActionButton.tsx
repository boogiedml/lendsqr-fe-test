import { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import "./actionButton.scss"

interface ActionButtonProps {
  buttonText: ReactNode;
  outline?: boolean;
  outlineGrey?: boolean;
  link?: string;
  width?: string;
  attributes?: ButtonHTMLAttributes<HTMLButtonElement>;
  loading?: boolean;
  big?: boolean;
  small?: boolean;
}

const ActionButton = ({
  buttonText,
  link,
  outline,
  outlineGrey,
  width,
  attributes,
  loading = false,
  big = false,
  small = false,
}: ActionButtonProps) => {
  const buttonClasses = `action-button ${big ? "big" : small ? "small" : ""} ${
    outline ? "outline" : outlineGrey ? "outline-grey" : "solid"
  } ${width ? `width-${width}` : "full"}`;

  return (
    <>
      {link ? (
        <Link to={link || ""} className={buttonClasses}>
          <div className="button-content">{buttonText}</div>
        </Link>
      ) : (
        <button {...attributes} className={buttonClasses}>
          <div className="button-content">
            {loading ? (
              <>
                <ClipLoader size={14} color="white" />
                <span className="loading-text">{buttonText}</span>
              </>
            ) : (
              buttonText
            )}
          </div>
        </button>
      )}
    </>
  );
};

export default ActionButton;
