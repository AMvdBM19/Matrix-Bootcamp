import React from 'react';
import MessageItem from './MessageItem';

function MessageList({ messages, onAddComment }) {
  return (
    <div>
      {messages.map((msg) => (
        <MessageItem
          key={msg._id}
          message={msg}
          onAddComment={onAddComment}
        />
      ))}
    </div>
  );
}

export default MessageList;