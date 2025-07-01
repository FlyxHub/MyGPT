import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Chat', path: '/chat' }
  ];

  return (
    <>
      {/* Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-5 left-5 z-50 p-3 bg-gray-800 bg-opacity-80 backdrop-blur-md border border-gray-600 border-opacity-50 rounded-xl hover:bg-gray-700 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Toggle menu"
      >
        {/* Hamburger Icon */}
        <div className="w-6 h-5 relative">
          <span
            className={`block absolute h-0.5 w-full bg-white rounded-sm transition-all duration-300 ${
              isOpen ? 'top-2 rotate-45' : 'top-0'
            }`}
          />
          <span
            className={`block absolute h-0.5 w-full bg-white rounded-sm transition-all duration-300 ${
              isOpen ? 'opacity-0 -left-16' : 'opacity-100 top-2'
            }`}
          />
          <span
            className={`block absolute h-0.5 w-full bg-white rounded-sm transition-all duration-300 ${
              isOpen ? 'top-2 -rotate-45' : 'top-4'
            }`}
          />
        </div>
      </button>

      {/* Side Navigation */}
      <nav
        className={`fixed top-0 left-0 h-full w-80 bg-gray-900 bg-opacity-95 backdrop-blur-xl border-r border-gray-700 transform transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="pt-20 px-8">
          <ul className="space-y-6">
            {navItems.map((item, index) => (
              <li key={item.name} className="border-b border-gray-700 border-opacity-50 last:border-b-0">
                <a
                  href={item.path}
                  className={`block px-8 py-5 text-white text-lg font-medium hover:bg-blue-500 hover:bg-opacity-20 hover:pl-10 transition-all duration-300 rounded-lg ${
                    item.name === 'Home' ? 'bg-gray-700 bg-opacity-50 border-l-4 border-blue-500' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenu();
                    // For React Router navigation:
                    // navigate(item.path);
                    
                    // For now, simple navigation:
                    window.location.href = item.path;
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-30 ${
          isOpen ? 'opacity-50 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      />
    </>
  );
};

export default Navigation;