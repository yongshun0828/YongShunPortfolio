export const profileInfo = {
  name: 'Lew Yong Shun',
  title: 'Fresh Graduate Software Engineer',
  badges: ['Full Stack Developer'],
  photo: `${process.env.PUBLIC_URL}/lysPhoto.jpg`,
  email: 'lewyongshun@gmail.com',
  phone: '0196922706',
  aboutMe: `Full Stack Developer with hands-on experience in Vue.js development, API integration, and MySQL database management. Skilled in GitLab and building responsive web applications, with strong problem-solving and teamwork abilities. Interested in system development and deployment, with a passion for expanding into real-world production environments.`
};

export const socialLinks = {
  whatsapp: 'https://wa.me/60196922706?text=Hi!%20%20This%20is%20Yong%20Shun.%20Nice%20to%20connect%20with%20you!',
  linkedin: 'https://www.linkedin.com/in/yong-shun-lew-089b50351',
  instagram: 'https://www.instagram.com/yongshun.0828?igsh=MWg3bnBkcmhqMWw5cQ%3D%3D&utm_source=qr'
};

export const projects = [
  {
    title: 'Internship Project – Vue.js Web Application',
    link: 'https://www.g2g.com/my',
    description: 'Developed front-end features using Vue.js, including building a dynamic and responsive banner component and optimizing UI performance. Collaborated with the backend team to integrate APIs and ensure smooth data flow, while following best practices in component structure, code quality, and Git version control.',
    tech: ['Vue.js', 'JavaScript', 'API Integration', 'GitLab']
  },
  {
    title: 'Hotel Reservations System',
    link: 'https://yongshun0828.github.io/hotel-booking-web-page-of-KokHan-Hotel/',
    description: 'Developed a Hotel Reservation System using HTML, CSS, JavaScript, and C#. Created a user-friendly interface for room booking, availability checks, and payment processing. Implemented backend logic in C# for managing reservations, customer data, and email confirmations.',
    tech: ['HTML', 'CSS', 'JavaScript', 'C#']
  },
  {
    title: 'Event Management Application (FYP)',
    description: 'Developed a cross-platform Event Management Application using Flutter for the frontend and Firebase for data storage and real-time updates.',
    tech: ['Flutter', 'Firebase']
  },
  {
    title: 'Airline Management System',
    description: 'Used MySQL relational database management system (RDBMS) capabilities to store and manage flight, passenger, and booking data. Wrote complex SQL queries for generating reports, such as flight occupancy and revenue analysis.',
    tech: ['MySQL']
  },  
  {
    title: 'Course Management Subsystem (DSA Project)',
    description: 'Developed a Course Management subsystem using a custom SortedArrayList ADT. Implemented efficient add, update, remove, and search operations while maintaining structured relationships between data entities.',
    tech: ['Data Structures And Algorithms', 'Java']
  },
  {
  title: 'Heart Attack Detection System',
  description: 'A machine learning-based application developed using Python that analyzes user health data to predict the likelihood of a heart attack. The system is trained on large datasets (big data) containing medical attributes such as age, blood pressure, cholesterol levels, and heart rate. Users input their health information, and the system processes the data through a trained model to determine whether they are at risk.',
  tech: ['Python']
  }

];

export const expertise = ['HTML', 'Vue', 'Flutter', 'JavaScript', 'C++', 'Java', 'MySQL', 'Python', 'AWS'];

export const languages = ['English', 'Bahasa Malaysia', 'Chinese'];

/** Edit roles, dates, and bullets to match your CV. */
export const experience = [
  {
    company: 'Gamer2Gamer Sdn. Bhd.',
    role: 'Software Engineering Intern',
    period: 'May 2025 - Dec 2025',
    location: 'Bangsar, Malaysia',
    highlights: [
      'Developed front-end features using Vue.js, including building a dynamic and responsive banner component and optimizing UI performance',
      'Collaborated with the backend team to integrate APIs and ensure smooth data flow, while following best practices in component structure, code quality, and Git version control.'
    ]
  },
  {
    company: 'Eu Yan Sang',
    role: 'Part Time',
    period: 'Dec 2023 - Feb 2024, Dec 2024 - Feb 2025',
    location: 'Kota Damansara, Malaysia',
    highlights: [
      'Assisted customers and recommended products',
      'Handled cashier transactions and daily sales',
      'Managed product display, restocking, and inventory',
      'Developed strong communication and customer service skills',
      'Improved teamwork and time management in a fast-paced environment',
      'Demonstrated responsibility, attention to detail, and problem-solving abilities'
    ]
  },  
];

export const education = [
  {
    school: 'Tunku Abdul Rahman University Of Management and Technology (TARUMT), Kuala Lumpur',
    period: '2022 - 2025',
    degree: 'Bachelor Of Software Engineering',
    details: {
      cgpa: '3.55',
      muet: 'Band 3.5'
    }
  },
  {
    school: 'Sekolah Menengah Jenis Kebangsaan Triang, Pahang',
    period: '2014 - 2022',
    degrees: [
      'SPM in Science Stream (2014 - 2019)',
      'STPM in Science Stream (2020 - 2022)'
    ]
  }
];

export const menuItems = [
  { id: 'about-me', label: 'About Me', icon: '👋' },
  { id: 'projects', label: 'Projects', icon: '💼' },
  { id: 'expertise', label: 'Expertise', icon: '🛠️' },
  { id: 'languages', label: 'Languages', icon: '🌐' },
  { id: 'experience', label: 'Experience', icon: '🏢' },
  { id: 'education', label: 'Education', icon: '🎓' }
];


