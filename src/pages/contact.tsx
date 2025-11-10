import { motion } from "framer-motion";
import { Linkedin, Mail, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white overflow-hidden flex items-center justify-center px-6 md:px-20 py-20">
      {/* 🔮 Soft background glow */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute w-[120%] h-[120%] bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.22)_0%,transparent_70%)]"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute w-[120%] h-[120%] bg-[radial-gradient(circle_at_70%_60%,rgba(244,114,182,0.18)_0%,transparent_70%)]"
          animate={{
            rotate: [360, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 55,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-3xl bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_-10px_rgba(99,102,241,0.6)] backdrop-blur-md"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300 bg-clip-text text-transparent mb-6">
          Get In Touch
        </h1>

        <p className="text-zinc-400 text-center mb-10">
          Let’s build something amazing together!  
          Feel free to reach out through email or connect directly on social platforms.
        </p>

        {/* Contact Form */}
        <form
          action="mailto:youremail@example.com"
          method="POST"
          encType="text/plain"
          className="space-y-5"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message..."
            rows={5}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 resize-none"
            required
          />

          <Button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 text-lg font-medium transition-colors flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Send Message
          </Button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-10">
          <div className="flex-1 h-px bg-zinc-700"></div>
          <span className="mx-4 text-zinc-500">or</span>
          <div className="flex-1 h-px bg-zinc-700"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button
            onClick={() =>
              window.open("https://www.linkedin.com/in/hemanth-chiluka-2b1745249", "_blank")
            }
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 w-full md:w-auto"
          >
            <Linkedin className="w-5 h-5" />
            Connect on LinkedIn
          </Button>

          <Button
            onClick={() =>
              window.open("https://wa.me/9515889472?text=Hi%20Hemanth!", "_blank")
            }
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 w-full md:w-auto"
          >
            <Phone className="w-5 h-5" />
            Chat on WhatsApp
          </Button>

          <Button
            onClick={() => (window.location.href = "mailto:hemanthchiluka7@gmail.com")}
            className="flex items-center gap-2 bg-pink-700 hover:bg-pink-900 w-full md:w-auto"
          >
            <Mail className="w-5 h-5" />
            Send Email
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
