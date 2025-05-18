import React from "react";
import { Link } from 'react-router-dom'; // Added useNavigate and Link
import { Container, Typography, Box, Button } from "@mui/material";

function PrintShopSection() {
    return (
    <Box 
    sx={{
      backgroundImage: "url('/img/_MG_7709.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "120vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    }}> 
        <Container maxWidth="md" sx={{ textAlign: "center"}}>
        <Typography variant="h2" gutterBottom 
        sx={{ 
          mb: 5, 
          fontFamily: "'Dancing Script', cursive", 
          fontSize: "8rem", 
          color: "white", 
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          textAlign: "center",
        }}>
            Print Shop
        </Typography>
        <Typography variant="h6" gutterBottom 
        sx={{ 
          mb: 10, 
          fontFamily: "'Reenie Beanie', cursive",
          fontSize: "4rem",
          color: "white",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"
          }}>

            Explore our exclusive collection of prints.
        </Typography>
        <Container maxWidth="md" sx={{ textAlign: "center"}}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          component={Link} 
          to="/shop"
          sx={{fontFamily: "'Dancing Script', cursive",
            fontSize: "1.6rem",
          }}
        >
          Shop Now
        </Button>
        
        </Container>

      </Container>
    </Box>
    );
}
export default PrintShopSection;


