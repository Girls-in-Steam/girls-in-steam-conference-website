import React from 'react';
import { Typography, Box, IconButton, useMediaQuery, useTheme, Divider } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // Import LinkedIn icon
import { useInView } from 'react-intersection-observer'; // Import useInView hook

const SpeakerCard = ({ name, role, linkedinUrl, imageUrl, focusArea }) => {
  // Function to render a single panelist square with scroll animation
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1 // Trigger when 10% of the element is visible
  });
  return (
    <Box
      ref={ref}
      sx={{
        width: isMobile ? '80dvw' : '325px',
        height: isMobile ? 'auto' : '320px',
        backgroundColor: 'rgba(171, 165, 217, 0.2)', // Semi-transparent background
        borderRadius: '10px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center the image and name
        textAlign: 'center', // Left-align the rest of the text
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
        position: 'relative'
      }}>
      <IconButton
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: '#0A66C2', position: 'absolute', top: '20px', right: '20px' }}>
        <LinkedInIcon />
      </IconButton>
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
          src={imageUrl}
          alt={name}
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
          {name}
        </Typography>
      </Box>
      {/* Left-Aligned Text */}
      <Typography
        variant="body2"
        sx={{
          marginTop: '-15px',
          marginBottom: '10px',
          textAlign: 'center',
          color: '#DDDBF3'
        }}>
        {role}
      </Typography>
      <Divider sx={{ background: '#BBB7E1', width: '100%' }}></Divider>
      <Typography
        variant="body1"
        sx={{
          marginTop: '10px',
          marginBottom: '10px',
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#DDDBF3'
        }}>
        Key Focus Area/Research Interest:
      </Typography>
      <Typography variant="body2" sx={{ textAlign: 'center', color: '#DDDBF3' }}>
        {focusArea}
      </Typography>
    </Box>
  );
};

export default SpeakerCard;
