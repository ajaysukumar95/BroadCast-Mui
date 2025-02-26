"use client"; // Needed for MUI components in Next.js

import { Container, Typography, Button } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h2" fontWeight="bold">
        Welcome to Next.js with MUI
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        This is a starter template for using Material UI in a Next.js 14 application.
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 3 }}>
        Get Started
      </Button>
    </Container>
  );
}