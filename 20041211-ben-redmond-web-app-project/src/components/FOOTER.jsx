import React from 'react'
import { Box, Typography, Button } from '@mui/material' // Added Button import
import Instagram from '@mui/icons-material/Instagram'
import Facebook from '@mui/icons-material/Facebook'

export default function FOOTER() {
  return (
    <Box
        sx={{
            color: '#000',
            textAlign: 'center',
            padding: '20px',
        }}
    >
      <Box>
           <Typography variant='body2' gutterBottom>
            © 2025 Ben Redmond. All rights reserved
            </Typography>

            <Typography variant='body2' gutterBottom> 
                Website by Ben Redmond 
            </Typography>

            <Typography variant='body2'> 
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
                sx={{ mx: 1, color: '#000', borderColor: '#000' }} // Fixed typo in borderColor
            >
                Instagram
            </Button>

            <Button 
                variant="outlined"
                startIcon={<Facebook />}
                href="https://www.facebook.com/benredmondphotography"
                target="_blank"
                rel="noopener"
                sx={{ mx: 1, color: '#000', borderColor: '#000' }} // Fixed typo in borderColor
            >
                Facebook
            </Button>
        </Box>
    </Box>
  )
}