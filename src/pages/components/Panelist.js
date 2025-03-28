import React from 'react';
import { Typography, Box } from '@mui/material';
import SpeakerCard from './SpeakerCard';

// Import images
import DrAnnale from '../images/Dr.AnnaleeYassi.png';
import AshianaSunderji from '../images/AshianaSunderji.jpeg';
import CloverLee from '../images/CloverLee.jpg';
import TasfiyahKabir from '../images/TasfiyahKabir.jpeg';
import MadysonAdams from '../images/madysonadams.jpeg';
import JuliaHill from '../images/JuliaHill.jpg';
//tech
import EmilyWang from '../images/EmilyWang.jpg';
import ShellyBadhesha from '../images/ShellyBadhesha.jpg';
import VeronicaTan from '../images/VeronicaTan.png';
import JessieMegan from '../images/JessieMegan.jpg';
import MayaBruck from '../images/MayaBruck.jpeg';
//eng
import Layla from '../images/Layla.jpeg';
import ArielleMurad from '../images/ArielleMurad.jpg';
import TumiFabiyi from '../images/TumiFabiyi.jpg';
import JessieRehwald from '../images/Jessie Rehwald.jpg';
// arts
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
import Dia from '../images/Dia.jpeg';

export default function Panelists() {
  // Function to render a panel section
  const renderPanelSection = (title, panelists) => {
    // all but engineering
    if (panelists.length >= 5) {
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
                {
                  <SpeakerCard
                    name={panelist.name}
                    role={panelist.role}
                    linkedinUrl={panelist.linkedinUrl}
                    imageUrl={panelist.imageUrl}
                    focusArea={panelist.focusArea}></SpeakerCard>
                }
              </React.Fragment>
            ))}
          </Box>
          {/* Bottom Row (3 panelists) */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap'
            }}>
            {panelists.slice(3, 6).map((panelist, index) => (
              <React.Fragment key={index}>
                {
                  <SpeakerCard
                    name={panelist.name}
                    role={panelist.role}
                    linkedinUrl={panelist.linkedinUrl}
                    imageUrl={panelist.imageUrl}
                    focusArea={panelist.focusArea}></SpeakerCard>
                }
              </React.Fragment>
            ))}
          </Box>
        </Box>
      );
    } else {
      // for engineering (4 panelists so far)
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
            {panelists.slice(0, 2).map((panelist, index) => (
              <React.Fragment key={index}>
                {
                  <SpeakerCard
                    name={panelist.name}
                    role={panelist.role}
                    linkedinUrl={panelist.linkedinUrl}
                    imageUrl={panelist.imageUrl}
                    focusArea={panelist.focusArea}></SpeakerCard>
                }
              </React.Fragment>
            ))}
          </Box>
          {/* Bottom Row (3 panelists) */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap'
            }}>
            {panelists.slice(2, 5).map((panelist, index) => (
              <React.Fragment key={index}>
                {
                  <SpeakerCard
                    name={panelist.name}
                    role={panelist.role}
                    linkedinUrl={panelist.linkedinUrl}
                    imageUrl={panelist.imageUrl}
                    focusArea={panelist.focusArea}></SpeakerCard>
                }
              </React.Fragment>
            ))}
          </Box>
        </Box>
      );
    }
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
      name: 'Madyson Adams (She/Her)',
      role: 'Environmental Technician role @ City of North Vancouver.',
      linkedinUrl:
        'https://www.linkedin.com/in/madyson-adams-15149996/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      imageUrl: MadysonAdams,
      focusArea:
        'Invasive species management, habitat assessment, wetland assessment, salmon habitat restoration & conservation, community engagement & fostering youth interest in STEM, restoration planning'
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
      name: 'Tasfiyah Kabir(She/Her)',
      role: "Research Assistant, BC Children's Hospital (Janssen Lab, Play Outside Lab)",
      linkedinUrl: 'https://www.linkedin.com/in/tasfiyah/',
      imageUrl: TasfiyahKabir,
      focusArea:
        'International Migration Patterns of Nurses and Physicians in Canada, Global Health Policy: Organization & Behaviour in Emergency Care Services,Pharmacogenomic Influences on Major Depressive Disorder (MDD) Treatment'
    },
    {
      name: 'Julia Marie Hill(She/Her)',
      role: 'Research and Innovation Manager, Health @ Genome BC',
      linkedinUrl: 'https://www.linkedin.com/in/julia-m-hill/?originalSubdomain=ca',
      imageUrl: JuliaHill,
      focusArea: 'Human health and disease/drug discovery/medical devices/genomics'
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
      focusArea:
        'The Impact of AI and Technology on Finance - How AI is transforming banking, investing, and financial decision-making. AI in Business and Consulting - How AI helps companies analyze data, predict trends, and make smarter decisions.'
    },
    {
      name: 'Maya Bruck (She/Her)',
      role: 'Lead Designer @ Mars Petcare',
      linkedinUrl: 'https://www.linkedin.com/in/mayabruck/',
      imageUrl: MayaBruck,
      focusArea:
        'Human and pet-centered design, digital product design for health and wellbeing, tools for predicting pet health, diversity, and traits'
    },
    {
      name: 'Veronica Tan (She/Her)',
      role: 'Manager in Technology Consulting @ KPMG',
      linkedinUrl: 'https://www.linkedin.com/in/veronicawootan/',
      imageUrl: VeronicaTan,
      focusArea: 'Heavy assets - construction, manufacturing, mining, utilities, etc'
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
      name: 'Layal Jbara (She/Her)',
      role: 'PhD Candidate in Chemical and Biological Engineering and Graduate Research Assistant @ UBC',
      linkedinUrl: 'https://www.linkedin.com/in/layal-jbara-612394a8/',
      imageUrl: Layla,
      focusArea:
        'Numerical simulations, computational fluid dynamics (CFD), high-performance computing (HPC), and machine learning'
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
      focusArea:
        "Mechatronics and Robotics, Increasing access to STEAM Education for equity deserving groups. I'm also into SpaceTech!"
    },
    {
      name: 'Jessie Rehwald (She/Her)',
      role: 'Project Manager in Engineering Design & Construction @ City of Richmond',
      linkedinUrl: 'https://www.linkedin.com/in/michaellee/',
      imageUrl: JessieRehwald,
      focusArea:
        'Engineering, the environment, and urbanism, with a strong interest in how these fields intersect. '
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
      focusArea: 'Indigenous health, data governance, and substantive equality.'
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
      name: 'Dr. Faezeh Yazdi (She/Her)',
      role: 'Postdoctoral Fellow, Department of Statistics and Actuarial Science @ SFU',
      linkedinUrl: 'https://www.linkedin.com/in/faezeh-yazdi-3983787a/',
      imageUrl: FaezehYazdi,
      focusArea:
        'Computer model (simulator) calibration, Emulation and uncertainty quantification, Experimental design and advanced statistical methods'
    },
    {
      name: 'Tara Ubovic (She/Her)',
      role: 'Statistical Analyst - Project Assistant @ NEBLab',
      linkedinUrl: 'https://www.linkedin.com/in/tara-ubovic/',
      imageUrl: TaraUbovic,
      focusArea: 'The Hidden Math Behind Everyday Life'
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
      name: 'Dia Zavery (She/Her)',
      role: 'Business Intelligence Analyst Co-op @ WorkSafeBC',
      linkedinUrl: 'https://www.linkedin.com/in/dia-zavery/?originalSubdomain=ca',
      imageUrl: Dia,
      focusArea: 'AI-driven automation, financial analytics, and market research'
    }
  ];

  return (
    <Box
      sx={{
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
      {renderPanelSection('🔭 Science Panel @ BUCH D314', sciencePanelists)}

      {/* Technology Panel */}
      {renderPanelSection('💻 Technology Panel @ BUCH D316', technologyPanelists)}

      {/* Engineering Panel */}
      {renderPanelSection('📋 Engineering Panel @ BUCH D322', engineeringPanelists)}

      {/* Arts Panel */}
      {renderPanelSection('📑 Arts Panel @ BUCH B323', artsPanelists)}

      {/* Math Panel */}
      {renderPanelSection('📑 Math Panel @ BUCH D317', mathPanelists)}
    </Box>
  );
}
