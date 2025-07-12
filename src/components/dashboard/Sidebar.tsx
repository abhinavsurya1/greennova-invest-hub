
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  LineChart,
  Wallet,
  Settings,
  Leaf,
  Search,
  LogOut,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Bell,
} from "lucide-react";
import ThemeToggle from "@/components/theme/ThemeToggle";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className = "" }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    {
      icon: <LayoutDashboard className="h-5 w-5" />,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <LineChart className="h-5 w-5" />,
      label: "Performance",
      path: "/performance",
    },
    {
      icon: <Wallet className="h-5 w-5" />,
      label: "Investments",
      path: "/investments",
    },
    {
      icon: <Search className="h-5 w-5" />,
      label: "Discover",
      path: "/projects",
    },
    {
      icon: <Leaf className="h-5 w-5" />,
      label: "Impact",
      path: "/impact",
    },
    {
      icon: <Settings className="h-5 w-5" />,
      label: "Settings",
      path: "/settings",
    },
  ];

  return (
    <div
      className={`bg-white dark:bg-gray-900 h-screen border-r border-gray-200 dark:border-gray-800 flex flex-col transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      } ${className}`}
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
            <span className="text-xl font-bold text-greennova-purple">G</span>
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
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User"
                className="h-8 w-8 rounded-full mr-3"
              />
              <div>
                <p className="font-medium text-sm">Alex Johnson</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Green Investor
                </p>
              </div>
            </div>
          )}
          {collapsed && (
            <div className="flex justify-center p-2">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User"
                className="h-8 w-8 rounded-full"
              />
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
                  ? "bg-greennova-purple text-white"
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

        <div className="mt-auto px-3 space-y-1">
          {!collapsed && (
            <div className="border-t border-gray-200 dark:border-gray-800 pt-4 mt-4">
              <div className="flex items-center justify-between px-3 py-2 text-sm text-gray-600 dark:text-gray-400">
                <ThemeToggle variant="switch" showLabel={true} />
              </div>
            </div>
          )}

          {collapsed && (
            <div className="border-t border-gray-200 dark:border-gray-800 pt-4 mt-4 flex justify-center">
              <ThemeToggle />
            </div>
          )}

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

export default Sidebar;
