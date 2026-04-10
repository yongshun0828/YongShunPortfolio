export const profileInfo = {
  name: 'Lew Yong Shun',
  title: 'Fresh Graduate Software Engineer',
  badges: ['Full Stack Developer'],
  photo: '/lysPhoto.jpg',
  email: 'lewyongshun@gmail.com',
  phone: '0196922706',
  aboutMe: `I'm a detail-oriented Full Stack Developer with practical experience from a six-month
    internship where I focused heavily on Vue.js development. During this time, I built
    reusable components, optimized UI performance, and collaborated with the backend team
    to deliver seamless API integrations. My experience also includes working with MySQL
    and full-stack features. I'm now looking for a full-time role where I can bring my
    front-end expertise and expand my contributions across the stack.`
};

export const projects = [
  {
    title: 'Internship Project – Vue.js Web Application',
    description: 'Developed front-end features using Vue.js, including building a dynamic and responsive banner component and optimizing UI performance. Collaborated with the backend team to integrate APIs and ensure smooth data flow, while following best practices in component structure, code quality, and Git version control.',
    tech: ['Vue.js', 'JavaScript', 'API Integration']
  },
  {
    title: 'Hotel Reservations System',
    description: 'Developed a Hotel Reservation System using HTML, CSS, JavaScript, and C#. Created a user-friendly interface for room booking, availability checks, and payment processing. Implemented backend logic in C# for managing reservations, customer data, and email confirmations.',
    tech: ['HTML', 'CSS', 'JavaScript', 'C#']
  },
  {
    title: 'Airline Management System',
    description: 'Used MySQL relational database management system (RDBMS) capabilities to store and manage flight, passenger, and booking data. Wrote complex SQL queries for generating reports, such as flight occupancy and revenue analysis.',
    tech: ['MySQL', 'SQL']
  },
  {
    title: 'Event Management Application (FYP)',
    description: 'Developed a cross-platform Event Management Application using Flutter for the frontend and Firebase for data storage and real-time updates.',
    tech: ['Flutter', 'Firebase']
  },
  {
    title: 'Course Management Subsystem (DSA Project)',
    description: 'Developed a Course Management subsystem using a custom SortedArrayList ADT. Implemented efficient add, update, remove, and search operations while maintaining structured relationships between data entities.',
    tech: ['Data Structures', 'Algorithms', 'Java']
  }

];

export const expertise = ['HTML', 'Vue', 'Flutter', 'JavaScript', 'C++', 'Java', 'MySQL', 'Python', 'AWS'];

export const languages = ['English', 'Bahasa Malaysia', 'Chinese'];

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
  { id: 'education', label: 'Education', icon: '🎓' }
];


