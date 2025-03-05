import React from 'react';
import Image from 'next/image';
import { Typography, Box, Container } from '@mui/material';


const SaleStatsSection: React.FC = () => {
    const saleStats = [{ icon: '/images/coinImage.svg', title: "Higher Conversion Rates", stats: "4x" },
    { icon: '/images/statsImage.svg', title: "Increased Customer Engagement", stats: "5x" },
    { icon: '/images/chartImage.svg', title: "Higher Average Order Value", stats: "30%" }];

    const saleStatsChips = [{ numbers: "50%", title: "Higher Conversion Rates" },
    { numbers: "30%", title: "Higher Conversion Rates" },
    { numbers: "80%", title: "Higher Conversion Rates" },
    { numbers: "3x", title: "Higher Conversion Rates" },
    { numbers: "65%", title: "Higher Conversion Rates" },
    { numbers: "40%", title: "Higher Conversion Rates" },
    { title: "Higher Conversion Rates" }];
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }} p={2}>
                <Typography variant="h4" gutterBottom sx={{ fontSize: "40px", fontWeight: 600, lineHeight: "40px",textAlign:"center" }}>
                    Maximize Your <Typography component="span" sx={{ color: (theme) => theme.palette.primary.main, fontSize: "40px", fontWeight: 600, lineHeight: "40px" }}>Sales</Typography> with Live Shopping
                </Typography>
                <Typography variant="h6" sx={{ fontSize: "16px", fontWeight: "400",textAlign:{xs:"center",md:"left"} }} gutterBottom>
                    Outperform Traditional e-Commerce with Real-Time Engagement
                </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-evenly" }} p={2}>
                {saleStats.map((stat, index) => (
                    <Box key={index} sx={{ textAlign: "center" }} className="stat" mb={2}>
                        <Image src={stat.icon} alt={stat.title} width={24} height={24} />
                        <Typography sx={{ fontSize: "40px", fontWeight: 600, lineHeight: "32px", padding: "8px" }} variant="h6">{stat.stats}</Typography>
                        <Typography sx={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px" }} variant="body1">{stat.title}</Typography>
                    </Box>
                ))}
            </Box>
            <Container maxWidth="lg">
                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }} p={2}>
                    {saleStatsChips.map((chip, index) => (
                        <Box key={index} sx={{ mr: 2, mb: 2,display:"flex", background: "#f9fafb", padding: "14px" }}>
                            <Box>
                                <Typography sx={{ fontSize: "16px", fontWeight: 600, lineHeight: "24px",mr:1 }} variant="body2" color="black">{chip.numbers}</Typography>
                            </Box>
                            <Typography sx={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px" }} variant="body1">{chip.title}</Typography>
                        </Box>
                    ))}
                </Box>
            </Container>

        </>
    );
};

export default SaleStatsSection;