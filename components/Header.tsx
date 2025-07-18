
'use client';

import Link from 'next/link';
import { useState } from 'react';
import LoginModal from './LoginModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginMode, setLoginMode] = useState<'login' | 'signup'>('login');

  const handleLoginClick = () => {
    setLoginMode('login');
    setShowLoginModal(true);
  };

  const handleSignUpClick = () => {
    setLoginMode('signup');
    setShowLoginModal(true);
  };

  return (
    <>
      <header className="bg-gradient-to-r from-purple-600 to-purple-800 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="https://static.readdy.ai/image/43a8ce7f52ff60720ced51fff5b69561/e6fdd48114de379c39f2b15b337db2c7.jfif"
                alt="T'emi"
                className="h-10 brightness-0 invert"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="hover:text-purple-200 transition-colors cursor-pointer">Home</Link>
              <Link href="#how-it-works" className="hover:text-purple-200 transition-colors cursor-pointer">How It Works</Link>
              <Link href="#love-stories" className="hover:text-purple-200 transition-colors cursor-pointer">Love Stories</Link>
              <Link href="#pricing" className="hover:text-purple-200 transition-colors cursor-pointer">Pricing</Link>
              <Link href="#faq" className="hover:text-purple-200 transition-colors cursor-pointer">FAQ</Link>
              <Link href="#contact" className="hover:text-purple-200 transition-colors cursor-pointer">Contact Us</Link>
            </nav>

            {/* Search and Auth */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-white/20 rounded-full px-4 py-2">
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="bg-transparent placeholder-white/70 text-white outline-none text-sm"
                />
                <i className="ri-search-line ml-2 cursor-pointer"></i>
              </div>
              <button 
                onClick={handleLoginClick}
                className="text-white hover:text-purple-200 transition-colors cursor-pointer whitespace-nowrap"
              >
                Log In
              </button>
              <button 
                onClick={handleSignUpClick}
                className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-purple-50 transition-colors cursor-pointer whitespace-nowrap"
              >
                Sign Up
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="ri-menu-line text-2xl cursor-pointer"></i>
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <nav className="flex flex-col space-y-2">
                <Link href="/" className="hover:text-purple-200 transition-colors cursor-pointer">Home</Link>
                <Link href="#how-it-works" className="hover:text-purple-200 transition-colors cursor-pointer">How It Works</Link>
                <Link href="#love-stories" className="hover:text-purple-200 transition-colors cursor-pointer">Love Stories</Link>
                <Link href="#pricing" className="hover:text-purple-200 transition-colors cursor-pointer">Pricing</Link>
                <Link href="#faq" className="hover:text-purple-200 transition-colors cursor-pointer">FAQ</Link>
                <Link href="#contact" className="hover:text-purple-200 transition-colors cursor-pointer">Contact Us</Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      <LoginModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        initialMode={loginMode}
      />
    </>
  );
}
