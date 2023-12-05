import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

export default function Notifcation({ title, text, type, amost }) {
  const [show, setShow] = useState(false);

  return (
    <Row>
      <Col xs={12}>
        <Toast
          bg={type}
          onClose={() => setShow(false)}
          show={show ? show : amost}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">{title}</strong>
          </Toast.Header>
          <Toast.Body>{text}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}
