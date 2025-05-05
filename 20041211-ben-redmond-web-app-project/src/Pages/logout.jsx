import React, { useEffect } from "react"; // Import useEffect
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Logout = () => { 
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("user");
        localStorage.removeItem("Cart");

        const timer = setTimeout(() => {
            navigate("/login");
        }, 3000); // Redirect after 3 seconds

        return () => clearTimeout(timer);
    }, [navigate]); // Correct dependency array

    return (
        <Container maxWidth="xs" sx={{ textAlign: "center", marginTop: "20px" }}>
            <Box sx={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
                <Typography variant="h5" gutterBottom>
                    You have been logged out.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Redirecting to login page...
                </Typography>
                <Button variant="contained" color="primary" onClick={() => navigate("/login")}>
                    Go to Login
                </Button>
            </Box>
        </Container>
    );
};

export default Logout;
