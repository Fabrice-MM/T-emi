
'use client';

import { useState } from 'react';

const stories = [
  {
    id: 1,
    names: "Marie-Line & Daniel",
    location: "Douala, Cameroon",
    story: "We Met In A Prayer Partner Match. What Started As Weekly Devotionals Turned Into Daily Calls, Laughter, And Long Conversations About Our Dreams. Six Months Later, We Had Engaged... And Union Days Here In Douala! #BlessedByLove",
    image: "https://readdy.ai/api/search-image?query=Young%20African%20couple%20in%20elegant%20attire%20holding%20hands%20and%20smiling%2C%20romantic%20outdoor%20setting%20in%20Cameroon%2C%20natural%20lighting%2C%20beautiful%20landscape%20background%2C%20genuine%20happiness%20and%20connection%2C%20modern%20African%20style%20clothing&width=400&height=500&seq=story-marie-daniel&orientation=portrait"
  },
  {
    id: 2,
    names: "Grace & Michael",
    location: "Lagos, Nigeria",
    story: "From virtual Bible study to walking down the aisle! We connected through T'emi's Kingdom+ plan and discovered we both served at our local churches. Our first date was at a Christian concert, and we knew we were meant to be. God's timing is perfect!",
    image: "https://readdy.ai/api/search-image?query=Nigerian%20Christian%20couple%20at%20church%20wedding%20ceremony%2C%20traditional%20Nigerian%20wedding%20elements%2C%20joyful%20celebration%2C%20beautiful%20African%20attire%2C%20authentic%20love%20story%2C%20church%20setting%20with%20decorations&width=400&height=500&seq=story-002&orientation=portrait"
  },
  {
    id: 3,
    names: "Sarah & Emmanuel",
    location: "Accra, Ghana",
    story: "We both joined T'emi seeking a God-centered relationship. After months of meaningful conversations and shared devotionals, we realized we were each other's answered prayer. Our wedding was a beautiful blend of Ghanaian traditions and Christian values.",
    image: "https://readdy.ai/api/search-image?query=Ghanaian%20Christian%20wedding%20couple%20in%20beautiful%20traditional%20kente%20cloth%20and%20white%20wedding%20dress%2C%20outdoor%20ceremony%20setting%2C%20African%20wedding%20traditions%2C%20joyful%20celebration%2C%20authentic%20love%20and%20faith&width=400&height=500&seq=story-003&orientation=portrait"
  },
  {
    id: 4,
    names: "Ruth & David",
    location: "Nairobi, Kenya",
    story: "T'emi brought us together during a virtual singles event. We discovered our shared passion for youth ministry and community service. After a year of courtship filled with prayer and fellowship, we said 'I do' surrounded by our church family.",
    image: "https://readdy.ai/api/search-image?query=Kenyan%20Christian%20couple%20at%20outdoor%20wedding%20ceremony%2C%20beautiful%20African%20landscape%2C%20traditional%20and%20modern%20wedding%20elements%2C%20community%20celebration%2C%20authentic%20African%20love%20story%2C%20church%20community%20gathering&width=400&height=500&seq=story-004&orientation=portrait"
  },
  {
    id: 5,
    names: "Joy & Samuel",
    location: "Johannesburg, South Africa",
    story: "We connected through Christian counseling sessions on T'emi and found healing together. Our relationship was built on faith, transparency, and mutual support. Today, we minister to other couples and credit T'emi for bringing us together in God's perfect timing.",
    image: "https://readdy.ai/api/search-image?query=South%20African%20Christian%20couple%20at%20elegant%20wedding%20ceremony%2C%20diverse%20African%20celebration%2C%20beautiful%20church%20setting%2C%20traditional%20and%20contemporary%20elements%2C%20genuine%20love%20and%20faith%2C%20multicultural%20African%20wedding&width=400&height=500&seq=story-005&orientation=portrait"
  }
];

export default function LoveStoriesSection() {
  const [currentStory, setCurrentStory] = useState(0);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section id="love-stories" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Love Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From First Messages To Walking Down The Aisle, Our Community Has Witnessed Countless Couples Shaped By Divine Timing And Intentional Connection
          </p>
        </div>

        {/* Story showcase */}
        <div className="flex flex-wrap items-center justify-center mb-8 space-x-4">
          {stories.map((story, index) => (
            <div
              key={story.id}
              className={`w-16 h-16 rounded-full overflow-hidden border-4 cursor-pointer transition-all duration-300 ${
                index === currentStory ? 'border-purple-600 scale-110' : 'border-gray-300 hover:border-purple-400'
              }`}
              onClick={() => setCurrentStory(index)}
            >
              <img 
                src={story.image}
                alt={story.names}
                className="w-full h-full object-cover object-top"
              />
            </div>
          ))}
        </div>

        {/* Current story */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 relative">
          <button 
            onClick={prevStory}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors cursor-pointer"
          >
            <i className="ri-arrow-left-line text-xl"></i>
          </button>
          
          <button 
            onClick={nextStory}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors cursor-pointer"
          >
            <i className="ri-arrow-right-line text-xl"></i>
          </button>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-purple-600 mb-2">
              {stories[currentStory].names}
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              {stories[currentStory].location}
            </p>
            <div className="max-w-2xl mx-auto mb-8">
              <img 
                src={stories[currentStory].image}
                alt={stories[currentStory].names}
                className="w-64 h-80 object-cover object-top rounded-lg mx-auto shadow-lg"
              />
            </div>
            <blockquote className="text-lg text-gray-700 italic leading-relaxed max-w-3xl mx-auto">
              "{stories[currentStory].story}"
            </blockquote>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">1,200+</div>
            <div className="text-gray-600">Couples Married</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">50,000+</div>
            <div className="text-gray-600">Active Members</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">25</div>
            <div className="text-gray-600">Countries</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}