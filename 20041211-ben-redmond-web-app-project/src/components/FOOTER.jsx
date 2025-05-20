import React from 'react'
import { Box, Typography, Button } from '@mui/material' // Added Button import
import Instagram from '@mui/icons-material/Instagram'
import Facebook from '@mui/icons-material/Facebook'

export default function FOOTER() {
  return (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#f5f5f5',
            textAlign: 'center',
            minHeight: '33vh',
            padding: 6,
        }}
    >
      <Box>
           <Typography variant='body2' gutterBottom sx={{ fontFamily: "'Reenie Beanie', cursive", fontSize: "2rem" }}>
            © 2025 Ben Redmond. All rights reserved
            </Typography>

            <Typography variant='body2' gutterBottom sx={{ fontFamily: "'Reenie Beanie', cursive", fontSize: "1.9rem" }}> 
                Website by Ben Redmond 
            </Typography>

            <Typography variant='body2' gutterBottom sx={{ fontFamily: "'Reenie Beanie', cursive", fontSize: "1.7rem" }}> 
                Follow me on social media: 📷 
            </Typography> 
        </Box>

        <Box sx={{ mt: 2 }}>
            <Button
                variant="outlined"
                startIcon={<Instagram />}
                href="https://www.instagram.com/benrdslr/"
                target="_blank"
                rel="noopener"
                sx={{ 
                    mx: 1, 
                    color: '#000', 
                    borderColor: '#000',
                    fontFamily: "'Reenie Beanie', cursive"
                 }}
            >
                Instagram
            </Button>

            <Button 
                variant="outlined"
                startIcon={<Facebook />}
                href="https://www.facebook.com/benredmondphotography"
                target="_blank"
                rel="noopener"
                sx={{ 
                    mx: 1, 
                    color: '#000', 
                    borderColor: '#000', 
                    fontFamily: "'Reenie Beanie', cursive"}} // Fixed typo in borderColor
            >
                Facebook
            </Button>
        </Box>
    </Box>
  )
}

