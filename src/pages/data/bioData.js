import rachelng from './../images/rachelng.jpeg';
import arnima from './../images/arnima.jpg';
import drishtitanwani from './../images/drishtitanwani.jpeg';
import carmen from './../images/carmen.jpeg';
import maggie from './../images/maggie.jpeg';
import manpreet from './../images/manpreet.jpeg';
import sameera from './../images/sameera.jpg';
import nancy from './../images/nancy.jpg';
import emma from './../images/emma.jpg';
import jaskiran from './../images/jaskiran.png';
import christabel from './../images/christabel.jpg';
import nika from './../images/nika.png';
import allisonduong from './../images/allisonduong.jpeg';
import bhavneet from './../images/bhavneet.png';
import dhiya from './../images/dhiya.jpeg';
import nysa from './../images/nysa.png';
import vanessa from './../images/vanessa.jpg';
import jelenna from './../images/jelenna.jpeg';

// pronouns
const PRONOUN_STRINGS = {
  SHEHER: 'she/her/hers',
  OTHER: 'other'
};
// location
const LOCATION_STRINGS = {
  VANCOUVER: 'Vancouver, Canada',
  SURREY: 'Surrey, Canada',
  TORONTO: 'Toronto, Canada'
};

//
export const bioData = [
  {
    name: 'Allison',
    src: allisonduong,
    role: 'Co-Marketing Director',
    email: 'ubc.marketing@girlsinsteam.org',
    pronouns: PRONOUN_STRINGS.SHEHER,
    location: LOCATION_STRINGS.VANCOUVER,
    emojis: '🎵🐶🚘🍣☀️',
    desc: "Allison is 4'11 and terrified of anything that flies,  especially butterflies and birds.",
    quote:
      'STEAM is important because it helps me think creatively and solve problems. I love mixing technology and art to create a new digital design.'
  },
  {
    name: 'Rachel',
    src: rachelng,
    role: 'Conference Co-Chair',
    email: 'ubc.conference@girlsinsteam.org',
    pronouns: PRONOUN_STRINGS.SHEHER,
    location: LOCATION_STRINGS.VANCOUVER,
    emojis: '🫠🧋🍵😴🐷',
    desc: 'Rachel is a Business and Computer Science student at the University of British Columbia with a passion for technology and closing the gender gap in STEAM fields. She is currently on a co-op work term at Powerex as a Business Analyst (BA), and recently concluded her previous BA co-op at Roche. Having experienced a lack of STEAM opportunities in her high school, Rachel is committed to helping students explore the diverse range of STEAM fields. Her goal is to provide students with early exposure to these areas, sparking their interest and encouraging them to deepen their knowledge. In her free time, Rachel enjoys outdoor activities such as hiking, kayaking, and snowboarding, as well as discovering new restaurants and cafes.',
    quote:
      'STEAM is important to me because it highlights the interconnectedness of disciplines I once believed were entirely separate. Initially, I thought that arts and sciences operated independently, but through work experience and conversations with my peers, I realized how seamlessly all of the letters of STEAM integrate. Building something isn’t just about making it visually appealing or meeting basic requirements — it’s about ensuring it is accessible, inclusive, and designed to serve a diverse audience. STEAM emphasizes the value of combining creativity, technology, and analytical thinking to create meaningful, impactful solutions that benefit the broader community.'
  },
  {
    name: 'Arnima',
    src: arnima,
    role: 'Conference Co-Chair',
    email: 'ubc.conference@girlsinsteam.org',
    pronouns: PRONOUN_STRINGS.SHEHER,
    location: LOCATION_STRINGS.VANCOUVER,
    emojis: '💀🏄🏽‍♀️🏎️🦉🙄',
    desc: 'Arnima Singh is a first-year MSc student in Public Health and Epidemiology at the University of British Columbia UBC. She recently completed her BSc in the Faculty of Science at UBC, focusing on Neuroscience and Microbiology through a Combined Major in Science. Her research interests lie in neuroimmunology, mental health, and intervention measures. Arnima aspires to pursue further graduate studies in Clinical Psychology, Public Health, or Neuroscience. In her free time, she enjoys studying at aesthetic cafes, often as an excuse to indulge in her love for coffee.',
    quote:
      "As a woman of color who isn't often represented in STEAM fields, I find it incredibly important to both pursue and share this knowledge with others. Being in these spaces allows me to challenge stereotypes and show that there is room for diverse voices in science, technology, engineering, arts, and mathematics. The opportunity to bring this education to others—especially those who may feel underrepresented—excites me because it opens doors and empowers individuals who can thrive in these fields. I’m proud to be part of that change."
  },
  {
    name: 'Drishti',
    src: drishtitanwani,
    role: 'Experience Design Coordinator',
    email: 'ubc.exd@girlsinsteam.org',
    pronouns: PRONOUN_STRINGS.SHEHER,
    location: LOCATION_STRINGS.VANCOUVER,
    emojis: '🥰👩‍💻🧠☕️📸',
    desc: 'Drishti is a dedicated second-year BSc student at UBC on her path to studying data science, behavioural science, and system design. With a strong passion for neuroscience and artificial intelligence, she aspires to contribute to the fields of neurotechnology and health tech. Drishti hopes to increase the prevalence of interdisciplinary approaches in addressing complex challenges, particularly at the intersection of technology and human cognition. Through her involvement with Girls in STEAM, she is eager to create accessible opportunities for mentorship and skill development, encouraging girls and gender-diverse individuals to explore and excel in STEAM fields while promoting inclusivity and creativity. In her free time, she enjoys reading fiction, watching Netflix and hanging out with friends!',
    quote:
      'STEAM is important to me because it unites diverse perspectives to solve real-world problems creatively. As someone passionate about the interdisciplinary fields, I believe it encourages collaboration across boundaries. I hope to contribute to creating opportunities for individuals, especially from underrepresented groups, to explore STEAM, unlocking their potential and driving transformative solutions for the future.'
  },
  {
    name: 'Carmen',
    src: carmen,
    role: 'Experience Design Co-Director',
    email: 'ubc.exd@girlsinsteam.org',
    pronouns: PRONOUN_STRINGS.SHEHER,
    location: LOCATION_STRINGS.VANCOUVER,
    emojis: '🫶🏻😼💛🌻🥹',
    desc: 'Carmen is an outgoing and spirited person. She enjoys collecting enamel pins and Miffy. ',
    quote: 'It’s important to get the representation you want to see!'
  },
  {
    name: 'Manpreet',
    src: manpreet,
    role: 'Experience Design Coordinator',
    email: 'ubc.exd@girlsinsteam.org',
    pronouns: PRONOUN_STRINGS.SHEHER,
    location: LOCATION_STRINGS.SURREY,
    emojis: '☕️🌸📚🩺🫀',
    desc: 'Manpreet Kaur, third year student at the University of British Columbia, pursuing her bachelor’s of science in biological sciences. Looking ahead, she envisions a career dedicated to promoting health equity and advocating for evidence-based policies that empower communities to lead healthier lives. She believes that this is where she can use her smarts and her heart at the same time to tackle big issues, help people live their healthiest, happiest lives, and be a reason for making someone’s life better.',
    quote:
      'STEAM is important to her because it empowers young women by providing opportunities and encouragement to pursue careers in fields like healthcare and technology while helping fight the biases. Her involvement in Girls in STEAM promotes diversity and inclusivity, fostering innovative solutions and a broader range of perspectives. Additionally, supporting STEAM education aligns with her values of personal fulfillment, professional development, and advocating for transformative, interdisciplinary education.'
  },
  {
    name: 'Sameera',
    src: sameera,
    role: 'Experience Design Coordinator',
    email: 'ubc.exd@girlsinsteam.org',
    pronouns: PRONOUN_STRINGS.SHEHER,
    location: LOCATION_STRINGS.TORONTO,
    emojis: '🤍🧸🥂🗺️🍪',
    desc: 'Sameera is from Vancouver but currently in Ontario for her undergraduate degree, she is in her third year and is in Biology. She is a determined, responsible, organized, adventurous girl. She loves to travel and loves trying new things. One of the most adventurous things she has done is gone skydiving! She enjoys going on walks with her dog, shopping, listening to music, and cooking.',
    quote:
      'STEAM is important to me because of its diversity, having women in STEAM fields brings diverse perspectives and helps close the gender gap. These fields have traditionally been male-dominated, so encouraging more women to pursue STEAM helps address gender disparities and promotes equality. Girls in STEAM is also important to me because we are role models for future generations, we inspire young girls to explore these fields and show that women can be in these fields too.'
  },
  {
    name: 'Nysa',
    src: nysa,
    role: 'Marketing Coordinator',
    email: 'ubc.marketing@girlsinsteam.org',
    pronouns: PRONOUN_STRINGS.SHEHER,
    location: LOCATION_STRINGS.VANCOUVER,
    emojis: '💖🌞🍕🏝️',
    desc: 'Nysa is a Psych major at UBC with a great interest in Industrial Psychology and Marketing. ',
    quote:
      'As an international student, being a part of a community of like-minded individuals is very important to me. I’ve always wanted to be a part of a platform where I can express my creativity and perspectives and STEAM is a great way for me to do that! '
  },
  {
    name: 'Bhavneet',
    src: bhavneet,
    role: 'Marketing Coordinator',
    email: 'ubc.marketing@girlsinsteam.org',
    pronouns: PRONOUN_STRINGS.SHEHER,
    location: LOCATION_STRINGS.VANCOUVER,
    emojis: '🌊😂🙊😝🎧',
    desc: 'Bhavneet is in her third of Biology at the University of British Columbia. She is passionate about designing and was previously a graphic designer at GIS. She enjoys binging tv shows, playing tennis, going on walks and painting in her spare time. Her goal is to support girls in STEAM and inspire them to take the steps forward that are needed for a more equitable future. ',
    quote:
      'STEAM is important to me because I believe in its mission to support and empower minorities in the field. I appreciate the support system that we are able to create for others at GIS and hope to demonstrate what community determined to empower can do. '
  },
  {
    name: 'Dhiya',
    src: dhiya,
    role: 'Marketing Director',
    email: 'ubc.marketing@girlsinsteam.org',
    pronouns: PRONOUN_STRINGS.SHEHER,
    location: LOCATION_STRINGS.VANCOUVER,
    emojis: '🧸😝🏋🏽🐶✨',
    desc: 'Dhiya Gill is a second-year psychology student with a passion for understanding the human mind and the people around us, particularly in the areas of social and health psychology. Outside of academics, Dhiya maintains an active lifestyle, finding joy in working out and exploring new places through travel. A creative spirit at heart, she enjoys hands-on crafts like sewing, designing, crocheting, and drawing. She has a keen interest in fashion and admits to being a bit of a shopaholic. Dhiya is also a devoted dog lover, often spending most of her time with her cockapoo, Nikko. In her free time, she loves watching new shows and movies, which adds to her diverse interests and reflects her vibrant personality and balanced approach to life!',
    quote:
      'STEAM is important to me because it combines creativity and logic, fostering innovation across diverse fields. With my background in STEM education and interests in psychology, I value how STEAM encourages problem-solving and adaptability, both of which are crucial in today’s world. It also fuels my curiosity and passion for lifelong learning, helping me explore new ideas and make meaningful contributions towards my future career.'
  },
  {
    name: 'Jelenna',
    src: jelenna,
    role: 'Outreach coordinator',
    email: 'ubc.outreach@girlsinsteam.org',
    pronouns: PRONOUN_STRINGS.SHEHER,
    location: LOCATION_STRINGS.VANCOUVER,
    emojis: '🌸✈️🌅🏝️✨',
    desc: 'Jelenna is a compassionate and thoughtful person with a warm heart and a gentle soul. Jelenna thrives in creating connections and lending a listening ear to those in need. Her curious mind is balanced by a love for the simple joys of life, like spending time with loved ones, exploring new ideas, or immersing herself in creative pursuits. She is currently in her first year at UBC in the Faculty of Science. She plans to major in biology with a minor in psychology. She is often embracing herself in new challenges with resilience and a sense of optimism.',
    quote:
      'STEAM is important to me because it allows for a safe space for individuals of diverse backgrounds and cultures to come together and let our creativity and knowledge have freedom! Although I am a science girl, I find it incredibly important for the addition of arts, and STEAM allows for the addition of all those fields of study.'
  },
  {
    name: 'Vanessa',
    src: vanessa,
    role: 'Outreach Director ',
    email: 'ubc.outreach@girlsinsteam.org',
    pronouns: PRONOUN_STRINGS.SHEHER,
    location: LOCATION_STRINGS.VANCOUVER,
    emojis: '🤭🎨🎮🗺️ ✨',
    desc: 'Vanessa is a fourth-year student at the University of British Columbia, pursuing a degree in Environment and Sustainability with a Minor in Geographic Information Systems (GIS). She is passionate about sustainability and innovation, committed to finding solutions that integrate technology, policy, and environmental stewardship. With a strong academic foundation in GIS, Vanessa is focused on applying her skills to real-world challenges, particularly in research and mapping projects. She is also exploring front-end development, with a keen interest in enhancing her GIS expertise and expanding her knowledge of software and design tools. Beyond academics, Vanessa enjoys sketching animations, building legos, playing video games and traveling to new places. She aspires to work as a GIS analyst or consultant, combining her technical skills and passion for sustainability to make a meaningful impact.',
    quote:
      'It helps people develop a well-rounded approach to problem-solving, encouraging them to think outside the box and explore different fields. STEAM is a platform that does not limit areas of expertise; it fosters new opportunities while promoting diverse perspectives and knowledge. By recognizing and embracing strengths from various disciplines, STEAM shows that people do not have to choose between being analytical or creative—they can be both!'
  },

  {
    name: 'Christabel',
    src: christabel,
    role: 'Sponsorship Co-Director',
    email: 'ubc.sponsorship@girlsinsteam.org',
    pronouns: PRONOUN_STRINGS.SHEHER,
    location: LOCATION_STRINGS.VANCOUVER,
    emojis: '⚗️🤩🤦🏾‍♀️💿🙄',
    desc: 'Christabel is a curious and creative chemical engineering student who enjoys exploring new ideas. She has a love for reading and discovering connections between her studies and the world around her.',
    quote:
      'It brings energy and excitement to the world around us. Without it, life would be dull and uninspired, a spark would be missing.'
  },
  {
    name: 'Maggie',
    src: maggie,
    role: 'Experience Design Coordinator',
    email: 'ubc.exd@girlsinsteam.org',
    pronouns: PRONOUN_STRINGS.SHEHER,
    location: LOCATION_STRINGS.VANCOUVER,
    emojis: '⛄️🤑⁉️😟🤨',
    desc: 'Maggie is a first year student majoring in Science and comes from Calgary, Alberta. She is interested in the field of technology and  hopes to go into something computer science related. ',
    quote:
      'STEAM is important to me as it promotes a passion for understanding the world we live in. Being in STEAM means creating a supportive community focused on innovation and continuous knowledge to improve what is around us, which is something I really value. I hope that through investing in STEAM education, more people can access opportunities to think creatively and critically, overcoming challenges to positively make a difference. '
  },
  {
    name: 'Nancy',
    src: nancy,
    role: 'Experience Design Coordinator',
    email: 'ubc.exd@girlsinsteam.org',
    pronouns: PRONOUN_STRINGS.SHEHER,
    location: LOCATION_STRINGS.VANCOUVER,
    emojis: '🫥🛌🏻🍨🎬🎧',
    desc: 'Nancy is from Edmonton but currently at Vancouver for her undergraduate degree, she is in her first year and aiming for biotech or biochem. She is a talkative, laid back and goal oriented girl. She would love to travel to Iceland one day and go hiking or snorkeling. She enjoys watching a variety of tv shows and movies along with listening to any new music.',
    quote:
      'Girls In Steam is a  organization of many fundamental jobs/areas to build a community with a good quality of life. I feel proud to be able to learn and continue studies/creations that have been passed down for centuries of time.'
  },
  {
    name: 'Emma',
    src: emma,
    role: 'Experience Design Coordinator',
    email: 'ubc.exd@girlsinsteam.org',
    pronouns: PRONOUN_STRINGS.SHEHER,
    location: LOCATION_STRINGS.VANCOUVER,
    emojis: '🎀📚🍄🌌🎏',
    desc: 'Emma is in their first year and is pursuing an honours degree in physics at UBC. She is particularly interested in photonics and optics and hopes to be a researcher in these fields someday. In her free time, Emma likes to read, make pasta, travelling and journal.',
    quote:
      'STEAM is important to me because I think there is nothing more interesting than answering questions about our natural world using creativity, reasoning and testing. Whether it’s through technology, hands-on experiments, or artistic expression, STEAM encourages curiosity and continuous learning. STEAM appeals to me because I love to solve problems and think of new ways of approaching them. I find nothing so satisfying as coming to a solution after hours of learning, trial and error and discussion with others.'
  },
  {
    name: 'Nika',
    src: nika,
    role: 'Marketing Conference Co-Director',
    email: 'ubc.marketing@girlsinsteam.org',
    pronouns: PRONOUN_STRINGS.SHEHER,
    location: LOCATION_STRINGS.VANCOUVER,
    emojis: '🫥🛌🏻🍨🎬🎧',
    desc: 'Nika is a fourth-year psychology student at the University of British Columbia with a strong interest in pursuing UX design post-graduation. Having had a passion for art and creativity since childhood, she enjoys using her artistic abilities in order to support organizations through web and graphic design work. Nika has previously done marketing and graphic design work for several clubs, organizations, and app startups, including Girl Up, SDC, and the SDG Student Hub at UBC. She also works as a teacher at an Oxford Learning Centre where she supports students ranging from elementary to high school in furthering their education beyond the classroom.',
    quote:
      'I believe the inclusion of arts & design in STEAM is so important, especially in a society where it has become so devalued despite being such a crucial aspect of technology and user experience. Girls in STEAM’s mission to support access to STEAM education for women, gender-diverse people, and the LGBTQ+ community is one that aligns with many of my passions, and I’m glad I can contribute my skills towards supporting this amazing team!'
  },
  {
    name: 'Jaskiran',
    src: jaskiran,
    role: 'Experience Design Coordinator',
    email: 'ubc.exd@girlsinsteam.org',
    pronouns: PRONOUN_STRINGS.SHEHER,
    location: LOCATION_STRINGS.VANCOUVER,
    emojis: '🫥🛌🏻🍨🎬🎧',
    desc: 'TBA',
    quote: 'TBA'
  }
];
