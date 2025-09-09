import React from "react";

const Portfolio: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-indigo-600">Aman Vishwakarma</h1>
          <nav className="space-x-6 font-medium">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#skills" className="hover:text-indigo-600">Skills</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <h2 className="text-4xl md:text-6xl font-extrabold">Hi, I'm Aman 👋</h2>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          A Full-Stack Developer & AI Enthusiast passionate about building
          intelligent applications and scalable web solutions.
        </p>
        <a
          href="#projects"
          className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          View My Work
        </a>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-10">🚀 Projects</h3>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition">
            <h4 className="text-xl font-semibold">E-commerce Website</h4>
            <p className="mt-2 text-gray-600">
              Built with React, Node.js, and MongoDB for Alluraiah Sweets.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition">
            <h4 className="text-xl font-semibold">AI Diabetes Predictor</h4>
            <p className="mt-2 text-gray-600">
              Logistic regression model predicting diabetes from medical data.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition">
            <h4 className="text-xl font-semibold">Expense Tracker</h4>
            <p className="mt-2 text-gray-600">
              A Python + Tkinter app connected with MySQL to track expenses.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-10">🛠 Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["React", "Node.js", "Python", "Machine Learning", "SQL", "Tailwind"].map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 bg-indigo-600 text-white rounded-full shadow-md text-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 container mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">📩 Contact Me</h3>
        <p className="mb-4 text-gray-600">Feel free to reach out via email or LinkedIn.</p>
        <a
          href="mailto:yourmail@example.com"
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
        >
          Say Hello
        </a>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        © {new Date().getFullYear()} Aman Vishwakarma. All rights reserved.
      </footer>
    </div>
  );
};


export default Portfolio;
export {};
