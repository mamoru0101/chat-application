import {Button, Modal, Nav, Tab} from 'react-bootstrap'
import {useState} from "react";

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'

const App = () => {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);

  return (
    <div className="d-flex" style={{"height": "100vh"}}>

      <div style={{width: '300px'}} className={'d-flex flex-column'}>
        <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>

          <Nav variant="tabs" className={"justify-content-center"}>
            <Nav.Item><Nav.Link eventKey="conversations">Conversations</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="contacts">Contacts</Nav.Link></Nav.Item>
          </Nav>

          <Tab.Content className="border-end overflow-auto flex-grow-1">
            <Tab.Pane eventKey={CONVERSATIONS_KEY}>
              <div>conversations</div>
            </Tab.Pane>
            <Tab.Pane eventKey={CONTACTS_KEY}>
              <div>contacts</div>
            </Tab.Pane>
          </Tab.Content>

        </Tab.Container>
      </div>
    </div>
  );
}

export default App;
