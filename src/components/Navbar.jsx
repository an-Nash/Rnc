import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Menu, X, Phone } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-[98%] left-[1%] top-2 bg-white/70 dark:bg-gray-950/70 backdrop-blur-[20px] z-30 shadow-sm rounded-full">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Building2 className="h-8 w-8 text-orange-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900 dark:text-white">
                RNC
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center space-x-8">
            <Link
              to="/services"
              className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 flex items-center"
            >
              Services
            </Link>
            <Link
              to="/projects"
              className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 flex items-center"
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 flex items-center"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 flex items-center"
            >
              Contact
            </Link>
            <ThemeToggle />
            <a
              href="tel:+1234567890"
              className="flex items-center justify-center bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700"
            >
              <Phone className="h-4 w-4 mr-2" />
              (123) 456-7890
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-950">
            <Link
              to="/services"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
            >
              Services
            </Link>
            <Link
              to="/projects"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
            >
              Contact
            </Link>
            <a
              href="tel:+1234567890"
              className="flex items-center px-3 py-2 text-orange-600 dark:text-orange-400"
            >
              <Phone className="h-4 w-4 mr-2" />
              (123) 456-7890
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
