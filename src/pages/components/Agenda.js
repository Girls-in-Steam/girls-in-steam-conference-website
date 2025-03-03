import React from 'react';
import { Typography, Box } from '@mui/material';

export default function Agenda() {
  return (
    <Box
      sx={{
        padding: '40px 20px',
        borderRadius: '10px',
        color: '#FFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center the entire agenda horizontally
        justifyContent: 'center', // Center the entire agenda vertically
        minHeight: '100vh'
      }}>
      {/* Agenda Title */}
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          color: '#E8C3D1',
          fontFamily: 'Josefin Sans',
          fontWeight: 'bold',
          marginBottom: '40px',
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } // Responsive font size
        }}>
        AGENDA
      </Typography>

      {/* Agenda Items */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          maxWidth: '800px',
          width: '100%', // Ensure it takes full width on smaller screens
          padding: { xs: '0 10px', sm: '0 20px' } // Add padding for smaller screens
        }}>
        {/* Agenda Item 1 */}
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'center' }, // Align to start on mobile, center on larger screens
            gap: '10px',
            flexDirection: { xs: 'column', sm: 'row' } // Stack vertically on mobile
          }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#BBB7E1',
              minWidth: { xs: '100%', sm: '120px' }, // Full width on mobile
              fontSize: { xs: '1rem', sm: '1.25rem' }, // Responsive font size
              textAlign: { xs: 'left', sm: 'right' } // Left-align on mobile, right-align on larger screens
            }}>
            8:00AM - 8:30AM
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#FFF',
              textAlign: 'left',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              marginLeft: { xs: '0', sm: '10px' } // Add margin on larger screens
            }}>
            Registration @ Lobby (outside ESC)
          </Typography>
        </Box>

        {/* Agenda Item 2 */}
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: '10px',
            flexDirection: { xs: 'column', sm: 'row' }
          }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#BBB7E1',
              minWidth: { xs: '100%', sm: '120px' },
              fontSize: { xs: '1rem', sm: '1.25rem' },
              textAlign: { xs: 'left', sm: 'right' }
            }}>
            8:30AM - 9:00AM
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#FFF',
              textAlign: 'left',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              marginLeft: { xs: '0', sm: '10px' }
            }}>
            Opening Ceremony @ ESC
          </Typography>
        </Box>

        {/* Agenda Item 3 */}
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: '10px',
            flexDirection: { xs: 'column', sm: 'row' }
          }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#BBB7E1',
              minWidth: { xs: '100%', sm: '120px' },
              fontSize: { xs: '1rem', sm: '1.25rem' },
              textAlign: { xs: 'left', sm: 'right' }
            }}>
            9:00AM - 10:00AM
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#FFF',
              textAlign: 'left',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              marginLeft: { xs: '0', sm: '10px' }
            }}>
            Opening Keynote @ ESC
          </Typography>
        </Box>

        {/* Agenda Item 4 */}
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: '10px',
            flexDirection: { xs: 'column', sm: 'row' }
          }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#BBB7E1',
              minWidth: { xs: '100%', sm: '120px' },
              fontSize: { xs: '1rem', sm: '1.25rem' },
              textAlign: { xs: 'left', sm: 'right' }
            }}>
            10:00AM - 11:00AM
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#FFF',
              textAlign: 'left',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              marginLeft: { xs: '0', sm: '10px' }
            }}>
            Breakfast @ TBD
          </Typography>
        </Box>

        {/* Agenda Item 5 */}
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: '10px',
            flexDirection: { xs: 'column', sm: 'row' }
          }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#BBB7E1',
              minWidth: { xs: '100%', sm: '120px' },
              fontSize: { xs: '1rem', sm: '1.25rem' },
              textAlign: { xs: 'left', sm: 'right' }
            }}>
            11:00AM - 2:30PM
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#FFF',
              textAlign: 'left',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              marginLeft: { xs: '0', sm: '10px' }
            }}>
            STEAM Workshops & Lunch @ various locations
          </Typography>
        </Box>

        {/* Agenda Item 6 */}
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: '10px',
            flexDirection: { xs: 'column', sm: 'row' }
          }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#BBB7E1',
              minWidth: { xs: '100%', sm: '120px' },
              fontSize: { xs: '1rem', sm: '1.25rem' },
              textAlign: { xs: 'left', sm: 'right' }
            }}>
            2:30PM - 3:20PM
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#FFF',
              textAlign: 'left',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              marginLeft: { xs: '0', sm: '10px' }
            }}>
            Networking & Boothing Session
          </Typography>
        </Box>

        {/* Agenda Item 7 */}
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: '10px',
            flexDirection: { xs: 'column', sm: 'row' }
          }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#BBB7E1',
              minWidth: { xs: '100%', sm: '120px' },
              fontSize: { xs: '1rem', sm: '1.25rem' },
              textAlign: { xs: 'left', sm: 'right' }
            }}>
            3:20PM - 4:20PM
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#FFF',
              textAlign: 'left',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              marginLeft: { xs: '0', sm: '10px' }
            }}>
            STEAM Panels @ various locations
          </Typography>
        </Box>

        {/* Agenda Item 8 */}
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: '10px',
            flexDirection: { xs: 'column', sm: 'row' }
          }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#BBB7E1',
              minWidth: { xs: '100%', sm: '120px' },
              fontSize: { xs: '1rem', sm: '1.25rem' },
              textAlign: { xs: 'left', sm: 'right' }
            }}>
            4:20PM - 4:30PM
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#FFF',
              textAlign: 'left',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              marginLeft: { xs: '0', sm: '10px' }
            }}>
            Break
          </Typography>
        </Box>

        {/* Agenda Item 9 */}
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: '10px',
            flexDirection: { xs: 'column', sm: 'row' }
          }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#BBB7E1',
              minWidth: { xs: '100%', sm: '120px' },
              fontSize: { xs: '1rem', sm: '1.25rem' },
              textAlign: { xs: 'left', sm: 'right' }
            }}>
            4:30PM - 5:00PM
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#FFF',
              textAlign: 'left',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              marginLeft: { xs: '0', sm: '10px' }
            }}>
            Closing Keynote @ TBD
          </Typography>
        </Box>

        {/* Agenda Item 10 */}
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: '10px',
            flexDirection: { xs: 'column', sm: 'row' }
          }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#BBB7E1',
              minWidth: { xs: '100%', sm: '120px' },
              fontSize: { xs: '1rem', sm: '1.25rem' },
              textAlign: { xs: 'left', sm: 'right' }
            }}>
            5:00PM - 5:30PM
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#FFF',
              textAlign: 'left',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              marginLeft: { xs: '0', sm: '10px' }
            }}>
            Final Remarks & Closing @ TBD
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
