import React from "react";

import { Container, Typography, Box, Button } from "@mui/material";


function ContactSection() {
    return (
    <Box sx={{bgcolor: "#BEE7F2", py: 18}}> 
        <Container maxWidth="md" sx={{ textAlign: "center"}}>
            <h1>Contact</h1>
        <Button
          variant="contained"
          color="success"
          size="large"
          href="#"
        >
          Email Me
        </Button>

        <Button
            variant="contained"
            color="primary"
            size="large"
            href="#"
        >
          Call Me
        
        </Button>

      </Container>
    </Box>
    );
}

export default ContactSection;