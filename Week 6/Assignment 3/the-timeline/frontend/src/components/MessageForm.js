import React, { useState } from 'react';

function MessageForm({ onAdd }) {
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (!content.trim()) return;
    onAdd(content);
    setContent('');
  };

  return (
    <div style={{ marginBottom: '30px' }}>
      <p><strong>Post a message</strong></p>
      <textarea
        rows={3}
        style={{ width: '100%' }}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Post a message</button>
    </div>
  );
}

export default MessageForm;