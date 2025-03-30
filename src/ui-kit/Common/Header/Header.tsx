import React, { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import './Header.css';

export interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className="header-content">
        <Logo />
        <div className="header-children">{children}</div>
      </div>
    </header>
  );
};

export default Header;
