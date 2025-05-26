import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-accent-100">
      <div className="px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold text-primary-600">Healthcare.</h1>
            
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-4 w-4 text-accent-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="w-64 pl-10 pr-4 py-2 text-sm bg-accent-50 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary-500 
                         transition-shadow duration-200"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4 lg:gap-6">
            <button className="relative p-2 hover:bg-accent-50 rounded-lg transition-colors">
              <Bell className="h-5 w-5 text-accent-500" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-error-500 rounded-full" />
            </button>
            
            <button className="bg-primary-500 hover:bg-primary-600 text-white p-1.5 
                           rounded-lg transition-colors duration-200">
              <Plus className="h-4 w-4" />
            </button>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary-100 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="User avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-medium hidden md:block">Dr. Sarah Chen</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;