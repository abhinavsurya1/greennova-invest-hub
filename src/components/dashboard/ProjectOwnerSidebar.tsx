
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  FileText,
  PieChart,
  Settings,
  Users,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Bell,
  LogOut,
  PlusCircle,
  LineChart,
  Building2,
} from "lucide-react";

interface ProjectOwnerSidebarProps {
  openProjectModal?: () => void;
  onNewProjectClick?: () => void;
}

const ProjectOwnerSidebar = ({ openProjectModal, onNewProjectClick }: ProjectOwnerSidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Handle click on new project button
  const handleNewProjectClick = () => {
    if (openProjectModal) {
      openProjectModal();
    } else if (onNewProjectClick) {
      onNewProjectClick();
    }
  };

  const navItems = [
    {
      icon: <LayoutDashboard className="h-5 w-5" />,
      label: "Dashboard",
      path: "/project-owner/dashboard",
    },
    {
      icon: <FileText className="h-5 w-5" />,
      label: "Projects",
      path: "/project-owner/projects",
    },
    {
      icon: <PieChart className="h-5 w-5" />,
      label: "Analytics",
      path: "/project-owner/analytics",
    },
    {
      icon: <LineChart className="h-5 w-5" />,
      label: "Performance",
      path: "/project-owner/performance",
    },
    {
      icon: <Users className="h-5 w-5" />,
      label: "Investors",
      path: "/project-owner/investors",
    },
    {
      icon: <Settings className="h-5 w-5" />,
      label: "Settings",
      path: "/project-owner/settings",
    },
  ];

  return (
    <div
      className={`bg-white dark:bg-gray-900 h-screen border-r border-gray-200 dark:border-gray-800 flex flex-col transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
        {!collapsed && (
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-greennova-purple">Green</span>
            <span className="text-xl font-bold text-greennova-green">Nova</span>
          </Link>
        )}
        {collapsed && (
          <div className="mx-auto">
            <span className="text-xl font-bold text-greennova-green">G</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-500"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </Button>
      </div>

      <div className="flex flex-col flex-1 py-4 overflow-y-auto">
        <div className="px-3 mb-6">
          {!collapsed && (
            <div className="flex items-center p-2 bg-greennova-soft-blue dark:bg-gray-800 rounded-lg">
              <Building2 className="h-8 w-8 mr-3 text-greennova-green" />
              <div>
                <p className="font-medium text-sm">EcoSolar Ltd</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Project Owner
                </p>
              </div>
            </div>
          )}
          {collapsed && (
            <div className="flex justify-center p-2">
              <Building2 className="h-8 w-8 text-greennova-green" />
            </div>
          )}
        </div>

        <div className="space-y-1 px-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center rounded-lg px-3 py-2 transition-colors ${
                isActive(item.path)
                  ? "bg-greennova-green text-white"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <div className={`${collapsed ? "mx-auto" : "mr-3"}`}>
                {item.icon}
              </div>
              {!collapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </div>

        <div className="mt-6 px-3">
          {!collapsed && (
            <Button
              variant="default"
              className="w-full bg-greennova-green hover:bg-greennova-purple flex items-center gap-2"
              onClick={handleNewProjectClick}
            >
              <PlusCircle className="h-4 w-4" />
              <span>New Project</span>
            </Button>
          )}
          {collapsed && (
            <div className="flex justify-center">
              <Button
                className="bg-greennova-green hover:bg-greennova-purple"
                size="icon"
                onClick={handleNewProjectClick}
              >
                <PlusCircle className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>

        <div className="mt-auto px-3 space-y-1">
          <Button
            variant="ghost"
            className={`flex items-center w-full rounded-lg px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 justify-${
              collapsed ? "center" : "start"
            }`}
          >
            <div className={`${collapsed ? "mx-auto" : "mr-3"}`}>
              <Bell className="h-5 w-5" />
            </div>
            {!collapsed && <span>Notifications</span>}
          </Button>

          <Button
            variant="ghost"
            className={`flex items-center w-full rounded-lg px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 justify-${
              collapsed ? "center" : "start"
            }`}
          >
            <div className={`${collapsed ? "mx-auto" : "mr-3"}`}>
              <HelpCircle className="h-5 w-5" />
            </div>
            {!collapsed && <span>Help Center</span>}
          </Button>

          <Link
            to="/login"
            className={`flex items-center w-full rounded-lg px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 justify-${
              collapsed ? "center" : "start"
            }`}
          >
            <div className={`${collapsed ? "mx-auto" : "mr-3"}`}>
              <LogOut className="h-5 w-5" />
            </div>
            {!collapsed && <span>Sign Out</span>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectOwnerSidebar;
