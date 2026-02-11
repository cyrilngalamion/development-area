import React, { useState } from "react";
import Dashboard from "../pages/admin/Dashboard";
import MyTickets from "../pages/clientPage/MyTickets";
import NewTicket from "../pages/clientPage/NewTicket";
import Settings from "../pages/clientPage/Settings";

const MainLayout: React.FC = () => {
  const [activeLink, setActiveLink] = useState("Dashboard");

  const renderContent = () => {
    switch (activeLink) {
      case "Dashboard":
        return <Dashboard />;
      case "My Tickets":
        return <MyTickets />;
      case "New Ticket":
        return <NewTicket />;
      case "Settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen">

      <div className="flex-1 overflow-y-auto">
        <Dashboard />
      </div>

    </div>
  );
};

export default MainLayout;
