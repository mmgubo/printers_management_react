import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

export const PrintersList = () => {
  const { printers, removePrinter } = useContext(GlobalContext);

  return (
    <ListGroup className="mt-4">
      {printers.length > 0 ? (
        <>
          {printers.map((printer) => (
            <ListGroupItem className="d-flex" key={printer.id}>
              <strong>{printer.name}</strong>
              <div className="ml-auto">
                <Link
                  to={`/edit/${printer.id}`}
                  color="warning"
                  className="btn btn-warning mr-1"
                >
                  Edit
                </Link>
                <Button
                  onClick={() => removePrinter(printer.id)}
                  color="danger"
                >
                  Delete
                </Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
        <h4 className="text-center">No Printers</h4>
      )}
    </ListGroup>
  );
};
