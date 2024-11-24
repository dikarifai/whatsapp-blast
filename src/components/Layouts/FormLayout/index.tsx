import { Box, Button, TextField, Typography } from "@mui/material";

interface FormLayoutProps {
  children: React.ReactNode;
  title?: React.ReactNode;
}

const FormLayout: React.FC<FormLayoutProps> = ({ children, title }) => {
  return (
    <Box
      component="form"
      marginTop={10}
      marginX={10}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <div className="flex flex-col gap-4">
        {children}
        <Button variant="contained" color="primary">
          Simpan
        </Button>
      </div>
    </Box>
  );
};

export default FormLayout;
