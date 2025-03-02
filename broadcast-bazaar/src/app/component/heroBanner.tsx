import React from 'react';
import { Box, Grid, Typography, Card } from '@mui/material';
import StoreButton from './storeButton';
import Image from 'next/image';
import { useMediaQuery } from '@mui/material';

const cards = [
    { title: "Watch live product demos and discover unique items in real time", image: "/images/watchIcon.svg", description: "This is card 1", background: "transparent linear-gradient(121deg, #FFFFFF 0%, #FFFFFF00 100%) 0% 0% no-repeat padding-box;" },
    { title: "Interact with streamers, ask questions, and get instant answers", image: "/images/chatIcon.svg", description: "This is card 2", backgroud: " transparent linear-gradient(239deg, #FFFFFF 0%, #FFFFFF00 100%) 0% 0% no-repeat padding-box;" },
    { title: "Enjoy exclusive deals, discounts, and limited-time offers", image: "/images/offerIcon.svg", description: "This is card 3", background: "transparent linear-gradient(239deg, #FFFFFF 0%, #FFFFFF00 100%) 0% 0% no-repeat padding-box;" },
    { title: "Seamless, instant purchases while watching your favorite streamers", image: "/images/deliveryIcon.svg", description: "This is card 4", background: "transparent linear-gradient(121deg, #FFFFFF 0%, #FFFFFF00 100%) 0% 0% no-repeat padding-box;" }
];


const HeroBanner: React.FC = () => {

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

    const getSize = () => {
        if (isMobile) return { width: 300, height: 400 }; // Mobile size
        if (isTablet) return { width: 300, height: 450 }; // iPad size
        return { width: 455, height: 645 }; // Default (Desktop)
    };

    const { width, height } = getSize();
    return (
        <Box sx={{ paddingTop: "48px", paddingBottom: "75px" }}>
            <Typography variant="h1" fontWeight="bold" textAlign="left" sx={{ fontSize: {xs:"40px",md:"65px"}, fontWeight: 600, letterSpacing: 0,textAlign:{xs:"center",sm:"left"} }}>
                Where Shopping Meets Streaming.
            </Typography>
            <Typography variant="h1" color='primary' fontWeight="bold" textAlign="left" sx={{ fontSize: {xs:"35px",md:"65px"}, fontWeight: 600, letterSpacing: 0, paddingTop: "4px", paddingBottom: "20px",textAlign:{xs:"center",sm:"left"}  }}>
                Buy Live - Sell Live
            </Typography>
            <Grid container spacing={2}>
                <Grid item sm={6} md={6}>
                    <Typography variant="h4" textAlign="left" sx={{ fontSize: '24px', fontWeight: 400, letterSpacing: 0, fontFamily: 'Outfit, sans-serif', paddingBottom: "20px",textAlign:{xs:"center",sm:"left"}  }}>
                        Experience shopping like never before – real-time product demos, instant purchases, and the thrill of live sales!
                    </Typography>
                    <Box sx={{textAlign:{xs:"center",sm:"left"} }}> 
                        <StoreButton />
                    </Box>
                    <Grid item sm={6} sx={{ display: {xs:"flex",sm:"none"}, justifyContent: "center",alignItems: "center" }}>
                    <Image src="/images/heroMobile.png" alt="Hero Banner Image" width={width} height={height} />
                </Grid>
                    <Grid container spacing={2} sx={{ padding: "32px 0" }}>
                        {cards.map((card, index) => (
                            <Grid item xs={12} sm={6} key={index}
                            sx={{
                                mt: { xs: 0, sm: index % 2 !== 0 ? 2 : 0 },
                              }}> {/* 2 columns on small+ screens */}
                                <Card sx={{ display: "flex", flexDirection: "column", alignItems: "left", textAlign: "left", padding: "24px", maxWidth: {sm:"345px",md:"265px"}, background: `${card.background}`, borderRadius: "16px" }} elevation={0}>
                                    <Image src={card.image} alt={card.title} width={24} height={24} />
                                    <Typography sx={{ paddingTop: "16px", fontSize: "16px", letterSpacing: "0px", fontWeight: 400, color: (theme) => theme.palette.text.secondary }} variant="body2" fontWeight="bold">{card.title}</Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item sm={6} sx={{ display: {xs:"none",sm:"flex"}, justifyContent: "right",alignItems: "center" }}>
                    <Image src="/images/heroMobile.png" alt="Hero Banner Image" width={width} height={height} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default HeroBanner;