
import { Helmet } from "react-helmet";
import ProjectOwnerSidebar from "@/components/dashboard/ProjectOwnerSidebar";
import { User, Mail, DollarSign } from "lucide-react";

const demoInvestors = [
  {
    name: "Arjun Mehta",
    email: "arjun.m@example.com",
    investment: "₹500,000",
    verified: true,
  },
  {
    name: "Priya Singh",
    email: "priya.singh@example.com",
    investment: "₹750,000",
    verified: true,
  },
  {
    name: "Sahil Verma",
    email: "sahil@mymail.com",
    investment: "₹100,000",
    verified: false,
  },
];

export default function ProjectOwnerInvestorsPage() {
  return (
    <>
      <Helmet>
        <title>Investors | GreenNova</title>
        <meta name="description" content="View and manage your project's investors." />
      </Helmet>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <ProjectOwnerSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-4 px-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Investors
              </h1>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto p-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-bold mb-6">Investor List</h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <table className="w-full text-left">
                  <thead>
                    <tr>
                      <th className="p-2 font-semibold">Name</th>
                      <th className="p-2 font-semibold">Email</th>
                      <th className="p-2 font-semibold">Investment</th>
                      <th className="p-2 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {demoInvestors.map((inv, i) => (
                      <tr key={i} className="border-t">
                        <td className="p-2 flex items-center gap-2">
                          <User className="h-4 w-4 text-greennova-purple" />
                          {inv.name}
                        </td>
                        <td className="p-2 flex items-center gap-2">
                          <Mail className="h-4 w-4 text-gray-400" />
                          {inv.email}
                        </td>
                        <td className="p-2 flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-greennova-green" />
                          {inv.investment}
                        </td>
                        <td className="p-2">
                          <span className={`px-2 py-1 rounded text-xs font-semibold
                            ${inv.verified ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                            {inv.verified ? "Verified" : "Pending"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
