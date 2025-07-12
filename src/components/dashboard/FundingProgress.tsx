
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const FundingProgress = () => {
  const projects = [
    {
      name: "Solar Farm Bengaluru",
      raised: 3545000,
      goal: 12000000,
      percentage: 30,
    },
    {
      name: "Wind Energy Punjab",
      raised: 17528000,
      goal: 25000000,
      percentage: 70,
    },
    {
      name: "Hydropower Himachal",
      raised: 4520000,
      goal: 30000000,
      percentage: 15,
    },
    {
      name: "Solar Rooftop Delhi",
      raised: 4560000,
      goal: 15000000,
      percentage: 30,
    },
  ];

  // Format currency in Indian Rupees
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Funding Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{project.name}</span>
                <span className="text-muted-foreground">
                  {project.percentage}%
                </span>
              </div>
              <Progress value={project.percentage} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Raised: {formatCurrency(project.raised)}</span>
                <span>Goal: {formatCurrency(project.goal)}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FundingProgress;
