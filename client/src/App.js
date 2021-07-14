import {Button, Modal, Nav, Tab} from 'react-bootstrap'

const App = () => {
  return (
    <div className="d-flex" style={{"height": "100vh"}}>

      <div style={{width: '300px'}} className={'d-flex flex-column'}>
        <Tab.Container activeKey={"conversations"}>

          <Nav variant="tabs" className={"justify-content-center"}>
            <Nav.Item><Nav.Link eventKey="conversations">Conversations</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="contacts">Contacts</Nav.Link></Nav.Item>
          </Nav>

          <Tab.Content className="border-end overflow-auto flex-grow-1">
            <Tab.Pane eventKey="conversations">
              <div>conversations</div>
            </Tab.Pane>
            <Tab.Pane eventKey="contacts">
              <div>contacts</div>
            </Tab.Pane>
          </Tab.Content>

        </Tab.Container>
      </div>
    </div>
  );
}

export default App;
