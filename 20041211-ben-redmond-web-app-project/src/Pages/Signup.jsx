import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Stack,} from '@mui/material'; 
import { db } from '../firebase'; 
import { addDoc, collection } from 'firebase/firestore'; 

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });



  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "signups"), {
        email: formData.email,
        password: formData.password,
      });

      setSubmitted(true);
      setFormData({
        email: "",
        password: "",
      });

    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center", color: "black", fontFamily: "'Dancing Script', cursive", fontSize: "3rem" }}>
        Sign Up
      </Typography>
        {!submitted ? (
          <Stack spacing={2}>

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
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                sx={{ mt: 2 }}
            />

            <Button variant="contained" sx={{ mt: 2, fontFamily: "'Reenie Beanie', cursive", fontSize: "1.5rem" }} onClick={handleSubmit}>
                Sign Up
            </Button>
          </Stack>
        ) : (
       
            <Typography variant="h5" sx={{ color: "white"}}>
              Thank you for your message! I will get back to you soon.
            </Typography>
        )}
    </Container>
  );
};

export default Signup;