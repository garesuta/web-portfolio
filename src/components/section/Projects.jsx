import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
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
            <div className="p-6 rounded-2xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgb(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <p className="text-gray-400 mb-4">
                Description of project 1. This project is about...
              </p>
              <div>
                {["React", "Node.js", "Express.js"].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgb(59,130,246,0.2)] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href=""
                  className="text-blue-500 hover:text-blue-300 transition-colors hover:underline mt-4"
                >
                  {"View Project →"}
                </a>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgb(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <p className="text-gray-400 mb-4">
                Description of project 1. This project is about...
              </p>
              <div>
                {["React", "Node.js", "Express.js"].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgb(59,130,246,0.2)] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href=""
                  className="text-blue-500 hover:text-blue-300 transition-colors hover:underline mt-4"
                >
                  {"View Project →"}
                </a>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgb(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <p className="text-gray-400 mb-4">
                Description of project 1. This project is about...
              </p>
              <div>
                {["React", "Node.js", "Express.js"].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgb(59,130,246,0.2)] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href=""
                  className="text-blue-500 hover:text-blue-300 transition-colors hover:underline mt-4"
                >
                  {"View Project →"}
                </a>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgb(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <p className="text-gray-400 mb-4">
                Description of project 1. This project is about...
              </p>
              <div>
                {["React", "Node.js", "Express.js"].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgb(59,130,246,0.2)] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href=""
                  className="text-blue-500 hover:text-blue-300 transition-colors hover:underline mt-4"
                >
                  {"View Project →"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
