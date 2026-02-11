import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="bg-gray-200 min-h-screen p-8">
      {/* TOP CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* All Tickets */}
        <div className="bg-white rounded-2xl shadow-sm p-6 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">All Tickets</h2>
          </div>
          <div className="bg-blue-400 text-black text-3xl font-bold px-6 py-4 rounded-xl">
            1034
          </div>
        </div>

        {/* Pending Tickets */}
        <div className="bg-white rounded-2xl shadow-sm p-6 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">Pending Tickets</h2>
          </div>
          <div className="bg-yellow-400 text-black text-3xl font-bold px-6 py-4 rounded-xl">
            1034
          </div>
        </div>

        {/* Completed Tickets */}
        <div className="bg-white rounded-2xl shadow-sm p-6 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">Completed Tickets</h2>
          </div>
          <div className="bg-green-500 text-black text-3xl font-bold px-6 py-4 rounded-xl">
            1034
          </div>
        </div>
      </div>

      {/* PENDING REQUESTS TABLE */}
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-2xl font-bold mb-6">Pending Requests</h2>

        <div className="bg-gray-100 rounded-xl p-6 max-h-[400px] overflow-y-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-sm font-bold">
                <th className="pb-4">TICKET NO.</th>
                <th className="pb-4">TYPE OF ASSISTANCE</th>
                <th className="pb-4">DATE REQUESTED</th>
                <th className="pb-4">TIME REQUESTED</th>
              </tr>
            </thead>

            <tbody className="text-sm">
              {[
                {
                  id: "#1000",
                  type: "Network connection",
                  date: "2-20-2026",
                  time: "10:30 am",
                },
                {
                  id: "#1001",
                  type: "Computer repair",
                  date: "2-19-2026",
                  time: "8:20 am",
                },
                {
                  id: "#1002",
                  type: "Laptop repair",
                  date: "2-21-2026",
                  time: "3:40 pm",
                },
                {
                  id: "#1003",
                  type: "Printer/Scanner issue",
                  date: "2-22-2026",
                  time: "1:00 pm",
                },
                {
                  id: "#1004",
                  type: "Equipment request",
                  date: "2-11-2026",
                  time: "11:12 am",
                },
                {
                  id: "#1005",
                  type: "Internet connectivity issue",
                  date: "2-15-2026",
                  time: "9:34 am",
                },
              ].map((ticket, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-300 hover:bg-gray-200 transition"
                >
                  <td className="py-4">{ticket.id}</td>
                  <td>{ticket.type}</td>
                  <td>{ticket.date}</td>
                  <td>{ticket.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
