import "./userDetails.scss";
import BackBtn from "../../../../components/atoms/backBtn/BackBtn";
import ActionButton from "../../../../components/atoms/button/ActionButton";
import { useState } from "react";
import { IoStarOutline } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { useParams } from "react-router-dom";
import { User } from "../../../../types/types.users";
import { users } from "../../../../data/data.users";

interface DetailProps {
  label: string;
  value: string | number | undefined;
}

const UserDetails = () => {
  const { userId } = useParams();
  const [activeNav, setActiveNav] = useState<string>("General Details");
  const userDetail: User | undefined = users.find(
    (user) => user._id === userId
  );

  const renderStars = () => {
    if (!userDetail || !userDetail.userTier) {
      return Array.from({ length: 4 }).map(() => null);
    }

    return Array.from({ length: 4 }).map((_, index) =>
      index < userDetail.userTier ? (
        <IoIosStar key={index} color="#E9B200" size={20} />
      ) : (
        <IoStarOutline key={index} color="#E9B200" size={20} />
      )
    );
  };

  const tabs = [
    "General Details",
    "Documents",
    "Bank Details",
    "Loans",
    "Savings",
    "App and System",
  ];

  return (
    <div className="user-details">
      <BackBtn label="Back to Users" />
      <div className="heading">
        <h1>User Details</h1>
        <div>
          <ActionButton
            buttonText="BLACKLIST USER"
            outlineRed
            width="fit"
            small
          />
          <ActionButton buttonText="ACTIVATE USER" outline width="fit" small />
        </div>
      </div>
      <div className="profile-nav">
        <section>
          {" "}
          <div>
            <div className="image-section col-span-2">
              <div>
                <img
                  src={userDetail?.profilePicture}
                  alt={userDetail?.fullName}
                />
              </div>
              <div>
                <h6>{userDetail?.fullName}</h6>
                <p>LSQFf587g90</p>
              </div>
            </div>
            <div className="tier-section">
              <p>User’s Tier</p>
              <span>{renderStars()}</span>
            </div>

            <div className="amount-section">
              <h6>₦{userDetail?.accountBalance}</h6>
              <p>{userDetail?.accountNumber}</p>
            </div>
          </div>
          <div>
            {tabs.map((tab) => (
              <div
                onClick={() => setActiveNav(tab)}
                className={tab === activeNav ? "active" : ""}
              >
                {tab}
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="details-container">
        <div className="details">
          <h2>Personal Information</h2>
          <div>
            <Detail label="full Name" value={userDetail?.fullName} />
            <Detail
              label="Phone Number"
              value={"0" + userDetail?.phoneNumber}
            />
            <Detail label="Email Address" value={userDetail?.email} />
            <Detail label="Bvn" value={userDetail?.BVN} />
            <Detail label="Gender" value={userDetail?.gender} />
            <Detail label="Marital status" value={userDetail?.maritalStatus} />
            <Detail label="Children" value={userDetail?.children} />
            <Detail
              label="Type of residence"
              value={userDetail?.typeOfResidence}
            />
          </div>
        </div>
        <div className="details">
          <h2>Education and Employment</h2>
          <div className="grid-4">
            <Detail
              label="level of education"
              value={userDetail?.educationAndEmployment.levelOfEducation}
            />
            <Detail
              label="employment status"
              value={userDetail?.educationAndEmployment.employmentStatus}
            />
            <Detail
              label="sector of employment"
              value={userDetail?.educationAndEmployment.sectorOfEmployment}
            />
            <Detail
              label="Duration of employment"
              value={userDetail?.educationAndEmployment.durationOfEmployment}
            />
            <Detail
              label="office email"
              value={userDetail?.educationAndEmployment.officeEmail}
            />
            <Detail
              label="Monthly income"
              value={"₦" + userDetail?.educationAndEmployment.monthlyIncome}
            />
            <Detail
              label="loan repayment"
              value={"₦" + userDetail?.educationAndEmployment.loanRepayment}
            />
          </div>
        </div>
        <div className="details">
          <h2>Socials</h2>
          <div>
            <Detail label="Twitter" value={userDetail?.socials.twitter} />
            <Detail label="Facebook" value={userDetail?.socials.facebook} />
            <Detail label="Instagram" value={userDetail?.socials.instagram} />
          </div>
        </div>
        <div className="details">
          <h2>Guarantor</h2>
          <div>
            <Detail
              label="full Name"
              value={userDetail?.guarantor[0].fullName}
            />
            <Detail
              label="Phone Number"
              value={userDetail?.guarantor[0].phoneNumber}
            />
            <Detail
              label="Email Address"
              value={userDetail?.guarantor[0].email}
            />
            <Detail
              label="Relationship"
              value={userDetail?.guarantor[0].relationship}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Detail = ({ label, value }: DetailProps) => {
  return (
    <div className="detail">
      <h4>{label}</h4>
      <p>{value}</p>
    </div>
  );
};

export default UserDetails;
