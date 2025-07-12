
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Leaf, Home, Cloud, Droplets } from "lucide-react";

const impactItems = [
  {
    icon: <Leaf className="h-6 w-6 text-green-500" />,
    title: "CO₂ Emissions Avoided",
    value: "2.3 tons",
    target: "5 tons",
    progress: 46,
    description: "Equivalent to planting 38 trees",
  },
  {
    icon: <Home className="h-6 w-6 text-blue-500" />,
    title: "Homes Powered",
    value: "12",
    target: "25",
    progress: 48,
    description: "Clean energy for 12 households",
  },
  {
    icon: <Cloud className="h-6 w-6 text-gray-500" />,
    title: "Air Quality Improvement",
    value: "1.8%",
    target: "5%",
    progress: 36,
    description: "Local air quality improvement factor",
  },
  {
    icon: <Droplets className="h-6 w-6 text-blue-400" />,
    title: "Water Saved",
    value: "15,000 gal",
    target: "30,000 gal",
    progress: 50,
    description: "Compared to traditional energy production",
  },
];

const ImpactMetrics = () => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Your Environmental Impact</CardTitle>
        <CardDescription>
          Tracking the positive effects of your investments
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {impactItems.map((item, index) => (
            <div key={index} className="flex">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 mr-4">
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <p className="font-medium">{item.title}</p>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.value} / {item.target}
                  </span>
                </div>
                <Progress value={item.progress} className="h-2 mb-2" />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ImpactMetrics;
