import type { Metadata } from "next";

const title = "Ray Sha";
const description =
  "A personal archive of work, notes, objects, and questions.";

export const siteMetadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  applicationName: title,
  authors: [{ name: title }],
  creator: title,
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};
