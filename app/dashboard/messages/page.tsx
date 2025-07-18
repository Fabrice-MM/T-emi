'use client';

import { Suspense } from 'react';
import DashboardLayout from '../DashboardLayout';
import MessagesSection from './MessagesSection';

function MessagesContent() {
  return <MessagesSection />;
}

export default function MessagesPage() {
  return (
    <DashboardLayout>
      <Suspense fallback={<div className="flex items-center justify-center h-96"><div className="text-gray-500">Loading messages...</div></div>}>
        <MessagesContent />
      </Suspense>
    </DashboardLayout>
  );
}