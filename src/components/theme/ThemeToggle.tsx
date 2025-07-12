
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from '@/contexts/ThemeContext';
import { Switch } from "@/components/ui/switch";

interface ThemeToggleProps {
  variant?: 'icon' | 'switch' | 'button';
  showLabel?: boolean;
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  variant = 'icon', 
  showLabel = false,
  className = '' 
}) => {
  const { isDarkMode, toggleTheme } = useTheme();

  if (variant === 'switch') {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        <Sun className="h-4 w-4 text-gray-500" />
        <Switch 
          checked={isDarkMode} 
          onCheckedChange={toggleTheme} 
        />
        <Moon className="h-4 w-4 text-gray-500" />
        {showLabel && (
          <span className="text-sm font-medium">
            {isDarkMode ? 'Dark Mode' : 'Light Mode'}
          </span>
        )}
      </div>
    );
  }

  if (variant === 'button') {
    return (
      <Button
        variant="outline"
        size="sm"
        onClick={toggleTheme}
        className={className}
      >
        {isDarkMode ? (
          <>
            <Sun className="h-4 w-4 mr-2" />
            {showLabel && "Light Mode"}
          </>
        ) : (
          <>
            <Moon className="h-4 w-4 mr-2" />
            {showLabel && "Dark Mode"}
          </>
        )}
      </Button>
    );
  }

  // Default icon variant
  return (
    <Button 
      variant="ghost" 
      size="icon"
      onClick={toggleTheme}
      className={className}
      title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
};

export default ThemeToggle;
