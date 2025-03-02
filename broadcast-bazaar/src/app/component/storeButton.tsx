import React from 'react';
import { Box, Button } from '@mui/material';
import Image from 'next/image';

const StoreButton: React.FC = () => {
    return (
        <Box sx={{padding:"15px 0"}}>
            <Button sx={{pl:0}}>
                <Image src="/images/appStore.svg" alt="Button 1" width={135} height={40} />
                </Button>
            <Button>
                <Image src="/images/googlePlay.svg" alt="Button 2" width={135} height={40} />
             </Button>
        </Box>
    );
};

export default StoreButton;