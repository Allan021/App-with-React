import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup as MUIRadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

export default function RadioGroup(props) {
  const { name, label, value, onChange, items } = props;

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <MUIRadioGroup
        row
        aria-label="genero"
        name={name}
        onChange={onChange}
        value={value}
      >
        {items.map((item) => (
          <FormControlLabel
            key={item.id}
            value={item.id}
            control={<Radio />}
            label={item.title}
          />
        ))}
      </MUIRadioGroup>
    </FormControl>
  );
}
