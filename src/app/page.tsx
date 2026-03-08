"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ── Intersection Observer Hook ── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}



/* ── Skills Data ── */
const skills = [
  {
    name: "Python",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M63.743 1.157c-30.865 0-29.412 13.414-29.412 13.414l.056 14.162h30.076v4.22H24.36S.999 31.066.999 63.812c0 32.748 20.355 31.42 20.355 31.42l13.513.167v-19.16s-.202-17.756 17.813-17.756h29.284s16.746.044 16.746-16.14V28.4s1.61-27.243-34.967-27.243zm-15.698 8.87a4.673 4.673 0 1 1-6.61 6.61 4.673 4.673 0 0 1 6.61-6.61z" fill="#387EB8" />
        <path d="M64.49 127.302c30.864 0 29.41-13.416 29.41-13.416l-.055-14.163H63.771v-4.218h40.103s23.36-1.888 23.36-34.634c0-32.748-20.354-31.422-20.354-31.422l-13.514-.167v19.16s.202 17.757-17.813 17.757H46.269s-16.746-.044-16.746 16.141v14.942s-1.612 27.242 34.967 27.242zm15.698-8.87a4.673 4.673 0 1 1 6.609-6.61 4.673 4.673 0 0 1-6.609 6.61z" fill="#FFE052" />
      </svg>
    )
  },
  {
    name: "C/C++",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path fill="#02599C" d="M115.4 31.2L64 1.5 12.6 31.2v59.3L64 120.2l51.4-29.7V31.2Z" /><path fill="#004481" d="M64 1.5v118.7l51.4-29.7V31.2L64 1.5Z" /><path fill="#FFF" d="M66.4 87.2c-1.5.5-3.3.8-5.3.8-7.9 0-14.3-5.5-16.2-13.2h15.9c.7 2 2.8 3.5 5.5 3.5 1.5 0 2.9-.5 3.9-1.4l5.3 7.3c-2.4 1.9-5.5 3-9.1 3zm30.3-17.7h-5.4v-5.4h-5.4v5.4h-5.4v5.4h5.4v5.4h5.4v-5.4h5.4v-5.4zm-14.5 0H76.8v-5.4h-5.4v5.4h-5.4v5.4h5.4v5.4h5.4v-5.4h5.4v-5.4zM66.4 35c3.6 0 6.7 1.1 9.1 3l-5.3 7.3c-1-1-2.4-1.4-3.9-1.4-2.7 0-4.8 1.5-5.5 3.5H44.9c1.9-7.7 8.3-13.2 16.2-13.2 2 0 3.8.3 5.3.8z" />
      </svg>
    )
  },
  {
    name: "SQL",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M64 11.2c-29.8 0-54 11.1-54 24.8s24.2 24.8 54 24.8 54-11.1 54-24.8S93.8 11.2 64 11.2z" fill="#00758F" />
        <path d="M10 36v56c0 13.7 24.2 24.8 54 24.8s54-11.1 54-24.8V36c-9.1 9.5-29.6 15.5-54 15.5-24.4 0-44.9-6-54-15.5z" fill="#0091AC" />
        <path d="M10 64c9.1 9.5 29.6 15.5 54 15.5s44.9-6 54-15.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M10 92c9.1 9.5 29.6 15.5 54 15.5s44.9-6 54-15.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M64 54.8c-26.4 0-48.4-9.3-51.5-21M64 54.8c26.4 0 48.4-9.3 51.5-21" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "TypeScript",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 0C2.686 0 0 2.686 0 6v116c0 3.314 2.686 6 6 6h116c3.314 0 6-2.686 6-6V6c0-3.314-2.686-6-6-6H6zm87.585 93.387a30.005 30.005 0 0 1-15.5 4.14c-13.1 0-21.908-8.087-21.908-24.536V43.834h11.99v28.135c0 10.42 4.864 14.72 12.277 14.72 5.28 0 9.792-1.973 13.142-5.282V93.387zm-27.674-49.493H59.9v10.347h-17.71v47.766H29.53V54.24H11.82V43.894h48.085v47.76z" fill="#3178C6" /></svg>
    )
  },
  {
    name: "Next.js",
    icon: (
      <svg className="w-5 h-5 bg-white rounded-full p-0.5" viewBox="0 0 128 128" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M64 128c35.346 0 64-28.654 64-64S99.346 0 64 0 0 28.654 0 64s28.654 64 64 64zm-10.95-47.332L40.235 36.108c-.768-2.522-2.902-4.524-5.546-4.814A5.334 5.334 0 0 0 28.64 36.48l11.626 67.31v.032c.192 1.28.976 2.384 2.117 2.976 1.12.581 2.486.512 3.504-.16l25.813-18.423a20.32 20.32 0 0 0 7.147-16.425V47.33l-20.437 44.195zm38.71-13.283c0-12.32-9.867-22.305-22.027-22.305-12.16 0-22.032 9.973-22.032 22.305v1.492a9.957 9.957 0 0 0 9.957 9.953 9.957 9.957 0 0 0 9.952-9.953v-9.941c0-4.123 3.3-7.468 7.387-7.468s7.386 3.345 7.386 7.468v23.766a5.333 5.333 0 1 0 9.377 0v-25.317z" /></svg>
    )
  },
  {
    name: "React",
    icon: (
      <svg className="w-5 h-5" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" /></g>
      </svg>
    )
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M64.004 25.602c-17.067 0-27.734 8.533-32 25.6 6.4-8.534 13.867-11.734 22.4-9.6 4.87 1.216 8.35 4.747 12.203 8.66 6.276 6.366 13.535 13.737 29.401 13.737 17.067 0 27.734-8.533 32-25.6-6.4 8.534-13.867 11.734-22.4 9.6-4.87-1.217-8.35-4.748-12.204-8.66-6.275-6.368-13.535-13.737-29.4-13.737Zm-32 38.402c-17.067 0-27.734 8.534-32 25.601 6.4-8.533 13.867-11.733 22.4-9.601 4.87 1.217 8.35 4.748 12.203 8.662 6.276 6.366 13.535 13.735 29.401 13.735 17.067 0 27.734-8.533 32-25.6-6.4 8.534-13.867 11.734-22.4 9.6-4.87-1.216-8.35-4.747-12.204-8.66-6.275-6.368-13.535-13.737-29.4-13.737Z" fill="#06B6D4" />
      </svg>
    )
  },
  {
    name: "+ more",
    icon: <span className="text-sm font-[family-name:var(--font-space)] text-white w-5 h-5 flex items-center justify-center font-bold">...</span>
  }
];

