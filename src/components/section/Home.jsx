import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent leading-right">
            Hi, I'm Noppadol Chinonn
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            {" "}
            I'm a software engineer with a background in data analytics and a
            strong problem-solving mindset. My goal is to combine analytical
            thinking with software development to create impactful solutions.
          </p>
          <div className="flex justify-center space-x-4 ">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(59,130,246,0.4)] hover:bg-blue-500/10 rounded"
            >
              Contact me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
