import React from 'react';
import { Typography, Box, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // Import LinkedIn icon
import Ashley from '../images/AshleyKairu.JPG';

export default function KeyNote() {
  return (
    <Box
      sx={{
        background: 'radial-gradient(circle, #5E5E7F, #7777BF, #5E5E7F)',
        padding: '40px 20px',
        borderRadius: '10px',
        color: '#FFF'
      }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          color: '#E8C3D1',
          fontFamily: 'Josefin Sans',
          fontWeight: 'bold',
          marginBottom: '20px'
        }}>
        Keynote
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap'
        }}>
        {/* First Square */}
        <Box
          sx={{
            width: '400px',
            height: 'auto',
            backgroundColor: 'rgba(171, 165, 217, 0.2)', // Semi-transparent background
            borderRadius: '10px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Center the image and name
            textAlign: 'left' // Left-align the rest of the text
          }}>
          {/* Label: Opening Keynote */}
          <Typography
            variant="h5"
            sx={{
              textAlign: 'center',
              color: '#fff',
              fontFamily: 'Josefin Sans',
              fontWeight: 'bold',
              marginBottom: '10px'
            }}>
            Opening Keynote
          </Typography>
          {/* Circular Picture */}
          <Box
            sx={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              backgroundColor: '#FFF', // Placeholder for the image
              marginBottom: '10px',
              overflow: 'hidden'
            }}>
            <img
              src={Ashley}
              alt="Ashley Kairu"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
          {/* Name and LinkedIn Icon */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '10px'
            }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
              Ashley Kairu (She/Her)
            </Typography>
            <IconButton
              href="https://www.linkedin.com/in/ashleykairu/" // Replace with actual LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#0A66C2' }}>
              <LinkedInIcon />
            </IconButton>
          </Box>
          {/* Left-Aligned Text */}
          <Typography
            variant="body1"
            sx={{ marginBottom: '10px', textAlign: 'left', color: '#fff' }}>
            Process Engineer (Unilia Fuel Cells Inc.), Founder (BIPOC Women’s Society)
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: '10px', textAlign: 'left', fontWeight: 'bold', color: '#fff' }}>
            Key Focus Area/Research Interest:
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'left', color: '#fff' }}>
            Catalyst coated membranes for fuel cell applications for heavy-duty vehicles
          </Typography>
        </Box>

        {/* Second Square */}
        <Box
          sx={{
            width: '400px',
            height: 'auto',
            backgroundColor: 'rgba(171, 165, 217, 0.2)', // Semi-transparent background
            borderRadius: '10px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Center the image and name
            textAlign: 'left' // Left-align the rest of the text
          }}>
          {/* Label: Closing Keynote */}
          <Typography
            variant="h5"
            sx={{
              textAlign: 'center',
              color: '#fff',
              fontFamily: 'Josefin Sans',
              fontWeight: 'bold',
              marginBottom: '10px'
            }}>
            Closing Keynote
          </Typography>
          {/* Circular Picture */}
          <Box
            sx={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              backgroundColor: '#FFF', // Placeholder for the image
              marginBottom: '10px',
              overflow: 'hidden'
            }}>
            <img
              src="https://via.placeholder.com/100" // Replace with actual image URL
              alt="Panelist"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
          {/* Name and LinkedIn Icon */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '10px'
            }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
              [Name Here]
            </Typography>
            <IconButton
              href="https://www.linkedin.com" // Replace with actual LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#0A66C2' }}>
              <LinkedInIcon />
            </IconButton>
          </Box>
          {/* Left-Aligned Text */}
          <Typography
            variant="body1"
            sx={{ marginBottom: '10px', textAlign: 'left', color: '#fff' }}>
            [Role/Title Here]
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontStyle: 'italic', textAlign: 'left', fontWeight: 'bold', color: '#fff' }}>
            Key Focus Areas/Research Interest:
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'left', color: '#fff' }}>
            [Details Here]
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
