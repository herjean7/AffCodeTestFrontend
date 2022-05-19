import { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import swal from 'sweetalert';

export const SignTransaction = (props) => {
  const [values, setValues] = useState({
    tranID: ''
  });

  var validMessage = '';

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.get('https://localhost:7069/api/Dashboard/SignBlockchainTransaction?transactionHash=' + values.tranID)
    .then(res => {
        if(res.data.result.isError === 0)
            swal("Congrats!", "Valid Transaction", "success");
        if(res.data.result.isError === 1)
            swal("Invalid!", "Invalid Transaction Detected", "error");
        validMessage = res.data.message;
        console.log(res);
      });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
      {...props}
    >
      <Card>
        <CardHeader
          title="Blockchain Transaction Verification"
          subheader={validMessage}
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify transaction ID"
                label="Transaction ID"
                name="tranID"
                onChange={handleChange}
                required
                value={values.tranID}
                variant="outlined"
              />
            </Grid>
            
            
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            type="submit"
          >
            Verify
          </Button>
        </Box>
      </Card>
    </form>
  );
};