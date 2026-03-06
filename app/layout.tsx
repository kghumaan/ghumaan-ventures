import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KV Ghumaan - AI & Automation Consultant | Ghumaan Ventures",
  description:
    "I help businesses unlock new value with AI, cloud infrastructure, and modern software. Book a free discovery call.",
  openGraph: {
    title: "KV Ghumaan - AI & Automation Consultant | Ghumaan Ventures",
    description:
      "I help businesses unlock new value with AI, cloud infrastructure, and modern software. Book a free discovery call.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased leading-relaxed">{children}</body>
    </html>
  );
}
