"use client"; // Needed for MUI components in Next.js

import { Container, Box } from "@mui/material";
import Navbar from "../component/navingationBar";
import HeroBanner from "../component/heroBanner";
import SaleStatsSection from "../component/saleStatsSection";
import PlatformSection from "../component/platformSection";
import StreamerToolsSection from "../component/streamerToolsSection";

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
            <Container maxWidth="lg">
                <SaleStatsSection />
                <PlatformSection />
            </Container>
            <Box sx={{ background: "#F2F4F7", width: "100%" }}>
                <Container maxWidth="lg">
                    <StreamerToolsSection />
                </Container>
            </Box>
        </>
    );
}