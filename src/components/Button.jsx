import React from "react";
import { Button, Icon } from "semantic-ui-react";

const CusButton = ({ value }) => {
  return (
    <Button as="div" labelPosition="left">
      <Button icon>
        <Icon name="trash" />
      </Button>
    </Button>
  );
};

export default CusButton;
