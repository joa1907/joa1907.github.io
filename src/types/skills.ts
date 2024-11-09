import Html from "../icons/Html.astro";
import Css from "../icons/Css.astro";
import Js from "../icons/Js.astro";
import Vue from "../icons/Vue.astro";
import Php from "../icons/Php.astro";
import Mysql from "../icons/Mysql.astro";
import NodeIcon from "../icons/NodeIcon.astro";
import Mongo from "../icons/Mongo.astro";
import Git from "../icons/Git.astro";
import AstroIcon from "../icons/AstroIcon.astro";
import TailwindIcon from "../icons/TailwindIcon.astro";

// Definir un array de skills
export const SKILLS = [
  {
    name: 'HTML',
    icon: Html,
    class: 'hover:bg-[#e34c26] hover:text-[#ebebeb] dark:hover:text-[#ebebeb]',
  },
  {
    name: 'CSS',
    icon: Css,
    class: 'hover:bg-[#264de4] hover:text-[#ebebeb] dark:hover:text-[#ebebeb]',
  },
  {
    name: 'JavaScript',
    icon: Js,
    class: 'hover:bg-[#f0db4f] hover:text-[#323330] dark:hover:text-[#323330]',
  },
  {
    name: 'Vue.js',
    icon: Vue,
    class: 'hover:bg-[#35495e] hover:text-[#42b883] dark:hover:text-[#42b883]',
  },
  {
    name: 'Php',
    icon: Php,
    class: 'hover:bg-[#8993be] hover:text-[#232531] dark:hover:text-[#232531]',
  },
  {
    name: 'MySQL',
    icon: Mysql,
    class: 'hover:bg-[#02758F] hover:text-[#F29111] dark:hover:text-[#F29111]',
  },
  {
    name: 'Git',
    icon: Git,
    class: 'hover:bg-[#f34f29] hover:text-[#fff] dark:hover:text-[#fff]',
  },
  {
    name: 'Node.js',
    icon: NodeIcon,
    class: 'hover:bg-[#303030] hover:text-[#68a063] dark:hover:text-[#68a063]',
  },
  {
    name: 'MongoDB',
    icon: Mongo,
    class: 'hover:bg-[#00684A] hover:text-[#fff] dark:hover:text-[#fff]',
  },
  {
    name: 'Astro',
    icon: AstroIcon,
    class: 'hover:bg-[#FF5E00] hover:text-[#232531] dark:hover:text-[#232531]',
  },
  {
    name: 'Tailwind',
    icon: TailwindIcon,
    class: 'hover:bg-[#38bdf8] hover:text-[#0f172a] dark:hover:text-[#0f172a]',
  },
] as const;

// Derivar tipos automáticamente a partir del array SKILLS
export type SkillName = typeof SKILLS[number]['name'];

// Tipo para cada skill individual
export type Skill = (typeof SKILLS)[number];

// Validación: usa el tipo `SkillName` y `Skill` en tu componente
