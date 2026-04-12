import "./globals.css";

export const metadata = {
  title: "themarcom",
  description: "We’re building a powerful marketing experience",
 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}