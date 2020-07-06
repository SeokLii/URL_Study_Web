import React, { useEffect, useState } from 'react'


//bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

// styles
import styles from '../utils/css/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return(
    (
      <>
      <Container>
          <Row>
            <Col md={{ span: 2, offset: 10 }}>2020년 6월 8일</Col>
          </Row>
          <Row>
            <Col className="test">1 of 1</Col>
            <Col className="test">1 of 1</Col>
            <Col className="test">1 of 1</Col>
          </Row>
      </Container>

      <div className="container">
        <div className="Header-top">
          <div class="Date">2020년 6월 8일</div>
        </div>
        <div className="Header-left">1</div>
        <div className="Header">2</div>
        <div className="Header-right">3</div>
      </div>

    </>
    )
  );
}

export default Header;
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
//
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Toast from 'react-bootstrap/Toast';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
//
//
// const ExampleToast = ({ children }) => {
//   const [show, toggleShow] = useState(true);
//
//   return (
//     <>
//       {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
//       <Toast show={show} onClose={() => toggleShow(false)}>
//         <Toast.Header>
//           <strong className="mr-auto">React-Bootstrap</strong>
//         </Toast.Header>
//         <Toast.Body>{children}</Toast.Body>
//       </Toast>
//     </>
//   );
// };
//
// const App = () => (
//   <Container className="p-3">
//     <Jumbotron>
//       <h1 className="header">Welcome To React-Bootstrap</h1>
//       <ExampleToast>
//         We now have Toasts
//         <span role="img" aria-label="tada">
//           🎉
//         </span>
//       </ExampleToast>
//     </Jumbotron>
//   </Container>
// );
//
// export default App;
