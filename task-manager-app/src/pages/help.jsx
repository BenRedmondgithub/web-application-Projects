import { Container, Typography } from "@mui/material";

export default function About() {
    return (
        <Container>
        <Typography variant="h4" component="h1" gutterBottom>
            Help Page
        </Typography>
        <Typography>
            This is a simple task manager app built with React and Material-UI.
        </Typography>
    </Container>
    );
}
