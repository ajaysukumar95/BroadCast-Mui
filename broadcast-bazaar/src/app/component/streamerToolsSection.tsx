import React from 'react';
import { Box, Card, Grid, Typography } from '@mui/material';
// import Icon from '@mui/icons-material/Star'; // Replace with your desired icon
import Image from 'next/image'; // Assuming you're using Next.js for image optimization

const cards = [
    { title: "Schedule Live Streams", image: "/images/icon1.svg", description: "Plan your streams ahead to maximize audience reach" },
    { title: "Inventory Management", image: "/images/icon2.svg", description: "Effortlessly track and organize products for seamless live sales2" },
    { title: "Order Management", image: "/images/icon3.svg", description: "Stay on top of all orders in real time during live sessions" },
    { title: "Detailed Earnings Insights", image: "/images/icon5.svg", description: "Access comprehensive earnings data to track your growth" },
    { title: "Badges", image: "/images/icon10.svg", description: "Earn rewards as you achieve streaming milestones" },
    { title: "Real-Time Analytics", image: "/images/icon14.svg", description: "Create special offers to boost sales and retention" },
    { title: "Discounts", image: "/images/icon6.svg", description: "Create special offers to boost sales and retention" },
    { title: "Promotions", image: "/images/icon11.svg", description: "Easily promote past streams or your channel" },
    { title: "Past Streams", image: "/images/icon16.svg", description: "Access a library of past streams to review or reactivate content" },
    { title: "Invoices", image: "/images/icon4.svg", description: "Manage invoices for every order and subscription with ease" },
    { title: "Device Management", image: "/images/icon15.svg", description: "Control and manage devices linked to your streaming account" },
    { title: "Influencer Collaboration", image: "/images/icon9.svg", description: "Seamlessly switch to influencer mode to partner with brands" },
    { title: "Support Tickets", image: "/images/icon7.svg", description: "Raise complaints directly to the admin for swift issue resolution" },
    { title: "Chat", image: "/images/icon8.svg", description: "Interact with users to build connections and enhance loyalty" },
    { title: "Notifications", image: "/images/icon12.svg", description: "Receive instant alerts for orders, messages, and stream updates" },
    { title: "Coins & Rewards", image: "/images/icon13.svg", description: "Earn coins that can be redeemed for future purchases" }
];

const StreamerToolsSection: React.FC = () => {
    return (
        <Box sx={{ textAlign: 'center', padding: "40px 0" }}>
            <Typography variant="h4" sx={{ fontSize: "40px", fontWeight: "600", textAlign: "center", p: 3 }} gutterBottom>
                Empowering Streamers with
                <Typography component="span" sx={{ color: (theme) => theme.palette.primary.main, fontSize: "40px", fontWeight: 600, lineHeight: "40px" }}> Essential Tools for Success </Typography>
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px", pb: 7,maxWidth:"800px",margin:"auto" }}>
                From inventory management to real-time analytics, our app equips you with everything needed to deliver engaging live sales, streamline operations, and maximize earnings. Discover features designed to elevate your streaming business and connect with your audience like never before.
            </Typography>
            <Grid container spacing={2}>
                {cards.map((card, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card elevation={0} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start',textAlign:"left", padding: '20px 24px', background: "transparent linear-gradient(122deg, #FFFFFF 0%, #FFFFFF00 100%) 0% 0% no-repeat" }}>
                            <Image src={card.image} alt={card.title} width={24} height={24} />
                                <Typography sx={{fontSize:"16px",fontWeight:'500',textAlign:"left",paddingTop:"16px",paddingBottom:"12px"}}>{card.title}</Typography>
                                <Typography sx={{fontSize:"17px",fontWeight:'400',textAlign:"left",color:'#475467'}}>
                                    {card.description}
                                </Typography>
                            
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default StreamerToolsSection;
