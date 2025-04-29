import React from "react";
import { Link } from 'react-router-dom'; // Added useNavigate and Link
import { Container, Typography, Box, Button } from "@mui/material";

function PrintShopSection() {
    return (
    <Box sx={{bgcolor: "#BEE7F2", py: 45}}> 
        <Container maxWidth="md" sx={{ textAlign: "center"}}>
        <Typography variant="h2" gutterBottom sx={{ mb: 9 }}>
            Print Shop
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ mb: 10 }}>
            Explore our exclusive collection of prints.
        </Typography>
        <Container maxWidth="md" sx={{ textAlign: "center"}}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          component={Link} 
          to="/shop"
        >
          Best Sellers
        </Button>

        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link} 
          to="/shop"
        >
          New Arrivals
        </Button>
        
        </Container>

      </Container>
    </Box>
    );
}
export default PrintShopSection;
