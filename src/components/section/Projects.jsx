import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
  const projects = [
    {
      id: 1,
      title: "Vue Jobs",
      description:
        "Full stack web application for job seekers and recruiters. Developed using Vue.js and Golang(Fiber). Deployed on Vercel for frontend and Railway for backend. Hosting database on Neondb.",
      skillsFront: ["Vue.js", "Tailwind CSS"],
      skillsBack: ["Golang", "PostgreSQL"],
      platform: ["Vercel", "Railway", "Neondb"],
      projectLink:
        "https://vue-project1-48eszo2rw-garesutas-projects.vercel.app",
      githubLink: "https://github.com/garesuta/vue-project1",
    },
    {
      id: 2,
      title: "StartUp app",
      description:
        "A web application for startups to pitch their projects and teams. Developed using React.js and Typescript with Sanity as the backend. Deployed on Vercel.",
      skillsFront: ["React.js", "Typescript", " Tailwind CSS"],
      skillsBack: ["Sanity"],
      platform: ["Vercel", "Github Authentication"],
      projectLink: "https://startup-dzbqtvuh9-garesutas-projects.vercel.app/",
      githubLink: "https://github.com/garesuta/startup-app",
    },
    {
      id: 3,
      title: "SaaS project",
      description:
        "Created a SaaS project clone 'Xora' using React.js deployed on Vercel.",
      skillsFront: ["React.js", " Tailwind CSS", "Chadcn"],
      platform: ["Vercel"],
      projectLink: "https://saas-landing-page-delta-red.vercel.app/#",
      githubLink: "https://github.com/garesuta/saas_landing_page",
    },
    {
      id: 4,
      title: "E-commerce app",
      description:
        "Developed a frontend for an e-commerce application using React.js using React hook feature to handle add to cart feature. Deployed on Vercel.",
      skillsFront: ["React.js", "Tailwind CSS"],
      platform: ["Vercel"],
      projectLink: "https://ecomapp-ochre.vercel.app/",
      githubLink: "https://github.com/garesuta/ecomapp",
    },
    {
      id: 5,
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
      id: 6,
      title: "Simple Bank API",
      description:
        "Developed a simple bank API and gRPC API using Golang(GIN). Using sqlc for database migration. Unit test and mock data by testify. Using JWT token for authentication. Email service by asyncq. Database hosted on NeonDB.",
      skillsBack: ["Golang", "PostgreSQL", "Docker", "Makefile"],
      platform: ["NeonDB"],
      projectLink: "",
      githubLink: "https://github.com/garesuta/backend-go-simplebank",
    },
  ];
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-10"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div className="p-6 rounded-2xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgb(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2">
                  Project {project.id} : {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {truncateText(project.description, 200)}
                </p>
                <div className="text-sm">
                  Frontend-stack :{" "}
                  {project.skillsFront?.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgb(59,130,246,0.2)] transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="text-sm mt-2">
                  Backend-stack :{" "}
                  {project.skillsBack?.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgb(59,130,246,0.2)] transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="text-sm mt-2">
                  Hosting :{" "}
                  {project.platform?.map((plat, index) => (
                    <span
                      key={index}
                      className="bg-white/10 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgb(59,130,246,0.2)] transition-all"
                    >
                      {plat}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.projectLink}
                    target="_blank"
                    className="text-blue-500 hover:text-blue-300 transition-colors hover:underline mt-4"
                  >
                    {"View Project →"}
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="text-white hover:text-blue-300 transition-colors hover:underline mt-4"
                  >
                    {"View Code →"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
