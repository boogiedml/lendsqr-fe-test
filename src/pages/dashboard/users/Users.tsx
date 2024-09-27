import { useState } from "react";
import StatCard from "../../../components/atoms/statCard/StatCard";
import "./users.scss";
import Table from "../../../components/organisms/table/Table";
import Counter from "../../../components/molecules/tableCounter/Counter";
import Pagination from "../../../components/molecules/pagination/Pagination";
import { users } from "../../../data/data.users";
import { User } from "../../../types/types.users";

const Users = () => {
  const headers = [
    "Organization",
    "Username",
    "Email",
    "Phone Number",
    "Date Joined",
    "Status",
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalItems = users.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentData = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="users">
      <h1 className="heading">Users</h1>
      <div className="stats">
        <StatCard
          title="Users"
          value={users.length}
          iconPath="/images/users-icon.svg"
          iconBg="rgba(223, 24, 255, 0.15)"
        />
        <StatCard
          title="Active Users"
          value={users.filter((user) => user.status === "active").length}
          iconPath="/images/active-users-icon.svg"
          iconBg="rgba(87, 24, 255, 0.15)"
        />
        <StatCard
          title="Users with Loans"
          value={
            users.filter(
              (user) => user.educationAndEmployment.loanRepayment !== 0
            ).length
          }
          iconPath="/images/loan-users-icon.svg"
          iconBg="rgba(245, 95, 68, 0.15)"
        />
        <StatCard
          title="Users with Savings"
          value={users.filter((user) => user.savings !== 0).length}
          iconPath="/images/savings-users-icon.svg"
          iconBg="rgba(255, 51, 102, 0.15)"
        />
      </div>
      <div>
        <Table
          headers={headers}
          data={currentData}
          renderRow={(row: User) => (
            <>
              <td>{row.organisation}</td>
              <td>{row.fullName}</td>
              <td>{row.email}</td>
              <td>{row.phoneNumber}</td>
              <td>{row.registered}</td>
              <td>
                <span className={row.status}>{row.status}</span>
              </td>
            </>
          )}
        />
        <div className="table-footer">
          <Counter total={totalItems} setItemsPerPage={setItemsPerPage} />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Users;
