import React from "react";
import DropdownData from "../assets/dropdown.json";

class Dropdown extends React.Component {
    render() {
        return (
            <select>
                {DropdownData.map((option) => {
                    return (
                       <option value={option.value}>{option["option"]}</option>
                    );
                })}
            </select>
        );
    }
}

export default Dropdown;
