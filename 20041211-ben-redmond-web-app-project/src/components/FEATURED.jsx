import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function MyCardComponent() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Card Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Some description or content goes here.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MyCardComponent;