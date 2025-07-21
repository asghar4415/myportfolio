export type Project = {
  title: string;
  description: string;
  date: string;
  url: string;
  repository: string;
  published: boolean;
  slug: string;
};

export const Projects: Project[] = [
  {
    title: "CamPick",
    description:
      "CamPick is a web-based platform that lets university students and faculty pre-order food to reduce wait times and avoid cafeteria rush. It features email notifications, online payment verification, and AI-driven user flow for improved efficiency.",
    date: "2025-04-1",
    url: "https://campick-v1-0.vercel.app/",
    repository: "https://github.com/asghar4415/campick-nuces",
    published: true,
    slug: "campick",
  },
  {
    title: "SMIT Student Admission Portal",
    description:
      "The SMIT Student Admission Portal is a comprehensive application built using the MERN stack (MongoDB, Express.js, React, and Node.js). This portal facilitates student admissions by providing features such as login/signup authentication, email verification through OTP, course enrollment based on student region, and more.",
    date: "2024-08-01",
    url: "https://smit-admission-portal.netlify.app/",
    repository: "https://github.com/asghar4415/SMIT-admissionportal-student",
    published: true,
    slug: "smit-admission-portal",
    
  },
  {
    title: "DFA Simulator",
    description:
      "The DFA Simulator is a web-based tool designed to provide an interactive environment for exploring Deterministic Finite Automata (DFA). This project aims to simplify the understanding of DFA theory for students, educators, and enthusiasts by offering a user-friendly simulator with visualization capabilities.",
    date: "2024-05-1",
    url: "https://dfa-simulator-delta.vercel.app/",
    repository: "https://github.com/asghar4415/dfa-simulator",
    published: true,
    slug: "dfa-simulator",
  },
  {
    title: "Nazar",
    description:
      "A family-oriented app for tracking loved ones live locations while traveling, ensuring their safety. Built with Socket IO and Map API for real-time updates.",
    date: "2025-02-01",
    url: "https://github.com/asghar4415/realtime-device-tracker",
    repository: "https://github.com/asghar4415/realtime-device-tracker",
    published: true,
    slug: "realtime-device-tracker",
  },
   {
    title: "Just Share",
    description:
      "Built a blog app enabling users to post, manage accounts, and view others’ posts.",
    date: "2024-02-01",
    url: "https://just-share.vercel.app",
    repository: "https://github.com/asghar4415/just-share",
    published: true,
    slug: "just-share",
  },
   {
    title: "Sleep, stress and students",
    description:
      "We did a survey of students of FAST nuces and included PSQI test in it. Based on the results, we prepared a presentation and designed a website for our users.",
    date: "2023-10-01",
    url: "https://sleep-stress-and-students.vercel.app/",
    repository: "https://github.com/asghar4415/sleep-stress-and-students",
    published: true,
    slug: "sleep-stress-and-students",
  },
   {
    title: "Scrabble AI",
    description:
      "Play an enhanced game of Scrabble against a challenging AI opponent! This project features a modern React-based frontend and a robust Python FastAPI backend, incorporating unique gameplay elements like power tiles and dynamic objectives.",
    date: "2025-05-01",
    url: "https://scrabble-sandy.vercel.app/",
    repository: "https://github.com/asghar4415/scrabble-UI",
    published: true,
    slug: "scrabble-ai",
  }
];
