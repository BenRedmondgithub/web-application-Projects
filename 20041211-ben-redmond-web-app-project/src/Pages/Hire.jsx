import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, MenuItem, Stack } from '@mui/material'; // Fixed MenuItem import
import { AdapterDataFns } from '@mui/x-date-pickers/AdapterDateFns'; // Fixed AdapterDateFns import
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers'; // Added DateTimePicker import

const HireMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    shootType: '',
    date: null,
    message: '',
  });

  const shootType = ['Wedding', 'Portrait', 'Event', 'Product', 'Other'];

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleDateChange = (newDate) => {
    setFormData({ ...formData, date: newData });
  };

  const handleSubmit = () => {
    console.log('Booking successful', formData);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom>
        Hire Me
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDataFns}>
        <Stack spacing={2}>
          <TextField
            fullWidth
            label="Name"
            value={formData.Name}
            onChange={handleChange('Name')}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={formData.Email}
            onChange={handleChange('Email')}
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            select
            label="Type of Shoot"
            value={formData.shootType}
            onChange={handleChange('shootType')}
            sx={{ mt: 2 }}
          >
            {shootType.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
          <DateTimePicker
            label="Preferred Date"
            value={formData.date}
            onChange={handleDataChange}
            renderInput={(params) => <TextField fullWidth {...params} />}
          />
          <TextField
            fullWidth
            label="Additional Details"
            multiline
            rows={4}
            value={formData.Message}
            onChange={handleChange('Message')}
          />
          <Button variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>
            Submit for Booking
          </Button>
        </Stack>
      </LocalizationProvider>
    </Container>
  );
};

export default HireMe;
