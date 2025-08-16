import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Wheat, Heart, Users, BarChart3 } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Wheat },
    { path: '/donor', label: 'Food Donor', icon: Heart },
    { path: '/ngo', label: 'NGO', icon: Users },
    { path: '/farmer', label: 'Farmer', icon: BarChart3 },
  ];

  return (
    <header className="bg-white shadow-lg border-b-4 border-green-500">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-green-600 to-orange-500 p-2 rounded-lg">
              <Wheat className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-green-800">Annadata-Setu</h1>
              <p className="text-sm text-orange-600">अन्नदाता सेतु</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={`flex items-center space-x-2 transition-all duration-200 ${
                      isActive 
                        ? 'bg-green-600 hover:bg-green-700 text-white' 
                        : 'text-green-700 hover:text-green-800 hover:bg-green-50'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;