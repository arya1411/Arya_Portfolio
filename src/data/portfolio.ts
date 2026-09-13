export const portfolio = {
  personal: {
    name: 'Arya Patel',
    initials: 'AP',
    title: 'Full-Stack Developer · AI Products',
    heroHeadline: ['I BUILD', 'DIGITAL', 'PRODUCTS.'],
    headline: 'Developer by craft. Product thinker by instinct.',
    tagline: 'From scratch to deployment.',
    bio: 'I’m Arya Patel, a Full-Stack Developer currently pursuing B.Tech at Manipal Institute of Technology. I enjoy turning early ideas into reliable products—designing the interface, engineering the system, and adding AI where it creates genuine value.',
    footerBio: 'Full-Stack Developer building reliable, AI-powered digital products.',
    status: ['Open To Work', 'Remote + Onsite', 'Open To Internships'],
    resumeUrl: 'https://drive.google.com/uc?export=download&id=1ga1pX3lHRxvJvKyr_BWc54S3ljTUoTf2',
  },
  contact: {
    email: 'patelarya424@gmail.com',
    inquiryEmail: 'mailto:patelarya424@gmail.com?subject=Project%20Inquiry',
    phoneLabel: '+91 9428578531',
    phone: 'tel:+919428578531',
    github: 'https://github.com/arya1411',
    linkedin: 'https://www.linkedin.com/in/arya-patel-1405asd',
  },
}

export const developerStats = [
  { value: '05', label: 'Selected Products' },
  { value: '02', label: 'AI-Powered Builds' },
  { value: '03', label: 'Public Builds' },
  { value: 'A→Z', label: 'Idea To Deployment' },
]

export const technologies = ['C++', 'Python', 'JavaScript', 'MongoDB', 'TypeScript', 'Tailwind CSS', 'Vercel', 'GitHub', 'Docker', 'Prisma', 'Vite', 'Svelte', 'React']

