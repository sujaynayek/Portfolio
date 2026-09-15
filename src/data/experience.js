export const experiences = [
  {
    id: 1,
    role: "Backend Developer",
    company: "Dailygig Ventures Pvt Ltd",
    location: "Kolkata, India",
    duration: "Dec 2025 – Present",
    type: "Full-time",
    current: true,
    description:
      "Designing and building production-grade backend systems for a gig-worker marketplace platform, independently owning core modules end-to-end.",
    highlights: [
      "Designed and implemented secure authentication systems (JWT, OAuth 2.0) and role-based access control for a gig-worker marketplace platform",
      "Reduced API response time by 30% by implementing Redis caching for frequently accessed data, improving system performance under production load",
      "Architected and maintained microservices using Docker and Nginx, containerizing backend services to improve scalability, deployment consistency, and system reliability",
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "Redis", "Docker", "Nginx", "JWT", "OAuth 2.0"],
  },
  {
    id: 2,
    role: "Full Stack Developer Intern",
    company: "Dailygig Ventures Pvt Ltd",
    location: "Kolkata, India",
    duration: "Aug 2025 – Nov 2025",
    type: "Internship",
    current: false,
    description:
      "Contributed to full-stack development, building client-facing websites and RESTful APIs that connected front-end applications with backend services.",
    highlights: [
      "Developed and deployed multiple client-facing websites using React.js and modern front-end tooling, translating design mockups into responsive, cross-browser compatible UIs for 5+ clients",
      "Built and integrated RESTful APIs using Node.js and Express.js, enabling seamless communication between front-end applications and backend services/databases",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs"],
  },
];

export default experiences;
