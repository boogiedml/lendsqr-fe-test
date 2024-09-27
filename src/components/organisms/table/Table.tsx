import React, { useState, useRef, useEffect } from "react";
import "./table.scss";
import { MdOutlineFilterList } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import ActionModal from "../../molecules/tableActionModal/ActionModal";
import { User } from "../../../types/types.users";
import Input from "../../atoms/input/Input";
import Select from "../../atoms/select/Select";
import ActionButton from "../../atoms/button/ActionButton";

type TableProps = {
  headers: string[];
  data: any[];
  renderRow: (row: any) => JSX.Element;
};

const Table: React.FC<TableProps> = ({ headers, data, renderRow }) => {
  const [modalVisible, setModalVisible] = useState<number | null>(null);
  const [modalPosition, setModalPosition] = useState<string>("");
  const modalRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<HTMLTableElement | null>(null);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setModalVisible(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleModal = (index: number, rowRef: HTMLTableRowElement) => {
    if (modalVisible === index) {
      setModalVisible(null);
    } else {
      const tableRect = tableRef.current?.getBoundingClientRect();
      const rowRect = rowRef.getBoundingClientRect();

      if (tableRect && rowRect) {
        const spaceBelow = tableRect.bottom - rowRect.bottom;
        const spaceAbove = rowRect.top - tableRect.top;

        if (spaceBelow < 200 && spaceAbove > 200) {
          setModalPosition("above");
        } else {
          setModalPosition("below");
        }
      }
      setModalVisible(index);
    }
  };

  return (
    <div className="table-container">
      <table className="custom-table" ref={tableRef}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th onClick={() => setShowFilter(!showFilter)} key={index}>
                {header} <MdOutlineFilterList size={20} className="icon" />
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row: User, index: number) => (
            <tr key={index} ref={(el) => el && el}>
              {renderRow(row)}
              <td>
                <button
                  onClick={(e) => {
                    const trElement = e.currentTarget.closest("tr");
                    if (trElement) {
                      toggleModal(index, trElement);
                    }
                  }}
                  className="action-btn"
                >
                  <BsThreeDotsVertical size={20} />
                </button>
                {modalVisible === index && (
                  <div ref={modalRef}>
                    <ActionModal userId={row._id} position={modalPosition} />
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showFilter && <Filter />}
    </div>
  );
};

const Filter = () => {
  return (
    <div className="filter">
      <Select label="Organization" size="sm" options={[]} />
      <Input
        label="Username"
        size="sm"
        attributes={{
          placeholder: "User",
        }}
      />
      <Input
        label="Email"
        size="sm"
        attributes={{
          placeholder: "Email",
          type: "email",
        }}
      />
      <Input
        label="Date"
        size="sm"
        attributes={{
          placeholder: "Date",
          type: "date",
        }}
      />
      <Input
        label="Phone Number"
        size="sm"
        attributes={{
          placeholder: "Phone Number",
        }}
      />
      <Select label="Status" size="sm" options={[]} />
      <div className="btn-container">
        <ActionButton buttonText="Reset" outlineGrey />
        <ActionButton buttonText="Filter" />
      </div>
    </div>
  );
};

export default Table;
