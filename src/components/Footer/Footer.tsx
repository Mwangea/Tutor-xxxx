
import { BookOpen } from 'lucide-react';
import { footerLinks } from './footerData';

export default function Footer() {
  return (
    <footer className="bg-[#1F4788] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6" />
              <span className="text-xl font-bold">Tutor Christabel</span>
            </div>
            <p className="text-sm opacity-80">
              Empowering students with comprehensive tutoring in technology, healthcare, and sciences.
            </p>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/20 pt-8 mt-8 text-center text-sm opacity-80">
          <p>© {new Date().getFullYear()} Tutor Christabel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}