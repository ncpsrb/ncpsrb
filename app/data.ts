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
    name: 'Image Generator',
    description: ' Python tool that creates images with custom text',
    link: '/projects/post/exploring-the-intersection-of-design-ai-and-design-engineering',
    video: '/portofolio/automation-gif/imagegenerator.gif',
    id: 'project6',
  },
  {
    name: 'Trend Checker',
    description: 'Automation that analyzes and visualizes keyword trends',
    link: '',
    video: '/portofolio/automation-gif/trendchecker.gif',
    id: 'project7',
  },
  {
    name: 'PowerApps Dashboard',
    description:
      'Interactive dashboard built with PowerApps to automate workflows',
    link: '',
    video: '/portofolio/powerapps/image.png',
    id: 'project4',
  },
  {
    name: 'Church Community Website',
    description: 'Modern website built to strengthen church engagement',
    link: '',
    video: '/portofolio/web/church.png',
    id: 'project1',
  },
  {
    name: 'Japanse Learning Platform',
    description: 'Interactive platform designed to help users learn Japanese',
    link: '',
    video: '/portofolio/web/kiyora.png',
    id: 'project2',
  },
  {
    name: 'Shop & Wear',
    description:
      'E-commerce platform for discovering and purchasing fashion items with ease',
    link: '',
    video: '/portofolio/web/shoes.png',
    id: 'project3',
  },

  {
    name: 'Hungryguys Shop',
    description:
      'Digital voucher store, offering fast and easy purchases of game credits',
    link: '',
    video: '/portofolio/web/hungryguys.png',
    id: 'project5',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Reglazed Studio',
    title: 'CEO',
    start: '2024',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Design Engineer',
    start: '2022',
    end: '2024',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2017',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work3',
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
    description:
      'Hey there! I`m Natan, a passionate fullstack developer hailing from Indonesia.',
  },
]

export const EMAIL = 'natanaelcaesario09@gmail.com'
