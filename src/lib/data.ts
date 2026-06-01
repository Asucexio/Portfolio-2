 

import ExpenseTracker_analytics from "@/assets/projects/expenseTracker/analytics.png";
import ExpenseTracker_editexpense from "@/assets/projects/expenseTracker/EditExpense.png";
import ExpenseTracker_login from "@/assets/projects/expenseTracker/login.png";
import ExpenseTracker_settings from "@/assets/projects/expenseTracker/settings.png";

 
 

import ELDCP_dashboard from "@/assets/projects/ELDCP/dashboard.png";
import ELDCP_Home from "@/assets/projects/ELDCP/home.png";
import ELDCP_contributor from "@/assets/projects/ELDCP/submissions.png";
import ELDCP_Profile from "@/assets/projects/ELDCP/profile.png";
 
// My import Starts from here

  //hamenu
import Dashboard from "@/assets/projects/hamenu/Dashboard.png";
import Main from "@/assets/projects/hamenu/Main.png";
import  Steps  from "@/assets/projects/hamenu/Steps.png";
import Qr from "@/assets/projects/hamenu/Qr.png";
import Frame from "@/assets/projects/hamenu/Frame.jpg";

//dev journal

import Mains from "@/assets/projects/devjournal/Main (2).jpg";
import second from "@/assets/projects/devjournal/second.jpg"
import third from "@/assets/projects/devjournal/third.jpg"
import forth from "@/assets/projects/devjournal/forth.jpg"
import fifth from "@/assets/projects/devjournal/fifth.jpg"

//Repo mind
import hero from "@/assets/projects/repoMind/hero.png"
import features from "@/assets/projects/repoMind/features.png"
import loginform from "@/assets/projects/repoMind/loginform.png"
import maindashboard from " @/assets/projects/repoMind/maindashboard.png"
 



import type { IProjects } from "@/lib/types";