/* ── Services Data ── */
const services = [
  {
    title: "Web Development",
    desc: "Building responsive, performant web applications with modern frameworks and best practices.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "Mobile App",
    desc: "Cross-platform mobile applications using React Native and modern tooling for iOS and Android.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: "Desktop App",
    desc: "Building standalone offline applications with Python (Tkinter) and building interactive graphical software with C++ and SFML.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
      </svg>
    ),
  },
  {
    title: "Backend & Database Design",
    desc: "Scalable server architecture, RESTful APIs, and efficient database modeling for robust systems.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    desc: "User-centered design with focus on accessibility, usability, and modern design principles.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Project Management",
    desc: "End-to-end project coordination, agile workflows, and team collaboration for delivering results on time.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: "Asset Management",
    desc: "Enterprise asset tracking, data management, and operational support using SAP, CRM, and ticketing tools.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: "API & AI Integration",
    desc: "Integrating RESTful APIs, third-party services, and AI models like GPT, Gemini, and Claude into production applications.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "Prompt Engineering",
    desc: "Leveraging AI coding assistants — Claude, Gemini, ChatGPT — and modern AI-powered IDEs to accelerate development workflows.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
];

/* ── Projects Data ── */
const projects = [
  {
    title: "CHR Case Management & Monitoring System",
    desc: "Designed and built a full case-management platform for the CHR Region VII, coordinating requirements with stakeholders and translating operational needs into a 6-role workflow system.",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "Vercel"],
    role: "Full Stack",
    link: "https://chr-cmms-ecru.vercel.app",
    linkLabel: "Live Site",
    image: "/CHR-CMMS.png",
  },
  {
    title: "Compiley Studio",
    desc: "A desktop IDE running a custom-designed programming language called 'Brainrot' with its own compiler, and an AI coding assistant you can talk to by speech or text — like Cursor, built from scratch.",
    tags: ["MIPS Assembly", "Python", "Tkinter", "Mars.jar"],
    role: "Full Stack · Project Manager",
    link: "https://github.com/DaRainFlavor/CMSC-124-PL-Project",
    linkLabel: "GitHub",
    image: "/Compiley-Studio.png",
  },
  {
    title: "Inspectify",
    desc: "Mobile app using AI and Gemini's spatial understanding API to assess home damage. Includes a disaster preparedness tool featuring nearest evacuation centers and hardware stores.",
    tags: ["Expo", "Python", "Flask", "MySQL", "Gemini", "Railway", "Cloudinary"],
    role: "Full Stack",
    link: "https://github.com/J-RuriAugusto/INSPECTIFY",
    linkLabel: "GitHub",
    image: "/Inspectify.png",
  },
  {
    title: "MBTI Personality Type Classification",
    desc: "Created a custom MBTI test and analyzed results using 4 ML techniques: XGBoost, Random Forest, Logistic Regression, and LDA. Full web interface for test-taking and results.",
    tags: ["Next.js", "Tailwind CSS", "Python", "XGBoost", "Vercel"],
    role: "Full Stack · Researcher",
    link: "https://github.com/DaRainFlavor/Multi-Class-Personality-Type-Classification-Using-Machine-Learning",
    linkLabel: "GitHub",
    image: "/MBTI.png",
  },
  {
    title: "Color Rush",
    desc: "A desktop Flood Fill game using C++ and SFML with a custom brute-force algorithm solver that thinks n-moves ahead, letting players compare their solutions against the AI.",
    tags: ["C++", "SFML", "Algorithm Design"],
    role: "Solo Developer",
    link: "https://github.com/DaRainFlavor/Color-Rush",
    linkLabel: "GitHub",
    image: "/Color-Rush.png",
  },
  {
    title: "Dreamify",
    desc: "A dream journal mobile app where users record their dreams and AI generates images that visually match their dream entries.",
    tags: ["Python", "Flask", "Gemini", "Vercel", "Cloudinary"],
    role: "Full Stack",
    link: "https://github.com/Aster547/Dreamify",
    linkLabel: "GitHub",
    image: "/Dreamify.png",
  },
  {
    title: "9 Mazes of Hell",
    desc: "A game featuring maze levels with demons that chase the player using different AI movement patterns — random patrols and aggressive line-of-sight pursuit.",
    tags: ["Phaser", "JavaScript"],
    role: "Full Stack",
    link: "https://github.com/DaRainFlavor/9-Mazes-of-Hell",
    linkLabel: "GitHub",
    image: "/9-mazes-of-hell.png",
  },
  {
    title: "The Developer's Grimoire (Extended Portfolio)",
    desc: "A general purpose, creative portfolio which showcases not only the dev side but also creative aspects like original artworks and original music compositions.",
    tags: ["HTML", "CSS", "JavaScript", "Cloudinary"],
    role: "Full Stack · Creative",
    link: "https://darainflavor.github.io/portfolio/",
    linkLabel: "Live Site",
    image: "/The-Developers-Grimoire.png",
  },
];

