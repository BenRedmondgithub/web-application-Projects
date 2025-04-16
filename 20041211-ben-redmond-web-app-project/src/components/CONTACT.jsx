import React from "react";

import { Container, Typography, Box, Button } from "@mui/material";


function ContactSection() {
    return (
    <Box sx={{bgcolor: "#BEE7F2", py: 25}}> 
        <Container maxWidth="md" sx={{ textAlign: "center"}}>
            <form action="https://formspree.io/f/xjvjlqzj" method="POST">
                <Typography variant="h2" gutterBottom sx={{ mb: 9 }}>
                    Get in Touch
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ mb: 10 }}>
                    We would love to hear from you!
                </Typography>
                <input type="text" name="name" placeholder="Your Name" required style={{ width: "75%", padding: "10px", marginBottom: "10px" }} />
                <input type="email" name="email" placeholder="Your Email" required style={{ width: "75%", padding: "10px", marginBottom: "10px" }} />
                <textarea name="message" placeholder="Your Message" required style={{ width: "75%", padding: "10px", marginBottom: "10px", height: "150px" }}>

                </textarea>
                <Button 
                    variant="contained"
                    color="secondary"
                    size="large"
                    type="submit"
                    sx={{ mt: 2 }}
                >
                    Send Message!
                </Button>
            </form>
      </Container>
    </Box>
    );
}

export default ContactSection;