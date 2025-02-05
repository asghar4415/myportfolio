export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "CamPick",
    description:
      "Developed a website for FAST University students/faculty to preorder food from class, reducing wait times and avoiding rushes.",
    technologies: ["Next Js", "Tailwind CSS","TypeScript", "Node Js", "Mysql"],
    github: "https://github.com/asghar4415/campick-nuces",
    demo: "https://campick-v1-0.vercel.app/",
    image: require(".//../../public/projects/1.png"),
    available: true,
  },
  {
    id: 1,
    name: "SMIT Admission Portal",
    description:
      "A MERN stack application for student admissions featuring secure authentication, OTP email verification, regional course enrollment, application tracking, and blue background photo submission.",
    technologies: ["React", "Tailwind CSS", "MongoDB", "Express", "Node.js"],
    github: "https://github.com/asghar4415/SMIT-admissionportal-student",
    demo: "https://smit-admission-portal.netlify.app/",
    image: require(".//../../public/projects/2.png"),
    available: true,
  },
  {
    id: 2,
    name: "Synthetix",
    description:
      "Built specifically for an AI startup, this website lets them present cutting-edge AI data processing solutions tailored to their customers' needs.",
    technologies: ["React", "Next.js", "Prismic CMS"],
    github: "https://github.com/victorcodess/synthetix",
    demo: "https://synthetix-iota.vercel.app/",
    image: require(".//../../public/projects/synthetix-flip.png"),
    available: true,
  },
  {
    id: 3,
    name: "Propellent",
    description:
      "A website built for a software startup and small business, to showcase their services and mark their online presence.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/victorcodess/propellent",
    demo: "https://propellent.vercel.app/",
    image: require(".//../../public/projects/propellent-new.png"),
    available: true,
  },
  {
    id: 4,
    name: "Flixify",
    description:
      "Flixify lets you seamlessly explore movies and TV series, add bookmarks, and search across all pages. It offers user authentication along with a theme switch.",
    technologies: ["Next.js", "Typescript", "Prisma"],
    github: "https://github.com/victorcodess/flixify",
    demo: "https://flixify.victorwilliams.me/",
    image: require(".//../../public/projects/flixify.png"),
    available: true,
  }
];
