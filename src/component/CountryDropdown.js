import React from "react";
import DropdownData from "../assets/countryData.json";
import axios from "axios";
import TableComponent from "./table";
import NetworkComponent from "./network";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        dataFromParent: []
    }
  }
  onDropdownChange = (event) => {
   
    axios
      .get(`https://api.covid19api.com/dayone/country/${event.target.value}`)
      .then((response) => {
          this.setState({dataFromParent: response.data})
      });
  };
  render() {
    return (
      <div>
        <select onChange={this.onDropdownChange}>
          {DropdownData.map((option) => {
            return <option Country={option.Country}>{option["Slug"]}</option>;
          })}
          {/* <NetworkComponent dataFromParent = {this.state.dataFromParent} /> */}
        </select>
        {
              this.state.dataFromParent.length === 0 ? 
                <h1>Loading...</h1>
              :
              <table border="2"  style={{marginLeft: "auto", marginRight: 'auto', marginTop: "20px", width: "500px"}}>
                <tr>
                    <th>Confirmed</th>
                    <th>Death</th>
                    <th>Recovered</th>
                    <th>Date</th>
                </tr>
                {this.state.dataFromParent.map((data) => (
                    data.Recovered !== 0 && data.Deaths !== 0 ?
                        <tr>
                            <td>{data.Confirmed}</td>
                            <td>{data.Deaths}</td>
                            <td>{data.Recovered}</td>
                            <td>{data.Date}</td>
                        </tr>
                        : null
                ))}
             </table>
          }
      </div>
    );
  }
}

export default Dropdown;
