import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "1280",
};

export const metadata: Metadata = {
  title: "Adrian Vaflor | Software Engineer & Researcher",
  description: "Portfolio of Adrian Vaflor, a software engineer, AI systems builder, and computational linguistics researcher from University of the Philippines Cebu.",
  keywords: ["Adrian Vaflor", "Software Engineer", "Full Stack Developer", "Computational Linguistics", "AI Developer", "Next.js Portfolio", "UP Cebu"],
  authors: [{ name: "Adrian Vaflor" }],
  openGraph: {
    title: "Adrian Vaflor | Portfolio",
    description: "I build software applications, AI systems, and conduct research in computational linguistics.",
    url: "https://adrianvaflor.dev",
    siteName: "Adrian Vaflor Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrian Vaflor | Portfolio",
    description: "I build software applications, AI systems, and conduct research in computational linguistics.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var theme = saved || 'light';
                  var isDark = theme === 'dark';
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}

                try {
                  var width = 1280;
                  function adjustViewport() {
                    var screenWidth = window.screen.width;
                    if (screenWidth < width) {
                      var scale = screenWidth / width;
                      var meta = document.querySelector('meta[name="viewport"]');
                      if (!meta) {
                        meta = document.createElement('meta');
                        meta.name = 'viewport';
                        document.head.appendChild(meta);
                      }
                      meta.setAttribute('content', 'width=' + width + ', initial-scale=' + scale + ', minimum-scale=' + scale + ', maximum-scale=5, user-scalable=yes');
                    }
                  }
                  adjustViewport();
                  window.addEventListener('resize', adjustViewport);
                  window.addEventListener('orientationchange', adjustViewport);
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/20 theme-transition">
        <ThemeProvider defaultTheme="light" storageKey="theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
