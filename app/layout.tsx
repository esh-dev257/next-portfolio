import "./globals.css";

export const metadata = {
  title: "Eshita Bhawsar | Full Stack Developer",
  description: "Pixel-Perfect Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-retro-bg text-retro-comment font-retro min-h-screen">
        {children}
      </body>
    </html>
  );
}
