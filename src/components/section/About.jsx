import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "JavaScript",
    "React",
    "Vue",
    "Next.js",
    "Nuxt.js",
    "TailwindCSS",
  ];
  const backendSkills = [
    "Node.js",
    "Express.js",
    "Golang",
    "RESTful API",
    "gRPC",
  ];
  const databaseSkills = [
    "PostgreSQL",
    "Redis",
    "MongoDB",
    "SSMS",
    "Firebase",
    "Supabase",
    "Prisma",
  ];
  const devOpsSkills = ["Docker", "Github Actions", "Railway", "Vercel"];
  const otherSkills = [
    "Postman",
    "Swagger",
    "CMS - Starpi, Sanity",
    "PowerBI",
    "Tableau",
    "SEO",
    "Google Analytics",
    "Google Tag Manager",
    "Google Search Console",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent text-center">
            About
          </h2>
          <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all ">
            <p className="text-gray-300 mb-6">
              Self-taught and passionate engineer who loves coding. Skilled in
              building efficient, data-driven applications with a strong
              problem-solving mindset and creating innovative solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgb(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgb(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {databaseSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgb(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Devops</h3>
                <div className="flex flex-wrap gap-2">
                  {devOpsSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgb(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-xl hover:-translate-y-1 transition-all mt-4">
              <h3 className="text-xl font-bold mb-4">Other Skills</h3>
              <div className="flex flex-wrap gap-2">
                {otherSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgb(59,130,246,0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="p-6 rounded-xl border-ywhite/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">📖 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li className="mb-2">
                  <strong className="text-white">
                    Bachelor of Science in Physics
                  </strong>{" "}
                  - Khon Kaen University, Thailand (2015 - 2019)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-ywhite/10 border hover:-translate-y-1 transition-all mt-6">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div>
                <h4 className="font-semibold">
                  {" "}
                  Data analyst -{" "}
                  <strong className="text-blue-400">
                    Metro Machinery Group
                  </strong>{" "}
                  (August 2024 - Present)
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li className="mb-2 text-gray-300 text-[14px]">
                    Conducted data modeling and visualization to track service
                    business KPIs and enhance data quality.
                  </li>
                  <li className="mb-2 text-gray-300 text-[14px]">
                    Prepared data and requirements gathering for various reports
                    functions, including operations, customer service, sales
                    performance, incentives, and KPI analysis.
                  </li>
                  <li className="mb-2 text-gray-300 text-[14px]">
                    Collaborated with cross-functional teams to ensure data
                    accuracy and integrity, Query Optimization & Performance
                    Tuning.
                  </li>
                </ul>
                <h4 className="font-semibold mt-4">
                  {" "}
                  Senior Data analyst -{" "}
                  <strong className="text-blue-400">
                    Nayoo Corporation Co., Ltd.
                  </strong>{" "}
                  (April 2022 - July 2024)
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li className="mb-2 text-gray-300 text-[14px]">
                    Managed a team to drive monthly traffic KPI using ads and
                    SEO tools, optimizing website user behavior analytics to
                    enhance business strategy.
                  </li>
                  <li className="mb-2 text-gray-300 text-[14px]">
                    Utilized advanced data analysis techniques to identify
                    trends and insights, leading to strategic business
                    recommendations.
                  </li>
                </ul>
                <h4 className="font-semibold mt-4">
                  {" "}
                  Boardman -{" "}
                  <strong className="text-blue-400">
                    TPI Polene Power Co., Ltd.
                  </strong>{" "}
                  (August 2019 - March 2022)
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li className="mb-2 text-gray-300 text-[14px]">
                    Managed team to control boiler operations using RDF fuel,
                    documenting operation logs.
                  </li>
                  <li className="mb-2 text-gray-300 text-[14px]">
                    Achieved monthly KPI targets by optimizing fuel conditions
                    and waste resource management.
                  </li>
                  <li className="mb-2 text-gray-300 text-[14px]">
                    Spearheaded efforts to ensure efficient power plant
                    operations.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
