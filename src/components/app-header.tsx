'use client';
import { useState, useEffect } from "react";

export default function AppHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { href: '#home', label: 'الرئيسية' },
    { href: '#leadership', label: 'الهيكل التنظيمي' },
    { href: '#organization-types', label: 'أنواع التنظيم' },
    { href: '#skills', label: 'مهارات المنظم' },
    { href: '#services', label: 'الخدمات الرقمية' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'home';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 120) {
          currentSection = section.getAttribute('id') || 'home';
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="header" className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">لجنة التنظيم والمراسم</div>
        <div className="hidden md:flex space-x-8 space-x-reverse items-center">
          {navItems.map(item => (
            <a key={item.href} href={item.href} className={`nav-link ${activeSection === item.href.substring(1) ? 'active-nav' : ''}`}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button id="menu-btn" onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
      <div id="mobile-menu" className={`${menuOpen ? 'block' : 'hidden'} md:hidden`}>
        {navItems.map(item => (
          <a 
            key={item.href} 
            href={item.href} 
            className="block py-2 px-4 text-sm hover:bg-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
