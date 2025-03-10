import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  MenuItem,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { updateField, resetForm } from "./formSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Step3 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    name,
    email,
    gender,
    dob,
    state: selectedState,
  } = useSelector((state: RootState) => state.form);

  const [states, setStates] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/states", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ country: "India" }),
    })
      .then((res) => res.json())
      .then((data) =>
        setStates(data.data.states.map((s: { name: string }) => s.name))
      )
      .catch((error) => console.error("Error fetching states:", error));
  }, []);

  const formik = useFormik({
    initialValues: { state: selectedState || "", file: null },
    validationSchema: Yup.object({
      state: Yup.string().required("State is required"),
    }),
    onSubmit: (values) => {
      dispatch(updateField({ field: "state", value: values.state }));

      console.log("Form Submitted:");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Gender:", gender);
      console.log("Date of Birth:", dob);
      console.log("State:", values.state);
      console.log("Uploaded File:", values.file);

      dispatch(resetForm());
      navigate("/step1");
    },
  });

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={10}
          sx={{
            p: 5,
            borderRadius: 3,
            textAlign: "center",
            bgcolor: "#ffffff", 
            boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            color="primary"
            gutterBottom
          >
            Step 3
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              select
              label="State"
              name="state"
              value={formik.values.state}
              onChange={formik.handleChange}
              margin="normal"
              error={formik.touched.state && Boolean(formik.errors.state)}
              helperText={formik.touched.state && formik.errors.state}
            >
              {states.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              fullWidth
              type="file"
              name="file"
              inputProps={{ accept: ".pdf,.jpg,.png" }}
              onChange={(event) =>
                formik.setFieldValue(
                  "file",
                  (event.currentTarget as HTMLInputElement).files?.[0] || null
                )
              }
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />

            <Box mt={3} display="flex" justifyContent="space-between">
              <Button
                variant="outlined"
                onClick={() => navigate("/step2")}
                sx={{ px: 4 }}
              >
                Back
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ px: 4 }}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Step3;
