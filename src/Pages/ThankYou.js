import React from 'react';
import { Typography, Container } from '@mui/material';

const ThankYou = () => {
  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection:'column'
      }}
    >
      <Typography variant="h3" color="primary">
        Your order have been placed
      </Typography>
      <Typography variant="h4" color="primary">
        Thank you for using our services
      </Typography>
    </Container>
  );
};

export default ThankYou;
