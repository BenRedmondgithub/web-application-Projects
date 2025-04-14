import React from "react";

import { Container, Typography, Box, Button } from "@mui/material";

function PrintShopSection() {
    return (
    <Box sx={{bgcolor: "#f5f5f5", py: 8}}> 
        <Container maxWidth="md" sx={{ textAlign: "center"}}>
            <h1>Print Shop</h1>
        <Button
          variant="contained"
          color="success"
          size="large"
          href="#"
        >
          Best Sellers
        </Button>

        <Button
            variant="contained"
            color="primary"
            size="large"
            href="#"
        >
          New Arrivals
        
        </Button>

      </Container>
    </Box>
    );
}
export default PrintShopSection;
