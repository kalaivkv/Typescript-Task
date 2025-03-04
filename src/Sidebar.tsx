import React, { useState } from "react";
import { IconButton, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Cancel Icon
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AssignmentIcon from "@mui/icons-material/Assignment";
import "./styles.css";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

// Sidebar menu items
const menuItems = [
  { name: "Dashboard", icon: <DashboardIcon /> },
  { name: "Customers", icon: <PeopleIcon /> },
  { name: "Projects", icon: <WorkIcon /> },
  { name: "Orders", icon: <ShoppingCartIcon /> },
  { name: "Inventory", icon: <InventoryIcon /> },
  { name: "Accounts", icon: <AccountCircleIcon /> },
  { name: "Tasks", icon: <AssignmentIcon /> },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
      {/* Close Button (Visible only in Mobile View) */}
      <IconButton className="close-btn" onClick={toggleSidebar}>
        <CloseIcon />
      </IconButton>

      <h2 className="sidebar-title">Accusoft</h2>

      <List>
        {menuItems.map(({ name, icon }) => (
          <ListItem
            key={name}
            button
            className={activeItem === name ? "active" : ""}
            onClick={() => handleItemClick(name)}
          >
            <ListItemIcon className="sidebar-icon">{icon}</ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
