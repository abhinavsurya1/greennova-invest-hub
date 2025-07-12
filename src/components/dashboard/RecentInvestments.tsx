
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Wind, Droplets, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const investments = [
  {
    id: 1,
    project: "Solar Farm California",
    type: "Solar",
    icon: <Sun className="h-4 w-4" />,
    amount: "$2,500",
    date: "Apr 12, 2025",
    status: "Active",
  },
  {
    id: 2,
    project: "Offshore Wind Park",
    type: "Wind",
    icon: <Wind className="h-4 w-4" />,
    amount: "$1,800",
    date: "Mar 28, 2025",
    status: "Active",
  },
  {
    id: 3,
    project: "Hydroelectric Dam",
    type: "Hydro",
    icon: <Droplets className="h-4 w-4" />,
    amount: "$3,200",
    date: "Feb 15, 2025",
    status: "Pending",
  },
];

const RecentInvestments = () => {
  return (
    <Card className="mt-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Investments</CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Project</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Amount</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Status</th>
                <th className="text-right py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Action</th>
              </tr>
            </thead>
            <tbody>
              {investments.map((investment) => (
                <tr key={investment.id} className="border-b">
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <Badge className={`
                        ${investment.type === "Solar" ? "bg-yellow-500" : 
                         investment.type === "Wind" ? "bg-blue-500" : 
                         "bg-cyan-500"} 
                        mr-2 flex items-center
                      `}>
                        {investment.icon}
                      </Badge>
                      <span className="font-medium">{investment.project}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 font-medium">{investment.amount}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{investment.date}</td>
                  <td className="py-3 px-4">
                    <Badge
                      className={`${
                        investment.status === "Active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                      }`}
                      variant="outline"
                    >
                      {investment.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <Link to={`/projects/${investment.id}`}>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentInvestments;
