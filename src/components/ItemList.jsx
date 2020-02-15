import React from "react";
import { List } from "semantic-ui-react";
import Item from './Item';

const ItemList = ({ list, RemoveToList }) => {

  const handleRemoveItem = (item) => {
    RemoveToList([ ...list.filter(i => i !== item)]);
  }
  
  return (
    <List>
      {
        list.map((item, i) => <Item key={i} pickItem={item} removeItem={handleRemoveItem} />)
      }
    </List>
  );
};

export default ItemList;
