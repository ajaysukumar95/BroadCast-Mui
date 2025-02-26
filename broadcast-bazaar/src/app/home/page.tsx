"use client"; // Needed for MUI components in Next.js

import { Container } from "@mui/material";
import Navbar from "../component/navingationBar";
import HeroBanner from "../component/heroBanner";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <HeroBanner/>
    </Container>
  );
}