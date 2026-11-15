export const profile = {
  name: 'Sivaram S', firstName: 'Sivaram', role: 'Full Stack Developer',
  email: 'sbsivaram3009@gmail.com', phone: '+91 8098777032', location: 'Chennai, India',
  github: 'https://github.com/siva3009', linkedin: 'https://www.linkedin.com/in/sivaram-dev',
  resume: '/files/Sivaram-S-Resume.pdf',
};
export const projects = [
  { id: 'bigbull', title: 'Big Bull', subtitle: 'Digital Marketing', category: 'Responsive website', context: 'Eximio internship · Jun–Jul 2025', tags: ['HTML', 'CSS', 'JavaScript'], description: 'A responsive website for Big Bull Digital Marketing, developed and deployed during my internship at Eximio Services and Solutions.', contributions: ['Developed the website using HTML, CSS, and JavaScript.', 'Built responsive page layouts across screen sizes.', 'Took the website through deployment.'] },
  { id: 'sovereign', title: 'Sovereign Awards', subtitle: 'Event Registration', category: 'Registration platform', context: 'Eximio internship · Jun–Jul 2025', tags: ['Form validation', 'Backend data', 'Web development'], description: 'An event registration platform where I contributed to the form validation and backend data handling that support the registration flow.', contributions: ['Worked on registration form validation.', 'Contributed to backend handling of registration data.', 'Supported the event platform during my internship.'] },
  { id: 'packazilla', title: 'Packazilla', subtitle: 'E-commerce', category: 'Commerce experience', context: 'Eximio internship · Jun–Jul 2025', tags: ['REST APIs', 'Product listings', 'Cart & checkout'], description: 'An e-commerce application where I implemented product listings, cart interactions, and checkout flows with REST API integration.', contributions: ['Implemented product listing interfaces.', 'Built cart and checkout flows.', 'Integrated REST APIs into the shopping experience.'] },
  { id: 'construction', title: 'Construction OS', subtitle: 'Management Dashboard', category: 'Full-stack application', context: 'Independent project', tags: ['Authentication', 'Analytics', 'Workforce management'], description: 'A construction management dashboard bringing authentication, analytics, and workforce management into one application. “Construction OS” is the presentation name used in this portfolio.', contributions: ['Developed authentication for the application.', 'Built analytics and dashboard features.', 'Implemented workforce management functionality.'] },
] as const;
export type Project = (typeof projects)[number];
export type ProjectId = Project['id'];
export const services = [
  { title: 'Web Development', icon: 'code', items: ['React interfaces', 'Responsive websites', 'HTML, CSS & JavaScript', 'WordPress'], text: 'Interfaces that adapt to the people and devices using them.' },
  { title: 'Backend & APIs', icon: 'server', items: ['Node.js & Express.js', 'REST API integration', 'Authentication', 'Form validation'], text: 'The application logic that connects an interface to real functionality.' },
  { title: 'Data & Databases', icon: 'database', items: ['MySQL & PostgreSQL', 'SQL queries', 'Relational database design', 'Python scripting'], text: 'Organized data and practical tools for working with it.' },
  { title: 'Testing & Delivery', icon: 'rocket', items: ['Application testing', 'Deployment workflows', 'Git & GitHub', 'Client coordination'], text: 'Careful implementation, tested flows, and a clear path to deployment.' },
  { title: 'Creative Development', icon: 'sparkles', items: ['TypeScript', 'Interactive interfaces', 'Motion experiments', 'Continuous learning'], text: 'Exploring the place where useful engineering meets expressive design.' },
] as const;
export const journey = [
  { title: 'Freelance Full Stack Developer', meta: '2025 — PRESENT', label: 'Independent', body: 'Managing client requirements, application development, testing, and deployment with React, Node.js, Express.js, and MySQL.', art: 'construction' },
  { title: 'Web Developer Intern', meta: 'JUN — JUL 2025', label: 'Eximio Services and Solutions', body: 'Worked on Big Bull Digital Marketing, Sovereign Awards, and Packazilla in Chennai. My contributions ranged from responsive websites to validation, backend data handling, and commerce flows.', art: 'bigbull' },
  { title: 'B.E. Electronics & Communication', meta: '2023 — 2027', label: 'Prince Shri Venkateswara Padmavathy Engineering College', body: 'Final-year engineering student with a CGPA of 7.0/10, building practical experience in software development alongside coursework.', art: 'education' },
  { title: 'Full Stack Web Developer', meta: '2025 · CERTIFICATION', label: 'Info-Tech Institute', body: 'Full Stack Web Developer certification, complemented by Artificial Intelligence Fundamentals from IBM SkillsBuild.', art: 'certification' },
] as const;
export const chapters = [
  { label: '01 / ENGINEERING', title: 'A foundation in engineering.', subtitle: 'B.E. Electronics & Communication · 2023–2027', body: 'I’m a final-year student at Prince Shri Venkateswara Padmavathy Engineering College. Alongside my coursework, I build full-stack applications and explore databases, deployment, and automation.', mark: 'BE' },
  { label: '02 / PRACTICE', title: 'Learning by building.', subtitle: 'Internship + freelance development', body: 'My experience includes client-facing websites, event registration, e-commerce, and a construction management dashboard. I enjoy working through a problem from requirements to a tested application.', mark: '</>' },
  { label: '03 / CURIOSITY', title: 'Always another idea.', subtitle: 'Development · automation · music', body: 'Outside coursework, I explore developer tools, build coding projects, and experiment with automation. Away from the screen, you’ll find me playing drums and enjoying music.', mark: '♪' },
];
export const faqs = [
  { q: 'Who are you, and what do you build?', a: 'I’m Sivaram, a full-stack developer and final-year Electronics and Communication Engineering student based in Chennai. I build responsive websites and web applications, with experience in React, Node.js, Express.js, SQL databases, and REST APIs.' },
  { q: 'Are you available for a role or a freelance project?', a: 'I’m open to discussing freelance projects and entry-level opportunities in development, application support, IT operations, infrastructure, or technology services. Send me a short outline of what you have in mind and we can discuss the fit.' },
  { q: 'What does working together look like?', a: 'We start by discussing your requirements, users, and priorities. From there, I can help with implementation, testing, and deployment. Scope and timing are agreed after understanding the project.' },
  { q: 'Which technologies do you work with?', a: 'My toolkit includes Python, JavaScript, TypeScript, C++, React, Node.js, Express.js, HTML, CSS, WordPress, MySQL, and PostgreSQL. I also work with Git, GitHub, authentication, form validation, and REST API integration.' },
  { q: 'Where can I find your résumé and code?', a: 'You can download my résumé below and visit my GitHub or LinkedIn using the footer links. The selected work section describes the projects and contributions listed in my résumé.' },
];
