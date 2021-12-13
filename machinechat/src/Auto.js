import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { blue, blueGrey } from "@material-ui/core/colors";

const filter = createFilterOptions();

export default function Auto() {
  const [value, setValue] = React.useState(null);
  const [open, toggleOpen] = React.useState(false);

  const [dialogValues, setDialogValues] = React.useState([]);

  const handleClose = () => {
    // setDialogValue({ title: "", year: "" });
    toggleOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);

    // setValue({
    //   title: dialogValues.title,
    //   year: parseInt(dialogValues.year, 10),
    // });
    handleClose();
  };

  const makeQuery = () => {
    return dialogValues.map((d) => (
      <TextField id={d.name} label={d.name} type="number" />
    ));
  };

  return (
    <React.Fragment>
      <Autocomplete
        id="combo-box-demo"
        options={data}
        getOptionLabel={(option) => option.title}
        style={{ width: 300, color: "tomato" }}
        renderInput={(params) => (
          <TextField {...params} label="enter command" variant="outlined" />
        )}
        onChange={(event, v) => {
          console.log(dialogValues);
          if (v.askFor != null) {
            setDialogValues(v.askFor);
            toggleOpen(true);
          } else {
            setValue(v);
          }
        }}
        freeSolo
      />

      {/* handle new commands */}
      <Dialog open={open}>
        <form
          onSubmit={(event, v) => {
            event.preventDefault();
            console.log(v);
          }}
        >
          <DialogTitle id="form-dialog-title">Add a new film</DialogTitle>
          <DialogContent>
            <DialogContentText>Is it working?</DialogContentText>
            {makeQuery()}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}

const data = [
  {
    title: "goTo",
    askFor: [
      { name: "x", value: "" },
      { name: "y", value: "" },
      { name: "z", value: "" },
      { name: "speed", value: 4500 },
    ],
  },
  { title: "homeX" },
  { title: "homeY" },
  { title: "homeZ" },
  { title: "goTo()" },
  {
    title: "zigzag",
    askFor: [
      { name: "x", value: "" },
      { name: "y", value: "" },
      { name: "z", value: "" },
    ],
  },
  {
    title: "loop",
    askFor: [
      { name: "x_direction", value: "" },
      { name: "y_direction", value: "" },
      { name: "stepover", value: "" },
    ],
  },
];
