
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();

  const getActiveTab = () => {
    if (pathname === '/dashboard') return 'discover';
    if (pathname.includes('/matches')) return 'matches';
    if (pathname.includes('/messages')) return 'messages';
    if (pathname.includes('/profile')) return 'profile';
    return 'discover';
  };

  const activeTab = getActiveTab();

  const navigationItems = [
    { id: 'discover', label: 'Discover', icon: 'ri-compass-3', activeIcon: 'ri-compass-3-fill', href: '/dashboard' },
    { id: 'matches', label: 'Matches', icon: 'ri-heart', activeIcon: 'ri-heart-fill', href: '/dashboard/matches' },
    { id: 'messages', label: 'Messages', icon: 'ri-chat-1', activeIcon: 'ri-chat-1-fill', href: '/dashboard/messages' },
    { id: 'profile', label: 'Profile', icon: 'ri-user', activeIcon: 'ri-user-fill', href: '/dashboard/profile' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/dashboard" className="cursor-pointer">
                <img 
                  src="https://static.readdy.ai/image/43a8ce7f52ff60720ced51fff5b69561/e6fdd48114de379c39f2b15b337db2c7.jfif"
                  alt="T'emi"
                  className="h-8"
                />
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <i className="ri-notification-line text-xl"></i>
              </button>
              <div className="flex items-center space-x-2">
                <img 
                  src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20young%20african%20woman%20smiling%20warmly%2C%20clean%20white%20background%2C%20high%20quality%20portrait%20photography%2C%20natural%20lighting%2C%20confident%20expression&width=40&height=40&seq=user-avatar-1&orientation=squarish"
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-gray-700 font-medium">Sarah</span>
                <button className="text-gray-400 hover:text-gray-600">
                  <i className="ri-arrow-down-s-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Side Navigation */}
        <nav className="w-64 bg-white shadow-sm min-h-screen">
          <div className="p-6">
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <Link 
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors cursor-pointer ${
                      activeTab === item.id 
                        ? 'bg-purple-100 text-purple-600' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <i className={`${activeTab === item.id ? item.activeIcon : item.icon} text-xl`}></i>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