export const skillGroups = [
  { title: 'MERN Stack', detail: 'Full-stack JavaScript architecture for fast product delivery and scalable APIs.', items: ['MongoDB', 'Express', 'React', 'Node.js'] },
  { title: 'AI And ML', detail: 'Practical machine-learning workflows with model serving and performance tuning.', items: ['TensorFlow ↗', 'Python', 'NumPy', 'Pandas'] },
  { title: 'Cloud And DevOps', detail: 'Production-ready deployment pipelines with containers and observability.', items: ['Docker ↗', 'Vercel', 'GitHub Actions', 'Linux'] },
  { title: 'Data And APIs', detail: 'Reliable data modeling and API design for real-world web products.', items: ['PostgreSQL ↗', 'MongoDB', 'REST API', 'Prisma ↗'] },
  { title: 'Frontend Systems', detail: 'Responsive, accessible interfaces with component-driven architecture.', items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'] },
  { title: 'AI Product Layer', detail: 'Integrating retrieval and prompt orchestration into useful product features.', items: ['LLM Apps', 'RAG ↗', 'Prompt Design', 'Evaluation'] },
]

export const projects = [
  {
    title: 'Code Sentinel', category: 'GitHub SaaS', status: 'In Progress', featured: true,
    description: 'AI-powered automated code review for connected GitHub repositories—analysing code and pull requests to surface precise, useful review insights.',
    tags: ['AI Code Review', 'GitHub SaaS', 'PR Insights'], href: '', linkLabel: '',
    scope: 'Product architecture · AI workflow · Full stack',
    challenge: 'Code review often becomes a bottleneck: feedback arrives late, repeats across pull requests, and can miss repository-specific context.',
    solution: 'A connected GitHub workflow that analyses repositories and pull requests, then turns the findings into focused, actionable review insights.',
    outcome: 'The product is currently in active development, with the core experience centred on useful signal, clear prioritisation, and developer trust.',
    highlights: ['Repository-aware analysis', 'Automated pull-request insights', 'Actionable review summaries'],
  },
  {
    title: 'Prep AI', category: 'AI Learning Platform', status: 'Live', featured: false,
    description: 'A focused preparation environment using pre-trained models and AI APIs for technical interview rounds.',
    tags: ['AI', 'Interview Prep'], href: 'https://ai-interview-preparation-pied.vercel.app/', linkLabel: 'Open live product',
    scope: 'AI integration · Product design · Deployment',
    challenge: 'Technical interview preparation is fragmented across disconnected resources and offers little structure for focused practice.',
    solution: 'A single preparation environment that uses pre-trained models and AI APIs to support practice across technical interview rounds.',
    outcome: 'A deployed, accessible product that turns AI capabilities into a practical preparation workflow.',
    highlights: ['Structured technical practice', 'Pre-trained model integration', 'Production deployment'],
  },
  {
    title: 'Integrated Team Task Management', category: 'Collaboration Platform', status: 'GitHub', featured: false,
    description: 'A comprehensive full-stack platform designed to streamline team workflows, task assignments, and project tracking.',
    tags: ['Full-Stack', 'Team Productivity'], href: 'https://github.com/arya1411/Task_Manager', linkLabel: 'View repository',
    scope: 'System Architecture · API Development · Collaboration UX',
    challenge: 'As teams scale, tracking task ownership and project momentum across multiple members often leads to fragmented communication and lost context.',
    solution: 'A centralized workspace featuring unified task boards, clear assignment tracking, and real-time updates to keep teams aligned.',
    outcome: 'A robust, scalable application that eliminates workflow bottlenecks and provides a clear, shared source of truth for cross-functional teams.',
    highlights: ['Centralized task ownership', 'Scalable full-stack architecture', 'Streamlined team workflows'],
  },
  {
    title: 'Mind Metric', category: 'Machine Learning Model', status: 'Completed', featured: false,
    description: 'An ML-powered tool that analyzes behavioral data to predict and assess mental health patterns.',
    tags: ['Machine Learning', 'Healthcare'], href: 'https://github.com/arya1411/Mind-Metric', linkLabel: 'View repository',
    scope: 'Data modelling · Analytics · Machine Learning',
    challenge: 'Mental health conditions are often difficult to detect early, relying heavily on subjective self-reporting rather than objective data trends.',
    solution: 'A machine learning model that analyzes user behavior and inputs to predict mental well-being and identify potential risk factors.',
    outcome: 'A predictive tool that offers early insights into mental health patterns, enabling proactive care and better self-awareness.',
    highlights: ['Predictive ML models', 'Behavioral pattern analysis', 'Health data insights'],
  },
  {
    title: 'Universal Downloader', category: 'Online Tool', status: 'Coming Soon', featured: false,
    description: 'A Flask-based utility designed to download content from multiple social platforms.',
    tags: ['Flask', 'Utility'], href: '', linkLabel: '',
    scope: 'Flask · Backend utility · Product UX',
    challenge: 'Saving permitted content from different platforms often means switching between inconsistent, single-purpose tools.',
    solution: 'A unified Flask interface designed to accept supported links and handle the download flow in one place.',
    outcome: 'The utility is being prepared for release; the current focus is predictable handling, clear feedback, and a simple workflow.',
    highlights: ['Multi-platform workflow', 'Flask-based processing', 'Simple link-to-download flow'],
  },
]

export const certifications = [
  { issuer: 'IBM', title: 'Machine Learning with Python', type: 'Professional Certificate', date: '2026', skills: ['Python', 'Machine Learning', 'NumPy', 'Pandas', 'Scikit-learn'], href: 'https://coursera.org/share/e6d2c7161bc09ed49a677ddc5fdbff14' },
  { issuer: 'IBM', title: 'Artificial Intelligence Fundamentals', type: 'Certification', date: '2026', skills: ['AI', 'NLP', 'Data Analysis'], href: '' },
  { issuer: 'IBM', title: 'Linux on IBM LinuxONE', type: 'Certificate', date: '2026', skills: ['Linux', 'Command Line', 'Docker'], href: '' },
  { issuer: 'DeepLearning.AI', title: 'Deep Learning', type: 'Specialization', date: '2026', skills: ['Python', 'ML', 'Neural Nets'], href: '' },
]
