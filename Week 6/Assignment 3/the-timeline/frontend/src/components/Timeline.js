import React, { useState, useEffect } from 'react';
import MessageForm from './MessageForm';
import MessageList from './MessageList';

const API = 'http://localhost:3001';

function Timeline() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const res = await fetch(`${API}/messages`);
      const data = await res.json();
      setMessages(data); // already sorted newest first by backend
    } catch (err) {
      console.log('Error fetching messages:', err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleAddMessage = async (content) => {
    await fetch(`${API}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content })
    });
    fetchMessages();
  };

  const handleAddComment = async (messageId, content) => {
    await fetch(`${API}/messages/${messageId}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content })
    });
    fetchMessages();
  };

  return (
    <div style={{ padding: '20px', maxWidth: '700px', margin: '0 auto' }}>
      <h1>Timeline</h1>
      <MessageForm onAdd={handleAddMessage} />
      <MessageList messages={messages} onAddComment={handleAddComment} />
    </div>
  );
}

export default Timeline;