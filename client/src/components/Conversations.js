import React, {useEffect, useState} from 'react';
import {ListGroup} from "react-bootstrap";

const Conversations = () => {
  // mock data
  const [conversations, setConversations] = useState([
    {selected: false, recipients: [{name: "test"}, {name: "test2"}]},
    {selected: false, recipients: [{name: "test3"}]},
    {selected: false, recipients: [{name: "test4"}]},
  ])

  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0)

  useEffect(() => {
    setConversations(prevState => {
      prevState.map((v, conversationIndex) => {
        v.selected = conversationIndex === selectedConversationIndex
        return v
      })
      return [...prevState]
    })
  }, [selectedConversationIndex])

  return (
    <ListGroup variant="flush">
      {conversations.map((conversation, index) => (
        <ListGroup.Item
          key={index}
          onClick={() => setSelectedConversationIndex(index)}
          active={conversation.selected}
        >
          {conversation.recipients.map(recipient => recipient.name).join(", ")}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Conversations;