import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soft-Pet",
  description: "Sistema de gerenciamaento ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}