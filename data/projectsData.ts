interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Server Swarm',
    description: `A clusters of servers that are connected to each other. Build the structure of prod and dev CI/CD pipeline.`,
    // imgSrc: '/static/images/default-project.jpeg',
    // href: '',
  },
  {
    title: 'AI feature in English speaking',
    description: `Multi-speaker voice recognition and LLM integration in English conversation.`,
    // imgSrc: '/static/images/default-project.jpeg',
    // href: '',
  },
  {
    title: 'iSunFA',
    description: `Database migration and accounting-related backend development.`,
    // imgSrc: '/static/images/default-project.jpeg',
    href: 'https://isunfa.com',
  },
  {
    title: 'BAIFA',
    description: `Build the frontend and API of blockchain explorer.`,
    // imgSrc: '/static/images/default-project.jpeg',
    href: 'https://baifa.io',
  },
  {
    title: 'TideBit DeFi',
    description: `Lead the frontend development of a Crypto DeFi platform.`,
    // imgSrc: '/static/images/tidebit-defi.svg',
    href: 'https://tidebit-defi.com',
  },
  // {
  //   title: 'A Search Engine',
  //   description: `What if you could look up any information in the world? Webpages, images, videos
  //   and more. Google has many features to help you find exactly what you're looking
  //   for.`,
  //   imgSrc: '/static/images/google.png',
  //   href: 'https://www.google.com',
  // },
  // {
  //   title: 'The Time Machine',
  //   description: `Imagine being able to travel back in time or to the future. Simple turn the knob
  //   to the desired date and press "Go". No more worrying about lost keys or
  //   forgotten headphones with this simple yet affordable solution.`,
  //   imgSrc: '/static/images/time-machine.jpg',
  //   href: '/blog/the-time-machine',
  // },
]

export default projectsData
