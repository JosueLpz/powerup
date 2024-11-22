import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Brain } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Progreso', href: '/progress' },
    { name: 'Recursos', href: '/resources' },
  ];

  return (
    <nav className="component-container fixed top-0 left-0 right-0 z-50 bg-background-primary/80 backdrop-blur-lg" data-component="Navbar">
      <div className="container mx-auto px-4">
        <div className="child-container" data-component="Desktop Menu">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 group">
              <Brain className="w-8 h-8 text-accent-primary group-hover:rotate-12 transition-transform" />
              <span className="font-bold text-xl">Power Up</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    location.pathname === item.href
                      ? 'text-accent-primary'
                      : 'text-text-primary hover:text-accent-hover'
                  } transition-colors hover:scale-105 transform`}
                >
                  {item.name}
                </Link>
              ))}
              <button className="bg-accent-primary hover:bg-accent-hover px-4 py-2 rounded-full flex items-center space-x-2 transition-all hover:scale-105 transform">
                <User className="w-4 h-4" />
                <span>Perfil</span>
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="child-container md:hidden py-4" data-component="Mobile Menu">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block py-2 ${
                  location.pathname === item.href
                    ? 'text-accent-primary'
                    : 'text-text-primary hover:text-accent-hover'
                } transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full mt-4 bg-accent-primary hover:bg-accent-hover px-4 py-2 rounded-full flex items-center justify-center space-x-2 transition-colors">
              <User className="w-4 h-4" />
              <span>Perfil</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}