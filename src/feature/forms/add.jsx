import React, { useRef} from "react";
import { Form, Input, Button } from "semantic-ui-react";

const AddItem = ({ addToList, arrList }) => {
  const txt = useRef();

  const handleAdd = () => {
    addToList([ ...arrList, txt.current.inputRef.current.value ]);
    txt.current.inputRef.current.value = "";
  }
  
  return (
    <Form>
       <Input ref={txt} placeholder='Enter Item here...' />
       <Button icon="shopping cart" onClick={handleAdd} />
    </Form>
  );
};

export default AddItem;
