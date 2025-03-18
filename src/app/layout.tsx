import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./font"


export const metadata: Metadata = {
  title: "Todoist | A To-Do List to Organize Your Work & Life",
  description: "Trusted by 30 million people and teams. Todoist is the world's favorite task manager and to-do list app. Finally become focused, organized and calm.",
  keywords: "Todo, Todoist, Todos, Organize Todo, todo, Todo list, online todo",
  // openGraph: {
  //   title: "Rangoli UI – Open Source Shadcn-Based Component Library",
  //   description: "Build modern and accessible web apps with Rangoli UI, a fully customizable component library based on Shadcn UI.",
  //   url: "https://www.rangoliui.me",
  //   siteName: "Rangoli UI",
  //   images: [
  //     {
  //       url: "https://www.rangoliui.me/og-image.png",
  //       width: 1200,
  //       height: 630,
  //       alt: "Rangoli UI – Open Source Shadcn-Based Component Library",
  //     },
  //   ],
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Rangoli UI – Open Source Shadcn-Based Component Library",
  //   description: "Build modern and accessible web apps with Rangoli UI, a fully customizable component library based on Shadcn UI.",
  //   images: ["https://www.rangoliui.me/og-image.png"],
  // },
  robots: "index, follow",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
