import React from 'react';
import { Typography, Box, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // Import LinkedIn icon
import { useInView } from 'react-intersection-observer'; // Import the hook
import Ashley from '../images/AshleyKairu.JPG';
import FarahSamli from '../images/FarahSamli.jpeg';

export default function KeyNote() {
  // Use the useInView hook to detect when the section is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.5 // Trigger when 50% of the section is visible
  });

  return (
    <Box
      ref={ref} // Attach the ref to the section
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
        KEYNOTE
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
            textAlign: 'center', // Left-align the rest of the text
            opacity: inView ? 1 : 0, // Fade in when in view
            transform: inView ? 'translateY(0)' : 'translateY(50px)', // Slide up when in view
            transition: 'opacity 1s ease, transform 1s ease' // Smooth transition
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
            sx={{ marginBottom: '10px', textAlign: 'center', color: '#fff' }}>
            Process Engineer (Unilia Fuel Cells Inc.), Founder (BIPOC Women’s Society)
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: '10px', textAlign: 'center', fontWeight: 'bold', color: '#fff' }}>
            Key Focus Area/Research Interest:
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'center', color: '#fff' }}>
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
            textAlign: 'center', // Left-align the rest of the text
            opacity: inView ? 1 : 0, // Fade in when in view
            transform: inView ? 'translateY(0)' : 'translateY(50px)', // Slide up when in view
            transition: 'opacity 1s ease, transform 1s ease' // Smooth transition
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
              src={FarahSamli} // Replace with actual image URL
              alt="Farah Samli"
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
              E.Farah Samli
            </Typography>
            <IconButton
              href="https://www.linkedin.com/in/efsamli/" // Replace with actual LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#0A66C2' }}>
              <LinkedInIcon />
            </IconButton>
          </Box>
          {/* Left-Aligned Text */}
          <Typography
            variant="body1"
            sx={{ marginBottom: '10px', textAlign: 'center', color: '#fff' }}>
            Independent Contractor (PhD, Immunology and Vaccine Delivery, BS, Applied Biological
            Sciences) + TEDx Speaker
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontStyle: 'italic', textAlign: 'center', fontWeight: 'bold', color: '#fff' }}>
            Key Focus Areas/Research Interest:
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'center', color: '#fff' }}>
            Vaccine development and commercialization, Biomedical research and innovation, Change
            management and strategic planning
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
