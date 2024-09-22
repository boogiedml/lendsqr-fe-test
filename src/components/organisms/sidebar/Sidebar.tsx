import { Link, useLocation } from "react-router-dom";
import "./sidebar.scss";
import {
  businessSideNavLinks,
  customerSideNavLinks,
  settingSideNavLinks,
} from "./data";
import OrganisationSwitch from "../../atoms/organisationSwitch/OrganisationSwitch";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="all-links">
        <OrganisationSwitch />
        <Navlink
          link={{
            link: "/dashboard",
            iconPath: "/images/dashboard.svg",
            linkTitle: "Dashboard",
          }}
        />
        <div className="sidebar-links-container">
          <h2>CUSTOMERS</h2>
          <div className="sidebar-links">
            {customerSideNavLinks.map((link) => (
              <Navlink key={link.linkTitle} link={link} />
            ))}
          </div>
        </div>
        <div className="sidebar-links-container">
          <h2>BUSINESSES</h2>
          <div className="sidebar-links">
            {businessSideNavLinks.map((link) => (
              <Navlink key={link.linkTitle} link={link} />
            ))}
          </div>
        </div>
        <div className="sidebar-links-container">
          <h2>SETTINGS</h2>
          <div className="sidebar-links">
            {settingSideNavLinks.map((link) => (
              <Navlink key={link.linkTitle} link={link} />
            ))}
          </div>
        </div>
      </div>
      <div className="sidebar-footer">
        <Navlink
          link={{
            link: "/",
            iconPath: "/images/logout.svg",
            linkTitle: "Logout",
          }}
        />
        <div>v1.2.0</div>
      </div>
    </div>
  );
};

interface NavLinkProps {
  link: {
    link: string;
    iconPath: string;
    linkTitle: string;
  };
}

const Navlink = ({ link }: NavLinkProps) => {
  const location = useLocation();
  return (
    <Link
      key={link.link}
      to={link.link}
      className={`sidebar-link ${
        location.pathname === link.link ? "active" : ""
      }`}
    >
      <span className="sidebar-link-icon">
        <img className="icon" src={link.iconPath} alt="icon" />
      </span>
      <span className="sidebar-link-title">{link.linkTitle}</span>
    </Link>
  );
};

export default Sidebar;
