import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const AddPrinter = () => {
  const [name, setName] = useState("");
  const [ip, setIP] = useState("");

  const { addPrinter } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newPrinter = {
      id: uuid(),
      name,
      ip,
    };
    addPrinter(newPrinter);
    history.push("/");
  };

  const onChange = (e) => {
    setName(e.target.value);
    setIP(e.target.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Printer Name</Label>
        <Input
          type="text"
          value={name}
          onChange={onChange}
          name="name"
          placeholder="Enter printer name"
          required
        ></Input>
      </FormGroup>
      <FormGroup>
        <Label>Printer IP</Label>
        <Input
          type="text"
          value={ip}
          onChange={onChange}
          name="ip"
          placeholder="Enter printer IP"
          required
        ></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};
