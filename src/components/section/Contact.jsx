import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { useState, useRef } from "react";

export const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        alert("Error sending message, please try again later.");
        console.error("FAILED...", err);
      });
  };
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form
            ref={form}
            action=""
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded  px-4 py-3 text-white transition focus:outline-none focus:border-blue-500"
                placeholder="Name..."
              />
            </div>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded  px-4 py-3 text-white transition focus:outline-none focus:border-blue-500"
                placeholder="example@gmail.com..."
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded  px-4 py-3 text-white transition focus:outline-none focus:border-blue-500"
                placeholder="your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(59,130,246,0.2)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
