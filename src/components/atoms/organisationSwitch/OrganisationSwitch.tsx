import { IoIosArrowDown } from "react-icons/io";
import "./organisationSwitch.scss";

const OrganisationSwitch = () => {
  return (
    <div className="organisation-switch">
      <div className="organisation-details">
        <span className="organisation-icon">
          <img className="icon" src="/images/organization.svg" alt="icon" />
        </span>
        <span className="organisation-title">Switch Organization</span>
      </div>
      <IoIosArrowDown color="#213F7D" size={16} />
    </div>
  );
};

export default OrganisationSwitch;
