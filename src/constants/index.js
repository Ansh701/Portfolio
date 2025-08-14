const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 20, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Ansh demonstrated strong analytical skills and a quick learning ability during his internship. His data models and visualizations provided valuable insights for our projects.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Data Science Intern – Glynac",
    date: "June 2025 - Present",
    responsibilities: [
      "Performing data cleaning, preprocessing, and visualization using Python, Pandas, and Matplotlib.",
      "Building and evaluating machine learning models for prediction tasks.",
      "Creating dashboards and reports to present insights to the team.",
      "Collaborating with developers to integrate ML outputs into applications.",
    ],
  },
  {
    review: "Ansh approaches every technical challenge with a problem-solving mindset. His full-stack applications are well-structured, responsive, and easy to maintain.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer (Projects & Learning)",
    date: "March 2024 – June 2025",
    responsibilities: [
      "Built full-stack web applications with React.js, Node.js, Django, and MySQL/MongoDB.",
      "Implemented user authentication, API integrations, and responsive UI.",
      "Developed a Django blog platform with admin panel and search features.",
      "Designed and deployed REST APIs in Python and Java for college projects.",
    ],
  },
  {
    review: "Ansh’s frontend work stands out for its creativity and performance optimization. His designs not only looked great but also improved user experience across devices.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Frontend Developer (Learning & Projects)",
    date: "August 2023 – March 2024",
    responsibilities: [
      "Created responsive websites using HTML, CSS, JavaScript, React.js, and Tailwind CSS.",
      "Worked on UI/UX-focused landing pages and a personal portfolio site.",
      "Applied performance optimization techniques for faster load times.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Isaac Andrew Rose",
    mentions: "@isaacandrewrose",
    review:
      "Ansh’s work during his internship has been outstanding so far. He quickly grasps complex data concepts and delivers accurate, insightful analyses. His dashboards are making it easier for us to make data-driven decisions.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Rohan Mehta",
    mentions: "@rohanmehta",
    review:
      "I collaborated with Ansh on a full-stack web app for our college hackathon. His backend integration and attention to UI details helped us submit a complete, polished project on time.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Prof. Neha Gupta",
    mentions: "@nehagupta",
    review:
      "As his project guide, I’ve seen Ansh show great dedication and problem-solving skills. He is quick to learn new frameworks and applies them effectively to build practical solutions.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Amit Raj",
    mentions: "@amitraj",
    review:
      "Ansh’s frontend work on our group project made the user experience smooth and visually appealing. His commitment to clean code and performance optimization stood out.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Anand Pathak",
    mentions: "@anandpathak",
    review:
      "During a college project, Ansh implemented a Django-based portal that handled user authentication, data storage, and responsive design — all in just two weeks. Highly resourceful.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Aman Jaiswar",
    mentions: "@amanjaiswar",
    review:
      "Ansh has been a valuable member of our team at Glynac. He learns quickly, handles challenges with confidence, and delivers work that meets high standards.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/ansh.upadhyay.01"
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    link: "https://www.facebook.com/ansh.upadhyay.927980"
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    link: "https://x.com/AnshUpadhy77416"
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/ansh0/"
  }
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
