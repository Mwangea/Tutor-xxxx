import  { useState } from 'react';
import { BookOpen, Menu, X, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSocialDropdownOpen, setIsSocialDropdownOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      name: 'Facebook',
      href: 'https://www.facebook.com/tutor-christabel', 
      color: '#3b5998' 
    },
    { 
      icon: Twitter, 
      name: 'Twitter',
      href: 'https://www.twitter.com/tutor-christabel', 
      color: '#1DA1F2' 
    },
    { 
      icon: Instagram, 
      name: 'Instagram',
      href: 'https://www.instagram.com/tutor-christabel', 
      color: '#C13584' 
    },
    { 
      icon: Linkedin, 
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/tutor-christabel', 
      color: '#0077B5' 
    }
  ];

  const handleSocialClick = (href) => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-[#1F4788]" />
            <span className="text-xl font-bold text-[#1F4788]">Tutor Christabel</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-[#4A9B8C] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="relative">
              <button 
                className="bg-[#4A9B8C] text-white px-6 py-2 rounded-full hover:bg-[#3d8274] transition-colors"
                onClick={() => setIsSocialDropdownOpen(!isSocialDropdownOpen)}
              >
                Request Help
              </button>
              {isSocialDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg p-4 w-48 flex flex-col space-y-2">
                  {socialLinks.map((social, index) => (
                    <button
                      key={index}
                      className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md transition-colors"
                      onClick={() => handleSocialClick(social.href)}
                    >
                      <social.icon 
                        className="h-6 w-6" 
                        color={social.color} 
                      />
                      <span>{social.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
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
            <div className="relative w-full">
              <button 
                className="w-full bg-[#4A9B8C] text-white px-6 py-2 rounded-full hover:bg-[#3d8274] mt-4"
                onClick={() => setIsSocialDropdownOpen(!isSocialDropdownOpen)}
              >
                Request Help
              </button>
              {isSocialDropdownOpen && (
                <div className="mt-2 bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-2">
                  {socialLinks.map((social, index) => (
                    <button
                      key={index}
                      className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md transition-colors"
                      onClick={() => handleSocialClick(social.href)}
                    >
                      <social.icon 
                        className="h-6 w-6" 
                        color={social.color} 
                      />
                      <span>{social.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}