import "@/app/ui/global.css";
import { inter } from "./ui/fonts";

/**
 * This is the root layout.
 * Here you can modify html and body tags, add metadata, or add a global layout for ALL the site
 *
 */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <h1>APP Layout</h1>
        <div>{children}</div>
      </body>
    </html>
  );
}
