import React, { useContext, useEffect } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { MyContext } from "../../../Contexts/Main_Context";

const data = [
    { name: "Jan", users: 400, sales: 2400, revenue: 2400 },
    { name: "Feb", users: 300, sales: 2210, revenue: 2500 },
    { name: "Mar", users: 500, sales: 2290, revenue: 2600 },
    { name: "Apr", users: 700, sales: 2000, revenue: 2700 },
    { name: "May", users: 600, sales: 2181, revenue: 2800 },
    { name: "Jun", users: 800, sales: 2500, revenue: 2900 },
    { name: "July", users: 200, sales: 2400, revenue: 2400 },
    { name: "Aug", users: 700, sales: 2210, revenue: 2500 },
    { name: "Sept", users: 100, sales: 2290, revenue: 2600 },
    { name: "Oct", users: 800, sales: 2000, revenue: 2700 },
    { name: "Nov", users: 300, sales: 2181, revenue: 2800 },
    { name: "Dec", users: 800, sales: 2500, revenue: 2900 },
  ];

const transactions = [
  { id: 1, user: "John Doe", amount: "$120", status: "Completed" },
  { id: 2, user: "Jane Smith", amount: "$80", status: "Pending" },
  { id: 3, user: "Mike Johnson", amount: "$200", status: "Failed" },
];

const systemMetrics = {
  cpu: "35%",
  memory: "68%",
  disk: "45%",
};

const Charts = () => {

  const {message, getMessage} = useContext(MyContext);

  useEffect(()=>{
    getMessage()
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5  min-h-screen">
      {/* User Stats */}
      <div className="col-span-1 bg-white shadow-md p-6 rounded-xl flex flex-col items-center">
        <h2 className="text-xl font-semibold">Total Users</h2>
        <p className="text-4xl font-bold">5,432</p>
      </div>
      <div className="col-span-1 bg-white shadow-md p-6 rounded-xl flex flex-col items-center">
        <h2 className="text-xl font-semibold">Active Users</h2>
        <p className="text-4xl font-bold">3,210</p>
      </div>
      <div className="col-span-1 bg-white shadow-md p-6 rounded-xl flex flex-col items-center">
        <h2 className="text-xl font-semibold">System Health</h2>
        <p>CPU: {systemMetrics.cpu}</p>
        <p>Memory: {systemMetrics.memory}</p>
        <p>Disk: {systemMetrics.disk}</p>
      </div>

      {/* Charts Section */}
      <div className="col-span-2 bg-white shadow-md p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-2">Sales Bar Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="col-span-1 bg-white shadow-md p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-2">User Growth</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="users" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Transactions */}
      <div className="col-span-3 bg-white shadow-md p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Recent Messages</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-3 text-left">User</th>
              <th className="border border-gray-300 p-3 text-left">Email</th>
              <th className="border border-gray-300 p-3 text-left">Mobile</th>
              <th className="border border-gray-300 p-3 text-left">Message</th>
            </tr>
          </thead>
          <tbody>
            {message.map((tx) => (
              <tr key={tx._id} className="text-left">
                <td className="border border-gray-300 p-3">{tx.name}</td>
                <td className="border border-gray-300 p-3">{tx.email}</td>
                <td className="border border-gray-300 p-3">{tx.mobile}</td>
                <td className="border border-gray-300 p-3">{tx.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Charts;
