import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from '../images/navbarlogo.png';
import './../styles/Navbar.css';

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState('Home');
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    window.location.href = `#${tab}`; // Scrolls to the tab's section
    handleMenuClose(); // Close menu after clicking
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: 'hsl(257, 34.20%, 47.60%)',
        width: '100%',
        boxSizing: 'border-box'
      }}>
      <Toolbar
        id="toolbar"
        sx={{
          width: '100%',
          padding: '0 16px',
          minHeight: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxSizing: 'border-box'
        }}>
        {/* Logo Section */}
        <div
          className="navbar-logo"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <a href="/">
            <img src={logo} aria-label="logo" height="50px" data-testid="App-logo" />
          </a>
        </div>

        {/* Menu Icon (for mobile) */}
        <IconButton
          id="menu-button"
          onClick={handleMenuClick}
          size="large"
          color="inherit"
          sx={{ display: { xs: 'block', md: 'none' } }} // Only show on small screens
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Navbar Menu */}
        {/* Mobile Navbar Menu */}
        <Menu
          id="menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiPaper-root': {
              backgroundColor: 'white', // Set dropdown background to white
              color: 'black' // Ensure text remains visible
            }
          }}>
          {['Home', 'About', 'Agenda', 'Sponsors', 'FAQ'].map((tab) => (
            <MenuItem key={tab} onClick={() => handleTabChange(tab === 'Home' ? 'Hero' : tab)}>
              {tab}
            </MenuItem>
          ))}
          <MenuItem
            onClick={() => window.open('https://linktr.ee/girlsinsteamorg', '_blank')}
            sx={{
              color: '#7D5390',
              backgroundColor: 'white',
              textAlign: 'center'
            }}>
            Buy Tickets
          </MenuItem>
        </Menu>

        {/* Navbar Buttons (hidden on small screens) */}
        <div
          className="navbar-buttons"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexGrow: 1,
            overflow: 'hidden',
            paddingLeft: '10px'
          }}>
          {['Home', 'About', 'Agenda', 'Sponsors', 'FAQ'].map((tab) => (
            <Button
              key={tab}
              onClick={() => handleTabChange(tab === 'Home' ? 'Hero' : tab)}
              sx={{
                textTransform: 'none',
                mx: 2,
                fontSize: '1.2rem',
                backgroundColor: 'transparent',
                color: activeTab === tab ? 'white' : 'lightgrey',
                fontWeight: 700,
                '&:hover': { color: 'white', textDecoration: 'underline' }
              }}>
              {tab}
            </Button>
          ))}
          <Button
            onClick={() =>
              window.open('https://www.bouncelife.com/events/67a6e2324801cd5a252d1aa8', '_blank')
            }
            sx={{
              backgroundColor: '#7D5390',
              color: 'white',
              borderRadius: 4,
              fontWeight: 700,
              boxShadow: '0 0 10px white',
              '&:hover': { boxShadow: '0 0 15px white' }
            }}
            variant="contained">
            Buy Tickets
          </Button>
        </div>
      </Toolbar>
    </Box>
  );
}
