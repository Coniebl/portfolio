import type { Metadata } from "next";
import { profile } from "@/data/portfolio";
import "./globals.css";

const metaTitle = `${profile.displayName} — Full-Stack Developer & Computer Engineering Portfolio`;
const metaDescription = `${profile.fullName} is a BS Computer Engineering student (DOST-SEI Scholar, Dean's Lister) in ${profile.location} specializing in React, Next.js, TypeScript, QA Testing, and Data Analytics.`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: metaTitle,
  description: metaDescription,
  keywords: [
    "Conie Lariego",
    "Conie Besinan Lariego",
    "Full-Stack Developer",
    "Frontend Developer",
    "Computer Engineering",
    "Next.js Developer",
    "React Developer",
    "QA Testing",
    "Data Analytics",
    "Cebu Developer",
    "DOST Scholar",
  ],
  authors: [{ name: profile.fullName }],
  creator: profile.fullName,
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: profile.siteUrl,
    siteName: `${profile.displayName} — Portfolio`,
    title: metaTitle,
    description: metaDescription,
    images: [
      {
        url: "/conie-blazer.jpg",
        width: 800,
        height: 1200,
        alt: `${profile.displayName} — Full-Stack Developer & Computer Engineering Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
    images: ["/conie-blazer.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  alternateName: profile.displayName,
  url: profile.siteUrl,
  image: `${profile.siteUrl}/conie-blazer.jpg`,
  jobTitle: "Full-Stack Developer & Computer Engineering Student",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Cebu Technological University – Danao Campus",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cebu",
    addressCountry: "PH",
  },
  sameAs: [profile.links.github, profile.links.linkedin].filter(Boolean),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Manrope:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
