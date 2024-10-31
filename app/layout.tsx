import "@/app/ui/global.css";
import { inter } from "./ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard'
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL(process.env.APP_URL as string),
};

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
        <div>{children}</div>
      </body>
    </html>
  );
}