/* ── Experience Data ── */
const experience = [
  {
    role: "Asset Management Intern",
    company: "Lexmark-Xerox Global Services Support",
    period: "2025",
    desc: "Processed and managed large-scale enterprise asset datasets within the Lexmark-Xerox global services infrastructure, collaborating across teams to ensure operational data integrity.",
  },
  {
    role: "CEB-I Hacks Finalist",
    company: "Team Kawayanan",
    period: "2025 — 2026",
    desc: "Hackathon finalist — designed and developed an innovative solution as part of a competitive multi-round hackathon.",
  },
  {
    role: "UPCSG Hackathon",
    company: "UP Computer Science Guild",
    period: "2025",
    desc: "Competed in the university-wide hackathon, building a working prototype under time constraints.",
  },
  {
    role: "Principles of Design Course",
    company: "DICT",
    period: "2024",
    desc: "Completed a structured design course covering UI/UX principles, visual hierarchy, and modern design thinking.",
  },
];

/* ── Nav Links ── */
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Track Record", href: "#track-record" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/* ── Social Links ── */
const socials = [
  {
    label: "GitHub",
    href: "https://github.com/DaRainFlavor",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/AdrianVaflor",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/AdrianVaflor",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/AdrianVaflor",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@DaRainFlavor",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:adrianvaflor9@gmail.com",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Projects slider refs
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollProjects = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };
  const heroSection = useInView(0.1);
  const aboutSection = useInView(0.15);
  const servicesSection = useInView(0.1);
  const resumeSection = useInView(0.1);
  const projectsSection = useInView(0.1);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ════════════════ NAVBAR ════════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#0a0e1a]/95 backdrop-blur-md border-b border-accent/10 py-3"
          : "py-5 bg-transparent"
          }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:scale-105 transition-transform duration-300">
              <path d="M20 4L4 36H12L20 20L28 36H36L20 4Z" fill="currentColor" className="text-foreground" />
              <path d="M12 36L20 20L28 36H12Z" fill="currentColor" className="text-accent" />
            </svg>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-muted hover:text-accent transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/VAFLOR_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-6 py-2.5 bg-accent hover:bg-accent-light text-[#0a0e1a] text-sm font-semibold transition-all duration-200 rounded-full hover:shadow-[0_0_20px_rgba(240,165,0,0.3)]"
            >
              Download CV
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-surface border-t border-accent/10 mt-2 mx-0 p-6 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-foreground hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ════════════════ HERO ════════════════ */}
      <section
        id="hero"
        ref={heroSection.ref as React.RefObject<HTMLElement>}
        className="min-h-screen flex items-center pt-20 relative overflow-hidden"
      >
        {/* Decorative corner triangles */}
        <div className="absolute top-0 right-0 w-64 h-64 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rotate-45 translate-x-24 -translate-y-24" />
        </div>
        <div className="absolute bottom-0 left-0 w-48 h-48 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-0 w-36 h-36 bg-accent/8 rotate-45 -translate-x-18 translate-y-18" />
        </div>

        {/* Dot pattern background */}
        <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

        {/* Profile photo — absolute on desktop, hidden on mobile */}
        <div className="hidden md:flex absolute inset-0 flex-col md:flex-row items-end md:items-center justify-center md:justify-end px-6 max-w-6xl mx-auto w-full z-0 overflow-hidden md:overflow-visible pointer-events-none">
          <div
            className={`relative md:absolute md:bottom-0 md:right-0 lg:right-[3%] w-full h-[50vh] md:h-[90%] md:w-[50%] lg:w-[45%] mt-auto md:mt-0 ${heroSection.inView ? "animate-in" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            {/* Red circle behind the person */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none md:pt-[55%] md:pl-[10%]">
              <div className="w-[75%] md:w-[85%] aspect-square rounded-full bg-accent mt-[10vh] md:mt-0" />
            </div>

            {/* The profile image */}
            <Image
              src="/profile.png"
              alt="Adrian — Full Stack Developer"
              fill
              className="object-contain object-bottom scale-100 translate-y-8 origin-bottom md:scale-100 md:translate-y-0 grayscale contrast-[1.05] brightness-110 drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)] sepia-[.15]"
              priority
            />

            {/* Bottom gradient fade for seamless blend */}
            <div className="absolute bottom-0 left-0 right-0 h-12 md:h-16 bg-gradient-to-t from-[#0a0e1a] to-transparent pointer-events-none" />

            {/* Subtle bottom glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-16 md:h-20 bg-accent/[0.06] blur-2xl rounded-full pointer-events-none" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 w-full relative z-10 py-12 md:py-0">
          {/* Main hero content — magazine-style typography */}
          <div className={`max-w-4xl w-full relative z-20 flex flex-col items-center md:items-start text-center md:text-left ${heroSection.inView ? "animate-in" : "opacity-0"}`}>

            <p className="font-[family-name:var(--font-space)] text-[9px] sm:text-xs md:text-sm text-accent tracking-[0.3em] uppercase mb-2 md:mb-8 flex items-center gap-2 md:gap-3 lg:ml-2">
              <span className="w-8 md:w-12 h-[1px] bg-accent inline-block hidden md:block" />
              Hello, I&apos;m
              <span className="w-6 h-[1px] bg-accent inline-block md:hidden" />
            </p>

            <div className="relative mb-6 md:mb-8 flex flex-col items-center md:items-start text-center md:text-left z-20">
              <h1 className="font-[family-name:var(--font-playfair)] text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[7rem] font-bold text-foreground leading-[1] md:leading-[0.9] tracking-tighter mix-blend-difference md:mix-blend-normal">
                Adrian <span className="italic text-accent">Vaflor.</span>
              </h1>
            </div>

            <h2 className="font-[family-name:var(--font-space)] uppercase tracking-[0.15em] md:tracking-[0.25em] text-[9px] sm:text-sm md:text-lg lg:text-xl text-muted font-light mb-3 md:mb-6 lg:ml-4 z-30 relative bg-surface/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none inline-block px-3 md:px-0 md:pr-6 py-1 mx-auto md:mx-0 rounded-full md:rounded-l-none md:rounded-r-xl border border-white/5 md:border-none">
              Software Engineer <span className="text-accent/60 mx-1 md:mx-2">|</span> Full-Stack Developer
            </h2>

            <p className="text-muted leading-relaxed max-w-md text-xs sm:text-sm md:text-lg font-light tracking-wide lg:ml-4 z-30 relative bg-surface/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none rounded-xl px-4 md:px-0 md:pr-6 py-2 md:py-2 border border-white/5 md:border-none mx-auto md:mx-0 mt-1 md:mt-0">
              I build robust, scalable applications across web, mobile, and desktop. From
              complex management systems to AI-integrated tools, I focus on writing clean,
              efficient code that solves real-world problems.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-2.5 md:gap-4 mt-6 md:mt-6 lg:ml-4 relative z-30 w-full sm:w-auto">
              <a
                href="/VAFLOR_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 md:px-8 py-2.5 md:py-3.5 bg-accent hover:bg-accent-light text-white text-[11px] md:text-base font-semibold transition-all duration-200 rounded-full hover:shadow-[0_0_24px_rgba(204,0,0,0.35)] flex-1 sm:flex-none max-w-[160px] md:max-w-none"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="px-5 md:px-8 py-2.5 md:py-3.5 border border-accent/40 text-accent-light text-[11px] md:text-base font-medium transition-all duration-200 rounded-full hover:bg-accent/10 hover:border-accent/60 flex-1 sm:flex-none max-w-[160px] md:max-w-none"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ ABOUT (MOVED UP + RED MAGAZINE STYLE) ════════════════ */}
      <section
        id="about"
        ref={aboutSection.ref as React.RefObject<HTMLElement>}
        className="bg-accent text-[#0a0e1a] py-32 md:py-48 relative z-10 [clip-path:polygon(0_0,_100%_0,_100%_calc(100%-4vw),_0_100%)] lg:[clip-path:polygon(0_0,_100%_0,_100%_calc(100%-6vw),_0_100%)] overflow-hidden shadow-2xl"
      >
        {/* Origami fold overlay at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[8vw] bg-black/20 origin-bottom-left -skew-y-2 pointer-events-none mix-blend-overlay" />

        <div
          className={`max-w-7xl mx-auto px-6 transition-all duration-700 relative z-10 ${aboutSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
        >
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">
            {/* Left Column: Text & Skills */}
            <div>
              <p className="font-[family-name:var(--font-space)] text-[#0a0e1a]/80 text-xs tracking-[0.4em] uppercase mb-4 flex items-center gap-3 font-bold">
                <span className="w-8 h-[3px] bg-[#0a0e1a] inline-block" />
                About Me
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-black text-[#0a0e1a] leading-none mb-10 tracking-tighter">
                Who I <span className="italic text-white">Am.</span>
              </h2>

              <div className="space-y-6 mb-12 border-l-4 border-white/30 pl-6">
                <p className="text-[#0a0e1a] text-lg md:text-xl font-medium leading-relaxed mix-blend-luminosity">
                  I see computing not just as logic, but as my favorite creative medium. It&apos;s the space where my diverse interests—problem-solving, psychology, games, arts, music, and business—can seamlessly come together into tangible solutions.
                </p>
                <p className="text-[#0a0e1a] md:text-lg leading-relaxed mix-blend-luminosity">
                  During my time at the University of the Philippines Cebu, I pushed myself to maintain a strong academic standing while pouring my energy into projects that genuinely sparked my curiosity.
                </p>
                <p className="text-[#0a0e1a] md:text-lg leading-relaxed font-bold mix-blend-luminosity">
                  As I step into the industry, I am eager to evolve as a software engineer. While I am proud of the foundation I&apos;ve built, I know the real-world industry holds challenges and knowledge far beyond the classroom, and I am fully ready to dive in and learn.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold text-xl mb-6 font-[family-name:var(--font-playfair)] italic">
                  Technologies I Use
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((s) => (
                    <div
                      key={s.name}
                      className="flex items-center gap-2 px-4 py-2 bg-[#0a0e1a] text-white hover:bg-white hover:text-[#0a0e1a] transition-colors duration-300 shadow-[4px_4px_0px_rgba(0,0,0,0.2)]"
                    >
                      <span className="flex items-center justify-center">{s.icon}</span>
                      <span className="text-sm font-bold font-[family-name:var(--font-space)] tracking-wide">{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative group">
              {/* Decorative block behind image */}
              <div className="absolute inset-0 bg-white translate-x-4 translate-y-4 shadow-xl transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />
              <div className="relative aspect-[4/5] overflow-hidden border-2 border-[#0a0e1a]">
                <Image
                  src="/project_presentation.jpg"
                  alt="Adrian presenting a project"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ SERVICES & STATS (MOVED DOWN + REVERTED TO DARK) ════════════════ */}
      <section
        id="services"
        ref={servicesSection.ref as React.RefObject<HTMLElement>}
        className="py-24 md:py-32 bg-surface relative"
      >
        {/* Decorative background typography */}
        <div className="absolute right-0 top-10 pointer-events-none select-none opacity-[0.03]">
          <h2 className="font-[family-name:var(--font-playfair)] text-[10rem] lg:text-[15rem] leading-none font-black italic tracking-tighter">
            FUTURE
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.5fr] gap-16 relative z-10">

          {/* Left Column: Huge Headline & Stats */}
          <div className={`transition-all duration-700 ${servicesSection.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <p className="font-[family-name:var(--font-space)] text-accent text-xs md:text-sm tracking-[0.4em] uppercase mb-6 flex items-center gap-3">
              <span className="w-12 h-[3px] bg-accent inline-block" />
              My Journey
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold text-foreground mb-16">
              Ready <span className="italic text-accent">To Build.</span>
            </h2>

            {/* Stats Block */}
            <div className="flex flex-col gap-10 border-l-2 border-accent/20 pl-8">
              <div>
                <div className="text-4xl md:text-6xl font-black text-foreground">BS</div>
                <div className="font-[family-name:var(--font-space)] uppercase tracking-widest text-muted text-xs md:text-sm mt-2">Computer Science</div>
              </div>
              <div>
                <div className="text-4xl md:text-6xl font-black text-foreground">10+</div>
                <div className="font-[family-name:var(--font-space)] uppercase tracking-widest text-muted text-xs md:text-sm mt-2">Academic Projects</div>
              </div>
              <div className="pt-2"> {/* Added top pt for spacing if needed */}
                <div className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground">Level 3</div>
                <div className="font-[family-name:var(--font-space)] uppercase tracking-widest text-accent font-bold text-xs md:text-sm mt-3">
                  TOPCIT Certification
                </div>
                <div className="mt-4 space-y-3">
                  <div className="text-sm md:text-base text-foreground bg-white/5 p-3 rounded border-l-2 border-accent">
                    <span className="font-bold text-white">Score: 411</span>
                    <span className="text-muted text-xs ml-2">(National Avg: 233.6)</span>
                  </div>
                  <p className="text-xs md:text-sm text-muted leading-relaxed italic border-l-2 border-white/10 pl-3">
                    "Capable of correctly addressing technical and business problems and is able to solve them at a university graduate level."
                  </p>
                  <a
                    href="/CERTIFICATE.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-accent hover:text-white transition-colors duration-300 uppercase tracking-widest mt-2 group"
                  >
                    Verify Certificate
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Services Grid Layout */}
          <div className={`grid sm:grid-cols-2 gap-5 transition-all duration-700 delay-200 pt-8 lg:pt-0 ${servicesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-surface-light border border-accent/25 p-7 group hover:border-accent transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300">
                  {s.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════ ABOUT ════════════════ */}


      {/* ════════════════ TRACK RECORD (MAGAZINE EDITORIAL STYLE) ════════════════ */}
      <section
        id="track-record"
        ref={resumeSection.ref as React.RefObject<HTMLElement>}
        className="bg-accent text-white py-24 md:py-32 relative z-10 [clip-path:polygon(0_3vw,_100%_0,_100%_100%,_0_calc(100%-3vw))] lg:[clip-path:polygon(0_4vw,_100%_0,_100%_100%,_0_calc(100%-4vw))] overflow-hidden magazine-stripes red-glow"
      >
        {/* Decorative giant background text */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.04]">
          <h2 className="font-[family-name:var(--font-playfair)] text-[10rem] md:text-[16rem] lg:text-[22rem] leading-none font-black italic tracking-tighter whitespace-nowrap">
            TRACK RECORD
          </h2>
        </div>

        {/* Top decorative line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <div
          className={`max-w-7xl mx-auto px-6 relative z-10 transition-all duration-700 ${resumeSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          {/* Section Header — Magazine Editorial */}
          <div className="text-center mb-14 md:mb-20">
            <p className="font-[family-name:var(--font-space)] text-white/60 text-xs tracking-[0.5em] uppercase mb-4 flex items-center justify-center gap-3 font-bold">
              <span className="w-12 h-[3px] bg-white/40 inline-block" />
              Proven & Tested
              <span className="w-12 h-[3px] bg-white/40 inline-block" />
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter">
              Track <span className="italic text-[#0a0e1a]">Record.</span>
            </h2>
            <div className="w-20 h-1 bg-[#0a0e1a] mx-auto mt-6" />
          </div>

          {/* ── EXPERIENCE SECTION ── */}
          <div className="mb-14 md:mb-20">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-[family-name:var(--font-space)] text-[#0a0e1a] text-[10px] tracking-[0.4em] uppercase font-black bg-white px-4 py-2 inline-block">
                Experience
              </span>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-white italic">
                Internships & Activities
              </h3>
              <span className="hidden md:block flex-1 h-[2px] bg-white/15" />
              <span className="hidden md:block font-[family-name:var(--font-space)] text-white/40 text-xs tracking-widest">
                2024 — 2026
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {experience.map((e, i) => (
                <div
                  key={i}
                  className="magazine-card bg-[#0a0e1a] border-2 border-white/10 p-6 relative group"
                >
                  {/* Big number */}
                  <div className="magazine-number font-[family-name:var(--font-playfair)] absolute -top-1 -left-1 z-0" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}>
                    0{i + 1}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 pt-10">
                    <div className="w-8 h-[3px] bg-accent mb-4" />
                    <h4 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-white mb-1 leading-tight">
                      {e.role}
                    </h4>
                    <p className="font-[family-name:var(--font-space)] text-accent text-[10px] tracking-widest uppercase mb-3">
                      {e.company} · {e.period}
                    </p>
                    <p className="text-white/55 text-xs leading-relaxed">
                      {e.desc}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden">
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-accent/10 rotate-45 translate-x-4 translate-y-4 group-hover:bg-accent/20 transition-colors duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── EDUCATION SECTION ── */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-[family-name:var(--font-space)] text-[#0a0e1a] text-[10px] tracking-[0.4em] uppercase font-black bg-white px-4 py-2 inline-block">
                Education
              </span>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-white italic">
                Degree & Honors
              </h3>
              <span className="hidden md:block flex-1 h-[2px] bg-white/15" />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {/* College Card */}
              <div className="magazine-card bg-[#0a0e1a] border-2 border-white/10 p-6 relative group">
                <div className="magazine-number font-[family-name:var(--font-playfair)] absolute -top-1 -left-1 z-0" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}>
                  01
                </div>
                <div className="relative z-10 pt-10">
                  <div className="w-8 h-[3px] bg-accent mb-4" />
                  <h4 className="font-[family-name:var(--font-playfair)] text-lg md:text-xl font-bold text-white mb-1 leading-tight">
                    Bachelor of Science in Computer Science
                  </h4>
                  <p className="font-[family-name:var(--font-space)] text-accent text-[10px] tracking-widest uppercase mb-4">
                    University of the Philippines
                  </p>

                  {/* Pull Quote — GWA */}
                  <div className="bg-accent p-4 inline-block mb-4 shadow-[4px_4px_0px_rgba(0,0,0,0.3)]">
                    <p className="text-white font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-black italic leading-tight">
                      GWA: 1.55
                    </p>
                    <p className="text-white/80 font-[family-name:var(--font-space)] text-[9px] tracking-[0.3em] uppercase mt-1 font-bold">
                      Cum Laude Standing
                    </p>
                  </div>

                  <p className="text-white/55 text-xs leading-relaxed">
                    Focused on software engineering, data structures, algorithms, and solving complex computational problems.
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-accent/10 rotate-45 translate-x-4 translate-y-4 group-hover:bg-accent/20 transition-colors duration-500" />
                </div>
              </div>

              {/* Senior High School Card */}
              <div className="magazine-card bg-[#0a0e1a] border-2 border-white/10 p-6 relative group">
                <div className="magazine-number font-[family-name:var(--font-playfair)] absolute -top-1 -left-1 z-0" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}>
                  02
                </div>
                <div className="relative z-10 pt-10">
                  <div className="w-8 h-[3px] bg-accent mb-4" />
                  <h4 className="font-[family-name:var(--font-playfair)] text-lg md:text-xl font-bold text-white mb-1 leading-tight">
                    Senior High School — ABM Track
                  </h4>
                  <p className="font-[family-name:var(--font-space)] text-accent text-[10px] tracking-widest uppercase mb-4">
                    Cordova National High School
                  </p>

                  {/* Pull Quote — Honors */}
                  <div className="bg-white/10 border border-white/20 p-4 inline-block mb-4">
                    <p className="text-white font-[family-name:var(--font-playfair)] text-lg md:text-xl font-black italic leading-tight">
                      With High Honors
                    </p>
                    <p className="text-white/70 font-[family-name:var(--font-space)] text-[9px] tracking-[0.3em] uppercase mt-1 font-bold">
                      Accountancy, Business & Management
                    </p>
                  </div>

                  <p className="text-white/55 text-xs leading-relaxed">
                    Graduated with high honors in the Accountancy, Business, and Management track, building a strong analytical foundation.
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-accent/10 rotate-45 translate-x-4 translate-y-4 group-hover:bg-accent/20 transition-colors duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* ════════════════ PROJECTS (MAGAZINE EDITORIAL STYLE) ════════════════ */}
      <section
        id="projects"
        ref={projectsSection.ref as React.RefObject<HTMLElement>}
        className="py-24 md:py-32 bg-surface relative overflow-hidden"
      >
        {/* Decorative giant background text */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03]">
          <h2 className="font-[family-name:var(--font-playfair)] text-[10rem] md:text-[16rem] lg:text-[22rem] leading-none font-black italic tracking-tighter whitespace-nowrap">
            PORTFOLIO
          </h2>
        </div>

        {/* Decorative corner */}
        <div className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/[0.04] rotate-45 translate-x-24 translate-y-24" />
        </div>

        <div
          className={`max-w-6xl mx-auto px-6 transition-all duration-500 relative z-10 ${projectsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          {/* Section Header — Magazine Editorial */}
          <div className="text-center mb-14 md:mb-20">
            <p className="font-[family-name:var(--font-space)] text-accent text-xs tracking-[0.5em] uppercase mb-4 flex items-center justify-center gap-3 font-bold">
              <span className="w-12 h-[3px] bg-accent/40 inline-block" />
              Featured Works
              <span className="w-12 h-[3px] bg-accent/40 inline-block" />
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-none tracking-tighter">
              Recent <span className="italic text-accent">Projects.</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mt-6" />
          </div>

          {/* Slider Container Wrapper */}
          <div className="relative mt-8 group/slider">
            {/* Slider Navigation Buttons - Positioned far left/right outside the cards */}
            <button
              onClick={() => scrollProjects('left')}
              className="absolute -left-4 md:-left-16 xl:-left-20 top-1/2 -translate-y-1/2 z-40 w-12 h-12 flex items-center justify-center bg-surface-light border border-accent/20 text-foreground hover:bg-accent hover:text-[#0a0e1a] hover:scale-110 active:scale-95 transition-all duration-300 group rounded-none"
              aria-label="Previous project"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={() => scrollProjects('right')}
              className="absolute -right-4 md:-right-16 xl:-right-20 top-1/2 -translate-y-1/2 z-40 w-12 h-12 flex items-center justify-center bg-surface-light border border-accent/20 text-foreground hover:bg-accent hover:text-[#0a0e1a] hover:scale-110 active:scale-95 transition-all duration-300 group rounded-none"
              aria-label="Next project"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Full-bleed Slider Container */}
            <div className="relative -mx-6 px-6 pb-8">
              <div
                ref={sliderRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12 pt-8 relative z-10"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {projects.map((p, i) => (
                  <a
                    key={p.title}
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group min-w-[320px] w-[85vw] md:w-[calc(33.333%-1rem)] shrink-0 snap-center md:snap-start magazine-card bg-surface-light border-2 border-white/5 p-6 md:p-8 relative overflow-hidden transition-all duration-500 hover:border-accent flex flex-col z-10 shadow-[8px_8px_0px_rgba(0,0,0,0.5)] hover:-translate-y-2 hover:-translate-x-2"
                  >
                    {/* Big number */}
                    <div className="magazine-number text-accent/10 group-hover:text-accent/20 font-[family-name:var(--font-playfair)] absolute -top-3 -left-2 z-0 transition-colors duration-500" style={{ fontSize: "clamp(4rem, 7vw, 6rem)" }}>
                      0{i + 1}
                    </div>

                    <div className="relative z-10 pt-8 flex-1 flex flex-col">
                      {/* Image Preview */}
                      <div className="h-48 md:h-56 relative overflow-hidden mb-6 border-2 border-[#0a0e1a]">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/80 via-transparent to-transparent" />

                        {/* Floating Read More */}
                        <div className="absolute top-4 right-4 bg-[#0a0e1a] px-3 py-1.5 rounded-none border-l-2 border-accent opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                          <span className="text-[9px] uppercase tracking-widest font-bold text-white">{p.linkLabel}</span>
                          <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      </div>

                      <div className="w-10 h-[3px] bg-accent mb-5" />

                      <h3 className="font-[family-name:var(--font-playfair)] font-bold text-foreground text-xl md:text-2xl mb-3 group-hover:text-accent transition-colors duration-200 leading-tight">
                        {p.title}
                      </h3>

                      {/* Pull Quote / Role Style */}
                      <div className="bg-white/5 border border-white/10 p-3 inline-block mb-5">
                        <p className="font-[family-name:var(--font-space)] text-accent text-[9px] tracking-[0.2em] uppercase font-bold">
                          {p.role}
                        </p>
                      </div>

                      <p className="text-sm text-muted leading-relaxed mb-6 flex-1 line-clamp-4">
                        {p.desc}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 text-[9px] font-bold tracking-[0.2em] uppercase bg-surface text-muted border border-white/5 group-hover:border-accent/30 group-hover:text-foreground transition-colors duration-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
                      <div className="absolute bottom-0 right-0 w-10 h-10 bg-accent/5 rotate-45 translate-x-5 translate-y-5 group-hover:bg-accent/20 transition-colors duration-500" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ FINAL CTA ════════════════ */}
      <section id="contact" className="py-24 md:py-40 bg-background relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-8xl lg:text-9xl font-black text-foreground mb-12 tracking-tighter leading-none">
            Let&apos;s build something <span className="italic text-accent">amazing</span> together!
          </h2>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-16">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-surface-light group-hover:bg-accent group-hover:border-accent group-hover:text-[#0a0e1a] transition-all duration-500 text-muted group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(240,165,0,0.2)]">
                  <span className="scale-125">{s.icon}</span>
                </div>
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-muted group-hover:text-accent transition-colors duration-300">
                  {s.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ FOOTER ════════════════ */}
      <footer className="py-12 border-t border-white/5 bg-surface/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4L4 36H12L20 20L28 36H36L20 4Z" fill="currentColor" className="text-foreground" />
                <path d="M12 36L20 20L28 36H12Z" fill="currentColor" className="text-accent" />
              </svg>
            </div>
            <p className="text-xs tracking-widest uppercase text-muted font-medium">
              © 2026 Adrian Vaflor.
            </p>
          </div>
          <div className="flex items-center gap-8">
            <a href="#about" className="text-[10px] tracking-widest uppercase text-muted hover:text-accent transition-colors">About</a>
            <a href="#projects" className="text-[10px] tracking-widest uppercase text-muted hover:text-accent transition-colors">Projects</a>
          </div>
        </div>
      </footer>
    </>
  );
}
