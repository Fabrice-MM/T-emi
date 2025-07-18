'use client';

import { useState } from 'react';

interface ProfileData {
  name: string;
  age: string;
  location: string;
  bio: string;
  occupation: string;
  education: string;
  churchBackground: string;
  denomination: string;
  interests: string[];
  relationshipGoals: string;
  height: string;
  children: string;
  smoking: string;
  drinking: string;
}

export default function ProfileSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    name: 'Sarah Johnson',
    age: '28',
    location: 'Lagos, Nigeria',
    bio: 'God-fearing woman seeking a life partner who shares my faith and values. I love serving in church, reading, and spending time with family.',
    occupation: 'Marketing Manager',
    education: 'Bachelor\'s in Business Administration',
    churchBackground: 'Anglican Church',
    denomination: 'Anglican',
    interests: ['Reading', 'Cooking', 'Volunteering', 'Music', 'Travel', 'Photography'],
    relationshipGoals: 'Marriage',
    height: '5\'6"',
    children: 'Want children',
    smoking: 'Never',
    drinking: 'Occasionally'
  });

  const [newInterest, setNewInterest] = useState('');

  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setProfileData({ ...profileData, [field]: value });
  };

  const addInterest = () => {
    if (newInterest.trim() && !profileData.interests.includes(newInterest.trim())) {
      setProfileData({
        ...profileData,
        interests: [...profileData.interests, newInterest.trim()]
      });
      setNewInterest('');
    }
  };

  const removeInterest = (interest: string) => {
    setProfileData({
      ...profileData,
      interests: profileData.interests.filter(i => i !== interest)
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Profile</h1>
          <p className="text-gray-600">Manage your profile information</p>
        </div>
        <button
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap"
        >
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Picture Section */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Profile Photo</h2>
            <div className="text-center">
              <div className="relative inline-block">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20young%20african%20woman%20smiling%20warmly%2C%20clean%20white%20background%2C%20high%20quality%20portrait%20photography%2C%20natural%20lighting%2C%20confident%20expression&width=200&height=200&seq=user-profile-main&orientation=squarish"
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover object-top mx-auto"
                />
                {isEditing && (
                  <button className="absolute bottom-0 right-0 bg-purple-600 hover:bg-purple-700 text-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
                    <i className="ri-edit-line text-sm"></i>
                  </button>
                )}
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                Upload a clear photo of yourself
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-3">Additional Photos</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <img
                    src="https://readdy.ai/api/search-image?query=young%20african%20woman%20in%20casual%20outfit%20smiling%20outdoors%2C%20natural%20lighting%2C%20happy%20expression%2C%20lifestyle%20photography&width=100&height=100&seq=user-photo-2&orientation=squarish"
                    alt="Photo 2"
                    className="w-full h-full object-cover object-top rounded-lg"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <img
                    src="https://readdy.ai/api/search-image?query=young%20african%20woman%20in%20church%20setting%2C%20elegant%20dress%2C%20warm%20lighting%2C%20peaceful%20expression%2C%20spiritual%20atmosphere&width=100&height=100&seq=user-photo-3&orientation=squarish"
                    alt="Photo 3"
                    className="w-full h-full object-cover object-top rounded-lg"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 cursor-pointer hover:border-purple-400">
                  <i className="ri-add-line text-2xl text-gray-400"></i>
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 cursor-pointer hover:border-purple-400">
                  <i className="ri-add-line text-2xl text-gray-400"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Information */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                ) : (
                  <p className="text-gray-800 py-2">{profileData.name}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Age</label>
                {isEditing ? (
                  <input
                    type="number"
                    value={profileData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                ) : (
                  <p className="text-gray-800 py-2">{profileData.age}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Location</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                ) : (
                  <p className="text-gray-800 py-2">{profileData.location}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Occupation</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.occupation}
                    onChange={(e) => handleInputChange('occupation', e.target.value)}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                ) : (
                  <p className="text-gray-800 py-2">{profileData.occupation}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">Education</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.education}
                    onChange={(e) => handleInputChange('education', e.target.value)}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                ) : (
                  <p className="text-gray-800 py-2">{profileData.education}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">About Me</label>
                {isEditing ? (
                  <textarea
                    value={profileData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    maxLength={500}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 h-24"
                    placeholder="Tell others about yourself..."
                  />
                ) : (
                  <p className="text-gray-800 py-2">{profileData.bio}</p>
                )}
              </div>
            </div>
          </div>

          {/* Faith & Values */}
          <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
            <h2 className="text-xl font-semibold mb-6">Faith & Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Church Background</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.churchBackground}
                    onChange={(e) => handleInputChange('churchBackground', e.target.value)}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                ) : (
                  <p className="text-gray-800 py-2">{profileData.churchBackground}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Denomination</label>
                {isEditing ? (
                  <select
                    value={profileData.denomination}
                    onChange={(e) => handleInputChange('denomination', e.target.value)}
                    className="w-full border rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none bg-white"
                  >
                    <option value="Anglican">Anglican</option>
                    <option value="Baptist">Baptist</option>
                    <option value="Catholic">Catholic</option>
                    <option value="Methodist">Methodist</option>
                    <option value="Pentecostal">Pentecostal</option>
                    <option value="Presbyterian">Presbyterian</option>
                    <option value="Other">Other</option>
                  </select>
                ) : (
                  <p className="text-gray-800 py-2">{profileData.denomination}</p>
                )}
              </div>
            </div>
          </div>

          {/* Lifestyle */}
          <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
            <h2 className="text-xl font-semibold mb-6">Lifestyle</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Height</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.height}
                    onChange={(e) => handleInputChange('height', e.target.value)}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                ) : (
                  <p className="text-gray-800 py-2">{profileData.height}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Children</label>
                {isEditing ? (
                  <select
                    value={profileData.children}
                    onChange={(e) => handleInputChange('children', e.target.value)}
                    className="w-full border rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none bg-white"
                  >
                    <option value="Want children">Want children</option>
                    <option value="Have children">Have children</option>
                    <option value="Don't want children">Don't want children</option>
                    <option value="Open to children">Open to children</option>
                  </select>
                ) : (
                  <p className="text-gray-800 py-2">{profileData.children}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Smoking</label>
                {isEditing ? (
                  <select
                    value={profileData.smoking}
                    onChange={(e) => handleInputChange('smoking', e.target.value)}
                    className="w-full border rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none bg-white"
                  >
                    <option value="Never">Never</option>
                    <option value="Occasionally">Occasionally</option>
                    <option value="Regularly">Regularly</option>
                  </select>
                ) : (
                  <p className="text-gray-800 py-2">{profileData.smoking}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Drinking</label>
                {isEditing ? (
                  <select
                    value={profileData.drinking}
                    onChange={(e) => handleInputChange('drinking', e.target.value)}
                    className="w-full border rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none bg-white"
                  >
                    <option value="Never">Never</option>
                    <option value="Occasionally">Occasionally</option>
                    <option value="Regularly">Regularly</option>
                  </select>
                ) : (
                  <p className="text-gray-800 py-2">{profileData.drinking}</p>
                )}
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
            <h2 className="text-xl font-semibold mb-6">Interests & Hobbies</h2>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {profileData.interests.map((interest, index) => (
                <span
                  key={index}
                  className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm flex items-center"
                >
                  {interest}
                  {isEditing && (
                    <button
                      onClick={() => removeInterest(interest)}
                      className="ml-2 text-purple-400 hover:text-purple-600 cursor-pointer"
                    >
                      <i className="ri-close-line"></i>
                    </button>
                  )}
                </span>
              ))}
            </div>

            {isEditing && (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newInterest}
                  onChange={(e) => setNewInterest(e.target.value)}
                  placeholder="Add new interest"
                  className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  onKeyPress={(e) => e.key === 'Enter' && addInterest()}
                />
                <button
                  onClick={addInterest}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  Add
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}