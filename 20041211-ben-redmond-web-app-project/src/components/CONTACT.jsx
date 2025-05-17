import React, { useState } from "react";
import './index.css';
import { Container, Typography, Box, Button } from "@mui/material";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "rgb(60, 73, 128)",
        py: 10,
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        {!submitted ? (
          <>
            <Typography
              variant="h1"
              gutterBottom
              sx={{ mb: 5, display: "flex", justifyContent: "center", color:"white", fontFamily: "'Reenie Beanie', cursive", }}
            >
              Get in Touch
            </Typography>
            <Typography variant="h2" gutterBottom 
            sx={{ 
                mb: 5, 
                color:"white", 
                fontFamily: "'Reenie Beanie', cursive", 
                justifyContent: "center",
                fontSize: "3rem",
                }}>
              We would love to hear from you!
            </Typography>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              style={{ width: "75%", padding: "10px", marginBottom: "20px" }}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              style={{ width: "75%", padding: "10px", marginBottom: "20px" }}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              style={{
                width: "75%",
                padding: "10px",
                marginBottom: "20px",
                height: "150px",
              }}
            />

            <Button
              variant="contained"
              color="secondary"
              size="large"
              type="submit"
              sx={{ mt: 5, mb: 10 }}
            >
              Send Message!
            </Button>
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "50vh",
            }}
          >
            <Typography variant="h5" sx={{ color: "white" }}>
              Thank you for your message! I will get back to you soon.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default ContactForm;
