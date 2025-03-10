import React from "react";
import { Button } from "@mui/material";
import "./RecentProjects.css";

const projects = [
  {
    title: "UI/UX Design",
    department: "UI Team",
    status: "review",
    color: "purple",
  },
  {
    title: "Web development",
    department: "Frontend",
    status: "in progress",
    color: "pink",
  },
  {
    title: "Ushop app",
    department: "Mobile Team",
    status: "pending",
    color: "orange",
  },
  {
    title: "UI/UX Design",
    department: "UI Team",
    status: "review",
    color: "purple",
  },
  {
    title: "Web development",
    department: "Frontend",
    status: "in progress",
    color: "pink",
  },
  {
    title: "Ushop app",
    department: "Mobile Team",
    status: "pending",
    color: "orange",
  },
  {
    title: "UI/UX Design",
    department: "UI Team",
    status: "review",
    color: "purple",
  },
  {
    title: "Web development",
    department: "Frontend",
    status: "in progress",
    color: "pink",
  },
  {
    title: "Ushop app",
    department: "Mobile Team",
    status: "pending",
    color: "orange",
  },
];

const RecentProjects: React.FC = () => {
  return (
    <div className="recent-projects">
      <div className="header">
        <h2 className="title">Recent Projects</h2>
        <Button variant="contained" className="see-all">
          See all →
        </Button>
      </div>

      <table className="project-table">
        <thead>
          <tr>
            <th>Project Title</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td>{project.title}</td>
              <td>{project.department}</td>
              <td>
                <span className={`status-dot ${project.color}`}></span>{" "}
                {project.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentProjects;
