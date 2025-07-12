
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Sidebar from "@/components/dashboard/Sidebar";
import { Bell, HelpCircle, Search, User, BarChart2, Leaf, Droplet, ThermometerSun } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";

interface ImpactMetrics {
  co2Avoided: number;
  treesEquivalent: number;
  waterSaved: number;
  homesImpacted: number;
}

const ImpactPage = () => {
  const [metrics, setMetrics] = useState<ImpactMetrics>({
    co2Avoided: 245,
    treesEquivalent: 1250,
    waterSaved: 500000,
    homesImpacted: 328
  });
  
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchImpactData = async () => {
      setIsLoading(true);
      try {
        // In a real application, this would fetch data from Supabase
        // For now, we'll use our static data
        // const { data, error } = await supabase
        //   .from('impact_metrics')
        //   .select('*')
        //   .single();
        
        // if (error) throw error;
        // if (data) setMetrics(data);
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        console.error('Error fetching impact metrics:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImpactData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Impact | GreenNova</title>
        <meta
          name="description"
          content="See the environmental impact of your renewable energy investments."
        />
      </Helmet>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-4 px-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Environmental Impact
              </h1>
              <div className="flex items-center space-x-4">
                <div className="hidden md:flex items-center relative">
                  <Search className="h-4 w-4 absolute left-3 text-gray-400" />
                  <Input 
                    placeholder="Search..." 
                    className="pl-9 w-64"
                  />
                </div>
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <HelpCircle className="h-5 w-5" />
                </Button>
                <Avatar>
                  <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" />
                  <AvatarFallback><User className="h-5 w-5" /></AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto p-6">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Your Environmental Impact</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  See how your investments are contributing to a more sustainable future.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">CO2 Emissions Avoided</CardTitle>
                      <ThermometerSun className="h-4 w-4 text-greennova-green" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{metrics.co2Avoided} tons</div>
                      <p className="text-xs text-gray-500">+12% from last month</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Trees Equivalent</CardTitle>
                      <Leaf className="h-4 w-4 text-greennova-green" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{metrics.treesEquivalent}</div>
                      <p className="text-xs text-gray-500">Trees planted equivalent</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Water Saved</CardTitle>
                      <Droplet className="h-4 w-4 text-greennova-green" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{(metrics.waterSaved / 1000)} kL</div>
                      <p className="text-xs text-gray-500">Compared to fossil fuels</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Homes Impacted</CardTitle>
                      <BarChart2 className="h-4 w-4 text-greennova-green" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{metrics.homesImpacted}</div>
                      <p className="text-xs text-gray-500">Homes powered by your investments</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h2 className="text-xl font-bold mb-4">Impact Over Time</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Track your contribution to sustainability goals.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-sm font-medium">Carbon Reduction Goal</h3>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                    <p className="text-xs text-gray-500 mt-2">245 tons of 500 tons annual goal</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-sm font-medium">Water Conservation</h3>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                    <p className="text-xs text-gray-500 mt-2">500 kL of 750 kL annual goal</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-sm font-medium">Renewable Energy Generation</h3>
                      <span className="text-sm font-medium">72%</span>
                    </div>
                    <Progress value={72} className="h-2" />
                    <p className="text-xs text-gray-500 mt-2">360 MWh of 500 MWh annual goal</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ImpactPage;
