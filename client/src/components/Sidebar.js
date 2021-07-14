import React from 'react';
import {Button, Modal, Nav, Tab} from 'react-bootstrap'
import {useState} from "react";

import Conversations from './Conversations'
import Contacts from './Contacts'

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'
const Sidebar = () => {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
  const [modalOpen, setModalOpen] = useState(false);

  const isSelectConversations = activeKey === CONVERSATIONS_KEY

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <div className="d-flex" style={{"height": "100vh"}}>

      <div style={{width: '300px'}} className={'d-flex flex-column'}>
        <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>

          <Nav variant="tabs" className={"justify-content-center"}>
            <Nav.Item><Nav.Link eventKey="conversations">トークルーム</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="contacts">連絡先</Nav.Link></Nav.Item>
          </Nav>

          <Tab.Content className="border-end overflow-auto flex-grow-1">
            <Tab.Pane eventKey={CONVERSATIONS_KEY}>
              <Conversations/>
            </Tab.Pane>
            <Tab.Pane eventKey={CONTACTS_KEY}>
              <Contacts/>
            </Tab.Pane>
          </Tab.Content>

          <Button className="rounded-0" onClick={() => {
            setModalOpen(true)
          }}>
            新しい {isSelectConversations ? 'トークルーム' : '連絡先'}
          </Button>

        </Tab.Container>

        <Modal show={modalOpen} onHide={closeModal}>
          {isSelectConversations ?
            <div onClick={closeModal}>トークルーム</div> :
            <div onClick={closeModal}>連絡先</div>
          }
        </Modal>


      </div>
    </div>
  )
};

export default Sidebar;