import React from "react";
import Select from "react-select";
import "./Dropdown.css";

function Dropdown() {
  var dropdownList = [
    {
      value: 1,
      label: "Sick Leave",
    },
    {
      value: 2,
      label: "Casual Leave",
    },
    {
      value: 3,
      label: "Earned Leave",
    },
  ];

  return (
    <div>
      <Select options={dropdownList} id="dropdown-select" />
    </div>
  );
}

export default Dropdown;
