import React from "react";
import { Header, Icon } from "semantic-ui-react";

const HeaderElement = ({ desc }) => {
  return (
    <Header style={{ alignCenter: "red" }} as="h2">
      <Icon name="shopping cart" />
      <Header.Content>
        Shopping List
        <Header.Subheader>{desc}</Header.Subheader>
      </Header.Content>
    </Header>
  );
};

export default HeaderElement;
