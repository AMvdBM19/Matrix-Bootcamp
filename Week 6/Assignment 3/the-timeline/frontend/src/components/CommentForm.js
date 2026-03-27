import React, { useState } from 'react';

function CommentForm({ onAdd }) {
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (!content.trim()) return;
    onAdd(content);
    setContent('');
  };

  return (
    <div style={{ marginLeft: '30px', marginTop: '10px' }}>
      <p><strong>Post a comment</strong></p>
      <textarea
        rows={2}
        style={{ width: '100%' }}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Post a comment</button>
    </div>
  );
}

export default CommentForm;
