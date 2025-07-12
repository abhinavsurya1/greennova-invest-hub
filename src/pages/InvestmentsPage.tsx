
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Sidebar from "@/components/dashboard/Sidebar";
import { Bell, HelpCircle, Search, User, ExternalLink, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import PaymentModal from "@/components/payment/PaymentModal";
import { toast } from "@/components/ui/use-toast";

interface Investment {
  id: string;
  projectName: string;
  investmentDate: string;
  amount: number;
  type: 'Solar' | 'Wind' | 'Hydro' | 'Biomass';
  status: 'active' | 'pending' | 'completed';
  returns: number;
  progress: number;
  expectedCompletion?: string;
}

const InvestmentsPage = () => {
  const [investments, setInvestments] = useState<Investment[]>([
    {
      id: '1',
      projectName: 'Solar Farm in Rajasthan',
      investmentDate: '2023-05-15',
      amount: 50000,
      type: 'Solar',
      status: 'active',
      returns: 6250,
      progress: 75
    },
    {
      id: '2',
      projectName: 'Wind Energy Project in Gujarat',
      investmentDate: '2023-08-23',
      amount: 75000,
      type: 'Wind',
      status: 'pending',
      returns: 0,
      progress: 25,
      expectedCompletion: '2024-09-30'
    },
    {
      id: '3',
      projectName: 'Hydroelectric Plant in Himachal',
      investmentDate: '2023-02-10',
      amount: 100000,
      type: 'Hydro',
      status: 'completed',
      returns: 14500,
      progress: 100
    }
  ]);
  
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  useEffect(() => {
    const fetchInvestments = async () => {
      setIsLoading(true);
      try {
        // In a real application, this would fetch data from Supabase
        // For demonstration, we're using static data
        // const { data, error } = await supabase
        //   .from('investments')
        //   .select('*')
        //   .order('investmentDate', { ascending: false });
        
        // if (error) throw error;
        // if (data) setInvestments(data);
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        console.error('Error fetching investments:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInvestments();
  }, []);

  const filteredInvestments = activeTab === 'all' 
    ? investments 
    : investments.filter(inv => inv.status === activeTab);

  const totalInvested = investments.reduce((sum, inv) => sum + inv.amount, 0);
  const totalReturns = investments.reduce((sum, inv) => sum + inv.returns, 0);
  const averageReturn = totalInvested > 0 ? (totalReturns / totalInvested) * 100 : 0;
  
  const handleAddFunds = (projectId: string) => {
    setSelectedProjectId(projectId);
    setIsPaymentModalOpen(true);
  };
  
  const handlePaymentSuccess = () => {
    const projectName = investments.find(inv => inv.id === selectedProjectId)?.projectName || "project";
    toast({
      title: "Additional Investment Successful!",
      description: `You have successfully added more funds to ${projectName}. You will receive further details via email.`,
    });
  };
  
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Solar': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Wind': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Hydro': return 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300';
      case 'Biomass': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'completed': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <>
      <Helmet>
        <title>Investments | GreenNova</title>
        <meta
          name="description"
          content="Manage your renewable energy investment portfolio."
        />
      </Helmet>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-4 px-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Investments
              </h1>
              <div className="flex items-center space-x-4">
                <div className="hidden md:flex items-center relative">
                  <Search className="h-4 w-4 absolute left-3 text-gray-400" />
                  <Input 
                    placeholder="Search investments..." 
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Invested</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">₹{totalInvested.toLocaleString()}</div>
                    <p className="text-xs text-gray-500">Across {investments.length} projects</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Returns</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-greennova-green">₹{totalReturns.toLocaleString()}</div>
                    <p className="text-xs text-gray-500">+{averageReturn.toFixed(2)}% average return</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Investments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{investments.filter(inv => inv.status === 'active').length}</div>
                    <p className="text-xs text-gray-500">Out of {investments.length} total investments</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Your Investment Portfolio</h2>
                  
                  <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="mb-6">
                      <TabsTrigger value="all">All Investments</TabsTrigger>
                      <TabsTrigger value="active">Active</TabsTrigger>
                      <TabsTrigger value="pending">Pending</TabsTrigger>
                      <TabsTrigger value="completed">Completed</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value={activeTab}>
                      {isLoading ? (
                        <div className="text-center py-12">
                          <p>Loading investments...</p>
                        </div>
                      ) : filteredInvestments.length === 0 ? (
                        <div className="text-center py-12">
                          <p className="text-gray-500">No {activeTab !== 'all' ? activeTab : ''} investments found.</p>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          {filteredInvestments.map((investment) => (
                            <div key={investment.id} className="border rounded-lg overflow-hidden">
                              <div className="p-4 bg-gray-50 dark:bg-gray-800 flex flex-wrap md:flex-nowrap justify-between items-center">
                                <div>
                                  <h3 className="text-lg font-medium">{investment.projectName}</h3>
                                  <div className="flex flex-wrap gap-2 mt-2">
                                    <Badge className={getTypeColor(investment.type)} variant="outline">
                                      {investment.type}
                                    </Badge>
                                    <Badge className={getStatusColor(investment.status)} variant="outline">
                                      {investment.status.charAt(0).toUpperCase() + investment.status.slice(1)}
                                    </Badge>
                                  </div>
                                </div>
                                <div className="mt-4 md:mt-0">
                                  <p className="text-sm text-gray-500">Invested on {new Date(investment.investmentDate).toLocaleDateString()}</p>
                                  <p className="text-lg font-bold">₹{investment.amount.toLocaleString()}</p>
                                </div>
                              </div>
                              
                              <div className="p-4">
                                <div className="flex justify-between text-sm mb-1">
                                  <span className="text-gray-600">Progress</span>
                                  <span className="font-medium">{investment.progress}%</span>
                                </div>
                                <Progress value={investment.progress} className="h-2" />
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                                  <div>
                                    <p className="text-sm text-gray-500">Returns Generated</p>
                                    <p className="font-semibold">₹{investment.returns.toLocaleString()}</p>
                                  </div>
                                  {investment.expectedCompletion && (
                                    <div>
                                      <p className="text-sm text-gray-500">Expected Completion</p>
                                      <p className="font-semibold">{new Date(investment.expectedCompletion).toLocaleDateString()}</p>
                                    </div>
                                  )}
                                </div>
                                
                                <div className="flex justify-end mt-4 space-x-2">
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    className="text-greennova-purple border-greennova-purple"
                                  >
                                    View Details <ExternalLink className="ml-1 h-4 w-4" />
                                  </Button>
                                  
                                  {investment.status !== 'completed' && (
                                    <Button 
                                      size="sm"
                                      className="bg-greennova-green"
                                      onClick={() => handleAddFunds(investment.id)}
                                    >
                                      Add Funds <ArrowUpRight className="ml-1 h-4 w-4" />
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      <PaymentModal
        open={isPaymentModalOpen}
        onOpenChange={setIsPaymentModalOpen}
        amount={2500000} // ₹25,000 in paise
        projectTitle="Additional Investment"
        onPaymentSuccess={handlePaymentSuccess}
      />
    </>
  );
};

export default InvestmentsPage;
