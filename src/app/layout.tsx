import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Obóz Studentów PWr",
  description:
    "Tydzień warsztatów, szkoleń, integracji i atrakcji dla studentów Politechniki Wrocławskiej.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="h-full scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
