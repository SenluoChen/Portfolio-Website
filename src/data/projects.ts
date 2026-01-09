export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  link?: string;
  behance?: string;
  date?: string;
};

export const projects: Project[] = [
  {
    title: "Actpilot AI compliance platform",
    description:
      `ActPilot is an RegTech MVP designed to help startups and SMEs assess their AI systems under the EU AI Act and generate structured compliance documentation (Annex IV). The platform focuses on risk classification, document generation, and human-in-the-loop AI assistance, without replacing legal or regulatory decision-making.`,
    tags: ["React", "TypeScript", "AWS", "OpenAI API"],
    github: "https://github.com/SenluoChen/Actpilot-platform",
    link: "https://d3tev52sthw2k.cloudfront.net/",
  },

  {
    title: "Popcorn AI Movie Recommendation",
    description: `Built an AI-powered platform that understands natural language to recommend movies based on how you feel. Simply express your mood or preferences (e.g., "inspired" "adventurous" "for couple") in every language, and get movie suggestions tailored to your vibe, solving the "what to watch" dilemma.`,
    tags: ["React", "TypeScript", "AWS", "OpenAI API"],
    link: "https://d3270r12pqj8e2.cloudfront.net/",
    github: "https://github.com/SenluoChen/Popcorn-AI-Movie-Recommandation-Backend",
  },

  {
    title: "BasketIQ",
    description:
      `BasketIQ is a web application that connects and empowers amateur basketball players.
It offers AI-powered game analysis, performance tracking, local match updates, a social platform, and real-time chat to keep the community active and engaged.`,
    tags: ["React", "TypeScript", "AWS", "OpenAI API"],
    github: "https://github.com/SenluoChen/BaskeIQ-AI-Powered-Website",
    link: "https://d2uyorr7vavrtw.cloudfront.net/",
  },

  {
    title: "Cleo the Smart Assistant",
    description:
      `The AI Assistant is an AI-powered Windows desktop assistant that helps users handle queries, translations, and on-screen context directly from their desktop.

With built-in screen-reading capabilities, it provides relevant assistance without switching tabs or copy-pasting, enabling a smoother and more efficient workflow.`,
    tags: ["TypeScript", "AWS CDK", "Docker", "OpenAI API", "Electron"],
    github: "https://github.com/SenluoChen/Cleo-the-AI_Assistant-Backtend",
    link: "https://github.com/SenluoChen/Cleo-the-AI_Assistant-Backtend/releases/download/v1.0.6/Cleo.Setup.1.0.0.exe",
  },
  
];
