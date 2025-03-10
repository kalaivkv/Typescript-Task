import React, { useState } from "react";
import Sidebar from "./Assignment2/Sidebar";
import Navbar from "./Assignment2/Navbar";
import "./styles.css";
import RecentProjects from "./Assignment2/RecentProjects";
import NewCustomer from "./Assignment2/NewCustomer";
import StatsCards from "./Assignment2/StatsCards";

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`main-content ${
          isSidebarOpen ? "sidebar-open" : "sidebar-closed"
        }`}
      >
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="content">
          <StatsCards />

          <div className="projects-customers-container">
            <RecentProjects />
            <NewCustomer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
