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
import { updateField } from "./formSlice";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const genders = ["Male", "Female", "Other"];

const Step2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { gender, dob } = useSelector((state: RootState) => state.form);

  const formik = useFormik({
    initialValues: { gender, dob },
    validationSchema: Yup.object({
      gender: Yup.string().required("Gender is required"),
      dob: Yup.string().required("Date of Birth is required"),
    }),
    onSubmit: (values) => {
      dispatch(updateField({ field: "gender", value: values.gender }));
      dispatch(updateField({ field: "dob", value: values.dob }));
      navigate("/step3");
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
          elevation={6}
          sx={{ p: 5, borderRadius: 3, textAlign: "center" }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            color="primary"
            gutterBottom
          >
            Step 2
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              select
              label="Gender"
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              margin="normal"
              error={formik.touched.gender && Boolean(formik.errors.gender)}
              helperText={formik.touched.gender && formik.errors.gender}
            >
              {genders.map((g) => (
                <MenuItem key={g} value={g}>
                  {g}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              label="Date of Birth"
              name="dob"
              type="date"
              value={formik.values.dob}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              margin="normal"
              InputLabelProps={{ shrink: true }}
              error={formik.touched.dob && Boolean(formik.errors.dob)}
              helperText={formik.touched.dob && formik.errors.dob}
            />
            <Box mt={3} display="flex" justifyContent="space-between">
              <Button
                variant="outlined"
                onClick={() => navigate("/step1")}
                sx={{ px: 4 }}
              >
                Back
              </Button>
              <Button type="submit" variant="contained" sx={{ px: 4 }}>
                Next
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Step2;
