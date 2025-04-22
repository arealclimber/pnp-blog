interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'PNP (this website)',
    description:
      'A blog built from a template, upgraded with various features, and integrated with CI/CD.',
    href: 'https://github.com/arealclimber/pnp-blog',
  },
  {
    title: 'Server Swarm',
    description: `Integration of accounting software with Docker Compose, full-stack support, LLM (Ollama), automated deployment, multi-service hosting via Nginx.`,
    // imgSrc: '/static/images/default-project.jpeg',
    href: 'https://github.com/CAFECA-IO/ServerSwarm/tree/develop',
  },
  {
    title: 'AI feature in English speaking',
    description: `Multi-speaker voice recognition (STT), emotional analysis and LLM integration in English conversation.`,
    // imgSrc: '/static/images/default-project.jpeg',
    href: 'https://www.linkedin.com/in/arealclimber/details/honors/',
  },
  {
    title: 'iSunFA',
    description: `Accounting-related frontend and backend development.`,
    // imgSrc: '/static/images/default-project.jpeg',
    href: 'https://isunfa.com',
  },
  {
    title: 'FAITH',
    description: `Built the chatbot user interface.`,
    // imgSrc: '/static/images/default-project.jpeg',
    href: 'https://faith.isunfa.com',
  },
  {
    title: 'BAIFA',
    description: `Built the frontend and API of blockchain explorer.`,
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
    description: `A concise report generator leveraging GitHub issues and IndexedDB.`,
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
