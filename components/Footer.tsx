
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="https://static.readdy.ai/image/43a8ce7f52ff60720ced51fff5b69561/e6fdd48114de379c39f2b15b337db2c7.jfif"
                alt="T'emi"
                className="h-10 brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              The first dating platform dedicated to African Christians looking for sincere, deep and loving relationships. Join thousands who have found their God-given partner.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-xl"></i>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors cursor-pointer">
                <i className="ri-instagram-fill text-xl"></i>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors cursor-pointer">
                <i className="ri-youtube-fill text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#how-it-works" className="text-gray-300 hover:text-white transition-colors cursor-pointer">How It Works</Link></li>
              <li><Link href="#love-stories" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Success Stories</Link></li>
              <li><Link href="#pricing" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Pricing</Link></li>
              <li><Link href="#faq" className="text-gray-300 hover:text-white transition-colors cursor-pointer">FAQ</Link></li>
              <li><Link href="/safety" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Safety Tips</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Help Center</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Contact Us</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Terms of Service</Link></li>
              <li><Link href="/community" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Community Guidelines</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <i className="ri-mail-line text-purple-400 text-xl"></i>
              <div>
                <div className="font-semibold">Email Us</div>
                <div className="text-gray-300">support@temi.love</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <i className="ri-phone-line text-purple-400 text-xl"></i>
              <div>
                <div className="font-semibold">Call Us</div>
                <div className="text-gray-300">+234 800 TEMI LOVE</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <i className="ri-time-line text-purple-400 text-xl"></i>
              <div>
                <div className="font-semibold">Support Hours</div>
                <div className="text-gray-300">24/7 Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 mb-4 md:mb-0">
            2024 T'emi. All rights reserved. Made with for the Christian community.
          </div>
          <div className="flex items-center space-x-4 text-gray-300">
            <span>"We Love Because He First Loved Us" - 1 John 4:19</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
