// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Home = () => (
  <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-50 to-white">
    <h1 className="text-5xl font-bold">Aman Vishwakarma</h1>
    <p className="mt-4 text-lg text-gray-600">
      AI/ML Engineer | Full-Stack Developer
    </p>
    <div className="mt-6 space-x-4">
      <a
        href="/resume.pdf"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
      >
        Download Resume
      </a>
      <Link
        to="/contact"
        className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
      >
        Contact Me
      </Link>
    </div>
  </section>
);

const About = () => (
  <section className="p-10 max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-4">About Me</h2>
    <p className="text-gray-700 leading-relaxed">
      Hi, I’m Aman Vishwakarma, a 4th-year B.Tech CSE student specializing in
      AI/ML. I love building intelligent applications, from full-stack web
      apps to machine learning models. Passionate about problem-solving and
      applying technology to real-world challenges.
    </p>
  </section>
);

const Projects = () => (
  <section className="p-10 max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          title: "E-commerce Website",
          desc: "Full-stack sweets shop app using React, Node, MongoDB",
        },
        {
          title: "Hospital Appointment System",
          desc: "React + TypeScript app for doctor booking",
        },
        {
          title: "Diabetes Prediction",
          desc: "ML model using Logistic Regression on Pima dataset",
        },
      ].map((p, i) => (
        <div
          key={i}
          className="p-6 border rounded-lg shadow hover:shadow-lg bg-white"
        >
          <h3 className="font-semibold text-lg">{p.title}</h3>
          <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const Contact = () => (
  <section className="p-10 max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold mb-4">Contact</h2>
    <p className="mb-4 text-gray-700">
      Feel free to reach out through email or LinkedIn.
    </p>
    <ul className="space-y-2">
      <li>Email: <a href="mailto:your@email.com" className="text-blue-600">your@email.com</a></li>
      <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-blue-600">linkedin.com/in/yourprofile</a></li>
      <li>GitHub: <a href="https://github.com/yourgithub" className="text-blue-600">github.com/yourgithub</a></li>
    </ul>
  </section>
);

const App = () => {
  return (
    <Router>
      <nav className="p-4 bg-white shadow flex justify-center space-x-6">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/about" className="hover:text-blue-600">About</Link>
        <Link to="/projects" className="hover:text-blue-600">Projects</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
