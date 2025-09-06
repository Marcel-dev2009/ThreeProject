import "./globals.css";
export const metadata = {
  title: "Apple.inc",
  description: "Apple clone with Next.js and Tailwind CSS Titanuim design by Dev Marcel..",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scrollbar-hide" suppressHydrationWarning={true} id="root">
      <body>
        {children}
      </body>
    </html>
  );
}
