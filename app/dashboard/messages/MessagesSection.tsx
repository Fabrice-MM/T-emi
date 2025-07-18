
'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  isRead: boolean;
}

interface Conversation {
  id: string;
  name: string;
  image: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  isOnline: boolean;
  messages: Message[];
}

export default function MessagesSection() {
  const searchParams = useSearchParams();
  const conversationId = searchParams.get('conversation');

  const [selectedConversation, setSelectedConversation] = useState<string | null>(conversationId || '1');
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    if (conversationId) {
      setSelectedConversation(conversationId);
    }
  }, [conversationId]);

  const conversations: Conversation[] = [
    {
      id: '1',
      name: 'Grace Adebayo',
      image: 'https://readdy.ai/api/search-image?query=beautiful%20young%20african%20woman%20smiling%20warmly%2C%20elegant%20dress%2C%20natural%20lighting%2C%20confident%20and%20kind%20expression%2C%20church%20background%20softly%20blurred&width=50&height=50&seq=chat-grace-1&orientation=squarish',
      lastMessage: 'Thank you for the lovely message! 😊',
      timestamp: '2 min ago',
      unreadCount: 2,
      isOnline: true,
      messages: [
        {
          id: '1',
          senderId: 'me',
          text: 'Hi Grace! I really enjoyed reading your profile. Your passion for serving God is inspiring.',
          timestamp: '10:30 AM',
          isRead: true
        },
        {
          id: '2',
          senderId: 'grace',
          text: 'Thank you so much! That means a lot to me. I saw that you\'re involved in youth ministry too.',
          timestamp: '10:35 AM',
          isRead: true
        },
        {
          id: '3',
          senderId: 'grace',
          text: 'Thank you for the lovely message! 😊',
          timestamp: '10:45 AM',
          isRead: false
        }
      ]
    },
    {
      id: '2',
      name: 'Blessing Okoro',
      image: 'https://readdy.ai/api/search-image?query=young%20african%20woman%20teacher%20smiling%20warmly%2C%20professional%20attire%2C%20bright%20classroom%20background%2C%20caring%20and%20nurturing%20expression%2C%20natural%20lighting&width=50&height=50&seq=chat-blessing-1&orientation=squarish',
      lastMessage: 'I\'d love to hear more about your ministry work',
      timestamp: '1 hour ago',
      unreadCount: 0,
      isOnline: false,
      messages: [
        {
          id: '1',
          senderId: 'blessing',
          text: 'Hello! I noticed we both love working with children. That\'s wonderful!',
          timestamp: 'Yesterday 8:20 PM',
          isRead: true
        },
        {
          id: '2',
          senderId: 'me',
          text: 'Yes! Children have such pure hearts. It\'s amazing to be part of their spiritual journey.',
          timestamp: 'Yesterday 8:25 PM',
          isRead: true
        },
        {
          id: '3',
          senderId: 'blessing',
          text: 'I\'d love to hear more about your ministry work',
          timestamp: '1 hour ago',
          isRead: true
        }
      ]
    },
    {
      id: '3',
      name: 'Faith Okonkwo',
      image: 'https://readdy.ai/api/search-image?query=young%20african%20woman%20in%20sunday%20dress%20smiling%20joyfully%2C%20church%20interior%20background%2C%20warm%20natural%20lighting%2C%20peaceful%20and%20happy%20expression&width=50&height=50&seq=chat-faith-1&orientation=squarish',
      lastMessage: 'Good morning! How was your Sunday service?',
      timestamp: '3 days ago',
      unreadCount: 1,
      isOnline: true,
      messages: [
        {
          id: '1',
          senderId: 'faith',
          text: 'Good morning! How was your Sunday service?',
          timestamp: '3 days ago',
          isRead: false
        }
      ]
    }
  ];

  const currentConversation = conversations.find(c => c.id === selectedConversation);

  const sendMessage = () => {
    if (newMessage.trim() && currentConversation) {
      // Here you would typically send the message to your backend
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Messages</h1>
        <p className="text-gray-600">Connect with your matches</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex-1 flex">
        {/* Conversations List */}
        <div className="w-1/3 border-r border-gray-200 overflow-y-auto">
          <div className="p-4 border-b border-gray-100">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              />
              <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {conversations.map((conversation) => (
              <div 
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation.id)}
                className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                  selectedConversation === conversation.id ? 'bg-purple-50' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img 
                      src={conversation.image}
                      alt={conversation.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {conversation.isOnline && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-800 truncate">
                        {conversation.name}
                      </h3>
                      <span className="text-xs text-gray-500">
                        {conversation.timestamp}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600 truncate">
                        {conversation.lastMessage}
                      </p>
                      {conversation.unreadCount > 0 && (
                        <span className="bg-purple-600 text-white text-xs rounded-full px-2 py-1 min-w-5 h-5 flex items-center justify-center">
                          {conversation.unreadCount}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {currentConversation ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img 
                        src={currentConversation.image}
                        alt={currentConversation.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      {currentConversation.isOnline && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {currentConversation.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {currentConversation.isOnline ? 'Online now' : 'Last seen recently'}
                      </p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
                    <i className="ri-more-2-line text-gray-600"></i>
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {currentConversation.messages.map((message) => (
                  <div 
                    key={message.id}
                    className={`flex ${message.senderId === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.senderId === 'me' 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.senderId === 'me' ? 'text-purple-200' : 'text-gray-500'
                      }`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                    <i className="ri-attachment-line text-xl"></i>
                  </button>
                  <div className="flex-1 relative">
                    <input 
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type a message..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                    />
                  </div>
                  <button 
                    onClick={sendMessage}
                    disabled={!newMessage.trim()}
                    className="p-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-300 text-white rounded-full transition-colors cursor-pointer"
                  >
                    <i className="ri-send-plane-line"></i>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <i className="ri-chat-3-line text-6xl text-gray-300 mb-4"></i>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Select a conversation</h3>
                <p className="text-gray-500">Choose a conversation to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
