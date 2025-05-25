import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

export default function Admindashboard() {
    const [messages, setMessages] = useState([]);
    const [bookings, setBookings] = useState([]); 

    useEffect(() => {
        fetch('/api/messages')
            .then(response => response.json())
            .then(data => setMessages(data))
            .catch(error => console.error('Error fetching messages:', error));

        fetch('/api/bookings')
            .then(response => response.json())
            .then(data => setBookings(data))
            .catch(error => console.error('Error fetching bookings:', error));
    }, []);

    return (
        <Container>
            <Typography variant="h5">
                Admin Dashboard
            </Typography>

            <Typography variant="h6" className="mt-4">
                Messages
            </Typography>

            {messages.map((msg) => (
                <Paper className="mb-3" key={msg.id}>
                    <Box p={2}>
                        <Typography variant="body1"><strong>Name:</strong> {msg.name}</Typography>
                        <Typography variant="body1"><strong>Email:</strong> {msg.email}</Typography>
                        <Typography variant="body1"><strong>Message:</strong> {msg.message}</Typography>
                    </Box>
                </Paper>
            ))}

            <Divider className="my-4" />

            <Typography variant="h6">
                Bookings
            </Typography>
            
            {bookings.map((session) => (
                <Paper key={session.id} className="mb-3">
                    <Box p={2}>
                        <Typography variant="body1"><strong>Name:</strong> {session.name}</Typography>
                        <Typography variant="body1"><strong>Email:</strong> {session.email}</Typography>
                        <Typography variant="body1"><strong>Shot Type:</strong> {session.shotType}</Typography>
                        <Typography variant="body1"><strong>Date:</strong> {session.date}</Typography>
                        <Typography variant="body1"><strong>Message:</strong> {session.message}</Typography>
                    </Box>
                </Paper>
            ))}
        </Container>
    );
}