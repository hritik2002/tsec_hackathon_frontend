import React, { useState } from "react";
import "../../Assets/UserDashboard.css";

function UserDashboard() {
  const [myApplication, setMyApplication] = useState([
    {
      company: "TCS",
      profile: "profile",
      appliedOn: "some date",
      status: "pending",
    },
    {
      company: "TCS",
      profile: "profile",
      appliedOn: "some date",
      status: "pending",
    },
    {
      company: "TCS",
      profile: "profile",
      appliedOn: "some date",
      status: "pending",
    },
    {
      company: "TCS",
      profile: "profile",
      appliedOn: "some date",
      status: "pending",
    },
  ]);
  return (
    <>
      <div className="applications " style={{ margin: "auto" }}>
        <h3 className="text-center ">My Applications</h3>
        <table className="striped ">
          <thead>
            <tr className="text-center">
              <th>Company</th>
              <th>Profile</th>
              <th>Applied On</th>
              <th>Application Status</th>
            </tr>
          </thead>

          <tbody>
            {myApplication.map((val, index) => (
              <tr className="text-center">
                <td className="text-center">{val.company}</td>
                <td className="text-center">{val.profile}</td>
                <td className="text-center">{val.appliedOn}</td>
                <td
                  className="text-center"
                  style={{ borderBottom: "1px solid rgba(0,0,0,0.2)" }}
                >
                  <span
                    className={`badge white-text ${
                      val.status === "pending" ? "orange" : "blue"
                    }`}
                  >
                    {val.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserDashboard;
