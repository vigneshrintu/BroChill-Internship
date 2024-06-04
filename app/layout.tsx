import type { Metadata } from "next";
import { Gluten  } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Gluten({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "DudePro",
  description: "DudePro Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
