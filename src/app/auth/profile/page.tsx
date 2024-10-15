'use client';

import { useState, useEffect } from 'react';
import { getProfile, updateProfile } from '@/lib/auth';
import { User } from '@/lib/auth';

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userData = await getProfile();
        setUser(userData);
        setAddress(userData.address || '');
        setPhone(userData.phone || '');
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const updatedUser = await updateProfile({ address, phone });
      setUser(updatedUser);
      setMessage('Profile updated successfully');
    } catch (error) {
      console.error('Failed to update profile:', error);
      setMessage('Failed to update profile');
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Profile</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex flex-col">
                  <label className="leading-loose">Name</label>
                  <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Name" value={user.name} readOnly />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Email</label>
                  <input type="email" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Email" value={user.email} readOnly />
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col">
                    <label className="leading-loose">Address</label>
                    <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Phone</label>
                    <input type="tel" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                  <div className="pt-4 flex items-center space-x-4">
                    <button className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Update Profile</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {message && (
        <div className="mt-4 text-center text-sm font-medium text-green-600">
          {message}
        </div>
      )}
    </div>
  );
}