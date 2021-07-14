import React from 'react';
import {ListGroup} from "react-bootstrap";

const Contacts = () => {
  // mockData
  const contacts = [{id: "test_id", name: "test"}, {id: "test2_id", name: "test2"}]

  return (
    <ListGroup>
      {contacts.map(contact => (
        <ListGroup.Item key={contact.id}>
          {contact.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Contacts;