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
    href: 'https://github.com/CAFECA-IO/ServerSwarm',
  },
  {
    title: 'AI feature in English speaking',
    description: `Multi-speaker voice recognition and LLM integration in English conversation.`,
    // imgSrc: '/static/images/default-project.jpeg',
    href: 'https://www.linkedin.com/posts/shinfuchen1989_aileijzbikwjpujnvleohxejpxkvinxgndclgd-ai-activity-7266367655236771840-38yY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB7C1NgBJl_t22ec0GYJXsKowQJaJ48cCgY',
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
    description: `Initiated the development of a Crypto DeFi platform.`,
    // imgSrc: '/static/images/tidebit-defi.svg',
    href: 'https://tidebit-defi.com',
  },
  {
    title: 'NFT Marketplace',
    description: `A NFT Marketplace to buy and sell NFTs.`,
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
