import React from 'react';
import ChatbotIcon from './ChatbotIcon';
import linkifyStr from 'linkify-string';

const ChatMessage = ({ chat }) => {
  return (
    !chat.hideInChat && (
      <div className={`message ${chat.role === "system" ? 'bot' : 'user'}-message ${chat.isError ? "error" : ""}`}>
        {chat.role === "system" && <ChatbotIcon />}
        <p
          className="message-text"
          dangerouslySetInnerHTML={{
            __html: linkifyStr(chat.text, {
              target: '_blank',
              rel: 'noopener noreferrer'
            })
          }}
        />
      </div>
    )
  );
};

export default ChatMessage;
