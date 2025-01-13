'use client'; // Mark this as a Client Component

import Chatbot from '../../../components/Chatbot';

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>My Chatbot</h1>
      <Chatbot />
    </div>
  );
}