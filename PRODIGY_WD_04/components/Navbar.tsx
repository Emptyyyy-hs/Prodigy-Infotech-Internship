
import React from 'react';

interface NavbarProps {
  onToggleTheme: () => void;
  isDark: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleTheme, isDark }) => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Final Year', href: '#final-year' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 100; // Offset for the fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
      <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 px-6 py-3 rounded-full flex justify-between items-center shadow-xl">
        <a 
          href="#home" 
          onClick={(e) => handleScroll(e, '#home')}
          className="font-bold text-lg tracking-tight uppercase group"
        >
          HITESH<span className="text-accent group-hover:animate-ping inline-block">.</span>
        </a>
        
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={(e) => handleScroll(e, item.href)}
              className="text-[10px] font-black uppercase tracking-widest text-neutral-500 dark:text-neutral-400 hover:text-accent dark:hover:text-accent transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
        
        <div className="flex items-center space-x-3">
          <button 
            onClick={onToggleTheme}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>
          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, '#contact')}
            className="bg-accent text-white text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-orange-600 shadow-md shadow-accent/20 transition-all"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
