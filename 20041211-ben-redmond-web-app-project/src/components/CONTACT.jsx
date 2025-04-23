import React from "react";
import './index.css';
import { Container, Typography, Box, Button } from "@mui/material";

function ContactSection() {
    return (
    <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "rgb(136, 207, 233)", // Fixed syntax for RGB color
        }}>
        <Container maxWidth="md" sx={{ textAlign: "center", mt: 10 }}>
            <form action="https://formspree.io/f/xjvjlqzj" method="POST">
                <Typography variant="h2" gutterBottom sx={{ mb: 9 }}>
                    Get in Touch
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ mb: 8 }}>
                    We would love to hear from you!
                </Typography>
                <input type="text" name="name" placeholder="Your Name" required style={{ width: "75%", padding: "10px", marginBottom: "20px" }} />
                <input type="email" name="email" placeholder="Your Email" required style={{ width: "75%", padding: "10px", marginBottom: "20px" }} />
                <textarea name="message" placeholder="Your Message" required style={{ width: "75%", padding: "10px", marginBottom: "20px", height: "150px" }}>

                </textarea>
            </form>
            <Button 
                    display="center"
                    variant="contained"
                    color="secondary"
                    size="large"
                    type="submit"
                    sx={{ mt: 9, mb: 10 }}
                >
                    Send Message!
            </Button>
        </Container>
    </Box>
    );
}

export default ContactSection;