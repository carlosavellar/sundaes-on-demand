import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export default function SummaryForm() {
  const [tcChecked, setTcChecked] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: 'blue' }}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="terms-and-conditions">
              <Form.Check
                type="checkbox"
                checked={tcChecked}
                onChange={(e) => setTcChecked(e.target.checked)}
                label={checkboxLabel}
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!tcChecked}>
              Confirm order
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
