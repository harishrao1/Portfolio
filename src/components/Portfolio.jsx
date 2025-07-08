import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Server,
  Trophy,
  Calendar,
  MapPin,
  Download,
  Menu,
  X,
  ChevronDown,
  Star,
  Award,
  Briefcase,
  GraduationCap,
  User,
  Zap,
  Target,
} from "lucide-react";
import {
  CERTIFICATIONS,
  EXPERIENCES,
  NAVIGATION_ITEMS,
  PORTFOLIO_INFO,
  PROJECTS,
  SECTIONS,
  SKILLS,
  SOCIAL_PROFILE_URLS,
} from "../config";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      SECTIONS.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollY >= offsetTop - 100 &&
            scrollY < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {PORTFOLIO_INFO.name}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-purple-500/20 text-purple-400"
                      : "text-gray-300 hover:text-purple-400 hover:bg-purple-500/10"
                  }`}
                >
                  <item.icon size={16} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-purple-500/10"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/40 backdrop-blur-md border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 w-full px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-purple-500/20 text-purple-400"
                      : "text-gray-300 hover:text-purple-400 hover:bg-purple-500/10"
                  }`}
                >
                  <item.icon size={16} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-4xl font-bold mb-6">
              HR
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                {PORTFOLIO_INFO.fullName}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8"></p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
              {PORTFOLIO_INFO.content}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href="mailto:harishrao1846@gmail.com"
              className="flex items-center space-x-2 bg-purple-500/20 hover:bg-purple-500/30 px-6 py-3 rounded-lg transition-all duration-300 border border-purple-500/30"
            >
              <Mail size={20} />
              <span>{PORTFOLIO_INFO.getInTouch}</span>
            </a>
            <a
              href={SOCIAL_PROFILE_URLS.githubProfile}
              className="flex items-center space-x-2 bg-gray-500/20 hover:bg-gray-500/30 px-6 py-3 rounded-lg transition-all duration-300 border border-gray-500/30"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href={SOCIAL_PROFILE_URLS.linkdlnProfile}
              className="flex items-center space-x-2 bg-blue-500/20 hover:bg-blue-500/30 px-6 py-3 rounded-lg transition-all duration-300 border border-blue-500/30"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                I'm a passionate Frontend Developer with experience in creating
                dynamic, user-friendly web applications. Currently working at
                ExtraaEdge Technology Solutions, I specialize in React ecosystem
                and performance optimization.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                My journey in web development has been driven by a love for
                clean code, innovative solutions, and continuous learning. I've
                successfully contributed to reducing deployment times by 83% and
                improving website performance by 40%.
              </p>
              <div className="flex items-center space-x-4 text-gray-400">
                <MapPin size={16} />
                <span>Hyderabad, India</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">
                  Quick Facts
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>🎓 B.Tech from Guru Nanak Institute of Technology</li>
                  <li>💼 Currently Frontend Developer at ExtraaEdge</li>
                  <li>🏆 Gold Badge in Java at HackerRank</li>
                  <li>📚 HarvardX CS50 Graduate</li>
                  <li>⚡ 40% performance improvement specialist</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="space-y-8">
            {EXPERIENCES.map((exp, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-2">
                      {exp.position}
                    </h3>
                    <p className="text-xl text-gray-300 mb-2">{exp.company}</p>
                    <div className="flex items-center space-x-4 text-gray-400">
                      <span className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {exp.products && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-purple-300">
                      Products:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.products.map((product, i) => (
                        <span
                          key={i}
                          className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-purple-300">
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-purple-300">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-500/20 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-purple-400">
                    {project.name}
                  </h3>
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-purple-300">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-500/20 text-gray-300 px-2 py-1 rounded text-xs border border-gray-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.tools && (
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-purple-300">
                      Tools:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs border border-blue-500/30"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(SKILLS).map(([category, skillList], index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-purple-400 mb-4 flex items-center space-x-2">
                  {category === "Languages" && <Code size={20} />}
                  {category === "Frameworks" && <Server size={20} />}
                  {category === "Tools" && <Database size={20} />}
                  {category === "Other" && <Zap size={20} />}
                  <span>{category}</span>
                </h3>
                <div className="space-y-2">
                  {skillList.map((skill, i) => (
                    <div
                      key={i}
                      className="bg-gray-500/20 text-gray-300 px-3 py-2 rounded border border-gray-500/30 text-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education & Certifications
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center space-x-2">
                <GraduationCap size={24} />
                <span>Education</span>
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-200">
                    Bachelor of Technology
                  </h4>
                  <p className="text-purple-300">
                    Guru Nanak Institute of Technology
                  </p>
                  <p className="text-gray-400">Hyderabad, India</p>
                  <p className="text-gray-400">July 2016 - December 2020</p>
                  <p className="text-green-400 font-semibold">
                    Percentage: 74%
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center space-x-2">
                <Award size={24} />
                <span>Certifications</span>
              </h3>
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-purple-500 pl-4"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <cert.icon size={16} className="text-purple-400" />
                      <h4 className="font-semibold text-gray-200">
                        {cert.name}
                      </h4>
                    </div>
                    <p className="text-gray-400 text-sm">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center space-x-2">
              <Trophy size={24} />
              <span>Achievements</span>
            </h3>
            <div className="flex items-center space-x-2 text-gray-300">
              <Star size={16} className="text-yellow-400" />
              <span>
                Secured Gold Badge in Java and 30 Days of Code in HackerRank
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new opportunities and interesting
            projects. Let's connect!
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="mailto:harishrao1846@gmail.com"
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105"
            >
              <Mail size={32} className="text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-400">harishrao1846@gmail.com</p>
            </a>

            <a
              href="tel:+916302295025"
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105"
            >
              <Phone size={32} className="text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">+91-6302295025</p>
            </a>

            <a
              href="https://linkedin.com/in/harishrao-rangineni-669b99233/"
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105"
            >
              <Linkedin size={32} className="text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400">Connect with me</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>
            &copy; 2024 Harishrao Rangineni. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
