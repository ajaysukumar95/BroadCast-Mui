"use client"; // Needed for MUI components in Next.js

import { Container, Box } from "@mui/material";
import Navbar from "../component/navingationBar";
import HeroBanner from "../component/heroBanner";

export default function Home() {
    return (
        <>
            <Container maxWidth="lg">
                <Navbar />
            </Container>
            <Box sx={{ width: "100%", backgroundImage: "url('/images/heroBackground.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <Container maxWidth="lg">
                    <HeroBanner />
                </Container>
            </Box>
        </>
    );
}