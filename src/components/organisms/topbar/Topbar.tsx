import { Link } from "react-router-dom";
import Input from "../../atoms/input/Input";
import "./topbar.scss";
import { SlBell } from "react-icons/sl";
import { FaCaretDown } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="topbar">
      <div>
        <div className="logo-container">
          <img src="/images/lendsqr-logo.svg" alt="lendsqr" />
        </div>
        <div className="search-input-container">
          <Input
            attributes={{
              placeholder: "Search for anything",
            }}
            size="sm"
            search
          />
        </div>
      </div>
      <div>
        <Link className="docs-link" to="/">
          Docs
        </Link>
        <button className="notification_btn">
          <SlBell />
        </button>
        <div>
          <div className="image-container">
            <img
              src="https://cdn.legit.ng/images/720/55c0dd7a23243509.webp?v=1"
              alt="user"
            />
          </div>
          <span>Adedeji</span>
          <FaCaretDown />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
