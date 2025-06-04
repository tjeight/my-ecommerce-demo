import "./globals.css";
import { Navbar } from "@/components/navbar";   


export const metadata = {
  title: "My Ecommerce", // ← your custom title
  description: "Discover and buy awesome products online!",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-full flex-col bg-white">
        <Navbar/>
        <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      </body>
    </html>
  );
}
