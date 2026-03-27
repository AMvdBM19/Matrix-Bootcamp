import React from 'react';
import CommentForm from './CommentForm';

function MessageItem({ message, onAddComment }) {
  // Sort comments oldest first as per wireframe
  const sortedComments = [...message.comments].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div style={{ borderBottom: '1px solid #ccc', marginBottom: '20px', paddingBottom: '10px' }}>
      <strong>
        {message.author} - {new Date(message.date).toDateString()}
      </strong>
      <p>{message.content}</p>

      {/* Comments */}
      {sortedComments.map((comment) => (
        <div key={comment._id} style={{ marginLeft: '30px', marginBottom: '10px' }}>
          <strong>
            {comment.author} - {new Date(comment.date).toDateString()}
          </strong>
          <p>{comment.content}</p>
        </div>
      ))}

      {/* Comment form */}
      <CommentForm onAdd={(content) => onAddComment(message._id, content)} />
    </div>
  );
}

export default MessageItem;