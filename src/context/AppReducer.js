export default (state, action) => {
  switch (action.type) {
    case "REMOVE_PRINTER":
      return {
        ...state,
        printers: state.printers.filter((printer) => {
          return printer.id !== action.payload;
        }),
      };
    case "ADD_PRINTER":
      return {
        ...state,
        printers: [action.payload, ...state.printers],
      };
    case "EDIT_PRINTER":
      const updatePrinter = action.payload;

      const updatePrinters = state.printers.map((printer) => {
        if (printer.id === updatePrinter.id) {
          return updatePrinter;
        }
        return printer;
      });
      return {
        ...state,
        printers: updatePrinters,
      };

    default:
      return state;
  }
};
