
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "./contexts/ThemeContext";
import { WalletProvider } from "./contexts/WalletContext";
import { AuthProvider } from "./contexts/AuthContext";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import LearnPage from "./pages/LearnPage";
import AboutUsPage from "./pages/AboutUsPage";
import InvestorLoginForm from "./components/auth/InvestorLoginForm";
import ProjectOwnerLoginForm from "./components/auth/ProjectOwnerLoginForm";
import ProjectOwnerDashboardPage from "./pages/ProjectOwnerDashboardPage";
import TokenizedInvestmentsPage from "./pages/TokenizedInvestmentsPage";

// Import placeholder pages for new routes
import PerformancePage from "./pages/PerformancePage";
import InvestmentsPage from "./pages/InvestmentsPage";
import ImpactPage from "./pages/ImpactPage";
import SettingsPage from "./pages/SettingsPage";

// Project owner pages
import ProjectOwnerProjectsPage from "./pages/ProjectOwnerProjectsPage";
import ProjectOwnerAnalyticsPage from "./pages/ProjectOwnerAnalyticsPage";
import ProjectOwnerPerformancePage from "./pages/ProjectOwnerPerformancePage";
import ProjectOwnerInvestorsPage from "./pages/ProjectOwnerInvestorsPage";
import ProjectOwnerSettingsPage from "./pages/ProjectOwnerSettingsPage";

// Create a new QueryClient instance
const queryClient = new QueryClient();

// Define the App component as a function component
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider>
          <WalletProvider>
            <AuthProvider>
              <TooltipProvider>
                <Helmet titleTemplate="%s | GreenNova" defaultTitle="GreenNova - Invest in Renewable Energy">
                  <meta name="description" content="GreenNova - Democratizing investments in renewable energy for a sustainable future." />
                </Helmet>
                <Toaster />
                <Sonner />
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/login/investor" element={<InvestorLoginForm />} />
                  <Route path="/login/project-owner" element={<ProjectOwnerLoginForm />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/learn" element={<LearnPage />} />
                  <Route path="/about" element={<AboutUsPage />} />
                  
                  {/* Previously protected routes, now public */}
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/performance" element={<PerformancePage />} />
                  <Route path="/investments" element={<InvestmentsPage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/projects/:id" element={<ProjectDetailPage />} />
                  <Route path="/projects/tokenized" element={<TokenizedInvestmentsPage />} />
                  <Route path="/impact" element={<ImpactPage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                  
                  {/* Project Owner Routes (now public) */}
                  <Route path="/project-owner/dashboard" element={<ProjectOwnerDashboardPage />} />
                  <Route path="/project-owner/projects" element={<ProjectOwnerProjectsPage />} />
                  <Route path="/project-owner/analytics" element={<ProjectOwnerAnalyticsPage />} />
                  <Route path="/project-owner/performance" element={<ProjectOwnerPerformancePage />} />
                  <Route path="/project-owner/investors" element={<ProjectOwnerInvestorsPage />} />
                  <Route path="/project-owner/settings" element={<ProjectOwnerSettingsPage />} />
                  
                  {/* Redirect '/index' to root */}
                  <Route path="/index" element={<Navigate to="/" replace />} />
                  
                  {/* 404 Route */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </TooltipProvider>
            </AuthProvider>
          </WalletProvider>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
