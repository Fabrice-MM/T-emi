
'use client';

import { useState } from 'react';

interface User {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  image: string;
  interests: string[];
  churchBackground: string;
}

export default function UserDiscovery() {
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [likedUsers, setLikedUsers] = useState<string[]>([]);
  const [passedUsers, setPassedUsers] = useState<string[]>([]);

  const users: User[] = [
    {
      id: '1',
      name: 'Grace Adebayo',
      age: 26,
      location: 'Lagos, Nigeria',
      bio: 'Passionate about serving God and helping others. Love reading, cooking, and volunteering at my local church.',
      image: 'https://readdy.ai/api/search-image?query=beautiful%20young%20african%20woman%20smiling%20warmly%2C%20elegant%20dress%2C%20natural%20lighting%2C%20confident%20and%20kind%20expression%2C%20church%20background%20softly%20blurred&width=600&height=800&seq=user-grace-1&orientation=portrait',
      interests: ['Reading', 'Cooking', 'Volunteering', 'Music'],
      churchBackground: 'Baptist Church, 5 years'
    },
    {
      id: '2',
      name: 'Emmanuel Okafor',
      age: 29,
      location: 'Abuja, Nigeria',
      bio: 'Software engineer who loves God first. Enjoy hiking, playing guitar, and leading youth ministry.',
      image: 'https://readdy.ai/api/search-image?query=handsome%20young%20african%20man%20smiling%20confidently%2C%20casual%20shirt%2C%20natural%20outdoor%20lighting%2C%20warm%20and%20friendly%20expression%2C%20professional%20headshot&width=600&height=800&seq=user-emmanuel-1&orientation=portrait',
      interests: ['Technology', 'Music', 'Hiking', 'Youth Ministry'],
      churchBackground: 'Pentecostal Church, 8 years'
    },
    {
      id: '3',
      name: 'Blessing Okoro',
      age: 24,
      location: 'Port Harcourt, Nigeria',
      bio: 'Teacher and worship leader. Love children, singing, and spreading God\'s love through education.',
      image: 'https://readdy.ai/api/search-image?query=young%20african%20woman%20teacher%20smiling%20warmly%2C%20professional%20attire%2C%20bright%20classroom%20background%2C%20caring%20and%20nurturing%20expression%2C%20natural%20lighting&width=600&height=800&seq=user-blessing-1&orientation=portrait',
      interests: ['Teaching', 'Singing', 'Children Ministry', 'Education'],
      churchBackground: 'Methodist Church, 6 years'
    },
    {
      id: '4',
      name: 'David Mensah',
      age: 31,
      location: 'Accra, Ghana',
      bio: 'Business owner and church elder. Passionate about entrepreneurship and mentoring young Christians.',
      image: 'https://readdy.ai/api/search-image?query=mature%20african%20businessman%20smiling%20warmly%2C%20suit%20and%20tie%2C%20office%20background%2C%20confident%20and%20wise%20expression%2C%20professional%20lighting&width=600&height=800&seq=user-david-1&orientation=portrait',
      interests: ['Business', 'Mentoring', 'Reading', 'Leadership'],
      churchBackground: 'Presbyterian Church, 12 years'
    }
  ];

  const currentUser = users[currentUserIndex];
  const nextUser = users[currentUserIndex + 1];

  const handleLike = () => {
    if (currentUser) {
      setLikedUsers([...likedUsers, currentUser.id]);
      moveToNext();
    }
  };

  const handlePass = () => {
    if (currentUser) {
      setPassedUsers([...passedUsers, currentUser.id]);
      moveToNext();
    }
  };

  const moveToNext = () => {
    if (currentUserIndex < users.length - 1) {
      setCurrentUserIndex(currentUserIndex + 1);
    } else {
      setCurrentUserIndex(0);
    }
  };

  if (!currentUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <i className="ri-heart-line text-6xl text-gray-300 mb-4"></i>
          <h2 className="text-2xl font-bold text-gray-600 mb-2">No more profiles</h2>
          <p className="text-gray-500">Check back later for more potential matches!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Discover</h1>
        <p className="text-gray-600">Find your God-given partner</p>
      </div>

      <div className="flex-1 max-w-2xl mx-auto w-full">
        {/* Current User Only */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
          <div className="relative h-full">
            <img 
              src={currentUser.image}
              alt={currentUser.name}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
              <div className="mb-4">
                <h2 className="text-white text-2xl font-bold mb-1">
                  {currentUser.name}, {currentUser.age}
                </h2>
                <p className="text-white/90 flex items-center mb-3">
                  <i className="ri-map-pin-line mr-1"></i>
                  {currentUser.location}
                </p>
                <p className="text-white/90 text-sm mb-3">{currentUser.bio}</p>
                
                <div className="mb-3">
                  <p className="text-white/90 flex items-center text-sm">
                    <i className="ri-church-line mr-2 text-purple-300"></i>
                    {currentUser.churchBackground}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {currentUser.interests.map((interest, index) => (
                    <span 
                      key={index}
                      className="bg-white/20 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center space-x-6">
                <button 
                  onClick={handlePass}
                  className="w-16 h-16 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors cursor-pointer"
                >
                  <i className="ri-close-line text-2xl text-white"></i>
                </button>
                <button 
                  onClick={handleLike}
                  className="w-16 h-16 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                >
                  <i className="ri-heart-fill text-2xl text-white"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 text-center text-gray-500">
        <p>Profile {currentUserIndex + 1} of {users.length}</p>
        <p className="text-sm mt-1">
          {likedUsers.length} likes • {passedUsers.length} passes
        </p>
      </div>
    </div>
  );
}
