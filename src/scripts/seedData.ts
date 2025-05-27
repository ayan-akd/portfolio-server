import mongoose from "mongoose";
import config from "../app/config";
import AboutModel from "../app/modules/about/about.model";
import SkillModel from "../app/modules/skill/skill.model";

const aboutData = {
  image: "https://res.cloudinary.com/dzx8ywbcm/image/upload/v1747678968/Profile_mqbkl2.png",
  name: "Ayan Kumar Das",
  email: "ayankumar.akd@gmail.com",
  title: "Full-Stack Developer",
  phone: "(+88) 01686509495",
  bio: "I'm passionate about developing web applications that meet technical requirements and deliver delightful user experiences. Proficient in HTML, CSS, React.js, Next.js, Redux, MongoDB, Mongoose, Tailwind CSS, Firebase Authentication, NextAuth, and JWT. Experienced in writing clean and maintainable code, working in a collaborative environment, and agile methodologies. Committed to staying up-to-date with the latest developments and best practices in the field.",
  education: [
    {
      degree: "B.Sc in Computer Science and Engineering (CSE) (2020-Present)",
      institution: "Rangpur Engineering College, Rangpur",
    },
  ],
  experience: [], // Empty for now, can be filled later
  // Add the services array from your frontend component
  services: [
    {
      id: 1,
      title: "Web Design",
      description: "As a web designer, I combine creativity and technical skills to craft visually appealing and user-friendly websites. I can convert any psd or Figma file into mobile or tab responsive web application.",
      iconName: "FaPalette",
    },
    {
      id: 2,
      title: "Frontend Web Development",
      description: "As a frontend web developer, I specialize in building robust and interactive websites that seamlessly integrate functionality and aesthetics.",
      iconName: "FaCode",
    },
    {
      id: 3,
      title: "Full Stack Development",
      description: "Along with the Frontend I am skilled in Node JS, Express, JWT. Proficient in implementing Mongo DB database. More than 1 year of experience with Full Stack development.",
      iconName: "FaLayerGroup",
    },
  ],
  address: "Rangpur, Bangladesh",
  resumeLink: "https://drive.usercontent.google.com/download?id=1wUrp6FGy6sliuezbQY2F42NuoGVTOCN8",
};


const skills = [
  // Frontend skills
  {
    category: "frontend",
    name: "HTML",
    icon: "/icons/html.png",
    proficiency: 95,
  },
  {
    category: "frontend",
    name: "CSS",
    icon: "/icons/css.png",
    proficiency: 90,
  },
  {
    category: "frontend",
    name: "JavaScript",
    icon: "/icons/js.png",
    proficiency: 85,
  },
  {
    category: "frontend",
    name: "TypeScript",
    icon: "/icons/typescript.svg",
    proficiency: 80,
  },
  {
    category: "frontend",
    name: "React.js",
    icon: "/icons/react.png",
    proficiency: 85,
  },
  {
    category: "frontend",
    name: "Redux",
    icon: "/icons/redux.svg",
    proficiency: 80,
  },
  {
    category: "frontend",
    name: "Next.js",
    icon: "/icons/next.svg",
    proficiency: 90,
  },
  {
    category: "frontend",
    name: "Tailwind CSS",
    icon: "/icons/tailwind.png",
    proficiency: 85,
  },
  
  // Backend skills
  {
    category: "backend",
    name: "Node.js",
    icon: "/icons/nodejs-logo.png",
    proficiency: 85,
  },
  {
    category: "backend",
    name: "Express",
    icon: "/icons/express.png",
    proficiency: 80,
  },
  {
    category: "backend",
    name: "Firebase",
    icon: "/icons/firebase.png",
    proficiency: 80,
  },
  {
    category: "backend",
    name: "JWT Authentication",
    icon: "/icons/jwt.png",
    proficiency: 75,
  },
  
  // Tools
  {
    category: "tools",
    name: "GitHub",
    icon: "/icons/github.png",
    proficiency: 85,
  },
  {
    category: "tools",
    name: "Figma",
    icon: "/icons/figma.png",
    proficiency: 75,
  },
  {
    category: "tools",
    name: "Netlify",
    icon: "/icons/netlify.png",
    proficiency: 85,
  },
  {
    category: "tools",
    name: "Vercel",
    icon: "/icons/logo-vercel.svg",
    proficiency: 90,
  },
  {
    category: "tools",
    name: "Git",
    icon: "/icons/git.png",
    proficiency: 85,
  },
  {
    category: "tools",
    name: "Postman",
    icon: "/icons/postman.svg",
    proficiency: 80,
  },
  {
    category: "tools",
    name: "VS Code",
    icon: "/icons/vscode.png",
    proficiency: 90,
  },
  
  // Database
  {
    category: "database",
    name: "MongoDB",
    icon: "/icons/mongodb.png",
    proficiency: 85,
  },
  {
    category: "database",
    name: "MySQL",
    icon: "/icons/mysql.png",
    proficiency: 75,
  },
  {
    category: "database",
    name: "PostgreSQL",
    icon: "/icons/postgres.svg",
    proficiency: 70,
  },
];

const seedAboutData = async () => {
  try {
    await mongoose.connect(config.database_url as string, {dbName: "myPortfolioDB"});
    console.log("Database connection established for seeding About data");
    // Delete existing data
    // await AboutModel.deleteMany({});
    // console.log("Previous About data deleted");

    // Create new seed data

    // Insert the seed data
    // const result = await AboutModel.create(aboutData);
    // console.log("About data seeded successfully:", result);

    // Delete existing data
    await SkillModel.deleteMany({});
    console.log("Previous skill data deleted");

    // Create new seed data

    // Insert the seed data
    const result = await SkillModel.insertMany(skills);
    console.log("skill data seeded successfully:", result);
    await mongoose.disconnect();
    console.log("Database connection closed");
  } catch (error) {
    console.error("Error seeding About data:", error);
  }
};

// Execute the seed function
seedAboutData();
