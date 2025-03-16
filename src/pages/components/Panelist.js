import React from 'react';
import { Typography, Box, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // Import LinkedIn icon
//science
import DrAnnale from '../images/Dr.AnnaleeYassi.png';
import AshianaSunderji from '../images/AshianaSunderji.jpeg';
import CloverLee from '../images/CloverLee.jpg';
//tech
import EmilyWang from '../images/EmilyWang.jpg';
import ShellyBadhesha from '../images/ShellyBadhesha.jpg';
import JessieMegan from '../images/JessieMegan.jpg';
//enginnering
import ArielleMurad from '../images/ArielleMurad.jpg';
import TumiFabiyi from '../images/TumiFabiyi.jpg';
//arts
import JulianneNieh from '../images/JulianneNieh.jpg';
import BonnieLu from '../images/BonnieLu.jpeg';
import TiffanyPotter from '../images/TiffanyPotter.jpeg';
import KinwaBluesky from '../images/KinwaBluesky.jpeg';
import JinLee from '../images/JinLee.png';

//maths
import AnaMucalica from '../images/AnaMucalica.jpg';
import FaezehYazdi from '../images/FaezehYazdi.jpg';
import TaraUbovic from '../images/TaraUbovic.jpg';
import MacKenzieCarr from '../images/MacKenzieCarr.jpg';
export default function Panelists() {
  // Function to render a single panelist square
  const renderPanelistSquare = (name, role, linkedinUrl, imageUrl, focusArea) => {
    return (
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
          <IconButton
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: '#0A66C2' }}>
            <LinkedInIcon />
          </IconButton>
        </Box>
        {/* Left-Aligned Text */}
        <Typography variant="body1" sx={{ marginBottom: '10px', textAlign: 'left', color: '#fff' }}>
          {role}
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: '10px', textAlign: 'left', fontWeight: 'bold', color: '#fff' }}>
          Key Focus Area/Research Interest:
        </Typography>
        <Typography variant="body2" sx={{ textAlign: 'left', color: '#fff' }}>
          {focusArea}
        </Typography>
      </Box>
    );
  };

  // Function to render a panel section
  const renderPanelSection = (title, panelists) => {
    return (
      <Box sx={{ marginBottom: '40px' }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            color: '#fff',
            fontFamily: 'Josefin Sans',
            marginBottom: '20px'
          }}>
          {title}
        </Typography>
        {/* Top Row (3 panelists) */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
            marginBottom: '20px'
          }}>
          {panelists.slice(0, 3).map((panelist, index) => (
            <React.Fragment key={index}>
              {renderPanelistSquare(
                panelist.name,
                panelist.role,
                panelist.linkedinUrl,
                panelist.imageUrl,
                panelist.focusArea
              )}
            </React.Fragment>
          ))}
        </Box>
        {/* Bottom Row (2 panelists) */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
          {panelists.slice(3, 5).map((panelist, index) => (
            <React.Fragment key={index}>
              {renderPanelistSquare(
                panelist.name,
                panelist.role,
                panelist.linkedinUrl,
                panelist.imageUrl,
                panelist.focusArea
              )}
            </React.Fragment>
          ))}
        </Box>
      </Box>
    );
  };

  // Mock data for panelists (replace with actual data)
  const sciencePanelists = [
    {
      name: 'Dr. Annalee Yassi',
      role: 'Professor, School of Population and Public Health, UBC',
      linkedinUrl: 'https://spph.ubc.ca/faculty/professors/annalee-yassi/',
      imageUrl: DrAnnale,
      focusArea:
        'Navigating a health science career of research and practice motivated by social justice at home and abroad.'
    },
    {
      name: 'Ashiana Sunderji (She/Her)',
      role: 'MD Candidate 2028 at UBC, Honours BSc (Double major in neuroscience and physiology, minor in human geography) from University of Toronto 2024',
      linkedinUrl: 'https://www.linkedin.com/in/ashiana-sunderji-58715b1b5 ',
      imageUrl: AshianaSunderji,
      focusArea:
        'Oncology: Nutrition for Prevention, Department of Supportive Care, Radio Theranostics (currently), Neuro-oncology (2025 summer)'
    },
    {
      name: 'Elenor Eden',
      role: 'placeholder',
      linkedinUrl: 'https://www.linkedin.com/in/janesmith/',
      imageUrl: 'https://via.placeholder.com/100',
      focusArea: 'placeholder'
    },
    {
      name: 'Clover Lee (They/Them)',
      role: 'Research Assistant, Public Health and Urban Nutrition Research Group, The University of British Columbia',
      linkedinUrl: 'https://www.linkedin.com/in/clover-lee/?originalSubdomain=ca',
      imageUrl: CloverLee,
      focusArea:
        'Critical public health nutrition and food anthropology from social justice perspectives'
    },
    {
      name: 'Placeholder(Pro/Nouns)',
      role: 'Placeholder',
      linkedinUrl: 'https://www.linkedin.com/in/emilybrown/',
      imageUrl: 'https://via.placeholder.com/100',
      focusArea: 'tbd'
    }
  ];

  const technologyPanelists = [
    // Add 5 panelists for Technology
    {
      name: 'Emily Wang (She/Her)',
      role: 'Incoming SWE Intern @ Workday',
      linkedinUrl: 'https://www.linkedin.com/in/emilywang416/?originalSubdomain=ca',
      imageUrl: EmilyWang,
      focusArea:
        'Java, JavaScript, TypeScript, Swift, Python, R, C++, Bash, SQL, React, Git, Docker, AWS, HTML, CSS'
    },
    {
      name: 'Shelly Badhesha',
      role: 'Director, Banking, RBCx',
      linkedinUrl: 'https://www.linkedin.com/in/consulting-shellybardai/',
      imageUrl: ShellyBadhesha,
      focusArea: 'The Impact of AI and Technology on Finance - How AI is transforming banking, investing, and financial decision-making. AI in Business and Consulting - How AI helps companies analyze data, predict trends, and make smarter decisions.'
    },
    {
      name: 'Maya Bruck (Pro/Nouns)',
      role: 'tbd',
      linkedinUrl: 'https://www.linkedin.com/in/michaellee/',
      imageUrl: 'https://via.placeholder.com/100',
      focusArea: 'tbd'
    },
    {
      name: 'Rochelle Grayson (Pro/Nouns)',
      role: 'tbd',
      linkedinUrl: 'https://www.linkedin.com/in/michaellee/',
      imageUrl: 'https://via.placeholder.com/100',
      focusArea: 'tbd'
    },
    {
      name: 'Jessie Megan (She/Her)',
      role: 'UX Design Intern @ IBM, AI & Automation Team',
      linkedinUrl: 'linkedin.com/in/jessiemegan',
      imageUrl: JessieMegan,
      focusArea: ' UX Design'
    }
  ];

  const engineeringPanelists = [
    // Add 5 panelists for Engineering
    {
      name: 'Layal Jbara',
      role: 'tbd',
      linkedinUrl: 'https://www.linkedin.com/in/rachelgreen/',
      imageUrl: 'https://via.placeholder.com/100',
      focusArea: 'tbd'
    },
    {
      name: 'Arielle Murad (She/Her)',
      role: 'Software Engineer @ Yakoa',
      linkedinUrl: 'https://www.linkedin.com/in/arielle-murad/',
      imageUrl: ArielleMurad,
      focusArea:
        'Backend development (cloud infrastructure, database and API design, etc.), project/scrum management, test-driven development'
    },
    {
      name: 'Tumi Fabiyi',
      role: 'Research Engineer Co-op -  Insporos; Director of External Outreach at WiDS; Partnerships Chair with NSBE.',
      linkedinUrl: 'https://www.linkedin.com/in/oliviawhite/',
      imageUrl: TumiFabiyi,
      focusArea: "Mechatronics and Robotics, Increasing access to STEAM Education for equity deserving groups. I'm also into SpaceTech!"
    },
    {
      name: 'First Last (Pro/Nouns)',
      role: 'tbd',
      linkedinUrl: 'https://www.linkedin.com/in/michaellee/',
      imageUrl: 'https://via.placeholder.com/100',
      focusArea: 'tbd'
    },
    {
      name: 'First Last (Pro/Nouns)',
      role: 'tbd',
      linkedinUrl: 'https://www.linkedin.com/in/michaellee/',
      imageUrl: 'https://via.placeholder.com/100',
      focusArea: 'tbd'
    }
  ];

  const artsPanelists = [
    // Add 5 panelists for Arts
    {
      name: 'Julianne Nieh (She/Her)',
      role: 'Founder @ Teaboco',
      linkedinUrl: 'https://www.linkedin.com/in/juliannenieh/',
      imageUrl: JulianneNieh,
      focusArea: ' How to make our life our art'
    },
    {
      name: 'Jin Lee (She/Her)',
      role: 'Product Manager @ SAP',
      linkedinUrl: 'https://www.linkedin.com/in/jin-leebc/',
      imageUrl: JinLee,
      focusArea: 'COGS + AI Safety Research'
    },
    {
      name: 'Kinwa Bluesky (Animate Being)',
      role: 'Human Early Learning Partnership’s Senior Manager, Indigenous Initiatives @ UBC',
      linkedinUrl: 'https://www.linkedin.com/in/lilyadams/',
      imageUrl: KinwaBluesky,
      focusArea: 'Indigenous health, data governance, and substantive equality.'
    },
    {
      name: 'Dr. Tiffany Potter (She/Her)',
      role: 'Professor of Teaching, Department of English Language and Literatures @ UBC',
      linkedinUrl: 'https://english.ubc.ca/profile/tiffany-potter/',
      imageUrl: TiffanyPotter,
      focusArea: 'tbd'
    },
    {
      name: 'Bonnie Lu(She/Her)',
      role: '3D/AV Media Designer @ UBC EdTech',
      linkedinUrl: 'https://bxnnieblu.wixsite.com/portfolio',
      imageUrl: BonnieLu,
      focusArea: 'UI/UX design, video editing, and 3D modelling/design'
    }
  ];

  const mathPanelists = [
    // Add 5 panelists for Arts
    {
      name: 'Ana Mucalica (She/Her)',
      role: 'Graduate Research and Teaching Assistant Department of Mathematics @ UBC',
      linkedinUrl: 'https://www.linkedin.com/in/ana-mucalica-798b18210/',
      imageUrl: AnaMucalica,
      focusArea:
        'Computation and physical analysis of particle-laden blood flow in the microvasculature'
    },
    {
      name: 'Faezeh Yazdi (She/Her)',
      role: 'Postdoctoral Fellow, Department of Statistics and Actuarial Science @ SFU',
      linkedinUrl: 'https://www.linkedin.com/in/faezeh-yazdi-3983787a/',
      imageUrl: FaezehYazdi,
      focusArea:
        'Computer model (simulator) calibration, Emulation and uncertainty quantification, Experimental design and advanced statistical methods'
    },
    {
      name: 'Tara Ubovic',
      role: 'Statistical Analyst - Project Assistant @ NEBLab',
      linkedinUrl: 'https://www.linkedin.com/in/tara-ubovic/',
      imageUrl: TaraUbovic,
      focusArea: 'tbd'
    },
    {
      name: 'MacKenzie Carr (She/Her)',
      role: 'PhD Candidate in Mathematics @ SFU',
      linkedinUrl: 'https://www.linkedin.com/in/carrmack/',
      imageUrl: MacKenzieCarr,
      focusArea:
        'Graph theory, particularly graph embeddings, games on graphs, graph coloring and domination'
    },
    {
      name: 'Jessie Megan',
      role: 'tbd',
      linkedinUrl: 'https://bxnnieblu.wixsite.com/portfolio',
      imageUrl: 'tbd',
      focusArea: 'tbd'
    }
  ];

  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom, #564F7D, #6363AB)', // Vertical gradient
        padding: '40px 20px',
        borderRadius: '10px',
        color: '#FFF',
        minHeight: '100vh' // Ensure the gradient covers the entire page height
      }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          color: '#E8C3D1',
          fontFamily: 'Josefin Sans',
          fontWeight: 'bold',
          marginBottom: '40px'
        }}>
        PANELISTS
      </Typography>

      {/* Science Panel */}
      {renderPanelSection('🔭 Science Panel @ TBD', sciencePanelists)}

      {/* Technology Panel */}
      {renderPanelSection('💻 Technology Panel @ TBD', technologyPanelists)}

      {/* Engineering Panel */}
      {renderPanelSection('📋 Engineering Panel @ TBD', engineeringPanelists)}

      {/* Arts Panel */}
      {renderPanelSection('📑 Arts Panel @ TBD', artsPanelists)}
      {/* Arts Panel */}
      {renderPanelSection('📑 Math Panel @ TBD', mathPanelists)}
    </Box>
  );
}
