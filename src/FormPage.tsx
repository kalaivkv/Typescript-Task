/* import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch, updateField, nextPage, prevPage } from "./store";
import { Container, TextField, Button, MenuItem, Box, Typography } from "@mui/material";

const states = ["Kashmir", "Delhi", "Maharashtra", "TamilNadu"];
const genders = ["Male", "Female", "Other"];

const FormPage: React.FC = () => {
  const { name, email, gender, dob, state, file, page } = useSelector((state: RootState) => state.form);
  const dispatch: AppDispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name as keyof RootState["form"], value }));
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ p: 4, mt: 5, bgcolor: "#f0f0f0", borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Step {page} of 3
        </Typography>
        {page === 1 && (
          <>
            <TextField fullWidth label="Name" name="name" value={name} onChange={handleChange} margin="normal" />
            <TextField fullWidth label="Email" name="email" type="email" value={email} onChange={handleChange} margin="normal" />
          </>
        )}
        {page === 2 && (
          <>
            <TextField fullWidth select label="Gender" name="gender" value={gender} onChange={handleChange} margin="normal">
              {genders.map((g) => (
                <MenuItem key={g} value={g}>{g}</MenuItem>
              ))}
            </TextField>
            <TextField fullWidth label="Date of Birth" name="dob" type="date" InputLabelProps={{ shrink: true }} value={dob} onChange={handleChange} margin="normal" />
          </>
        )}
        {page === 3 && (
          <>
            <TextField fullWidth select label="State" name="state" value={state} onChange={handleChange} margin="normal">
              {states.map((s) => (
                <MenuItem key={s} value={s}>{s}</MenuItem>
              ))}
            </TextField>
            <input type="file" name="file" onChange={(e) => dispatch(updateField({ field: "file", value: e.target.files?.[0] || null }))} />
          </>
        )}
        <Box mt={2} display="flex" justifyContent="space-between">
          <Button variant="contained" disabled={page === 1} onClick={() => dispatch(prevPage())}>Back</Button>
          {page < 3 ? (
            <Button variant="contained" onClick={() => dispatch(nextPage())}>Next</Button>
          ) : (
            <Button variant="contained" color="success" onClick={() => console.log("Submit", { name, email, gender, dob, state, file })}>Submit</Button>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default FormPage;
 */