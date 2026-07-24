/**
 * ============================================================
 * PORTFOLIO CONTENT — Edit this file to update all site text.
 * All placeholder values are marked with TODO comments.
 * ============================================================
 */

export const siteConfig = {
  name: "Shakir Russell",
  title: "Creative Developer & Designer",
  logo: "itsSHAK",
};

export const hero = {
  tagline: "Creative Developer & Designer",
  centerpiece: "Life is Art.",
  subtitle: "Crafting digital experiences at the intersection of code, design & creativity.",
};

export const projects = [
  {
    id: "yuhzmi",
    title: "Yuhzmi",
    description: "A contemporary clothing brand blending streetwear aesthetics with artistic expression.",
    image: null, // TODO: Add image path, e.g., "/images/yuhzmi.jpg"
    aspectRatio: "4:3",
    link: "#", // TODO: Add project link
    tags: ["Branding", "Fashion", "Design"],
  },
  {
    id: "cyberrock",
    title: "Cyberrock — Creative Technology Lab",
    description: "Creative technology lab focused on innovation, cybersecurity, and digital experiences.",
    image: "/assets/cyberrock.jpeg",
    aspectRatio: "16:9",
    link: "https://itscyberrock.framer.website/",
    tags: ["Tech", "Cybersecurity", "Branding"],
  },
  {
    id: "animations",
    title: "Animations",
    description: "Motion design and animation work spanning 2D, 3D, and interactive media.",
    image: null, // TODO: Add image path
    aspectRatio: "4:3",
    link: "#", // TODO: Add project link
    tags: ["Motion", "Animation", "Creative"],
  },
  {
    id: "music",
    title: "Music",
    description: "Original compositions and productions exploring diverse sonic landscapes.",
    image: null, // TODO: Add image path
    aspectRatio: "1:1",
    link: "#", // TODO: Add project link
    tags: ["Music", "Production", "Audio"],
  },
];

export const skills = {
  creative: [
    "Graphic Design",
    "Video Editing",
    "React",
    "Java",
    "White-Hat Hacking",
    "Animation",
    "Music",
    "Creative Writing",
  ],
  technical: [
    "Microsoft 365",
    "AI Tools",
    "Research",
    "Organizing",
    "Formal Logic",
    "Mathematics",
    "High Work Capacity",
  ],
};

export const hobbies = [
  { name: "Chess", icon: "♟" },
  { name: "Drawing", icon: "✏️" },
  { name: "MMA", icon: "🥊" },
  { name: "Music", icon: "🎵" },
  { name: "Philosophy", icon: "📖" },
];

export const interestingFacts = {
  "Favourite Colour": "Red",
  "Religion": "Christianity",
  "Age": "19",
  "Favourite Show": "Peaky Blinders",
  "Favourite Sport": "Football",
};

export const education = [
  {
    institution: "University of the West Indies",
    detail: "Accepted — Computer Science",
    description: "Completed Year 1 — Computer Science",
    items: [],
  },
  {
    institution: "Excelsior High School — CXC",
    detail: "Caribbean Secondary Education Certificate",
    items: [
      { subject: "Information Technology", grade: "1" },
      { subject: "Physics", grade: "1" },
      { subject: "Visual Arts", grade: "1" },
      { subject: "Mathematics", grade: "2" },
      { subject: "Technical Drawing", grade: "2" },
      { subject: "English A", grade: "2" },
      { subject: "English B", grade: "3" },
      { subject: "Chemistry", grade: "3" },
    ],
  },
  {
    institution: "CAPE Unit 1",
    detail: "Caribbean Advanced Proficiency Examination",
    items: [
      { subject: "Information Technology", grade: "1" },
      { subject: "Computer Science", grade: "2" },
      { subject: "Communication Studies", grade: "3" },
      { subject: "Pure Mathematics", grade: "5" },
    ],
  },
  {
    institution: "CAPE Unit 2",
    detail: "Caribbean Advanced Proficiency Examination",
    items: [
      { subject: "Information Technology", grade: "1" },
      { subject: "Computer Science", grade: "2" },
      { subject: "Animation & Game Design", grade: "2" },
      { subject: "Caribbean Studies", grade: "3" },
      { subject: "Pure Mathematics", grade: "5" },
    ],
  },
];

export const achievements = [
  "Honor Roll Student",
  "First in Class",
  "Prefect",
  "Form Leader",
  "Faculty Award for Visual Arts (CXC)",
  "Top Performer: Information Technology, Computer Science, Animation & Game Design",
  "WUSC Caribbean Partnership Certificate (with SAC & Canada)",
  "Training: Gender Equality, Business Management, Entrepreneurship",
  "Clubs: Chess, 4H, Visual Arts, Journalism",
];

export const social = {
  instagram: "https://www.instagram.com/itsshakyuhzmi/?__pwa=1",
  tiktok: "https://www.tiktok.com/@itsshaksar7?is_from_webapp=1&sender_device=pc",
  email: "dihouseofrah@gmail.com",
  cvPath: "/assets/cv.pdf", // TODO: Place your CV at public/assets/cv.pdf
};

export const downloads = {
  heading: "Resume",
  description: "Looking for my resume? You can download it here.",
  resume: {
    link: "/assets/ShakirRussellResume.pdf",
    text: "Download Resume",
  },
  coverLetter: {
    link: "/assets/ShakirRussell_CoverLetter_Template.pdf",
    text: "Download Cover Letter",
  },
  cv: {
    link: "/assets/cv.pdf",
    text: "Download CV",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Downloads", href: "#downloads" },
  { label: "Contact", href: "#contact" },
];
