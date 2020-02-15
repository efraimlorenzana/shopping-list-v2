import React from "react";
import { Button, Label, Icon, List } from 'semantic-ui-react';

const Item = ({ pickItem, removeItem }) => {

  const handleRemoveItem = (event) => {
    removeItem(event.currentTarget.name);
  }
  
  return (
    <List.Item>
      <Button as="div" labelPosition="left" style={{ width: "80%" }}>
        <Label as="a" basic style={{ width: "100%" }}>
          {pickItem}
        </Label>
        <Button onClick={(e) => handleRemoveItem(e)} name={pickItem} icon color="red">
          <Icon style={{color: 'white'}} name="trash" />
        </Button>
      </Button>
    </List.Item>
  );
};

export default Item;
