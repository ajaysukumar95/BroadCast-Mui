import React from 'react';
import Image from 'next/image';
import { Grid, Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import StoreButton from './storeButton';

const PlatformSection: React.FC = () => {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isSm = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

    const getImageSize = () => {
        if (isXs) return { width: 220, height: 304,width1:300, height1:300 }; // Size for xs
        if (isSm) return { width: 330, height: 456,width1:300, height1:300 }; // Size for sm
        return { width: 440, height: 608,width1:592,height1:640 }; // Default size
    };

    const { width,width1, height,height1 } = getImageSize();

    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Typography variant="h4" sx={{ fontSize: "40px", fontWeight: "600", textAlign: "center", p: 3 }} gutterBottom>
                A Unified Platform for <br />
                <Typography component="span" sx={{ color: (theme) => theme.palette.primary.main, fontSize: "40px", fontWeight: 600, lineHeight: "40px" }}> Shoppers </Typography>
                and
                <Typography component="span" sx={{ color: (theme) => theme.palette.primary.main, fontSize: "40px", fontWeight: 600, lineHeight: "40px" }}> Streamers</Typography>
            </Typography>
            <Grid container spacing={2} sx={{ p: 2, display: { xs: "none", md: "flex" } }}>
                {/* First Row */}
                <Grid item xs={12} md={5}>
                    <Image src='/images/experienceLeft.png' alt='Mobile' width={440} height={608} />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", marginTop: "80px" }}>
                    <Image src='/images/BrLogo.svg' alt='Mobile' width={40} height={40} />
                    <Typography variant="h6" sx={{ fontSize: '24px', fontWeight: 600, lineHeight: "40px", paddingTop: '16px' }} gutterBottom>
                        Shop with Ease, Anytime, Anywhere
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px" }}>
                        Watch live streams, discover products, and make purchases with just a few taps. Our app brings your favorite stores and influencers straight to your screen, letting you engage, shop, and enjoy exclusive deals in real-time.
                    </Typography>
                    <StoreButton />
                </Grid>

                {/* Second Row */}
                <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", marginTop: "-40px" }}>
                    <Image src='/images/BrLogo.svg' alt='Mobile' width={40} height={40} />
                    <Typography variant="h6" sx={{ fontSize: '24px', fontWeight: 600, lineHeight: "40px", paddingTop: '16px' }} gutterBottom>
                        Connect, Sell, and Earn on the Go
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px" }}>
                        Take your store live, connect with your audience, and increase sales all from your mobile device. Manage your live streams, track orders, and interact with buyers to create a dynamic shopping experience.
                    </Typography>
                    <StoreButton />
                </Grid>
                <Grid item xs={12} md={6} sx={{ marginTop: "-100px" }}>
                    <Image src='/images/experienceRight.png' alt='Mobile' width={592} height={640} />
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ p: 2, display: { xs: "flex", md: "none" } }}>
                {/* First Row */}
                <Grid item xs={12} sx={{textAlign:"center"}}>
                    <Image src='/images/experienceLeft.png' alt='Mobile' width={width} height={height} />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", marginTop: "-80px" }}>
                    <Image src='/images/BrLogo.svg' alt='Mobile' width={40} height={40} />
                    <Typography variant="h6" sx={{ fontSize: '24px', fontWeight: 600, lineHeight: "40px", paddingTop: '16px' }} gutterBottom>
                        Shop with Ease, Anytime, Anywhere
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px" }}>
                        Watch live streams, discover products, and make purchases with just a few taps. Our app brings your favorite stores and influencers straight to your screen, letting you engage, shop, and enjoy exclusive deals in real-time.
                    </Typography>
                    <StoreButton />
                </Grid>
                
                <Grid item xs={12} sx={{ marginTop: "20px",textAlign:"center" }}>
                    <Image src='/images/experienceRight.png' alt='Mobile' width={width1} height={height1} />
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", marginTop: "-100px" }}>
                    <Image src='/images/BrLogo.svg' alt='Mobile' width={40} height={40} />
                    <Typography variant="h6" sx={{ fontSize: '24px', fontWeight: 600, lineHeight: "40px", paddingTop: '16px' }} gutterBottom>
                        Connect, Sell, and Earn on the Go
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px" }}>
                        Take your store live, connect with your audience, and increase sales all from your mobile device. Manage your live streams, track orders, and interact with buyers to create a dynamic shopping experience.
                    </Typography>
                    <StoreButton />
                </Grid>
            </Grid>
        </Box>
    );
};

export default PlatformSection;