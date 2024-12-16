import React from 'react';
import { BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-[#1F4788]" />
            <span className="text-xl font-bold text-[#1F4788]">Tutor xxxx</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-[#4A9B8C] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button className="bg-[#4A9B8C] text-white px-6 py-2 rounded-full hover:bg-[#3d8274] transition-colors">
              Request Help
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#1F4788]" />
            ) : (
              <Menu className="h-6 w-6 text-[#1F4788]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-600 hover:text-[#4A9B8C]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full bg-[#4A9B8C] text-white px-6 py-2 rounded-full hover:bg-[#3d8274] mt-4">
              Request Help
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}