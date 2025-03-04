import React from "react";
import { FaUsers, FaClipboardList, FaShoppingBag, FaWaveSquare } from "react-icons/fa";
import "./StatsCards.css"; 

interface StatItem {
  value: string;
  label: string;
  icon: React.ReactNode;  
  special?: boolean; 
}

const StatsCards: React.FC = () => {
  const stats: StatItem[] = [
    { value: "54", label: "Customers", icon: <FaUsers /> },
    { value: "79", label: "Projects", icon: <FaClipboardList /> },
    { value: "124", label: "Orders", icon: <FaShoppingBag /> },
    { value: "$6k", label: "Income", icon: <FaWaveSquare />, special: true }, 
  ];

  return (
    <div className="stats-container">
      {stats.map((item, index) => (
        <div key={index} className={`stats-card ${item.special ? "highlight" : ""}`}>
          <div className="stats-info">
            <h2>{item.value}</h2>
            <p>{item.label}</p>
          </div>
          <div className="stats-icon">{item.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
