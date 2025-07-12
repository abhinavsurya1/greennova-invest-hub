
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Building2, Wallet } from "lucide-react";
import { Helmet } from "react-helmet";
import WalletLoginButton from "@/components/auth/WalletLoginButton";

const LoginPage = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <Helmet>
        <title>Sign In | GreenNova</title>
        <meta 
          name="description" 
          content="Sign in to your GreenNova account to access your sustainable investments." 
        />
      </Helmet>
      <div className="flex justify-center items-center min-h-screen bg-greennova-soft-blue dark:bg-gray-900 px-4 py-12">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Welcome to GreenNova</CardTitle>
            <CardDescription className="text-center">
              Choose how you want to sign in
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Button 
              onClick={() => navigate("/login/investor")}
              className="flex items-center justify-center gap-2 h-20 bg-greennova-purple hover:bg-greennova-secondary-purple"
            >
              <User className="h-6 w-6" />
              <div className="text-left">
                <div className="font-semibold text-lg">Investor Login</div>
                <div className="text-sm opacity-90">For those looking to invest in renewable projects</div>
              </div>
            </Button>
            
            <Button 
              onClick={() => navigate("/login/project-owner")}
              className="flex items-center justify-center gap-2 h-20 bg-greennova-green hover:bg-green-600"
            >
              <Building2 className="h-6 w-6" />
              <div className="text-left">
                <div className="font-semibold text-lg">Project Owner Login</div>
                <div className="text-sm opacity-90">For those managing renewable energy projects</div>
              </div>
            </Button>

            <WalletLoginButton />
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              New to GreenNova? <a href="/register" className="text-greennova-purple font-medium hover:underline">Create an account</a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default LoginPage;
