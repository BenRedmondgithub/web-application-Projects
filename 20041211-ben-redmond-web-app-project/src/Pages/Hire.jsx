import React, { useState } from 'react';
import { Container, TextField, Button, Typography, MenuItem, Stack } from '@mui/material'; // Fixed MenuItem import
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'; // Fixed AdapterDateFns import
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers'; // Added DateTimePicker import
import { db } from '../firebase'; // Adjust the import path as necessary
import { addDoc, collection } from 'firebase/firestore'; // Adjust the import path as necessary

function HireMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    shootType: '',
    date: null,
    message: "",
  });

  const shootType = ['Wedding', 'Portrait', 'Event', 'Product', 'Other'];

  const [setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (newValue) => {
    setFormData({
      ...formData,
      date: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "session"), {
        name: formData.name,
        email: formData.email,
	      Typeofshoot: formData.shootType,
        date: formData.date,
        message: formData.message,
      });

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
	      shootType: '',
    	  date: null,
        message: "",
      });

    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom>
        Hire Me
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={2}>
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            select
            label="Type of Shoot"
            name="shootType"
            value={formData.shootType}
            onChange={handleChange}
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
            onChange={handleDateChange}
            renderInput={(params) => <TextField fullWidth {...params} />}
          />
          <TextField
            fullWidth
            label="Additional Details"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
          <Button variant="contained" sx={{ mt: 2, fontFamily: "'Reenie Beanie', cursive", fontSize: "1.5rem" }} onClick={handleSubmit}>
            Submit for Booking
          </Button>
        </Stack>
      </LocalizationProvider>
    </Container>
  );
};

export default HireMe;
