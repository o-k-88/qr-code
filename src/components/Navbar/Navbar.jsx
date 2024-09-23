import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
      <List>
        <ListItem component={Link} to="/" button="true">
          <ListItemText primary="QR Generator" />
        </ListItem>
        <ListItem component={Link} to="/scanner" button="true">
          <ListItemText primary="QR Scanner" />
        </ListItem>
        <ListItem component={Link} to="/scanner-history" button="true">
          <ListItemText primary="Scanner History" />
        </ListItem>
        <ListItem component={Link} to="/generate-history" button="true">
          <ListItemText primary="Generate History" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          QR App
        </Typography>
        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button color="inherit" component={Link} to="/">
              QR Generator
            </Button>

            <Button color="inherit" component={Link} to="/scanner">
              QR Scanner
            </Button>
            <Button color="inherit" component={Link} to="/scanner-history">
              Scanner History
            </Button>
            <Button color="inherit" component={Link} to="/generate-history">
              Generate History
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
