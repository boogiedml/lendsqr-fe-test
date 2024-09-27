import React from "react";
import "./counter.scss";
import { PiCaretDownBold } from "react-icons/pi";

type CounterProps = {
  total: number;
  setItemsPerPage: (items: number) => void;
};

const Counter: React.FC<CounterProps> = ({ total, setItemsPerPage }) => {
  return (
    <div className="counter">
      <span>Showing</span>
      <div className="select-container">
        <select onChange={(e) => setItemsPerPage(Number(e.target.value))}>
          <option value="10">10</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <PiCaretDownBold size={18} className="icon" />
      </div>
      <span> out of {total}</span>
    </div>
  );
};

export default Counter;
