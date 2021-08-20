import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const EditPrinter = (props) => {
  const { editPrinter, printers } = useContext(GlobalContext);
  const [selectedPrinter, setSelectedPrinter] = useState({
    id: "",
    name: "",
  });
  const history = useHistory();
  const currentUserId = props.match.params.id;

  useEffect(() => {
    const userId = currentUserId;
    const selectedPrinter = printers.find((user) => user.id === userId);
    setSelectedPrinter(selectedPrinter);
  }, [currentUserId, printers]);

  const onChange = (e) => {
    setSelectedPrinter({ ...selectedPrinter, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editPrinter(selectedPrinter);
    history.push("/");
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Printer Name</Label>
        <Input
          type="text"
          value={selectedPrinter.name}
          onChange={onChange}
          name="name"
          placeholder="Enter Printer"
          required
        ></Input>
      </FormGroup>
      <Button type="submit">Edit Printer</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};
