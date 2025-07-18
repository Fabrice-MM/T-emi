
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Match {
  id: string;
  name: string;
  age: number;
  location: string;
  image: string;
  matchedAt: string;
  lastMessage?: string;
  isOnline: boolean;
}

export default function MatchesSection() {
  const [matches] = useState<Match[]>([
    {
      id: '1',
      name: 'Grace Adebayo',
      age: 26,
      location: 'Lagos, Nigeria',
      image: 'https://readdy.ai/api/search-image?query=beautiful%20young%20african%20woman%20smiling%20warmly%2C%20elegant%20dress%2C%20natural%20lighting%2C%20confident%20and%20kind%20expression%2C%20church%20background%20softly%20blurred&width=80&height=80&seq=match-grace-1&orientation=squarish',
      matchedAt: '2 hours ago',
      lastMessage: 'Thank you for the lovely message! 😊',
      isOnline: true
    },
    {
      id: '2',
      name: 'Blessing Okoro',
      age: 24,
      location: 'Port Harcourt, Nigeria',
      image: 'https://readdy.ai/api/search-image?query=young%20african%20woman%20teacher%20smiling%20warmly%2C%20professional%20attire%2C%20bright%20classroom%20background%2C%20caring%20and%20nurturing%20expression%2C%20natural%20lighting&width=80&height=80&seq=match-blessing-1&orientation=squarish',
      matchedAt: '1 day ago',
      lastMessage: 'I\'d love to hear more about your ministry work',
      isOnline: false
    },
    {
      id: '3',
      name: 'Faith Okonkwo',
      age: 28,
      location: 'Enugu, Nigeria',
      image: 'https://readdy.ai/api/search-image?query=young%20african%20woman%20in%20sunday%20dress%20smiling%20joyfully%2C%20church%20interior%20background%2C%20warm%20natural%20lighting%2C%20peaceful%20and%20happy%20expression&width=80&height=80&seq=match-faith-1&orientation=squarish',
      matchedAt: '3 days ago',
      isOnline: true
    },
    {
      id: '4',
      name: 'Joy Adamu',
      age: 27,
      location: 'Kaduna, Nigeria',
      image: 'https://readdy.ai/api/search-image?query=beautiful%20african%20woman%20with%20gentle%20smile%2C%20colorful%20traditional%20attire%2C%20outdoor%20garden%20setting%2C%20soft%20natural%20lighting%2C%20serene%20expression&width=80&height=80&seq=match-joy-1&orientation=squarish',
      matchedAt: '5 days ago',
      lastMessage: 'Looking forward to our conversation!',
      isOnline: false
    },
    {
      id: '5',
      name: 'Mercy Olumide',
      age: 25,
      location: 'Ibadan, Nigeria',
      image: 'https://readdy.ai/api/search-image?query=young%20african%20woman%20nurse%20smiling%20kindly%2C%20medical%20scrubs%2C%20hospital%20background%2C%20caring%20and%20professional%20expression%2C%20natural%20lighting&width=80&height=80&seq=match-mercy-1&orientation=squarish',
      matchedAt: '1 week ago',
      isOnline: true
    },
    {
      id: '6',
      name: 'Hope Asante',
      age: 29,
      location: 'Kumasi, Ghana',
      image: 'https://readdy.ai/api/search-image?query=mature%20african%20woman%20in%20business%20attire%20smiling%20confidently%2C%20office%20background%2C%20professional%20and%20warm%20expression%2C%20natural%20lighting&width=80&height=80&seq=match-hope-1&orientation=squarish',
      matchedAt: '1 week ago',
      lastMessage: 'God bless you abundantly! 🙏',
      isOnline: false
    }
  ]);

  const router = useRouter();

  const handleSendMessage = (matchId: string) => {
    router.push(`/dashboard/messages?conversation=${matchId}`);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Matches</h1>
        <p className="text-gray-600">{matches.length} people liked you back</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.map((match) => (
          <div key={match.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
            <div className="relative">
              <img 
                src={match.image}
                alt={match.name}
                className="w-full h-48 object-cover object-top"
              />
              {match.isOnline && (
                <div className="absolute top-3 right-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
              )}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-transparent backdrop-blur-sm rounded-lg p-3">
                  <h3 className="font-bold text-white drop-shadow-md">
                    {match.name}, {match.age}
                  </h3>
                  <p className="text-sm text-white/90 flex items-center drop-shadow-md">
                    <i className="ri-map-pin-line mr-1"></i>
                    {match.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-500">Matched {match.matchedAt}</span>
                <div className="flex items-center space-x-1">
                  <i className="ri-heart-fill text-purple-600"></i>
                  <i className="ri-heart-fill text-pink-500"></i>
                </div>
              </div>

              {match.lastMessage && (
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  "{match.lastMessage}"
                </p>
              )}

              <div className="flex space-x-2">
                <button 
                  onClick={() => handleSendMessage(match.id)}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap"
                >
                  Send Message
                </button>
                <button className="p-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                  <i className="ri-more-2-line text-gray-600"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {matches.length === 0 && (
        <div className="text-center py-12">
          <i className="ri-heart-line text-6xl text-gray-300 mb-4"></i>
          <h2 className="text-2xl font-bold text-gray-600 mb-2">No matches yet</h2>
          <p className="text-gray-500 mb-6">Start liking profiles to find your matches!</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            Start Discovering
          </button>
        </div>
      )}
    </div>
  );
}
