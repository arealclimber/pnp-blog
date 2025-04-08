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
    href: 'https://github.com/CAFECA-IO/ServerSwarm/tree/develop',
  },
  {
    title: 'AI feature in English speaking',
    description: `Multi-speaker voice recognition (STT) and LLM integration in English conversation.`,
    // imgSrc: '/static/images/default-project.jpeg',
    href: 'https://www.linkedin.com/in/arealclimber/details/honors/',
  },
  {
    title: 'iSunFA',
    description: `Database migration and accounting-related frontend and backend development.`,
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
    description: `Initiated the development of a Crypto DeFi platform.`,
    // imgSrc: '/static/images/tidebit-defi.svg',
    href: 'https://tidebit-defi.com',
  },
  {
    title: 'Report Tool',
    description: `A simple report generator leveraging GitHub issues and IndexedDB.`,
    // imgSrc: '/static/images/default-project.jpeg',
    href: 'https://report-tool-arealclimber.vercel.app',
  },
  {
    title: 'NFT Marketplace',
    description: `A NFT Marketplace to make, buy and sell NFTs.`,
    // imgSrc: '/static/images/default-project.jpeg',
    href: 'https://github.com/arealclimber/nft-playground',
  },
  {
    title: 'NFT Minting Dapp',
    description: `A NFT Minting Dapp to mint certain collections of NFTs.`,
    // imgSrc: '/static/images/default-project.jpeg',
    href: 'https://github.com/arealclimber/NFT-minting-dapp',
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
