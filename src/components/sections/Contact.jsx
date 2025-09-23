import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { SiLeetcode } from "react-icons/si"; // for LeetCode

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6 bg-black text-gray-200">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side: Form */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Let’s Connect
              </span>
            </h2>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed">
              I’d love to hear from you! Whether it’s a project idea, a collaboration, 
              or just a hello — drop a message below.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                placeholder="Your Name"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:border-blue-500 focus:bg-blue-500/5"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:border-blue-500 focus:bg-blue-500/5"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <textarea
                name="message"
                rows={5}
                required
                value={formData.message}
                placeholder="Your Message"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:border-blue-500 focus:bg-blue-500/5"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side: Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-4">
              <MapPin className="text-blue-400" />
              <p className="text-gray-300">Kolkata, India</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-blue-400" />
              <p className="text-gray-300">archita.saha2106@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-blue-400" />
              <p className="text-gray-300">+91 7980337147</p>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white mb-3">Find me online</h3>
              <div className="flex gap-5">
                <a
                  href="https://github.com/architasaha21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 hover:bg-blue-500/20 text-gray-300 hover:text-white transition"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/architasaha21/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 hover:bg-blue-500/20 text-gray-300 hover:text-white transition"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="https://leetcode.com/u/noobcoder1260/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 hover:bg-blue-500/20 text-gray-300 hover:text-white transition"
                >
                  <SiLeetcode size={22} />
                </a>
                <a
                  href="https://x.com/orcheeta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 hover:bg-blue-500/20 text-gray-300 hover:text-white transition"
                >
                  <Twitter size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
