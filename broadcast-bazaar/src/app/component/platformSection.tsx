import React from 'react';
import Image from 'next/image';
import { Grid, Typography, Box } from '@mui/material';

const PlatformSection: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Typography variant="h4" sx={{ fontSize: "40px", fontWeight: "600", textAlign: "center",p:3 }} gutterBottom>
                A Unified Platform for <br/>
                <Typography component="span" sx={{ color: (theme) => theme.palette.primary.main, fontSize: "40px", fontWeight: 600, lineHeight: "40px" }}> Shoppers </Typography>
                 and 
                <Typography component="span" sx={{ color: (theme) => theme.palette.primary.main, fontSize: "40px", fontWeight: 600, lineHeight: "40px" }}> Streamers</Typography>
            </Typography>
            <Grid container spacing={2} sx={{p:2}}>
                {/* First Row */}
                <Grid item xs={12} md={5}>
                    <Image src='/images/experienceLeft.png' alt='Mobile' width={440} height={608}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                        Description 1
                    </Typography>
                    <Typography variant="body1">
                        This is the description for the first image. It provides detailed information about the content shown in the image.
                    </Typography>
                </Grid>

                {/* Second Row */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                        Description 2
                    </Typography>
                    <Typography variant="body1">
                        This is the description for the second image. It provides detailed information about the content shown in the image.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src="path/to/your/image2.jpg" alt="Description 2" style={{ width: '100%' }} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default PlatformSection;