'use client';
import { useState, useEffect } from "react";
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { cn } from "@/lib/utils";

export default function AppHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { href: '#home', label: 'الرئيسية' },
    { href: '#leadership', label: 'القيادات' },
    { href: '#organization-types', label: 'أنواع التنظيم' },
    { href: '#platforms', label: 'المنصات الرقمية' },
    { href: '#skills', label: 'مهارات المُنظِم' },
    { href: '#services', label: 'الخدمات الرقمية' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Header scroll effect
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section highlighting
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
    <header id="header" className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
    )}>
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3">
          <Image 
            src="https://www.dropbox.com/scl/fi/cdpfbk7nlzbn5mb13nmbt/.jpg?rlkey=5gaov2yymvxp4isbw9crxiuza&raw=1"
            alt="شعار لجنة التنظيم والمراسم"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="text-base md:text-lg font-bold text-black">لجنة التنظيم والمراسم</div>
        </a>
        <div className="hidden md:flex space-x-8 space-x-reverse items-center">
          {navItems.map(item => (
            <a key={item.href} href={item.href} className={`nav-link font-semibold text-sm lg:text-base ${activeSection === item.href.substring(1) ? 'active-nav' : ''}`}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button id="menu-btn" onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800 focus:outline-none">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      <div id="mobile-menu" className={cn(
        "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
        menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        isScrolled ? 'bg-white/95' : 'bg-white'
      )}>
        {navItems.map(item => (
          <a 
            key={item.href} 
            href={item.href} 
            className="block py-3 px-4 text-base text-center font-semibold hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
