import "@assets/styles/globals.css";
import { Header, Footer } from "@components";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const inter = Roboto({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
  title: "My APP : Home",
  description: "My APP | %s",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main
          className={` dark:text-white dark:bg-slate-900 ${inter.className}`}
        >
          <Header></Header>
          {children}
          <Footer></Footer>
        </main>
      </body>
    </html>
  );
}
