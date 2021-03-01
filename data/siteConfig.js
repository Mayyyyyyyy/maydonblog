module.exports = {
  siteTitle: 'Hi! I\'m May!',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'May Don',
  twitterUsername: '_franciscodf',
  githubUsername: 'Mayyyyyyyy',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `90后。<br/> <br/> 2019年gap期间受法国程序员室友影响，开始自学前端至今。<br/><br/>  一条命令指向一个结果。在这个充满不确定性的世界，很喜欢这样确切直率的事物。<br/><br/> 如今想找一份实习，以求技术上更进一步。若看上，请勾搭。`,
  skills: [
    {
      name: 'HTML、CSS、JS',
      level: 80
    },
    // {
    //   name: 'Javascript',
    //   level: 60
    // },
    {
      name: 'React.Js',
      level: 70
    },
    {
      name: 'Vue.js',
      level: 30
    },
    {
      name: 'Jquery、Git、Bootstrap、antd、Sass、Ajax',
      level: 50
    },
    {
      name: 'English',
      level: 85
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "Gympass",
      begin: {
        month: 'sep',
        year: '2019'
      },
      duration: null,
      occupation: "Frontend developer",
      description: "I am part of the Corporate team, responsible for the development and maintenance of the employee management platform, giving more and more autonomy to partner companies."
  
    },  {
      company: "Lendico",
      begin: {
        month: 'apr',
        year: '2018'
      },
      duration: null,
      occupation: "Frontend developer",
      description: "I integrate the Frontend team responsible for developing and maintaining the online lending platform."
  
    }, {
      company: "Anapro",
      begin: {
        month: 'dec',
        year: '2016'
      },
      duration: '1 yr e 5 mos',
      occupation: "Fullstack developer",
      description: "Development and maintenance, corrective and preventive, of web applications for the real estate market."
    }, {
      company: "Anapro",
      begin: {
        month: 'set',
        year: '2012'
      },
      duration: '4 yrs e 3 mos',
      occupation: "Support Technician",
      description: "Responsible for the implementation and parameterization of the system, training and customer support. Acting also in person in real estate launches guaranteeing the success and good use of the tool."
  
    },
  ],
  portifolio: [
    {
      image: "/images/portfolioCover.jpeg",
      description: "Text Generater",
      url: "https://text-generator-three.vercel.app"
    },
    {
      image: "/images/portfolioCover2.jpeg",
      description: "Xidu Hostel Official Website",
      url: "https://xidu-website-version2.vercel.app"
    },
     {
      image: "/images/portfolioCover3.jpeg",
      description: "Meow free pics",
      url: "https://meow-free-pictures.vercel.app"
    },
    {
      image: "/images/portfolioCover4.jpeg",
      description: "Shopping Cart",
      url: "https://shoppingcart-alpha.vercel.app" 
    },
    {
      image: "/images/portfolioCover5.jpeg",
      description: "Spell Game",
      url: "https://spell-game.vercel.app"
    },
    {
      image: "/images/portfolioCover6.jpeg",
      description: "Todo List",
      url: "https://complete-todo-list-without-losing-data.vercel.app"
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: "https://twitter.com/_franciscodf",
    linkedin: "https://www.linkedin.com/in/santos-francisco",
    github: "https://github.com/Mayyyyyyyy",
    email: "1368302788@qq.com"
  },
  siteUrl: 'https://santosfrancisco.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    }
  ]
}