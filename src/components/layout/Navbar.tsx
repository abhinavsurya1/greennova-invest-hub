
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/theme/ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-greennova-dark-purple border-b border-gray-200 dark:border-gray-800 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-greennova-purple">Green</span>
              <span className="text-2xl font-bold text-greennova-green">Nova</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-greennova-purple dark:text-gray-300 dark:hover:text-white">
              Home
            </Link>
            <Link to="/projects" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-greennova-purple dark:text-gray-300 dark:hover:text-white">
              Projects
            </Link>
            <Link to="/learn" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-greennova-purple dark:text-gray-300 dark:hover:text-white">
              Learn
            </Link>
            <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-greennova-purple dark:text-gray-300 dark:hover:text-white">
              About Us
            </Link>
            <Link to="/login" className="ml-4">
              <Button variant="outline" className="text-greennova-purple border-greennova-purple hover:bg-greennova-soft-blue dark:text-white">
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button className="ml-2 bg-greennova-purple hover:bg-greennova-secondary-purple">
                Get Started
              </Button>
            </Link>
            <ThemeToggle />
          </div>
          
          <div className="flex md:hidden">
            <ThemeToggle className="mr-2" />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-greennova-purple hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-greennova-dark-purple shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-greennova-purple hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-greennova-purple hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/learn"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-greennova-purple hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Learn
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-greennova-purple hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center px-5">
                <Link to="/login" className="w-full">
                  <Button variant="outline" className="w-full text-greennova-purple border-greennova-purple dark:text-white">
                    Sign In
                  </Button>
                </Link>
              </div>
              <div className="mt-3 px-5">
                <Link to="/register" className="w-full">
                  <Button className="w-full bg-greennova-purple hover:bg-greennova-secondary-purple">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
