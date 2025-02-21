import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import './../styles/Footer.css';
import whiteLogo from './../images/white-gis-logo.png';

import './../../fonts/JosefinSans-VariableFont_wght.ttf';

export default function Footer() {
  return (
    // <Paper className="App-footer" sx={{ marginTop: 'calc(10% + 60px)', bottom: 0 }} component="footer" square variant="outlined">
    // <Paper className="App-footer" component="footer">
    //     <Container maxWidth="lg">
    //         <div className="footer-text">
    //             <header>girls in STEAM</header>
    //             <Typography
    //                 sx={{
    //                     color: "#FFFFFF",
    //                 }}
    //                 className="font"
    //             >
    //                 Supporting access to STEAM education for girls, gender-diverse people, and the LGBTQ+ community.
    //             </Typography>
    //         </div>
    //         <div className="Quick-links">
    //             <Typography
    //                 sx={{
    //                     color: "#FFFFFF",
    //                 }}
    //                 className="font"
    //             >
    //                 Quick Links
    //             </Typography>
    //             <a href="/">Home</a>
    //             <a href="/">About Us</a>
    //             <a href="/">Our Values</a>
    //             <a href="/">Events</a>
    //             <a href="/">Resources</a>
    //             <a href="/">Newsletter</a>
    //         </div>
    //         <div className="Support">
    //             <Typography
    //                 sx={{
    //                     color: "#FFFFFF",
    //                 }}
    //                 className="font"
    //             >
    //                 Support
    //             </Typography>
    //             <a href="/">Become a Sponsor</a>
    //             <a href="/">Work With Us</a>
    //             <a href="/">Donate</a>
    //             <a href="/">FAQ</a>
    //             <a href="/">Join GIS</a>
    //         </div>

    //         <Box
    //             sx={{
    //                 flexGrow: 1,
    //                 justifyContent: "center",
    //                 display: "flex",
    //                 my: 1
    //             }}

    //         >

    //         </Box>

    //         <Box
    //             sx={{
    //                 flexGrow: 1,
    //                 justifyContent: "center",
    //                 display: "flex",
    //                 mb: 2,
    //             }}
    //         >
    //             <Typography variant="caption" color="initial">
    //                 © 2023 by Girls in STEAM
    //             </Typography>
    //         </Box>
    //     </Container>

    // </Paper>
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) => theme.palette.primary.dark,
        p: 6
      }}>
      <Container maxWidth="lg">
        <Grid container spacing={1} textAlign="left">
          <Grid item xs={12} sm={2} textAlign="right" style={{ paddingRight: '10px' }}>
            <img
              src={whiteLogo}
              alt="White Girls in STEAM logo"
              style={{ width: '80%', maxWidth: '100px', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} sm={6} style={{ paddingRight: '50px' }}>
            <Typography variant="h6" fontWeight={700}>
              girls in STEAM
            </Typography>
            <Typography variant="body2" style={{ maxWidth: '400px' }}>
              Supporting access to STEAM education for girls, gender-diverse students, and the
              LGBTQ+ community.
            </Typography>
            <Typography variant="body2" style={{ marginTop: '30px' }}>
              {'© '}
              {new Date().getFullYear()}
              {' by Girls in STEAM'}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" fontWeight={700} fontSize="1rem">
              QUICK LINKS
            </Typography>
            <Link href="#Hero" variant="subtitle1" color="#FFFFFF">
              Home
            </Link>
            <br />
            <Link href="#About" variant="subtitle1" color="#FFFFFF">
              About The Conference
            </Link>
            <br />
            <Link href="#Agenda" variant="subtitle1" color="#FFFFFF">
              Agenda
            </Link>
            <br />
            {/* <Link href="/" variant="subtitle1">Events</Link><br /> */}
            {/* <Link href="/" variant="subtitle1">Resources</Link><br /> */}
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" fontWeight={700} fontSize="1rem">
              SUPPORT
            </Typography>
            <Link href="#FAQ" variant="subtitle1" color="#FFFFFF">
              FAQ
            </Link>
            <br />
            <Link
              href="mailto:UBC.sponsorship@girlsinsteam.org"
              variant="subtitle1"
              color="#FFFFFF">
              Sponsor Us
            </Link>
            <br />
            {/* <Link href="/" variant="subtitle1">Donate</Link><br /> */}
            {/* <Link href="/" variant="subtitle1">Become a Sponsor</Link><br /> */}
            {/* <Link href="/" variant="subtitle1">FAQ</Link><br /> */}
            {/* <Link href="/" variant="subtitle1">Join GIS</Link><br /> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
