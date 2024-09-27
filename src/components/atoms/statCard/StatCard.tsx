import React from "react";
import "./statCard.scss";

type StatCardProps = {
  title: string;
  value: number | string;
  iconPath: string;
  iconBg?: string;
};

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  iconPath,
  iconBg = "#000",
}) => {
  return (
    <div className="stat-card">
      <div className="icon" style={{ backgroundColor: iconBg }}>
        <img src={iconPath} alt={title} />
      </div>
      <div className="info">
        <span className="title">{title}</span>
        <span className="value">{value}</span>
      </div>
    </div>
  );
};

export default StatCard;
