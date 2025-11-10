import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

export default function PortfolioHome() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white overflow-hidden">
      {/* 🔮 Animated background rays */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Layer 1 - slow moving soft indigo rays */}
        <motion.div
          className="absolute w-[120%] h-[120%] bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.22)_0%,transparent_70%)]"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        />

        {/* Layer 2 - lighter soft pink glow (changed color here 🌸) */}
        <motion.div
          className="absolute w-[120%] h-[120%] bg-[radial-gradient(circle_at_70%_60%,rgba(244,114,182,0.18)_0%,transparent_70%)]"
          animate={{
            rotate: [360, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 45,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </motion.div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full px-6 md:px-20 py-20">
        {/* Left Section - Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:pl-6 md:text-left space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(244,114,182,0.3)]">
            Hi, I'm Hemanth 👋
          </h1>

          <p className="text-lg md:text-xl text-zinc-300 max-w-xl mx-auto md:mx-0">
            A passionate{" "}
            <span className="text-indigo-400 font-semibold">Full Stack Developer</span>{" "}
            crafting modern web applications with delightful user experiences.
          </p>

          <div className="flex gap-4 justify-center md:justify-start mt-4">
            <Button
              variant="outline"
              className="border-zinc-600 hover:bg-zinc-800"
            >
              View Projects
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700 cursor-pointer" onClick={() => navigate(`/contact`)}>
              Contact Me
            </Button>
          </div>

          <div className="flex gap-4 justify-center md:justify-start mt-6 text-zinc-400">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <Github className="w-6 h-6 hover:text-white transition" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <Linkedin className="w-6 h-6 hover:text-white transition" />
            </a>
            <a href="mailto:example@mail.com">
              <Mail className="w-6 h-6 hover:text-white transition" />
            </a>
          </div>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center mb-10 md:mb-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-500 shadow-[0_0_40px_-10px_rgba(99,102,241,0.8)]">
            <img
              src="/portfolio-image.png"
              alt="Hemanth profile"
              className="object-cover w-full h-full"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            />
          </div>
        </motion.div>
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-24 w-full max-w-5xl mx-auto px-6"
      >
        <h2 className="text-3xl font-semibold mb-8 text-center bg-gradient-to-r from-indigo-400 to-pink-300 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "React",
            "Next.js",
            "Node.js",
            "TypeScript",
            "MongoDB",
            "TailwindCSS",
            "Express",
            "AWS",
          ].map((skill) => (
            <Card
              key={skill}
              className="bg-zinc-800 border-zinc-700 hover:border-indigo-500 transition-all hover:shadow-[0_0_20px_-5px_rgba(99,102,241,0.7)]"
            >
              <CardContent className="text-center py-4 font-medium">
                {skill}
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* ================= PROJECTS SECTION ================= */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-28 w-full max-w-6xl mx-auto px-6"
      >
        <h2 className="text-3xl font-semibold mb-10 text-center bg-gradient-to-r from-indigo-400 to-pink-300 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((proj) => (
            <motion.div
              key={proj}
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-800 rounded-2xl border border-zinc-700 overflow-hidden hover:border-indigo-500 transition-all hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.8)]"
            >
              <img
                src={`/project${proj}.jpg`}
                alt={`Project ${proj}`}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">
                  Project Title {proj}
                </h3>
                <p className="text-zinc-400 text-sm mb-4">
                  A brief description of what the project does and technologies used.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-zinc-600 hover:bg-zinc-800"
                >
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= FOOTER ================= */}
      <footer className="mt-24 text-zinc-500 text-sm pb-10 text-center relative z-10">
        © {new Date().getFullYear()} Hemanth Ch. All rights reserved.
      </footer>
    </div>
  );
}
