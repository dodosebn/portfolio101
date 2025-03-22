// Define types for experience, formal education, and self-taught education
interface Experience {
    id: number;
    duration: string;
    title: string;
    content: string;
    date: Date;
  }
  
  interface FormalEducation {
    id: number;
    title: string;
    school: string;
    date: Date;
  }
  
  interface SelfTaughtEducation {
    id: number;
    title: string;
    duration: string;
    date: Date;
  }


  const experienceDetails = [
    {
      id: 1,
      duration: 'January 2025 - March 2025',
      title: 'HNG12 Internship',
      content: 'Collaborated with other interns, developed and deployed complex web applications delivering pixel-perfect design',
      date: '2025-01-01', // Use string-based date
    },
  ];
  
  const eduFormal = [
    {
      id: 1,
      title: 'BSc in Statistics',
      school: 'AE-FUNAI Nigeria, 2023 - present',
      date: '2023-01-01', // Use string-based date
    },
  ];
  
  const eduSelf = [
    {
      id: 1,
      title: 'Web Development BootCamp',
      duration: 'Zuri Training, March 2024 - May 2024',
      date: '2024-03-01', // Use string-based date
    },
    {
      id: 2,
      title: 'Data Structures and Algorithms',
      duration: 'FreeCodeCamp, April- August 2024',
      date: '2024-03-01',
    },
    {
      id: 3,
      title: 'React Full Course',
      duration: 'netNinja, August - November 2024',
      date: '2024-08-01',
    },
    {
      id: 4,
      title: 'Front End Development Libraries',
      duration: 'FreeCodeCamp, December 2024 - November 2025',
      date: '2024-12-01',
    },
    {
      id: 5,
      title: 'React, Next.js, Redux & More',
      duration: 'Jonas Schmedtmann, March 2025 - present',
      date: '2025-03-01',
    },
  ];
  
  export { experienceDetails, eduFormal, eduSelf };