// All portfolio content lives here. Source: Nikhil's CV. Edit this file to update the site.
export const profile = {
  name: 'Nikhil Singh',
  role: 'Aspiring Full Stack Developer',
  tagline: 'MCA Cyber Security Student · Software Developer',
  email: 'jaishriram7855@gmail.com',
  phone: '+91 9555127570',
  location: 'Lucknow, Uttar Pradesh',
  photo: '/profile.jpeg',
  resume: '/Nikhil_Singh_CV.pdf',
  intro: 'I build full-stack web applications with React.js, Node.js, Express.js and MySQL, and I am studying cyber security alongside software development.',
  summary: 'Aspiring Full Stack Developer with a BCA degree, currently pursuing an MCA (Cyber Security). 1 year of professional experience in data analysis, data validation and business data management at Iron Mountain India Pvt. Ltd. Hands-on with full-stack web apps, REST APIs, database management and role-based authentication.',
  focus: ['Full-stack development', 'React.js', 'Node.js', 'Express.js', 'MySQL', 'REST APIs', 'Cybersecurity'],
  // Add real links later, e.g. { label: 'GitHub', url: 'https://github.com/...' }
  socials: [],
}
export const aboutCards = [
  { icon: '</>', title: 'Full Stack Development', text: 'Built a College ERP with React.js, Node.js, Express.js and MySQL, including REST APIs and role-based authentication.' },
  { icon: '⛨', title: 'Cybersecurity', text: 'Currently pursuing an MCA in Cyber Security at Lovely Professional University (Online).' },
  { icon: '▦', title: 'Data Analysis', text: '1 year of data validation and business data management at Iron Mountain India Pvt. Ltd.' },
  { icon: '⌘', title: 'Software Development', text: 'Working knowledge of OOP, DBMS, CRUD operations and API integration, using VS Code and Postman.' },
  { icon: '✦', title: 'AI-Assisted Development', text: 'Uses AI tools for debugging, productivity and documentation while owning the core logic and workflows.' },
]
export const skills = [
  { group: 'Languages', icon: 'JS', items: ['JavaScript', 'SQL', 'Java (Basic)'] },
  { group: 'Frontend', icon: '◧', items: ['React.js', 'HTML5', 'CSS3'] },
  { group: 'Backend', icon: '⬡', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { group: 'Database', icon: '⛁', items: ['MySQL'] },
  { group: 'Tools', icon: '⚙', items: ['VS Code', 'Postman'] },
  { group: 'Concepts', icon: '◈', items: ['OOP', 'DBMS', 'CRUD', 'API Integration'] },
  { group: 'Additional Skills', icon: '✎', items: ['Content Creation', 'Scripting', 'Video Editing', 'Channel Management', 'AI Tools Usage'] },
]
export const experience = [{
  title: 'Data Analysis (Apprentice-NAPS)',
  company: 'Iron Mountain India Pvt. Ltd.',
  via: 'Quess Corp Ltd',
  place: 'Lucknow, Uttar Pradesh',
  period: 'June 2025 – June 2026',
  points: [
    'Processed and validated 200+ business records daily using the company’s internal data management portal.',
    'Achieved 98% data accuracy through detailed quality checks and verification, maintaining one of the highest accuracy rates in the department.',
    'Used Google Sheets for data organization, validation, filtering, sorting and reporting of 200+ records daily.',
    'Collaborated with a 20-member data analysis team to meet daily operational targets and maintain data quality standards.',
  ],
}]
export const projects = [{
  title: 'College ERP Management System',
  stack: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
  description: 'A full-stack College ERP with separate Admin, Teacher and Student portals.',
  features: ['Admin, Teacher and Student portals', 'Role-based authentication', 'Attendance management', 'Marks management', 'Subject management', 'Assignment management', 'REST APIs'],
  note: 'Nikhil designed and executed the core application logic and workflows. AI-assisted tools supported debugging, productivity and documentation.',
  github: '', // add a real GitHub URL to show the button
  live: 'https://college-erp-management-system-1.onrender.com',   // add a real live URL to show the button
}]
export const education = [
  { degree: 'MCA (Cyber Security)', status: 'Pursuing', school: 'Lovely Professional University (Online)', place: 'Phagwara, Punjab' },
  { degree: 'BCA', status: '2023 – 2026', school: 'City College of Management', place: 'Lucknow, Uttar Pradesh' },
  { degree: '12th (Intermediate)', status: '2023', school: 'SIC Umari', place: 'Kadipur, Sultanpur, Uttar Pradesh' },
  { degree: '10th (High School)', status: '2021', school: 'SIC Umari', place: 'Kadipur, Sultanpur, Uttar Pradesh' },
]
export const certifications = [{ title: 'Design Fundamental with AI', issuer: 'Adobe', year: '2026' }]
export const nav = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Certifications', 'Contact']
