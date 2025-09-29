type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  status?: string
  description?: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type AboutMe = {
  name: string
  title: string
  profession: string
  image: string
  description: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Robot Launcher',
    description: 'Automation that monitor & launch Robot',
    link: '',
    video: '/portofolio/robot-launcher/launcher.png',
    id: 'project1',
  },
  {
    name: 'PowerApps Dashboard',
    description:
      'Interactive dashboard built with PowerApps to automate workflows',
    link: '',
    video: '/portofolio/powerapps/image.png',
    id: 'project2',
  },
  {
    name: 'NodeJS Automation Dashboard',
    description: 'Modern website built to monitor & control automation robots (Python & Javascript)',
    link: '',
    video: '/portofolio/robot-dashboard/dashboard.png',
    id: 'project3',
  },
  {
    name: 'Church Community Website',
    description: 'Modern website built to strengthen church engagement',
    link: '',
    video: '/portofolio/web/church.png',
    id: 'project4',
  },
  {
    name: 'Japanse Learning Platform',
    description: 'Interactive platform designed to help users learn Japanese',
    link: '',
    video: '/portofolio/web/kiyora.png',
    id: 'project5',
  },
  {
    name: 'Shop & Wear',
    description:
      'E-commerce platform for discovering and purchasing fashion items with ease',
    link: '',
    video: '/portofolio/web/shoes.png',
    id: 'project6',
  },
  {
    name: 'Hungry Guys Voucher Shop',
    description:
      'Digital voucher store, offering fast and easy purchases of game credits',
    link: '',
    video: '/portofolio/web/hungryguys.png',
    id: 'project7',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'PT Bank Sumitomo Mitsui Indonesia',
    title: 'Robotic Process Automation Developer',
    start: '2023',
    end: 'Present',
    link: '/experience/post/smbc-indonesia',
    status: 'Contract',
    description:
      'Designing, developing, maintaining, and monitoring automation robots that handle thousands of daily transactions',
    id: 'work1',
  },
  {
    company: 'PT Bank Mandiri Tbk',
    title: 'QA Automation Engineer',
    start: '2021',
    end: '2023',
    link: '/experience/post/bank-mandiri',
    status: 'Contract',
    description:
      'Maintain & developing automation test script (API Testing, Web Application Testing, Database Testing)',
    id: 'work2',
  },
  {
    company: 'Gunadarma University',
    title: 'Programmer',
    start: '2019',
    end: '2021',
    link: '/experience/post/gunadarma',
    status: 'Contract',
    description:
      'Providing help to others student to understand to basic of programming (MySQL, VBs) ',
    id: 'work3',
  },
  {
    company: 'PT Nstore Digital Technology',
    title: 'Software Engineer',
    start: '2022',
    end: 'Present',
    link: '',
    status: 'Freelance',
    description:
      'Developing web application base on client requirement',
    id: 'work4',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/post/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
]
export const ABOUT_ME: AboutMe[] = [
  {
    name: 'Natanael Pasaribu',
    title: 'About Me',
    profession: 'Fullstack Developer',
    image: '/personal.jpg',
    description: `👋 Hey there! I’m Natan, a passionate Fullstack Developer from 🇮🇩 Indonesia.\n`,
  },
]

export const EMAIL = 'natanaelcaesario09@gmail.com'
