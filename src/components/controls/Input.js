import React from 'react'
import { TextField } from '@material-ui/core';

export default function Input(props) {

    const { name, label, value, error = null, onChange, onKeyUp,type,variant,onBlur } = props;
    return (
      <TextField
        variant={variant}
        type={type || "text"}
        label={label}
        name={name}
        fullWidth
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
        onBlur={onBlur}
        {...(error && { error: true, helperText: error })}
      />
    );
}
