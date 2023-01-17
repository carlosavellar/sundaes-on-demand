import { useCallback, useEffect, useState } from 'react';
import ScoopOptions from './ScoopOptions';
import ToopingOption from './ToopingOption';
import { Row } from 'react-bootstrap';
import axios from 'axios';

export default Options = ({ optionType }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/${optionType}`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((err) => {
        console.log(err.message, '🆙');
      });
  }, [optionType]);
  const ItemComponent = optionType === 'scoops' ? ScoopOptions : ToopingOption;
  const optionItems = items.map((item) => (
    <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />
  ));

  return <Row>{optionItems}</Row>;
};