export const projects: IProjects[] = [
  {
    title: "Hamenu",
    description:
      "A SaaS platform that lets Ethiopian restaurant owners create digital menus, generate QR codes, and accept subscription payments via Chapa. Customers scan and browse — no app required.",
    image: [
      { url: Main, imagePos: "top" },
      { url: Dashboard, imagePos: "top" },
      { url: Steps, imagePos: "top" },
      { url: Qr, imagePos: "top" },
      { url: Frame, imagePos: "top" },
    ],
    class: ["Digital Menu", "full-stack", "saas"],
    tags: [
      "Next.js",
      "TypeScript",
      "Zustand",
      " Axios",
      "Supabase ",
      "Express.js",
      "Chapa Payment API ",
      "qrcode (npm)",
      "Tailwind CSS ",
      " Node.js",
    ],
    source: "https://github.com/Asucexio/menu-app-api.git",
    visit: "https://qr-menu-app-snowy.vercel.app/",
    detailedDescription: `A full-stack SaaS platform built to digitize restaurant menus across Ethiopia by replacing expensive, outdated paper menus with dynamic QR-based digital menus. Restaurant owners sign up, create their restaurant profile, build menus with categories and items, subscribe via Chapa, and generate a unique QR code — all in under 10 minutes. Customers sit at a table, scan the QR code with their phone camera, and instantly browse the full menu in their browser with no app download and no login required. The platform features subscription-gated access, real-time item availability toggling, QR code generation with Supabase Storage, JWT-based auth via Supabase Auth, and a public-facing customer menu page optimized for mobile.`,
  },
  {
    title: "Dev Journal",
    description:
      "Automated developer journal backend that syncs posts from Telegram to a website in real time. It fetches posts via Telegram Bot API, processes them, and serves them through a RESTful API for a Next.js frontend to display as a Dev Journal.",
    image: [
      { url: Mains, imagePos: "top" },
      { url: second, imagePos: "top" },
      { url: third, imagePos: "top" },
      { url: forth, imagePos: "top" },
      { url: fifth, imagePos: "top" },
    ],
    class: ["backend", "telegram-bot", "rest-api"],
    tags: [
      "TypeScript",
      "Supabase",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Telegram Bot API",
      "Render",
    ],
    source: "https://github.com/Asucexio/Devjournal-backend.git",
    visit: "https://devjournal-backend-aeh2.onrender.com",
    detailedDescription: `A REST API that turns a Telegram channel into a fully automated CMS for a developer journal. Write a post in Telegram with hashtags and it gets saved instantly to a Supabase database with the hashtags extracted as filterable tags. Edit a message and the post updates. Delete it and it disappears from the site — all without touching any admin dashboard. Built with Node.js, TypeScript, Express, and Supabase, and deployed on Render. The API exposes endpoints to fetch all posts, filter by tag, and get post details. It uses the Telegram Bot API to listen for new messages, edits, and deletions in real time, ensuring the Dev Journal website is always up to date with the latest content from the Telegram channel. This project demonstrates backend development skills, API design, and real-time data synchronization.`,
  },
  {
    title: "Repo-Mind",
    description:
      " AI-powered codebase assistant — connect any GitHub repo and ask questions about your code in plain English, powered by Groq + LLaMA.",
    image: [
      { url: hero, imagePos: "top" },
      { url: features, imagePos: "top" },
      { url: loginform, imagePos: "top" },
      { url: maindashboard, imagePos: "top" },
    ],
    class: ["backend", "ai", "full-stack"],
    tags: [
      "TypeScript",
      "Supabase",
      "Next.js",
      "Streaming",
      "Groq",
      "AI Integration",
      "ai-assistant",
    ],
    visit: "https://repo-mind-ruddy.vercel.app/",
    source: "https://github.com/Asucexio/RepoMind.git",
    detailedDescription: `RepoMind — AI Codebase Assistant
Chat with any GitHub repository in plain English. RepoMind loads your source files, commit history, and structure, then lets you ask anything — from architecture overviews to bug hunts — powered by Groq's LLaMA inference.
Built with Next.js, TypeScript, Supabase, and Groq API. It fetches your repo's code and metadata, processes it into a vector database, and uses Groq to answer your questions in real time. Whether you want to understand complex code, find where a function is used, or get summaries of recent changes, RepoMind is your AI-powered codebase companion. It demonstrates advanced AI integration, backend processing, and a seamless user experience for developers looking to interact with their code in a whole new way. `,
  },
  {
    title: "ELDCP – Ethiopian Language Data Collection Platform",
    description:
      "ELDCP is a university-focused platform designed to collect, validate, and manage high-quality Ethiopian language voice datasets for training AI models. It streamlines contributor submissions, multi-phase validations, and automated payments in a scalable and secure system.",
    image: [
      { url: ELDCP_dashboard, imagePos: "top" },
      { url: ELDCP_Home, imagePos: "top" },
      { url: ELDCP_contributor, imagePos: "top" },
      { url: ELDCP_Profile, imagePos: "top" },
    ],
    class: ["backend", "ai-data-collection"],
    tags: [
      "Next.js",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Docker",
      "Nginx",
      "TailwindCSS",
      "GitHub Actions",
    ],
    source: "NDA - Private Repository",
    visit: "NDA - Private Deployment",
    detailedDescription: `ELDCP (Ethiopian Language Data Collection Platform) is a full-scale data collection and validation system built to support the development of Ethiopian-language-focused AI models. Developed by a team of five, the platform is designed for universities and research institutions that require high-quality, verified voice datasets.

The platform supports structured project management (e.g., Amharic datasets), where contributors receive unique links containing prompts and submit voice recordings directly through the system. Each submission passes through a two-stage validation pipeline: automatic audio validation to ensure clarity and quality, followed by a human-based review process.

Human validation is handled by multiple validators. If two validators disagree, the submission is automatically escalated to a tie-breaker to ensure fairness and data accuracy. Once validated, the system generates invoices for both contributors and validators and allows administrators to export structured datasets (audio files, prompts, and metadata) for AI model training.

ELDCP features role-based access control with four distinct roles: Super Admin, Project Manager, Contributor, and Validator. The application exposes over 65 RESTful endpoints and is built using Next.js, Prisma, and PostgreSQL, secured with JWT authentication.

The platform is fully containerized with Docker, optimized behind Nginx, and integrated with GitHub Actions for CI/CD. It demonstrates strong backend architecture, scalable workflow design, and real-world problem solving in AI data engineering and system automation.`,
  },
  {
    title: "Expense Tracker",
    description:
      "A web application to track personal expenses and manage budgets effectively and with an analytics dashboard.",
    image: [
      { url: ExpenseTracker_analytics, imagePos: "top" },
      { url: ExpenseTracker_editexpense, imagePos: "top" },
      { url: ExpenseTracker_login, imagePos: "top" },
      { url: ExpenseTracker_settings, imagePos: "top" },
    ],
    class: ["frontend"],
    tags: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Supabase",
      "Redux",
      "ShadcnUI",
    ],
    source: "https://github.com/Asucexio/Expense-Tracker.git",
    visit: "https://expense-tracker-one-taupe.vercel.app/",
    detailedDescription: `Expense Tracker — Simplify Your Finances

Expense Tracker is a lightweight, web-based finance management app that helps users track, categorize, and visualize their daily expenses effortlessly. Designed with simplicity and efficiency in mind, it enables users to log transactions, organize spending by category, and generate insightful reports through interactive charts and summaries.

Built using HTML, CSS, and JavaScript (ES6+), the app stores data securely in localStorage, ensuring data privacy and offline accessibility. The UI focuses on clarity and usability, featuring intuitive navigation, responsive layouts, and optional dark mode for a better visual experience.

From budget alerts to spending visualizations powered by Chart.js, this project demonstrates a solid understanding of DOM manipulation, local data persistence, and clean UI design principles. It’s optimized for performance and easy to extend with future enhancements like cloud sync or authentication.

This project showcases both technical craftsmanship and a strong emphasis on user-centered functionality, making personal finance management simple yet powerful.`,
  },
    
];

