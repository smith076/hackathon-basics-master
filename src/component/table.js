
import React from "react"


class TableComponent extends React.Component{

    render(){
        console.log(typeof this.props.dataFromParent);
        return (
            <div>
            <h1>World covid tracker</h1>
            <table> 
                <tr>
                    <th>New confirmed</th>
                    <th>New Deaths</th>
                    <th>New Recovered</th>
                    <th>Total Confirmed</th>
                    <th>Total Deaths</th>
                    <th>Total Recovered</th>
                </tr>
            </table>
        </div>
        )
    }
}

export default TableComponent;