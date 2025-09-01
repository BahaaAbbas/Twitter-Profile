import tailwind from "../../../assets/tailwind.png";
import typescript from "../../../assets/typescript.png";
import freecode from "../../../assets/freecode.jpg";

export const suggestions = [
  {
    id: 1,
    src: tailwind,
    follows: "Node.js and 9 others follow",
    name: "freeCodeCamp.org",
    username: "@freeCodeCamp",
    bio: "We're a community of millions of people who are building new skills and getting new jobs together. A 501(c)(3) public charity.",
    isVerified: true,
  },
  {
    id: 2,
    src: typescript,
    follows: "Node.js and 5 others follow",
    name: "TypeScript",
    username: "@typescript",
    bio: "TypeScript is a language for application-scale JavaScript development. It's a typed superset of JavaScript.",
    isVerified: false,
  },
  {
    id: 3,
    src: freecode,
    follows: "Node.js and 2 others follow",
    name: "Tailwind CSS",
    username: "@tailwindcss",
    bio: "The utility-first CSS framework. Rapidly build modern websites, without ever leaving your HTML.",
    isVerified: true,
  },
];

export const tabs = ["Posts", "Replies", "Media", "Likes"];