export const TimeLineData = [
  { year: 2022, text: "Started my journey as a developer." },
  { year: 2023, text: "Worked as a freelance developer." },
  { year: 2024, text: "Founded JavaScript Mastery." },
  { year: 2024, text: "Shared my projects with the world." },
  { year: 2025, text: "Started my own platform." },
];

import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGraphql,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiVercel,
  SiGithub,
  SiPostman,
  SiFigma,
  SiPrettier,
  SiSupabase,
  SiNextdotjs,
  SiBun,
  SiHono,
  SiPrisma,
  SiKubernetes,
} from "react-icons/si";

import { DiNodejsSmall, DiChrome, DiReact } from "react-icons/di";
import { Zap } from "lucide-react";

export const tech_stack = [
  {
    category: "Frontend",
    skills: [
      { name: "JavaScript", icon: SiJavascript, proficiency: "Proficient" },
      { name: "TypeScript", icon: SiTypescript, proficiency: "Proficient" },
      { name: "React", icon: DiReact, proficiency: "Proficient" },
      { name: "Next.js", icon: SiNextdotjs, proficiency: "Intermediate" },
      { name: "Tailwind CSS", icon: SiTailwindcss, proficiency: "Proficient" },
      { name: "Redux", icon: SiRedux, proficiency: "Intermediate" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: DiNodejsSmall, proficiency: "Proficient" },
      { name: "Express.js", icon: SiExpress, proficiency: "Proficient" },
      { name: "NestJS", icon: SiNestjs, proficiency: "Proficient" },
      { name: "Supabase", icon: SiSupabase, proficiency: "Proficient" },
      { name: "PostgreSQL", icon: SiPostgresql, proficiency: "Proficient" },
      { name: "MongoDB", icon: SiMongodb, proficiency: "Proficient" },
      { name: "Redis", icon: SiRedis, proficiency: "Intermediate" },
      { name: "GraphQL", icon: SiGraphql, proficiency: "Learning" },
      { name: "Prisma", icon: SiPrisma, proficiency: "Intermediate" },
      {
        name: "Socket.IO",
        icon: Zap,
        proficiency: "Learning",
      },
    ],
  },
  {
    category: "DevOps / Deployment",
    skills: [
      { name: "Vercel", icon: SiVercel, proficiency: "Proficient" },
      {
        name: "GitHub Actions",
        icon: SiGithubactions,
        proficiency: "intermediate",
      },
    ],
  },
  {
    category: "Version Control / Collaboration",
    skills: [
      { name: "Git", icon: SiGit, proficiency: "Proficient" },
      { name: "GitHub", icon: SiGithub, proficiency: "Proficient" },
    ],
  },
  {
    category: "Tools / Utilities",
    skills: [
      { name: "VS Code", icon: SiPrettier, proficiency: "Proficient" },
      { name: "Postman", icon: SiPostman, proficiency: "Proficient" },
      { name: "Figma", icon: SiFigma, proficiency: "Intermediate" },
      { name: "Chrome DevTools", icon: DiChrome, proficiency: "Intermediate" },
    ],
  },
];
