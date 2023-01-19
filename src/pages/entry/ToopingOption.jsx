import { Col } from 'react-bootstrap';

export default ToopingOption = ({ name, imagePath }) => {
  return (
    <Col>
      <div>Colection</div>
      <img alt={`${name} tooping`} src={`http://localhost:300/${imagePath}`} />
    </Col>
  );
};
