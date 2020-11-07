import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
const data = [
    {
        date: "2020-11-06T16:23:05",
        count: 1000,
    },
    {
        date: "2020-11-05T16:23:05",
        count: 3200,
    },
    {
        date: "2020-11-04T16:23:05",
        count: 8000,
    },
    {
        date: "2020-11-03T16:23:05",
        count: 10200,
    },
    {
        date: "2020-11-02T16:23:05",
        count: 11000,
    },
    {
        date: "2020-11-01T16:23:05",
        count: 1000,
    },
];

class ChartComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                style={{ marginTop: "10%" }}
            >
                <XAxis
                    dataKey="date"
                    tickFormatter={(value) => {
                        let date = new Date(value);
                        return date.toLocaleDateString();
                    }}
                />
                <YAxis />
                <Legend />
                <Tooltip />
                <Line dataKey="count" stroke="#8884d8" />
            </LineChart>
        );
    }
}

export default ChartComponent;
