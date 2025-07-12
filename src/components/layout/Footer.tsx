
import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-greennova-dark-purple border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-greennova-purple">Green</span>
              <span className="text-2xl font-bold text-greennova-green">Nova</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Democratizing investments in renewable energy for a sustainable future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-greennova-purple dark:text-gray-400 dark:hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-greennova-purple dark:text-gray-400 dark:hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-greennova-purple dark:text-gray-400 dark:hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-greennova-purple dark:text-gray-400 dark:hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-greennova-purple dark:text-gray-300 dark:hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 hover:text-greennova-purple dark:text-gray-300 dark:hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-600 hover:text-greennova-purple dark:text-gray-300 dark:hover:text-white">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/learn" className="text-gray-600 hover:text-greennova-purple dark:text-gray-300 dark:hover:text-white">
                  Learn
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-greennova-purple dark:text-gray-300 dark:hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-greennova-purple dark:text-gray-300 dark:hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-600 hover:text-greennova-purple dark:text-gray-300 dark:hover:text-white">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-600 hover:text-greennova-purple dark:text-gray-300 dark:hover:text-white">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-greennova-purple mr-3 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300">
                  42 Eco Boulevard,<br />Green Park, New Delhi 110016
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-greennova-purple mr-3" />
                <span className="text-gray-600 dark:text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-greennova-purple mr-3" />
                <span className="text-gray-600 dark:text-gray-300">info@greennova.in</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} GreenNova. All rights reserved.
          </p>
          <div className="flex items-center">
            <Leaf className="h-5 w-5 text-greennova-green mr-2" />
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              Powering a sustainable future together
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
