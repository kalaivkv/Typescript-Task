import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { updateField } from "./formSlice";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Step1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, email } = useSelector((state: RootState) => state.form);

  const formik = useFormik({
    initialValues: { name, email },
    validationSchema: Yup.object({
      name: Yup.string().min(3, "Too short").required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
    }),
    onSubmit: (values) => {
      dispatch(updateField({ field: "name", value: values.name }));
      dispatch(updateField({ field: "email", value: values.email }));
      navigate("/step2");
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
          sx={{
            p: 5,
            borderRadius: 3,
            textAlign: "center",
            backgroundColor: "#fff",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            color="primary"
            gutterBottom
          >
            Step 1
          </Typography>

          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              margin="normal"
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />

            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              margin="normal"
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <Box mt={3} display="flex" justifyContent="flex-end">
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

export default Step1;
