"use client";
import { useState } from "react";
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  useMediaQuery, 
  useTheme 
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

const Navbar: React.FC  = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: "Subscription", isButton: false },
    { text: "Contact Us", isButton: false },
    { text: "Streamer Login", isButton: true }
  ];

  const drawer = (
    <Box sx={{ width: 250, p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton 
              sx={{ 
                py: 1.5,
                borderRadius: item.isButton ? "8px" : "0px",
                border: item.isButton ? `1px solid ${theme.palette.primary.main}` : "none",
                mt: item.isButton ? 2 : 0,
                color: item.isButton ? "primary.main" : "text.primary",
              }}
            >
              {item.text}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
      <Toolbar sx={{ minHeight: 40, px: { xs: 2, sm: 3, md: 0 }, justifyContent: "space-between" }}>
        {/* Logo on the Left */}
        <Image src="/images/Logo.svg" alt="Logo" width={isMobile ? 150 : 180} height={isMobile ? 35 : 40} />

        {/* Desktop Navigation */}
        {!isMobile && (
          <>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button 
                variant="text" 
                sx={{
                  textTransform: "none", 
                  color: "text.primary", 
                  letterSpacing: 0,
                  fontSize: "16px",
                  fontWeight: 400,
                  padding: "0 21px",
                  "&:hover": { background: "none" }
                }} 
                disableRipple
              >
                Subscription
              </Button>
              <Button 
                variant="text" 
                sx={{
                  textTransform: "none", 
                  color: "text.primary", 
                  letterSpacing: 0,
                  fontSize: "16px",
                  fontWeight: 400,
                  padding: "0 21px",
                  "&:hover": { background: "none" }
                }} 
                disableRipple
              >
                Contact Us
              </Button>
              <Button 
                variant="outlined" 
                color="primary" 
                sx={{
                  textTransform: "none", 
                  letterSpacing: 0,
                  fontSize: "16px",
                  fontWeight: 400,
                  padding: "4px 17px",
                  borderRadius: "8px",
                  marginLeft: "21px"
                }}
              >
                Streamer Login
              </Button>
            </Box>
          </>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton
            
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ ml: 'auto',color:"text.primary" }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;