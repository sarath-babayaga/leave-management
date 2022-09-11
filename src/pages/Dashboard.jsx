import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import Button from "react-bootstrap/Button";
import { leaveData } from "./Data";
import Chart from "./Chart";

const data = [
  {
    name: "Scott",
    sick: 2,
    casual: 1,
    earned: 0,
    total: 25,
    availed: 3,
    balance: 22,
  },
];

function Dashboard() {
  const [leaveData, setleaveData] = useState({
    labels: ["Sick Leave", "Casual Leave", "Earned Leave"],
    datasets: [
      {
        data: [2, 1, 0],
        backgroundColor: ["orange", "forestgreen", "aqua"],
      },
    ],
  });

  return (
    <>
      <h1>Dashboard</h1>
      <div className="content">
        <div className="apply-button">
          <Link to="/leave">
            <Button className="btn btn-success" align="right">
              Apply Leave
            </Button>
          </Link>
        </div>
        <div className="App">
          <table>
            <tr>
              <th>Employee Name</th>
              <th>Sick Leaves</th>
              <th>Casual Leaves</th>
              <th>Earned Leaves</th>
              <th>Total No.of Leaves</th>
              <th>Total No.of Availed Leaves</th>
              <th>Balance</th>
            </tr>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                  <td>{val.sick}</td>
                  <td>{val.casual}</td>
                  <td>{val.earned}</td>
                  <td>{val.total}</td>
                  <td>{val.availed}</td>
                  <td>{val.balance}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
      <div className="chart-data" style={{ width: 400 }}>
        <Chart chartData={leaveData} />
      </div>
    </>
  );
}

export default Dashboard;
