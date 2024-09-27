import React from "react";
import "./actionModal.scss";
import usePreventBodyScroll from "../../../hooks/usePreventBodyScroll";
import { useNavigate } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiUserFollowLine, RiUserUnfollowLine } from "react-icons/ri";

type ActionModalProps = {
  userId: string;
  position: string;
};

const ActionModal: React.FC<ActionModalProps> = ({ userId, position }) => {
  usePreventBodyScroll();
  const navigate = useNavigate();

  return (
    <div
      className={`action-modal ${position}`}
      onClick={(e) => e.stopPropagation()}
    >
      <ul>
        <li onClick={() => navigate(`/users/details/${userId}`)}>
          <MdOutlineRemoveRedEye size={19} />
          View Details
        </li>
        <li onClick={() => navigate("/")}>
          <RiUserUnfollowLine size={19} />
          Blacklist User
        </li>
        <li onClick={() => navigate("/")}>
          <RiUserFollowLine size={19} />
          Activate User
        </li>
      </ul>
    </div>
  );
};

export default ActionModal;
