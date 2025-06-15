export const projects = [
  {
    id: 1,
    title: "Disaster Resource Allocation API",
    description: "Backend API project that helps to allocate emergency resource to affected area after natural disaster, areas with higher emergency and tighter constrains receive resource first",
    skillsBack: ["Nest.js", "Drizzle"],
    platform: ["Azure", "Neon", "Redis"],
    projectLink: "https://disaster-app-c0gudrgjgtgncfgv.southeastasia-01.azurewebsites.net/api#/",
  },
  {
    id: 2,
    title: "Pokemon Search",
    description: "Dive into the world of Pokémon with our Next.js-powered web application. Utilizing GraphQL, it provides a seamless experience for searching Pokémon by name. Quickly access detailed information on their attacks and evolutionary lines.",
    skillsFront: ["Next.js"],
    skillsBack: ["GraphQL", "Apollo"],
    platform: ["Vercel"],
    projectLink: "https://pokemongraphql.vercel.app/",
    githubLink: "https://github.com/garesuta/pokemongraphql"
  },
  {
    id: 3,
    title: "Vue Jobs",
    description:
      "Full stack web application for job seekers and recruiters. Developed using Vue.js and Golang(Fiber). Deployed on Vercel for frontend and Railway for backend. Hosting database on Neondb.",
    skillsFront: ["Vue.js", "Tailwind CSS"],
    skillsBack: ["Golang", "PostgreSQL"],
    platform: ["Vercel", "Railway", "Neondb"],
    projectLink:
      "https://vue-project1-sandy.vercel.app",
    githubLink: "https://github.com/garesuta/vue-project1",
  },
  {
    id: 5,
    title: "StartUp app",
    description:
      "A web application for startups to pitch their projects and teams. Developed using React.js and Typescript with Sanity as the backend. Deployed on Vercel.",
    skillsFront: ["React.js", "Typescript", " Tailwind CSS"],
    skillsBack: ["Sanity"],
    platform: ["Vercel", "Github Authentication"],
    projectLink: "https://startup-app-sigma.vercel.app/",
    githubLink: "https://github.com/garesuta/startup-app",
  },
  {
    id: 6,
    title: "SaaS project",
    description:
      "Created a SaaS project clone 'Xora' using React.js deployed on Vercel.",
    skillsFront: ["React.js", " Tailwind CSS", "Chadcn"],
    platform: ["Vercel"],
    projectLink: "https://saas-landing-page-delta-red.vercel.app/",
    githubLink: "https://github.com/garesuta/saas_landing_page",
  },
  {
    id: 7,
    title: "E-commerce app",
    description:
      "Developed a frontend for an e-commerce application using React.js using React hook feature to handle add to cart feature. Deployed on Vercel.",
    skillsFront: ["React.js", "Tailwind CSS"],
    platform: ["Vercel"],
    projectLink: "https://ecomapp-ochre.vercel.app/",
    githubLink: "https://github.com/garesuta/ecomapp",
  },
  {
    id: 4,
    title: "Social API",
    description:
      " Developed a social media API using Golang(http package, chi router) with JWT authentication. Email service by mailtrap, authentication page by React.js and apply a migration method to the database. Deployed on Railway. Database hosted on NeonDB.",
    skillsFront: ["React.js"],
    skillsBack: ["Golang", "PostgreSQL", "Docker", "Makefile"],
    platform: ["Railway", "NeonDB"],
    projectLink:
      "https://social-go-backend-production.up.railway.app/v1/swagger/index.html",
    githubLink: "https://github.com/garesuta/social-go-backend",
  },
  {
    id: 8,
    title: "Simple Bank API",
    description:
      "Developed a simple bank API and gRPC API using Golang(GIN). Using sqlc for database migration. Unit test and mock data by testify. Using JWT token for authentication. Email service by asyncq. Database hosted on NeonDB.",
    skillsBack: ["Golang", "PostgreSQL", "Docker", "Makefile"],
    platform: ["NeonDB"],
    projectLink: "",
    githubLink: "https://github.com/garesuta/backend-go-simplebank",
  },
];