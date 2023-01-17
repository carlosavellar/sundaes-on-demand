import { Col } from 'react-bootstrap';

export default ScoopOption = ({ name, imagePath }) => {
  console.log('Caralho', imagePath);
  return (
    <div xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img alt={`${name} scoop`} src={`http://localhost:3000/${imagePath}`} />
    </div>
  );
};
