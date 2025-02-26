import React from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

const cards = [
    { title: "Card 1", image: "/images/card1.jpg", description: "This is card 1" },
    { title: "Card 2", image: "/images/card2.jpg", description: "This is card 2" },
    { title: "Card 3", image: "/images/card3.jpg", description: "This is card 3" },
    { title: "Card 4", image: "/images/card4.jpg", description: "This is card 4" }
];

const HeroBanner: React.FC = () => {
    return (
        <Box sx={{ paddingTop: "48px", paddingBottom: "75px" }}>
            <Typography variant="h1" fontWeight="bold" textAlign="left" sx={{ fontSize: '64px', fontWeight: 600, letterSpacing: 0 }}>
                Where Shopping Meets Streaming.
            </Typography>
            <Typography variant="h1" color='primary' fontWeight="bold" textAlign="left" sx={{ fontSize: '64px', fontWeight: 600, letterSpacing: 0, paddingTop: "4px", paddingBottom: "20px" }}>
                Buy Live - Sell Live
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Typography variant="h4" textAlign="left" sx={{ fontSize: '24px', fontWeight: 400, letterSpacing: 0, fontFamily: 'Roboto, sans-serif' }}>
                        Experience shopping like never before – real-time product demos, instant purchases, and the thrill of live sales!
                    </Typography>
                    <Grid container spacing={2}>
                        {cards.map((card, index) => (
                            <Grid item xs={12} sm={6} key={index} 
                            sx={{ mt: index % 2 !== 0 ? 2 : 0 }}> {/* 2 columns on small+ screens */}
                                <Card sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                                    <CardMedia component="img" height="140" image={card.image} alt={card.title} />
                                    <CardContent>
                                        <Typography variant="h6" fontWeight="bold">{card.title}</Typography>
                                        <Typography variant="body2" color="text.secondary">{card.description}</Typography>
                                        <Button variant="contained" sx={{ mt: 2 }}>Learn More</Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    {/* Empty column for now */}
                </Grid>
            </Grid>
        </Box>
    );
};

export default HeroBanner;